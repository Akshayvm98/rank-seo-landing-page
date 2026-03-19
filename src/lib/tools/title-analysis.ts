// ---------------------------------------------------------------------------
// Shared title tag analysis utilities
// Reusable across title analyzer, meta tag checker, SERP preview, etc.
// ---------------------------------------------------------------------------

import { scoreTitleLength, type LengthStatus } from "./serp-scoring";

export type TitleQuality = "poor" | "needs improvement" | "good" | "strong";

export interface TitleAnalysisResult {
  title: string;
  charCount: number;
  wordCount: number;
  lengthStatus: LengthStatus;
  quality: TitleQuality;
  keywordStatus?: "present" | "partially present" | "not present";
  keywordAtStart?: boolean;
  hasRepetition: boolean;
  hasSeparator: boolean;
  issues: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

export function analyzeTitleTag(
  title: string,
  targetKeyword?: string,
): TitleAnalysisResult {
  const trimmed = title.trim();
  const words = trimmed.split(/\s+/).filter((w) => w.length > 0);
  const charCount = trimmed.length;
  const wordCount = words.length;
  const lengthScore = scoreTitleLength(trimmed);

  const issues: TitleAnalysisResult["issues"] = [];

  // Length
  if (lengthScore.status === "missing") {
    issues.push({ severity: "problem", message: "Title tag is missing. This is the most important on-page SEO element." });
  } else if (lengthScore.status === "too short") {
    issues.push({ severity: "warning", message: `Title is ${charCount} characters. Aim for 30 to 60 characters for full SERP display.` });
  } else if (lengthScore.status === "too long") {
    issues.push({ severity: "warning", message: `Title is ${charCount} characters. Google truncates after ~60 characters.` });
  } else {
    issues.push({ severity: "good", message: `Title length (${charCount} chars) is within the recommended range.` });
  }

  // Word count
  if (wordCount >= 1 && wordCount <= 3) {
    issues.push({ severity: "warning", message: "Title has very few words. It may be too vague or generic." });
  } else if (wordCount >= 4 && wordCount <= 9) {
    issues.push({ severity: "good", message: "Word count is in a strong range for titles." });
  } else if (wordCount >= 10) {
    issues.push({ severity: "warning", message: "Title has many words and may feel diluted." });
  }

  // Separator detection
  const hasSeparator = /[|–—\-:]/.test(trimmed);
  if (hasSeparator) {
    issues.push({ severity: "good", message: "Title uses a separator, which can help organize brand and topic." });
  }

  // Repetition detection
  const lowerWords = words.map((w) => w.toLowerCase().replace(/[^a-z]/g, "")).filter((w) => w.length > 2);
  const wordFreq = new Map<string, number>();
  for (const w of lowerWords) wordFreq.set(w, (wordFreq.get(w) ?? 0) + 1);
  const hasRepetition = Array.from(wordFreq.values()).some((count) => count >= 3);
  if (hasRepetition) {
    issues.push({ severity: "warning", message: "A word repeats 3 or more times. This may look like keyword stuffing." });
  }

  // Keyword analysis
  let keywordStatus: TitleAnalysisResult["keywordStatus"];
  let keywordAtStart: boolean | undefined;
  if (targetKeyword && targetKeyword.trim()) {
    const kw = targetKeyword.trim().toLowerCase();
    const titleLower = trimmed.toLowerCase();
    if (titleLower.includes(kw)) {
      keywordStatus = "present";
      keywordAtStart = titleLower.indexOf(kw) < titleLower.length / 3;
      issues.push({ severity: "good", message: `Keyword "${targetKeyword}" is present in the title.` });
      if (keywordAtStart) {
        issues.push({ severity: "good", message: "Keyword appears near the beginning of the title." });
      }
    } else {
      const kwWords = kw.split(/\s+/);
      const partialMatch = kwWords.some((w) => titleLower.includes(w));
      keywordStatus = partialMatch ? "partially present" : "not present";
      if (partialMatch) {
        issues.push({ severity: "warning", message: `Only part of "${targetKeyword}" appears in the title.` });
      } else {
        issues.push({ severity: "warning", message: `Keyword "${targetKeyword}" is not in the title.` });
      }
    }
  }

  // Quality score
  const problems = issues.filter((i) => i.severity === "problem").length;
  const warnings = issues.filter((i) => i.severity === "warning").length;
  const goods = issues.filter((i) => i.severity === "good").length;

  let quality: TitleQuality;
  if (problems > 0) quality = "poor";
  else if (warnings >= 3) quality = "needs improvement";
  else if (warnings >= 1) quality = "good";
  else quality = "strong";
  if (quality === "good" && goods >= 4) quality = "strong";

  // Recommendations
  const recommendations: string[] = [];
  if (lengthScore.status === "missing") {
    recommendations.push("Add a descriptive title tag that includes your primary keyword.");
  }
  if (lengthScore.status === "too short") {
    recommendations.push("Expand the title to 30 to 60 characters with a clear, descriptive phrase.");
  }
  if (lengthScore.status === "too long") {
    recommendations.push("Shorten the title to under 60 characters to avoid truncation.");
  }
  if (keywordStatus === "not present" && targetKeyword) {
    recommendations.push(`Include "${targetKeyword}" in the title, ideally near the beginning.`);
  }
  if (keywordStatus === "present" && !keywordAtStart) {
    recommendations.push("Consider moving the main keyword closer to the beginning of the title.");
  }
  if (hasRepetition) {
    recommendations.push("Reduce word repetition. Use the keyword once, naturally.");
  }
  if (wordCount >= 1 && wordCount <= 3 && charCount > 0) {
    recommendations.push("Make the title more specific. Add context about what the page covers.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Title looks well-optimized. Keep it descriptive, compelling, and keyword-relevant.");
  }

  return {
    title: trimmed,
    charCount,
    wordCount,
    lengthStatus: lengthScore.status,
    quality,
    keywordStatus,
    keywordAtStart,
    hasRepetition,
    hasSeparator,
    issues,
    recommendations,
  };
}
