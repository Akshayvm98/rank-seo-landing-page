// ---------------------------------------------------------------------------
// Shared broken link checking utilities
// Reusable across broken link checker, site audit tools, etc.
// ---------------------------------------------------------------------------

import { validateUrl } from "./page-analyzer";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LinkStatus = "valid" | "redirected" | "broken" | "unreachable" | "ignored";

export interface CheckedLink {
  href: string;
  anchorText: string;
  isInternal: boolean;
  status: LinkStatus;
  statusCode: number | null;
  statusLabel: string;
}

export interface BrokenLinkSummary {
  totalChecked: number;
  validCount: number;
  redirectedCount: number;
  brokenCount: number;
  unreachableCount: number;
  ignoredCount: number;
  brokenInternalCount: number;
  brokenExternalCount: number;
  brokenLinks: CheckedLink[];
  validLinks: CheckedLink[];
  redirectedLinks: CheckedLink[];
  unreachableLinks: CheckedLink[];
  ignoredLinks: CheckedLink[];
  insights: string[];
  recommendations: string[];
}

// ---------------------------------------------------------------------------
// Link filtering
// ---------------------------------------------------------------------------

const IGNORED_PROTOCOLS = ["mailto:", "tel:", "javascript:", "data:", "ftp:"];

export function filterCheckableLinks(
  links: { href: string; text: string; isInternal: boolean }[],
): { checkable: { href: string; text: string; isInternal: boolean }[]; ignored: { href: string; text: string; isInternal: boolean }[] } {
  const checkable: typeof links = [];
  const ignored: typeof links = [];

  for (const link of links) {
    const href = link.href.trim();
    if (!href || href === "#" || href.startsWith("#")) {
      ignored.push(link);
      continue;
    }
    if (IGNORED_PROTOCOLS.some((p) => href.toLowerCase().startsWith(p))) {
      ignored.push(link);
      continue;
    }
    checkable.push(link);
  }

  return { checkable, ignored };
}

// ---------------------------------------------------------------------------
// Status classification
// ---------------------------------------------------------------------------

export function classifyLinkStatus(statusCode: number | null): { status: LinkStatus; label: string } {
  if (statusCode === null) {
    return { status: "unreachable", label: "Unreachable" };
  }
  if (statusCode >= 200 && statusCode < 300) {
    return { status: "valid", label: `${statusCode} OK` };
  }
  if (statusCode >= 300 && statusCode < 400) {
    return { status: "redirected", label: `${statusCode} Redirect` };
  }
  if (statusCode >= 400 && statusCode < 500) {
    return { status: "broken", label: `${statusCode} Not Found` };
  }
  if (statusCode >= 500) {
    return { status: "broken", label: `${statusCode} Server Error` };
  }
  return { status: "unreachable", label: "Unknown" };
}

// ---------------------------------------------------------------------------
// Single link check
// ---------------------------------------------------------------------------

const CHECK_TIMEOUT_MS = 8_000;

export async function checkLinkStatus(href: string): Promise<{ statusCode: number | null }> {
  // Safety: validate the URL
  const validation = validateUrl(href);
  if (!validation.valid) {
    return { statusCode: null };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CHECK_TIMEOUT_MS);

  try {
    // Try HEAD first (lighter)
    const headRes = await fetch(href, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "manual",
      headers: {
        "User-Agent": "RankSEO-LinkChecker/1.0 (+https://rankseoengine.com)",
      },
    });
    return { statusCode: headRes.status };
  } catch {
    // HEAD failed, try GET as fallback
    try {
      const controller2 = new AbortController();
      const timer2 = setTimeout(() => controller2.abort(), CHECK_TIMEOUT_MS);
      try {
        const getRes = await fetch(href, {
          method: "GET",
          signal: controller2.signal,
          redirect: "manual",
          headers: {
            "User-Agent": "RankSEO-LinkChecker/1.0 (+https://rankseoengine.com)",
          },
        });
        // Don't read body, just get status
        return { statusCode: getRes.status };
      } finally {
        clearTimeout(timer2);
      }
    } catch {
      return { statusCode: null };
    }
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Concurrent link checking with limit
// ---------------------------------------------------------------------------

const MAX_LINKS_TO_CHECK = 50;
const CONCURRENCY_LIMIT = 5;

export async function checkLinksWithLimit(
  links: { href: string; text: string; isInternal: boolean }[],
): Promise<CheckedLink[]> {
  // Deduplicate by href
  const seen = new Set<string>();
  const unique = links.filter((l) => {
    const key = l.href.toLowerCase().replace(/\/$/, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const toCheck = unique.slice(0, MAX_LINKS_TO_CHECK);
  const results: CheckedLink[] = [];

  // Process in batches
  for (let i = 0; i < toCheck.length; i += CONCURRENCY_LIMIT) {
    const batch = toCheck.slice(i, i + CONCURRENCY_LIMIT);
    const batchResults = await Promise.all(
      batch.map(async (link) => {
        const { statusCode } = await checkLinkStatus(link.href);
        const { status, label } = classifyLinkStatus(statusCode);
        return {
          href: link.href,
          anchorText: link.text,
          isInternal: link.isInternal,
          status,
          statusCode,
          statusLabel: label,
        };
      }),
    );
    results.push(...batchResults);
  }

  return results;
}

// ---------------------------------------------------------------------------
// Summary generation
// ---------------------------------------------------------------------------

export function summarizeBrokenLinks(
  checkedLinks: CheckedLink[],
  ignoredLinks: { href: string; text: string; isInternal: boolean }[],
): BrokenLinkSummary {
  const brokenLinks = checkedLinks.filter((l) => l.status === "broken");
  const validLinks = checkedLinks.filter((l) => l.status === "valid");
  const redirectedLinks = checkedLinks.filter((l) => l.status === "redirected");
  const unreachableLinks = checkedLinks.filter((l) => l.status === "unreachable");
  const ignoredChecked: CheckedLink[] = ignoredLinks.map((l) => ({
    href: l.href,
    anchorText: l.text,
    isInternal: l.isInternal,
    status: "ignored" as const,
    statusCode: null,
    statusLabel: "Ignored",
  }));

  const brokenInternalCount = brokenLinks.filter((l) => l.isInternal).length;
  const brokenExternalCount = brokenLinks.filter((l) => !l.isInternal).length;

  // Insights
  const insights: string[] = [];

  if (brokenLinks.length === 0 && unreachableLinks.length === 0) {
    insights.push("No broken links detected. All checked links are reachable.");
  } else {
    if (brokenLinks.length > 0) {
      insights.push(`${brokenLinks.length} broken link${brokenLinks.length === 1 ? "" : "s"} found.`);
    }
    if (brokenInternalCount > 0) {
      insights.push(`${brokenInternalCount} broken internal link${brokenInternalCount === 1 ? "" : "s"}. These create dead ends on your site and waste crawl budget.`);
    }
    if (brokenExternalCount > 0) {
      insights.push(`${brokenExternalCount} broken external link${brokenExternalCount === 1 ? "" : "s"}. These hurt user experience and can reduce trust signals.`);
    }
    if (unreachableLinks.length > 0) {
      insights.push(`${unreachableLinks.length} link${unreachableLinks.length === 1 ? "" : "s"} could not be reached (timeout or connection refused).`);
    }
  }

  if (redirectedLinks.length > 0) {
    insights.push(`${redirectedLinks.length} link${redirectedLinks.length === 1 ? "" : "s"} returned redirects. Update these to point directly to the final destination.`);
  }

  // Recommendations
  const recommendations: string[] = [];

  if (brokenInternalCount > 0) {
    recommendations.push("Fix broken internal links by updating the href to the correct URL or removing the link entirely.");
  }
  if (brokenExternalCount > 0) {
    recommendations.push("Replace broken external links with working alternatives or remove them if no replacement exists.");
  }
  if (unreachableLinks.length > 0) {
    recommendations.push("Recheck unreachable links. They may be temporarily down or blocking automated requests.");
  }
  if (redirectedLinks.length > 3) {
    recommendations.push("Update redirected links to point to the final destination URL directly.");
  }
  if (recommendations.length === 0) {
    recommendations.push("No broken links found. Run this check regularly to catch issues early.");
  }

  return {
    totalChecked: checkedLinks.length,
    validCount: validLinks.length,
    redirectedCount: redirectedLinks.length,
    brokenCount: brokenLinks.length,
    unreachableCount: unreachableLinks.length,
    ignoredCount: ignoredLinks.length,
    brokenInternalCount,
    brokenExternalCount,
    brokenLinks,
    validLinks,
    redirectedLinks,
    unreachableLinks,
    ignoredLinks: ignoredChecked,
    insights,
    recommendations,
  };
}
