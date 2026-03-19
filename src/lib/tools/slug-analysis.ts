// ---------------------------------------------------------------------------
// Shared URL slug analysis utilities
// Reusable across slug analyzer, SERP preview, meta tools, etc.
// ---------------------------------------------------------------------------

const SLUG_STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from",
  "has", "he", "in", "is", "it", "its", "of", "on", "or", "that",
  "the", "to", "was", "were", "will", "with", "this", "but", "they",
  "have", "had", "what", "when", "where", "who", "which", "how",
]);

export function extractSlugFromUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";

  try {
    const url = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    return url.pathname.replace(/^\/|\/$/g, "");
  } catch {
    // Treat as raw slug
    return trimmed.replace(/^\/|\/$/g, "");
  }
}

export function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\-\/]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export interface SlugIssue {
  severity: "good" | "warning" | "problem";
  label: string;
  message: string;
}

export type SlugQuality = "poor" | "needs improvement" | "good" | "strong";

export interface SlugAnalysisResult {
  original: string;
  extractedSlug: string;
  normalizedSlug: string;
  slugLength: number;
  wordCount: number;
  words: string[];
  quality: SlugQuality;
  issues: SlugIssue[];
  recommendations: string[];
  keywordPresent?: "present" | "partially present" | "not present";
}

export function analyzeSlugStructure(
  input: string,
  targetKeyword?: string,
): SlugAnalysisResult {
  const extractedSlug = extractSlugFromUrl(input);
  const normalized = normalizeSlug(extractedSlug);
  const words = normalized.split(/[-\/]/).filter((w) => w.length > 0);
  const issues: SlugIssue[] = [];

  // Length checks
  if (normalized.length === 0) {
    issues.push({ severity: "problem", label: "Empty", message: "No slug provided." });
  } else if (normalized.length > 75) {
    issues.push({ severity: "problem", label: "Too long", message: "Slug is very long. Shorter slugs are easier to read and share." });
  } else if (normalized.length > 50) {
    issues.push({ severity: "warning", label: "Long", message: "Slug could be shorter. Aim for under 50 characters." });
  } else {
    issues.push({ severity: "good", label: "Length", message: "Slug length is good." });
  }

  // Word count
  if (words.length > 8) {
    issues.push({ severity: "warning", label: "Many words", message: "Slug has many words. Keep it to 3 to 6 words for best results." });
  } else if (words.length >= 3 && words.length <= 6) {
    issues.push({ severity: "good", label: "Word count", message: "Word count is in the ideal range." });
  } else if (words.length > 0 && words.length < 3) {
    issues.push({ severity: "good", label: "Concise", message: "Slug is short and concise." });
  }

  // Formatting checks
  if (extractedSlug !== extractedSlug.toLowerCase()) {
    issues.push({ severity: "warning", label: "Uppercase", message: "Slug contains uppercase letters. URLs should be lowercase." });
  }

  if (extractedSlug.includes("_")) {
    issues.push({ severity: "warning", label: "Underscores", message: "Slug uses underscores. Google recommends hyphens instead." });
  }

  if (/[%+&=]/.test(extractedSlug) || extractedSlug.includes("?")) {
    issues.push({ severity: "problem", label: "Special chars", message: "Slug contains special characters or query parameters. Keep it clean." });
  }

  if (/\d{4,}/.test(extractedSlug)) {
    issues.push({ severity: "warning", label: "Numbers/dates", message: "Slug contains long numbers or dates. These can make URLs less evergreen." });
  }

  // Depth check
  const segments = extractedSlug.split("/").filter((s) => s.length > 0);
  if (segments.length > 3) {
    issues.push({ severity: "warning", label: "Deep nesting", message: "URL has many path segments. Flatter URL structures are preferred." });
  }

  // Stop words
  const stopWordsFound = words.filter((w) => SLUG_STOP_WORDS.has(w));
  if (stopWordsFound.length > 2) {
    issues.push({ severity: "warning", label: "Stop words", message: `Slug contains ${stopWordsFound.length} stop words (${stopWordsFound.slice(0, 3).join(", ")}). Remove unnecessary ones.` });
  }

  // Readability: detect random strings
  const nonWordSegments = words.filter((w) => /^[a-z]{1}$|^[0-9a-f]{8,}$/i.test(w));
  if (nonWordSegments.length > 0 && nonWordSegments.length > words.length * 0.3) {
    issues.push({ severity: "problem", label: "Not readable", message: "Slug contains random or ID-like strings. Use readable words." });
  }

  // Keyword check
  let keywordPresent: SlugAnalysisResult["keywordPresent"];
  if (targetKeyword && targetKeyword.trim()) {
    const kwWords = targetKeyword.toLowerCase().trim().split(/\s+/);
    const slugLower = normalized.toLowerCase();
    const fullMatch = slugLower.includes(kwWords.join("-"));
    const partialMatch = kwWords.some((w) => slugLower.includes(w));

    if (fullMatch) {
      keywordPresent = "present";
    } else if (partialMatch) {
      keywordPresent = "partially present";
    } else {
      keywordPresent = "not present";
    }
  }

  // Score
  const problems = issues.filter((i) => i.severity === "problem").length;
  const warnings = issues.filter((i) => i.severity === "warning").length;

  let quality: SlugQuality;
  if (problems > 0) quality = "poor";
  else if (warnings >= 3) quality = "needs improvement";
  else if (warnings >= 1) quality = "good";
  else quality = "strong";

  // Recommendations
  const recommendations: string[] = [];
  if (issues.some((i) => i.label === "Too long" || i.label === "Long")) {
    recommendations.push("Shorten the slug to 3 to 6 descriptive words.");
  }
  if (issues.some((i) => i.label === "Uppercase")) {
    recommendations.push("Convert the slug to lowercase.");
  }
  if (issues.some((i) => i.label === "Underscores")) {
    recommendations.push("Replace underscores with hyphens.");
  }
  if (issues.some((i) => i.label === "Special chars")) {
    recommendations.push("Remove special characters and query parameters from the slug.");
  }
  if (issues.some((i) => i.label === "Stop words")) {
    recommendations.push("Remove unnecessary stop words (the, and, of, etc.) from the slug.");
  }
  if (issues.some((i) => i.label === "Deep nesting")) {
    recommendations.push("Flatten the URL structure. Fewer path segments is generally better.");
  }
  if (keywordPresent === "not present" && targetKeyword) {
    recommendations.push(`Include the keyword "${targetKeyword}" in the slug if it fits naturally.`);
  }
  if (recommendations.length === 0) {
    recommendations.push("Slug looks well-optimized. Keep it short, descriptive, and keyword-relevant.");
  }

  return {
    original: input,
    extractedSlug,
    normalizedSlug: normalized,
    slugLength: normalized.length,
    wordCount: words.length,
    words,
    quality,
    issues,
    recommendations,
    keywordPresent,
  };
}
