import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { validateUrl, fetchPage } from "@/lib/tools/page-analyzer";
import { resolveVisitor, buildSetCookieHeader, checkGate, incrementUsage } from "@/lib/tools/usage-gate";

function parseDirectives(value: string): string[] {
  return value.toLowerCase().split(",").map((d) => d.trim()).filter(Boolean);
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const url = typeof reqBody?.url === "string" ? reqBody.url.trim() : "";
    const toolId = "noindex-checker";

    if (!url) return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 });

    const cookieHeader = request.headers.get("cookie");
    const { visitorId, isNew } = resolveVisitor(cookieHeader);
    const gate = checkGate(visitorId, toolId);

    if (!gate.allowed) {
      const res = NextResponse.json({ success: false, error: "Daily usage limit reached.", gate }, { status: 429 });
      if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
      return res;
    }

    const validation = validateUrl(url);
    if (!validation.valid) return NextResponse.json({ success: false, error: validation.error }, { status: 422 });

    // Need raw response headers, so fetch manually
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15_000);
    let responseHeaders: Headers;
    let html: string;
    try {
      const response = await fetch(validation.url.toString(), {
        signal: controller.signal,
        headers: { "User-Agent": "RankSEO-Analyzer/1.0 (+https://www.rankseoengine.com)", Accept: "text/html" },
        redirect: "follow",
      });
      responseHeaders = response.headers;
      html = await response.text();
    } finally { clearTimeout(timer); }

    const $ = cheerio.load(html);
    const title = $("title").first().text().trim() || "";

    // Extract meta robots
    const metaRobotsTags: { name: string; content: string; directives: string[] }[] = [];
    $('meta[name="robots"], meta[name="googlebot"]').each((_, el) => {
      const name = $(el).attr("name") ?? "";
      const content = $(el).attr("content") ?? "";
      metaRobotsTags.push({ name, content, directives: parseDirectives(content) });
    });

    // Extract X-Robots-Tag header
    const xRobotsHeader = responseHeaders.get("x-robots-tag") ?? null;
    const xRobotsDirectives = xRobotsHeader ? parseDirectives(xRobotsHeader) : [];

    // Combine all directives
    const allDirectives = [
      ...metaRobotsTags.flatMap((t) => t.directives),
      ...xRobotsDirectives,
    ];

    // Expand "none" to noindex + nofollow
    const expanded = allDirectives.flatMap((d) => d === "none" ? ["noindex", "nofollow"] : [d]);
    const uniqueDirectives = [...new Set(expanded)];

    const hasNoindex = uniqueDirectives.includes("noindex");
    const hasNofollow = uniqueDirectives.includes("nofollow");

    // Findings
    const findings: { severity: "good" | "warning" | "problem"; message: string }[] = [];

    if (!hasNoindex && metaRobotsTags.length === 0 && !xRobotsHeader) {
      findings.push({ severity: "good", message: "No robots directives found. Page appears indexable by default." });
    }

    if (hasNoindex) {
      const sources: string[] = [];
      if (metaRobotsTags.some((t) => t.directives.includes("noindex") || t.directives.includes("none"))) sources.push("meta robots tag");
      if (xRobotsDirectives.includes("noindex") || xRobotsDirectives.includes("none")) sources.push("X-Robots-Tag header");
      findings.push({ severity: "problem", message: `noindex directive found (via ${sources.join(" and ")}). This page will NOT appear in search results.` });
    } else if (metaRobotsTags.length > 0 || xRobotsHeader) {
      findings.push({ severity: "good", message: "Robots directives found but no noindex. Page should be indexable." });
    }

    if (hasNofollow) {
      findings.push({ severity: "warning", message: "nofollow directive found. Search engines will not follow links on this page." });
    }

    if (metaRobotsTags.length > 1) {
      findings.push({ severity: "warning", message: `${metaRobotsTags.length} meta robots tags found. Use only one to avoid confusion.` });
    }

    if (uniqueDirectives.includes("noarchive")) {
      findings.push({ severity: "warning", message: "noarchive directive found. Search engines will not cache this page." });
    }
    if (uniqueDirectives.includes("nosnippet")) {
      findings.push({ severity: "warning", message: "nosnippet directive found. No text snippet will be shown in search results." });
    }

    // Indexability verdict
    const indexable = !hasNoindex;

    // Recommendations
    const recommendations: string[] = [];
    if (hasNoindex) {
      recommendations.push("If this page should rank in search, remove the noindex directive.");
      recommendations.push("Check both meta tags and server response headers for noindex.");
    }
    if (metaRobotsTags.length > 1) {
      recommendations.push("Consolidate to a single meta robots tag to avoid conflicting signals.");
    }
    if (!hasNoindex && findings.length <= 1) {
      recommendations.push("Page indexability looks correct. No action needed.");
    }

    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({
      success: true,
      data: {
        url: validation.url.toString(),
        title,
        indexable,
        hasNoindex,
        hasNofollow,
        metaRobotsTags,
        xRobotsHeader,
        xRobotsDirectives,
        allDirectives: uniqueDirectives,
        findings,
        recommendations,
      },
      gate: updatedGate,
    });
    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : "Analysis failed" }, { status: 422 });
  }
}
