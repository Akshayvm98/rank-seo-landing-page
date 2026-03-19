import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { validateUrl, fetchPage } from "@/lib/tools/page-analyzer";
import { classifyAltTextStatus, summarizeAltTextFindings } from "@/lib/tools/image-alt-analysis";
import type { ImageInfo } from "@/lib/tools/image-alt-analysis";
import { resolveVisitor, buildSetCookieHeader, checkGate, incrementUsage } from "@/lib/tools/usage-gate";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const url = typeof reqBody?.url === "string" ? reqBody.url.trim() : "";
    const toolId = "image-alt-text-checker";

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

    const { html } = await fetchPage(validation.url);
    const $ = cheerio.load(html);
    const title = $("title").first().text().trim() || "";

    // Extract images
    const images: ImageInfo[] = [];
    $("img").each((_, el) => {
      let src = $(el).attr("src") ?? "";
      if (!src) src = $(el).attr("data-src") ?? "";
      if (!src) return;

      // Resolve relative URLs
      try { src = new URL(src, validation.url.origin).toString(); } catch { /* keep as-is */ }

      const altAttr = $(el).attr("alt");
      const alt = altAttr !== undefined ? altAttr : null;
      const altStatus = classifyAltTextStatus(alt);

      images.push({ src, alt, altStatus });
    });

    const summary = summarizeAltTextFindings(images);

    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({
      success: true,
      data: { url: validation.url.toString(), title, ...summary },
      gate: updatedGate,
    });
    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : "Analysis failed" }, { status: 422 });
  }
}
