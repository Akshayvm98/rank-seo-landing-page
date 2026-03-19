// ---------------------------------------------------------------------------
// Shared image alt text analysis utilities
// Reusable across image SEO checker, accessibility audit, on-page audit tools
// ---------------------------------------------------------------------------

export interface ImageInfo {
  src: string;
  alt: string | null; // null = attribute missing entirely
  altStatus: AltStatus;
}

export type AltStatus = "descriptive" | "generic" | "empty" | "missing" | "duplicate";

const GENERIC_ALT_PATTERNS = [
  /^image$/i,
  /^photo$/i,
  /^picture$/i,
  /^img$/i,
  /^icon$/i,
  /^logo$/i,
  /^banner$/i,
  /^thumbnail$/i,
  /^untitled$/i,
  /^screenshot$/i,
  /^dsc[_\-]?\d+/i,
  /^img[_\-]?\d+/i,
  /^image\s?\d+$/i,
  /^\d+$/,
  /\.(jpe?g|png|gif|webp|svg|avif|bmp)$/i,
];

export function classifyAltTextStatus(alt: string | null): AltStatus {
  if (alt === null) return "missing";
  const trimmed = alt.trim();
  if (trimmed.length === 0) return "empty";
  if (GENERIC_ALT_PATTERNS.some((p) => p.test(trimmed))) return "generic";
  return "descriptive";
}

export function detectDuplicateAltText(images: ImageInfo[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const img of images) {
    if (img.alt && img.alt.trim().length > 0) {
      const key = img.alt.trim().toLowerCase();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return counts;
}

export interface AltTextSummary {
  totalImages: number;
  withAlt: number;
  missingAlt: number;
  emptyAlt: number;
  genericAlt: number;
  descriptiveAlt: number;
  duplicateAltCount: number;
  images: (ImageInfo & { isDuplicate: boolean })[];
  findings: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

export function summarizeAltTextFindings(images: ImageInfo[]): AltTextSummary {
  if (images.length === 0) {
    return {
      totalImages: 0,
      withAlt: 0,
      missingAlt: 0,
      emptyAlt: 0,
      genericAlt: 0,
      descriptiveAlt: 0,
      duplicateAltCount: 0,
      images: [],
      findings: [{ severity: "good", message: "No images found on this page." }],
      recommendations: [],
    };
  }

  const dupCounts = detectDuplicateAltText(images);
  const duplicateAlts = new Set<string>();
  for (const [text, count] of dupCounts) {
    if (count >= 2) duplicateAlts.add(text);
  }

  const enriched = images.map((img) => {
    const isDuplicate = img.alt !== null && img.alt.trim().length > 0 && duplicateAlts.has(img.alt.trim().toLowerCase());
    return { ...img, isDuplicate, altStatus: isDuplicate && img.altStatus === "descriptive" ? "duplicate" as AltStatus : img.altStatus };
  });

  const missingAlt = enriched.filter((i) => i.altStatus === "missing").length;
  const emptyAlt = enriched.filter((i) => i.altStatus === "empty").length;
  const genericAlt = enriched.filter((i) => i.altStatus === "generic").length;
  const descriptiveAlt = enriched.filter((i) => i.altStatus === "descriptive").length;
  const duplicateAltCount = enriched.filter((i) => i.altStatus === "duplicate").length;
  const withAlt = images.length - missingAlt;

  const findings: AltTextSummary["findings"] = [];

  if (missingAlt > 0) {
    findings.push({ severity: "problem", message: `${missingAlt} image${missingAlt === 1 ? "" : "s"} missing alt text entirely.` });
  }
  if (emptyAlt > 0) {
    findings.push({ severity: "warning", message: `${emptyAlt} image${emptyAlt === 1 ? " has" : "s have"} empty alt text.` });
  }
  if (genericAlt > 0) {
    findings.push({ severity: "warning", message: `${genericAlt} image${genericAlt === 1 ? " has" : "s have"} generic alt text (e.g. "image", "photo", filename).` });
  }
  if (duplicateAltCount > 0) {
    findings.push({ severity: "warning", message: `${duplicateAltCount} image${duplicateAltCount === 1 ? " shares" : "s share"} duplicate alt text with other images.` });
  }
  if (descriptiveAlt > 0) {
    findings.push({ severity: "good", message: `${descriptiveAlt} image${descriptiveAlt === 1 ? " has" : "s have"} descriptive alt text.` });
  }
  if (missingAlt === 0 && emptyAlt === 0 && genericAlt === 0) {
    findings.push({ severity: "good", message: "All images have meaningful alt text." });
  }

  const recommendations: string[] = [];
  if (missingAlt > 0) {
    recommendations.push("Add alt text to all content images. Describe what the image shows in 5 to 15 words.");
  }
  if (emptyAlt > 0) {
    recommendations.push("Review images with empty alt text. Use empty alt only for purely decorative images. Add descriptions to informative images.");
  }
  if (genericAlt > 0) {
    recommendations.push("Replace generic alt text ('image', 'photo', filenames) with specific descriptions of what the image shows.");
  }
  if (duplicateAltCount > 0) {
    recommendations.push("Vary alt text across images. Each image should have a unique, relevant description.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Alt text usage looks good. Keep using descriptive, unique alt text for all content images.");
  }

  return {
    totalImages: images.length,
    withAlt,
    missingAlt,
    emptyAlt,
    genericAlt,
    descriptiveAlt,
    duplicateAltCount,
    images: enriched,
    findings,
    recommendations,
  };
}
