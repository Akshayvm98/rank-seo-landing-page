import { NextRequest, NextResponse } from "next/server";
import { normalizeSiteOrigin, fetchRobotsTxt, analyzeRobotsTxt } from "@/lib/tools/robots-analysis";
import {
  resolveVisitor, buildSetCookieHeader, checkGate, incrementUsage,
} from "@/lib/tools/usage-gate";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const url = typeof reqBody?.url === "string" ? reqBody.url.trim() : "";
    const toolId = "robots-txt-checker";

    if (!url) return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 });

    const cookieHeader = request.headers.get("cookie");
    const { visitorId, isNew } = resolveVisitor(cookieHeader);
    const gate = checkGate(visitorId, toolId);

    if (!gate.allowed) {
      const res = NextResponse.json({ success: false, error: "Daily usage limit reached.", gate }, { status: 429 });
      if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
      return res;
    }

    const origin = normalizeSiteOrigin(url);
    const { content, statusCode } = await fetchRobotsTxt(origin);
    const analysis = analyzeRobotsTxt(statusCode, content, origin);

    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({ success: true, data: analysis, gate: updatedGate });
    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : "Analysis failed" }, { status: 422 });
  }
}
