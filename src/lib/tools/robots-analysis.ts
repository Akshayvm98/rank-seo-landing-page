// ---------------------------------------------------------------------------
// Shared robots.txt parsing and analysis utilities
// Reusable across robots checker, sitemap checker, crawl audit tools
// ---------------------------------------------------------------------------

import { validateUrl } from "./page-analyzer";

export interface RobotsDirective {
  userAgent: string;
  allows: string[];
  disallows: string[];
  crawlDelay?: number;
}

export interface RobotsTxtResult {
  url: string;
  found: boolean;
  statusCode: number;
  rawContent: string;
  groups: RobotsDirective[];
  sitemaps: string[];
  host?: string;
  totalDisallows: number;
  totalAllows: number;
  findings: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

export function normalizeSiteOrigin(input: string): string {
  const trimmed = input.trim();
  try {
    const url = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    return `${url.protocol}//${url.hostname}`;
  } catch {
    return trimmed;
  }
}

const FETCH_TIMEOUT = 10_000;

export async function fetchRobotsTxt(origin: string): Promise<{ content: string; statusCode: number }> {
  const robotsUrl = `${origin}/robots.txt`;

  const validation = validateUrl(robotsUrl);
  if (!validation.valid) throw new Error(validation.error);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

  try {
    const res = await fetch(robotsUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "RankSEO-RobotsChecker/1.0 (+https://www.rankseoengine.com)" },
      redirect: "follow",
    });
    const content = await res.text();
    return { content: content.slice(0, 100_000), statusCode: res.status };
  } finally {
    clearTimeout(timer);
  }
}

export function parseRobotsTxt(content: string): {
  groups: RobotsDirective[];
  sitemaps: string[];
  host?: string;
} {
  const lines = content.split(/\r?\n/);
  const groups: RobotsDirective[] = [];
  const sitemaps: string[] = [];
  let host: string | undefined;
  let current: RobotsDirective | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim().toLowerCase();
    const value = line.slice(colonIdx + 1).trim();

    if (key === "user-agent") {
      current = { userAgent: value, allows: [], disallows: [] };
      groups.push(current);
    } else if (key === "allow" && current) {
      current.allows.push(value);
    } else if (key === "disallow" && current) {
      if (value) current.disallows.push(value);
    } else if (key === "crawl-delay" && current) {
      const n = parseFloat(value);
      if (!isNaN(n)) current.crawlDelay = n;
    } else if (key === "sitemap") {
      sitemaps.push(value);
    } else if (key === "host") {
      host = value;
    }
  }

  return { groups, sitemaps, host };
}

export function analyzeRobotsTxt(
  statusCode: number,
  content: string,
  origin: string,
): RobotsTxtResult {
  const url = `${origin}/robots.txt`;
  const found = statusCode >= 200 && statusCode < 300;

  if (!found) {
    return {
      url,
      found: false,
      statusCode,
      rawContent: "",
      groups: [],
      sitemaps: [],
      totalDisallows: 0,
      totalAllows: 0,
      findings: [
        { severity: "warning", message: "No robots.txt file found. This is not critical but having one is recommended." },
      ],
      recommendations: [
        "Create a robots.txt file at the root of your site.",
        "Include a Sitemap directive pointing to your XML sitemap.",
        "Allow all important pages to be crawled.",
      ],
    };
  }

  const { groups, sitemaps, host } = parseRobotsTxt(content);

  const totalDisallows = groups.reduce((sum, g) => sum + g.disallows.length, 0);
  const totalAllows = groups.reduce((sum, g) => sum + g.allows.length, 0);

  const findings: RobotsTxtResult["findings"] = [];

  // Check for blocking all crawlers
  const wildcardGroup = groups.find((g) => g.userAgent === "*");
  if (wildcardGroup && wildcardGroup.disallows.includes("/")) {
    findings.push({ severity: "problem", message: "Disallow: / under User-agent: * blocks ALL crawlers from your entire site." });
  }

  // Broad disallows
  const broadDisallows = groups.flatMap((g) => g.disallows.filter((d) => d === "/" || d.split("/").filter(Boolean).length <= 1));
  if (broadDisallows.length > 0 && !findings.some((f) => f.message.includes("blocks ALL"))) {
    findings.push({ severity: "warning", message: `${broadDisallows.length} broad disallow rule${broadDisallows.length === 1 ? "" : "s"} found. Verify important pages are not blocked.` });
  }

  // Sitemap
  if (sitemaps.length > 0) {
    findings.push({ severity: "good", message: `${sitemaps.length} Sitemap directive${sitemaps.length === 1 ? "" : "s"} found.` });
  } else {
    findings.push({ severity: "warning", message: "No Sitemap directive found. Add one to help search engines discover your sitemap." });
  }

  // Content check
  if (content.trim().length === 0) {
    findings.push({ severity: "warning", message: "robots.txt file is empty. Consider adding basic directives." });
  } else if (groups.length === 0) {
    findings.push({ severity: "warning", message: "No User-agent groups found. The file may be malformed." });
  } else {
    findings.push({ severity: "good", message: `${groups.length} User-agent group${groups.length === 1 ? "" : "s"} defined.` });
  }

  // Crawl delay
  const withDelay = groups.filter((g) => g.crawlDelay !== undefined);
  if (withDelay.length > 0) {
    findings.push({ severity: "warning", message: "Crawl-delay directive found. Google ignores this but other crawlers may slow down." });
  }

  if (findings.filter((f) => f.severity === "problem" || f.severity === "warning").length === 0) {
    findings.push({ severity: "good", message: "robots.txt looks properly configured." });
  }

  // Recommendations
  const recommendations: string[] = [];
  if (findings.some((f) => f.message.includes("blocks ALL"))) {
    recommendations.push("Remove or modify the Disallow: / rule unless you intentionally want to block all crawlers.");
  }
  if (sitemaps.length === 0) {
    recommendations.push("Add a Sitemap directive pointing to your XML sitemap.");
  }
  if (totalDisallows > 10) {
    recommendations.push("Review your disallow rules to ensure important pages are accessible to crawlers.");
  }
  if (recommendations.length === 0) {
    recommendations.push("robots.txt configuration looks good. Review it periodically as your site structure changes.");
  }

  return {
    url,
    found,
    statusCode,
    rawContent: content.slice(0, 5000),
    groups,
    sitemaps,
    host,
    totalDisallows,
    totalAllows,
    findings,
    recommendations,
  };
}
