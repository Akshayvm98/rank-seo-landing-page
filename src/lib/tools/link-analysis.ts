// ---------------------------------------------------------------------------
// Shared link analysis utilities
// Reusable across internal link checker, broken link checker, anchor analyzer
// ---------------------------------------------------------------------------

import type { PageLink } from "./types";

// ---------------------------------------------------------------------------
// Anchor text quality
// ---------------------------------------------------------------------------

const GENERIC_ANCHORS = new Set([
  "click here",
  "read more",
  "learn more",
  "here",
  "this",
  "link",
  "more",
  "continue",
  "go",
  "see more",
  "view more",
  "find out more",
  "check it out",
  "click",
  "this page",
  "this article",
  "read this",
]);

export type AnchorQuality = "good" | "generic" | "empty";

export function assessAnchorQuality(anchorText: string): AnchorQuality {
  const trimmed = anchorText.trim();
  if (!trimmed || /^\s*$/.test(trimmed)) return "empty";
  if (GENERIC_ANCHORS.has(trimmed.toLowerCase())) return "generic";
  return "good";
}

// ---------------------------------------------------------------------------
// Link deduplication
// ---------------------------------------------------------------------------

export function getUniqueLinks(links: PageLink[]): PageLink[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    const key = link.href.toLowerCase().replace(/\/$/, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ---------------------------------------------------------------------------
// Link profile summary
// ---------------------------------------------------------------------------

export interface LinkProfileSummary {
  totalLinks: number;
  internalCount: number;
  externalCount: number;
  uniqueInternalCount: number;
  uniqueExternalCount: number;
  emptyAnchorCount: number;
  genericAnchorCount: number;
  insights: string[];
  recommendations: string[];
}

export function summarizeLinkProfile(
  internalLinks: PageLink[],
  externalLinks: PageLink[],
): LinkProfileSummary {
  const uniqueInternal = getUniqueLinks(internalLinks);
  const uniqueExternal = getUniqueLinks(externalLinks);
  const allLinks = [...internalLinks, ...externalLinks];

  let emptyAnchorCount = 0;
  let genericAnchorCount = 0;

  for (const link of allLinks) {
    const quality = assessAnchorQuality(link.text);
    if (quality === "empty") emptyAnchorCount++;
    else if (quality === "generic") genericAnchorCount++;
  }

  // Insights
  const insights: string[] = [];

  if (internalLinks.length === 0) {
    insights.push("No internal links found. This page is isolated from the rest of your site.");
  } else if (internalLinks.length <= 2) {
    insights.push(`Only ${internalLinks.length} internal link${internalLinks.length === 1 ? "" : "s"} found. This is very weak for SEO.`);
  } else if (internalLinks.length <= 5) {
    insights.push(`${internalLinks.length} internal links found. Consider adding a few more to strengthen page connections.`);
  } else {
    insights.push(`${internalLinks.length} internal links found. Internal linking looks reasonable.`);
  }

  if (externalLinks.length > 0 && internalLinks.length > 0 && externalLinks.length > internalLinks.length * 2) {
    insights.push("External links significantly outnumber internal links. Consider adding more internal links to balance the ratio.");
  }

  if (emptyAnchorCount > 0) {
    insights.push(`${emptyAnchorCount} link${emptyAnchorCount === 1 ? " has" : "s have"} empty or missing anchor text. This provides no context to users or search engines.`);
  }

  if (genericAnchorCount > 2) {
    insights.push(`${genericAnchorCount} links use generic anchor text like "click here" or "read more." Descriptive anchors are better for SEO.`);
  }

  if (insights.length === 0) {
    insights.push("Link profile looks healthy with no major issues detected.");
  }

  // Recommendations
  const recommendations: string[] = [];

  if (internalLinks.length === 0) {
    recommendations.push("Add internal links to at least 3 to 5 relevant pages on your site.");
  } else if (internalLinks.length <= 3) {
    recommendations.push("Add more contextual internal links. Aim for 5 to 10 internal links per content page.");
  }

  if (emptyAnchorCount > 0) {
    recommendations.push("Replace empty anchor text with descriptive text that tells users and Google what the linked page is about.");
  }

  if (genericAnchorCount > 2) {
    recommendations.push("Replace generic anchor text ('click here', 'read more') with descriptive phrases.");
  }

  if (externalLinks.length > 0 && internalLinks.length > 0 && externalLinks.length > internalLinks.length * 2) {
    recommendations.push("Add more internal links to balance the internal-to-external ratio.");
  }

  if (recommendations.length === 0) {
    recommendations.push("Internal linking looks solid. Maintain this standard as you add new content.");
  }

  return {
    totalLinks: allLinks.length,
    internalCount: internalLinks.length,
    externalCount: externalLinks.length,
    uniqueInternalCount: uniqueInternal.length,
    uniqueExternalCount: uniqueExternal.length,
    emptyAnchorCount,
    genericAnchorCount,
    insights,
    recommendations,
  };
}
