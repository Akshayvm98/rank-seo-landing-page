import { NextRequest, NextResponse } from "next/server";
import { analyzePage } from "@/lib/tools/page-analyzer";
import {
  filterCheckableLinks,
  checkLinksWithLimit,
  summarizeBrokenLinks,
} from "@/lib/tools/broken-link-check";
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
    const toolId = "broken-link-checker";

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

    // Fetch and parse the page using existing pipeline
    const pageData = await analyzePage(url);

    // Combine all links
    const allLinks = [
      ...pageData.internalLinks.map((l) => ({ href: l.href, text: l.text, isInternal: true })),
      ...pageData.externalLinks.map((l) => ({ href: l.href, text: l.text, isInternal: false })),
    ];

    // Filter checkable vs ignored
    const { checkable, ignored } = filterCheckableLinks(allLinks);

    // Check link statuses with concurrency limits
    const checkedLinks = await checkLinksWithLimit(checkable);

    // Generate summary
    const summary = summarizeBrokenLinks(checkedLinks, ignored);

    // Increment usage
    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({
      success: true,
      data: {
        url: pageData.url,
        title: pageData.title,
        ...summary,
      },
      gate: updatedGate,
    });

    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Analysis failed";
    return NextResponse.json(
      { success: false, error: message },
      { status: 422 },
    );
  }
}
