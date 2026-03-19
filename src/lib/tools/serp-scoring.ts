// ---------------------------------------------------------------------------
// Shared SERP scoring utilities
// Reusable across SERP preview, meta tag checker, title analyzer, etc.
// ---------------------------------------------------------------------------

export type LengthStatus = "missing" | "too short" | "good" | "too long";

export interface LengthAssessment {
  length: number;
  status: LengthStatus;
  label: string;
}

export function scoreTitleLength(title: string): LengthAssessment {
  const length = title.trim().length;
  if (length === 0) return { length, status: "missing", label: "Missing" };
  if (length < 30) return { length, status: "too short", label: "Too short" };
  if (length <= 60) return { length, status: "good", label: "Good length" };
  return { length, status: "too long", label: "Too long" };
}

export function scoreMetaDescriptionLength(description: string): LengthAssessment {
  const length = description.trim().length;
  if (length === 0) return { length, status: "missing", label: "Missing" };
  if (length < 70) return { length, status: "too short", label: "Too short" };
  if (length <= 155) return { length, status: "good", label: "Good length" };
  return { length, status: "too long", label: "Too long" };
}

export type UrlStatus = "good" | "acceptable" | "long" | "messy";

export interface UrlAssessment {
  status: UrlStatus;
  label: string;
}

export function scoreUrlReadability(url: string): UrlAssessment {
  const trimmed = url.trim();
  if (!trimmed) return { status: "good", label: "Empty" };

  // Count path segments and check for query params
  try {
    const parsed = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    const path = parsed.pathname;
    const hasParams = parsed.search.length > 1;
    const pathLength = path.length;

    if (hasParams && parsed.search.length > 30) {
      return { status: "messy", label: "URL has many parameters" };
    }
    if (pathLength > 80) {
      return { status: "long", label: "URL path is very long" };
    }
    if (pathLength > 50 || hasParams) {
      return { status: "acceptable", label: "Acceptable" };
    }
    return { status: "good", label: "Clean and readable" };
  } catch {
    if (trimmed.length > 60) return { status: "long", label: "Very long" };
    return { status: "good", label: "Looks clean" };
  }
}

export function normalizePreviewUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "example.com";

  try {
    const parsed = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    const display = parsed.hostname + parsed.pathname.replace(/\/$/, "");
    return display.length > 60 ? display.slice(0, 57) + "..." : display;
  } catch {
    return trimmed.length > 60 ? trimmed.slice(0, 57) + "..." : trimmed;
  }
}

export interface SerpRecommendation {
  type: "title" | "description" | "url";
  message: string;
}

export function generateSerpRecommendations(
  title: string,
  description: string,
  url: string,
): SerpRecommendation[] {
  const recs: SerpRecommendation[] = [];
  const titleScore = scoreTitleLength(title);
  const descScore = scoreMetaDescriptionLength(description);
  const urlScore = scoreUrlReadability(url);

  if (titleScore.status === "missing") {
    recs.push({ type: "title", message: "Add a title tag. It is the most important on-page SEO element." });
  } else if (titleScore.status === "too short") {
    recs.push({ type: "title", message: "Title is too short. Aim for 30 to 60 characters for optimal display." });
  } else if (titleScore.status === "too long") {
    recs.push({ type: "title", message: `Title is ${titleScore.length} characters. Google truncates after ~60 characters. Shorten it.` });
  }

  if (descScore.status === "missing") {
    recs.push({ type: "description", message: "Add a meta description. Without one, Google generates its own snippet." });
  } else if (descScore.status === "too short") {
    recs.push({ type: "description", message: "Meta description is too short. Aim for 70 to 155 characters." });
  } else if (descScore.status === "too long") {
    recs.push({ type: "description", message: `Description is ${descScore.length} characters. It may be truncated in search results.` });
  }

  if (urlScore.status === "messy") {
    recs.push({ type: "url", message: "URL has many parameters. Use clean, readable URLs when possible." });
  } else if (urlScore.status === "long") {
    recs.push({ type: "url", message: "URL is very long. Shorter URLs are easier to read and share." });
  }

  if (recs.length === 0) {
    recs.push({ type: "title", message: "Title, description, and URL look good. Focus on making them compelling and keyword-relevant." });
  }

  return recs;
}
