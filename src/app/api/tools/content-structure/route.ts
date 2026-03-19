import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { validateUrl, fetchPage } from "@/lib/tools/page-analyzer";
import { analyzeContentStructure } from "@/lib/tools/structure-analysis";
import {
  resolveVisitor,
  buildSetCookieHeader,
  checkGate,
  incrementUsage,
} from "@/lib/tools/usage-gate";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const url = typeof reqBody?.url === "string" ? reqBody.url.trim() : "";
    const toolId = "content-structure-checker";

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 });
    }

    const cookieHeader = request.headers.get("cookie");
    const { visitorId, isNew } = resolveVisitor(cookieHeader);
    const gate = checkGate(visitorId, toolId);

    if (!gate.allowed) {
      const res = NextResponse.json(
        { success: false, error: "Daily usage limit reached. Sign up for unlimited access.", gate },
        { status: 429 },
      );
      if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
      return res;
    }

    const validation = validateUrl(url);
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 422 });
    }

    const { html } = await fetchPage(validation.url);
    const $ = cheerio.load(html);

    const title = $("title").first().text().trim() || "";

    // Count headings
    let headingCount = 0;
    $("h1, h2, h3, h4, h5, h6").each(() => { headingCount++; });

    // Count paragraphs and their word counts
    const paragraphWordCounts: number[] = [];
    $("p").each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 0) {
        paragraphWordCounts.push(text.split(/\s+/).filter((w) => w.length > 0).length);
      }
    });

    // Count lists
    let listCount = 0;
    $("ul, ol").each(() => { listCount++; });

    // Count internal links
    let internalLinkCount = 0;
    const pageHostname = validation.url.hostname;
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") ?? "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      try {
        const linkUrl = new URL(href, validation.url.origin);
        if (linkUrl.hostname === pageHostname) internalLinkCount++;
      } catch { /* skip */ }
    });

    // Get visible text for word count
    $("script, style, noscript, iframe, svg, canvas, [hidden], [aria-hidden='true']").remove();
    const bodyEl = $("body");
    const visibleText = (bodyEl.length ? bodyEl.text() : $.text()).replace(/\s+/g, " ").trim();
    const totalWords = visibleText.split(/\s+/).filter((w) => w.length > 0).length;

    const analysis = analyzeContentStructure(
      totalWords,
      headingCount,
      paragraphWordCounts.length,
      listCount,
      internalLinkCount,
      paragraphWordCounts,
    );

    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({
      success: true,
      data: { url: validation.url.toString(), title, ...analysis },
      gate: updatedGate,
    });

    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Analysis failed";
    return NextResponse.json({ success: false, error: message }, { status: 422 });
  }
}
