import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { validateUrl, fetchPage } from "@/lib/tools/page-analyzer";
import { scoreReadability } from "@/lib/tools/readability-analysis";
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
    const toolId = "readability-checker";

    if (!url) {
      return NextResponse.json(
        { success: false, error: "URL is required" },
        { status: 400 },
      );
    }

    // Gate check
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

    // Validate and fetch
    const validation = validateUrl(url);
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 422 });
    }

    const { html } = await fetchPage(validation.url);
    const $ = cheerio.load(html);

    const title = $("title").first().text().trim() || "";

    // Count headings from full HTML
    let headingCount = 0;
    $("h1, h2, h3, h4, h5, h6").each(() => { headingCount++; });

    // Count paragraphs from HTML
    let htmlParagraphCount = 0;
    $("p").each((_, el) => {
      if ($(el).text().trim().length > 0) htmlParagraphCount++;
    });

    // Extract visible text
    $("script, style, noscript, iframe, svg, canvas, [hidden], [aria-hidden='true']").remove();
    const bodyEl = $("body");
    const visibleText = (bodyEl.length ? bodyEl.text() : $.text()).replace(/\s+/g, " ").trim();

    // Run readability analysis
    const analysis = scoreReadability(visibleText, headingCount, htmlParagraphCount);

    // Increment usage
    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({
      success: true,
      data: {
        url: validation.url.toString(),
        title,
        ...analysis,
      },
      gate: updatedGate,
    });

    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Analysis failed";
    return NextResponse.json({ success: false, error: message }, { status: 422 });
  }
}
