// ---------------------------------------------------------------------------
// Shared sitemap analysis utilities
// ---------------------------------------------------------------------------

import { validateUrl } from "./page-analyzer";

export type SitemapType = "urlset" | "sitemapindex" | "unknown" | "not_found";

export interface SitemapResult {
  url: string;
  found: boolean;
  statusCode: number;
  type: SitemapType;
  urlCount: number;
  childSitemapCount: number;
  sampleUrls: string[];
  sampleSitemaps: string[];
  hasLastmod: boolean;
  discoveredVia: string;
  findings: { severity: "good" | "warning" | "problem"; message: string }[];
  recommendations: string[];
}

const FETCH_TIMEOUT = 10_000;

async function safeFetch(url: string): Promise<{ text: string; status: number } | null> {
  const v = validateUrl(url);
  if (!v.valid) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "RankSEO-SitemapChecker/1.0 (+https://www.rankseoengine.com)" },
      redirect: "follow",
    });
    const text = await res.text();
    return { text: text.slice(0, 500_000), status: res.status };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function extractSitemapFromRobots(robotsContent: string): string[] {
  const sitemaps: string[] = [];
  for (const line of robotsContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith("sitemap:")) {
      const val = trimmed.slice(8).trim();
      if (val) sitemaps.push(val);
    }
  }
  return sitemaps;
}

function parseSitemapXml(xml: string): { type: SitemapType; urls: string[]; sitemaps: string[]; hasLastmod: boolean } {
  const isIndex = /<sitemapindex[\s>]/i.test(xml);
  const isUrlset = /<urlset[\s>]/i.test(xml);

  if (isIndex) {
    const sitemaps: string[] = [];
    const regex = /<sitemap>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/sitemap>/gi;
    let match;
    while ((match = regex.exec(xml)) !== null) sitemaps.push(match[1].trim());
    return { type: "sitemapindex", urls: [], sitemaps, hasLastmod: /<lastmod>/i.test(xml) };
  }

  if (isUrlset) {
    const urls: string[] = [];
    const regex = /<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/url>/gi;
    let match;
    while ((match = regex.exec(xml)) !== null) urls.push(match[1].trim());
    return { type: "urlset", urls, sitemaps: [], hasLastmod: /<lastmod>/i.test(xml) };
  }

  return { type: "unknown", urls: [], sitemaps: [], hasLastmod: false };
}

export async function analyzeSitemap(origin: string): Promise<SitemapResult> {
  // Step 1: Try robots.txt
  const robotsRes = await safeFetch(`${origin}/robots.txt`);
  let sitemapUrls: string[] = [];
  if (robotsRes && robotsRes.status >= 200 && robotsRes.status < 300) {
    sitemapUrls = extractSitemapFromRobots(robotsRes.text);
  }

  // Step 2: Fallback
  if (sitemapUrls.length === 0) {
    sitemapUrls = [`${origin}/sitemap.xml`, `${origin}/sitemap_index.xml`];
  }

  // Try each
  for (const sitemapUrl of sitemapUrls) {
    const res = await safeFetch(sitemapUrl);
    if (!res || res.status !== 200) continue;

    const parsed = parseSitemapXml(res.text);
    if (parsed.type === "unknown") continue;

    const findings: SitemapResult["findings"] = [];
    const recommendations: string[] = [];

    findings.push({ severity: "good", message: `Sitemap found at ${sitemapUrl}` });

    if (parsed.type === "sitemapindex") {
      findings.push({ severity: "good", message: `Sitemap index with ${parsed.sitemaps.length} child sitemap${parsed.sitemaps.length === 1 ? "" : "s"}.` });
    } else {
      findings.push({ severity: "good", message: `URL sitemap with ${parsed.urls.length} URL${parsed.urls.length === 1 ? "" : "s"}.` });
    }

    if (parsed.hasLastmod) {
      findings.push({ severity: "good", message: "lastmod dates are present, helping crawlers prioritize fresh content." });
    } else {
      findings.push({ severity: "warning", message: "No lastmod dates found. Adding them helps crawlers identify updated content." });
      recommendations.push("Add lastmod dates to sitemap entries so crawlers know when content was last updated.");
    }

    const discoveredVia = robotsRes && robotsRes.status >= 200 && robotsRes.status < 300 && extractSitemapFromRobots(robotsRes.text).includes(sitemapUrl) ? "robots.txt" : "standard path";
    if (discoveredVia === "robots.txt") {
      findings.push({ severity: "good", message: "Sitemap is referenced in robots.txt." });
    } else {
      recommendations.push("Add a Sitemap directive to your robots.txt file.");
    }

    if (recommendations.length === 0) {
      recommendations.push("Sitemap looks well-configured. Submit it to Google Search Console if not already done.");
    }

    return {
      url: sitemapUrl,
      found: true,
      statusCode: res.status,
      type: parsed.type,
      urlCount: parsed.urls.length,
      childSitemapCount: parsed.sitemaps.length,
      sampleUrls: parsed.urls.slice(0, 10),
      sampleSitemaps: parsed.sitemaps.slice(0, 10),
      hasLastmod: parsed.hasLastmod,
      discoveredVia,
      findings,
      recommendations,
    };
  }

  // Not found
  return {
    url: `${origin}/sitemap.xml`,
    found: false,
    statusCode: 404,
    type: "not_found",
    urlCount: 0,
    childSitemapCount: 0,
    sampleUrls: [],
    sampleSitemaps: [],
    hasLastmod: false,
    discoveredVia: "none",
    findings: [
      { severity: "warning", message: "No sitemap found. Checked robots.txt, /sitemap.xml, and /sitemap_index.xml." },
    ],
    recommendations: [
      "Create an XML sitemap listing all important pages on your site.",
      "Submit the sitemap to Google Search Console.",
      "Add a Sitemap directive to your robots.txt file.",
    ],
  };
}
