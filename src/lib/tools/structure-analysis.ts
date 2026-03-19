// ---------------------------------------------------------------------------
// Shared content structure analysis utilities
// Reusable across content structure checker, blog optimizer, etc.
// ---------------------------------------------------------------------------

export type StructureQuality = "poor" | "needs improvement" | "solid" | "strong";

export interface ContentStructureResult {
  totalWords: number;
  headingCount: number;
  paragraphCount: number;
  listCount: number;
  internalLinkCount: number;
  headingsPerKWords: number;
  avgWordsPerParagraph: number;
  denseParagraphs: number;
  quality: StructureQuality;
  issues: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

export function analyzeContentStructure(
  totalWords: number,
  headingCount: number,
  paragraphCount: number,
  listCount: number,
  internalLinkCount: number,
  paragraphWordCounts: number[],
): ContentStructureResult {
  const headingsPerKWords = totalWords > 0 ? Math.round((headingCount / totalWords) * 1000 * 10) / 10 : 0;
  const avgWordsPerParagraph = paragraphCount > 0 ? Math.round(totalWords / paragraphCount) : 0;
  const denseParagraphs = paragraphWordCounts.filter((w) => w > 150).length;

  const issues: ContentStructureResult["issues"] = [];

  // Heading analysis
  if (headingCount === 0 && totalWords > 200) {
    issues.push({ severity: "problem", message: "No headings found. Content needs heading structure for scannability." });
  } else if (totalWords > 500 && headingsPerKWords < 1.5) {
    issues.push({ severity: "warning", message: "Very few headings for this content length. Add more H2/H3 headings." });
  } else if (headingCount > 0) {
    issues.push({ severity: "good", message: "Heading structure provides good content organization." });
  }

  // Paragraph analysis
  if (denseParagraphs > 0) {
    issues.push({ severity: "warning", message: `${denseParagraphs} paragraph${denseParagraphs === 1 ? " is" : "s are"} very long (150+ words). Break them into smaller chunks.` });
  }
  if (avgWordsPerParagraph > 100) {
    issues.push({ severity: "warning", message: "Average paragraph is very long. Shorter paragraphs improve readability." });
  } else if (paragraphCount > 0) {
    issues.push({ severity: "good", message: "Paragraph length is reasonable." });
  }

  // List analysis
  if (totalWords > 800 && listCount === 0) {
    issues.push({ severity: "warning", message: "No lists found in long content. Bullet or numbered lists improve scannability." });
  } else if (listCount > 0) {
    issues.push({ severity: "good", message: `${listCount} list${listCount === 1 ? "" : "s"} found. Lists help readers scan content.` });
  }

  // Internal links
  if (internalLinkCount === 0) {
    issues.push({ severity: "warning", message: "No internal links found. Add links to related pages on your site." });
  } else if (internalLinkCount <= 2) {
    issues.push({ severity: "warning", message: `Only ${internalLinkCount} internal link${internalLinkCount === 1 ? "" : "s"}. Consider adding more contextual links.` });
  } else {
    issues.push({ severity: "good", message: `${internalLinkCount} internal links found.` });
  }

  // Content length
  if (totalWords < 100) {
    issues.push({ severity: "problem", message: "Very little content. Structure analysis may not be meaningful." });
  } else if (totalWords < 300) {
    issues.push({ severity: "warning", message: "Content is thin. Most topics need more depth for SEO." });
  }

  // Score
  const problems = issues.filter((i) => i.severity === "problem").length;
  const warnings = issues.filter((i) => i.severity === "warning").length;
  const goods = issues.filter((i) => i.severity === "good").length;

  let quality: StructureQuality;
  if (problems >= 2) quality = "poor";
  else if (problems >= 1 || warnings >= 3) quality = "needs improvement";
  else if (warnings >= 1) quality = "solid";
  else quality = "strong";

  // Boost if many good signals
  if (quality === "solid" && goods >= 4) quality = "strong";

  // Recommendations
  const recommendations: string[] = [];
  if (headingCount === 0 && totalWords > 200) {
    recommendations.push("Add H2 headings to break content into clear sections.");
  } else if (totalWords > 500 && headingsPerKWords < 1.5) {
    recommendations.push("Add more headings. Aim for one heading per 200 to 300 words.");
  }
  if (denseParagraphs > 0) {
    recommendations.push("Break long paragraphs into 2 to 4 sentence chunks.");
  }
  if (totalWords > 800 && listCount === 0) {
    recommendations.push("Add bullet or numbered lists where content can be enumerated.");
  }
  if (internalLinkCount === 0) {
    recommendations.push("Add 3 to 5 internal links to relevant pages on your site.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Content structure looks strong. Maintain this quality as you publish more.");
  }

  return {
    totalWords,
    headingCount,
    paragraphCount,
    listCount,
    internalLinkCount,
    headingsPerKWords,
    avgWordsPerParagraph,
    denseParagraphs,
    quality,
    issues,
    recommendations,
  };
}
