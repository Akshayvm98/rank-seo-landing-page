import { NextRequest, NextResponse } from "next/server";
import { validateEmail } from "@/lib/tools/email-validation";
import { resolveVisitor, buildSetCookieHeader, checkGate, incrementUsage } from "@/lib/tools/usage-gate";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const email = typeof reqBody?.email === "string" ? reqBody.email.trim() : "";
    const toolId = "email-validator";

    if (!email) {
      return NextResponse.json({ success: false, error: "Email address is required" }, { status: 400 });
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

    const result = await validateEmail(email);

    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({ success: true, data: result, gate: updatedGate });
    if (isNew) res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    return res;
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Validation failed" },
      { status: 422 },
    );
  }
}
