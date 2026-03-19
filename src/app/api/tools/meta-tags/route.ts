import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";
import { validateUrl, fetchPage } from "@/lib/tools/page-analyzer";
import {
  resolveVisitor,
  buildSetCookieHeader,
  checkGate,
  incrementUsage,
} from "@/lib/tools/usage-gate";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MetaTagInfo {
  name: string;
  content: string;
  property?: string;
}

interface LengthAssessment {
  length: number;
  status: "too-short" | "optimal" | "too-long" | "missing";
  label: string;
  color: string;
  recommendation: string;
}

interface MetaTagsResult {
  url: string;
  title: {
    value: string;
    assessment: LengthAssessment;
  };
  description: {
    value: string;
    assessment: LengthAssessment;
  };
  canonical: string | null;
  robots: string | null;
  viewport: string | null;
  charset: string | null;
  openGraph: Record<string, string>;
  twitterCard: Record<string, string>;
  otherMeta: MetaTagInfo[];
  totalTagCount: number;
}

// ---------------------------------------------------------------------------
// Assessment helpers
// ---------------------------------------------------------------------------

function assessTitle(value: string): LengthAssessment {
  const length = value.length;
  if (length === 0) {
    return {
      length: 0,
      status: "missing",
      label: "Missing",
      color: "red",
      recommendation: "Add a title tag. It is the most important on-page SEO element. Aim for 50-60 characters.",
    };
  }
  if (length < 30) {
    return {
      length,
      status: "too-short",
      label: "Too short",
      color: "amber",
      recommendation: "Your title is under 30 characters. You are missing an opportunity to include more keywords and context. Aim for 50-60 characters.",
    };
  }
  if (length <= 60) {
    return {
      length,
      status: "optimal",
      label: "Optimal",
      color: "emerald",
      recommendation: "Your title length is within the ideal range. It should display fully in search results.",
    };
  }
  return {
    length,
    status: "too-long",
    label: "Too long",
    color: "amber",
    recommendation: "Your title exceeds 60 characters and may be truncated in search results. Consider shortening it to keep the most important keywords visible.",
  };
}

function assessDescription(value: string): LengthAssessment {
  const length = value.length;
  if (length === 0) {
    return {
      length: 0,
      status: "missing",
      label: "Missing",
      color: "red",
      recommendation: "Add a meta description. Without one, Google will auto-generate a snippet which may not represent your page well. Aim for 120-155 characters.",
    };
  }
  if (length < 70) {
    return {
      length,
      status: "too-short",
      label: "Too short",
      color: "amber",
      recommendation: "Your meta description is under 70 characters. You are not using the available space to persuade searchers to click. Aim for 120-155 characters.",
    };
  }
  if (length <= 155) {
    return {
      length,
      status: "optimal",
      label: "Optimal",
      color: "emerald",
      recommendation: "Your meta description length is within the ideal range. It should display fully in search results.",
    };
  }
  return {
    length,
    status: "too-long",
    label: "Too long",
    color: "amber",
    recommendation: "Your meta description exceeds 155 characters and will likely be truncated in search results. Shorten it to keep your call-to-action visible.",
  };
}

// ---------------------------------------------------------------------------
// Meta tag extraction
// ---------------------------------------------------------------------------

function extractMetaTags(html: string, pageUrl: string): MetaTagsResult {
  const $ = cheerio.load(html);

  // Title
  const title = $("title").first().text().trim();

  // Meta description
  const description =
    $('meta[name="description"]').attr("content")?.trim() ?? "";

  // Canonical
  const canonical = $('link[rel="canonical"]').attr("href")?.trim() ?? null;

  // Robots
  const robots = $('meta[name="robots"]').attr("content")?.trim() ?? null;

  // Viewport
  const viewport = $('meta[name="viewport"]').attr("content")?.trim() ?? null;

  // Charset
  let charset = $("meta[charset]").attr("charset")?.trim() ?? null;
  if (!charset) {
    const httpEquiv = $('meta[http-equiv="Content-Type"]').attr("content") ?? "";
    const match = httpEquiv.match(/charset=([^\s;]+)/i);
    if (match) charset = match[1];
  }

  // Open Graph tags
  const openGraph: Record<string, string> = {};
  $('meta[property^="og:"]').each((_, el) => {
    const prop = $(el).attr("property") ?? "";
    const content = $(el).attr("content")?.trim() ?? "";
    if (prop && content) {
      openGraph[prop.replace("og:", "")] = content;
    }
  });

  // Twitter Card tags
  const twitterCard: Record<string, string> = {};
  $('meta[name^="twitter:"]').each((_, el) => {
    const name = $(el).attr("name") ?? "";
    const content = $(el).attr("content")?.trim() ?? "";
    if (name && content) {
      twitterCard[name.replace("twitter:", "")] = content;
    }
  });
  // Also check property attribute for twitter tags
  $('meta[property^="twitter:"]').each((_, el) => {
    const prop = $(el).attr("property") ?? "";
    const content = $(el).attr("content")?.trim() ?? "";
    if (prop && content) {
      twitterCard[prop.replace("twitter:", "")] = content;
    }
  });

  // Other meta tags (everything not already captured)
  const knownNames = new Set([
    "description",
    "robots",
    "viewport",
    "charset",
  ]);
  const otherMeta: MetaTagInfo[] = [];

  $("meta").each((_, el) => {
    const name = $(el).attr("name")?.trim() ?? "";
    const property = $(el).attr("property")?.trim() ?? "";
    const content = $(el).attr("content")?.trim() ?? "";
    const httpEquiv = $(el).attr("http-equiv")?.trim() ?? "";

    // Skip already-captured tags
    if (knownNames.has(name.toLowerCase())) return;
    if (property.startsWith("og:")) return;
    if (name.startsWith("twitter:") || property.startsWith("twitter:")) return;
    if ($(el).attr("charset")) return;

    // Include everything else that has content
    if (content) {
      otherMeta.push({
        name: name || httpEquiv || property || "unknown",
        content,
        property: property || undefined,
      });
    }
  });

  // Count all tags
  const totalTagCount =
    (title ? 1 : 0) +
    (description ? 1 : 0) +
    (canonical ? 1 : 0) +
    (robots ? 1 : 0) +
    (viewport ? 1 : 0) +
    (charset ? 1 : 0) +
    Object.keys(openGraph).length +
    Object.keys(twitterCard).length +
    otherMeta.length;

  return {
    url: pageUrl,
    title: { value: title, assessment: assessTitle(title) },
    description: { value: description, assessment: assessDescription(description) },
    canonical,
    robots,
    viewport,
    charset,
    openGraph,
    twitterCard,
    otherMeta,
    totalTagCount,
  };
}

// ---------------------------------------------------------------------------
// API route
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = typeof body?.url === "string" ? body.url.trim() : "";
    const toolId = typeof body?.toolId === "string" ? body.toolId : "meta-tag-checker";

    if (!url) {
      return NextResponse.json(
        { success: false, error: "URL is required" },
        { status: 400 },
      );
    }

    // Resolve visitor & check gate
    const cookieHeader = request.headers.get("cookie");
    const { visitorId, isNew } = resolveVisitor(cookieHeader);
    const gate = checkGate(visitorId, toolId);

    if (!gate.allowed) {
      const res = NextResponse.json(
        { success: false, error: "Daily usage limit reached. Sign up for unlimited access.", gate },
        { status: 429 },
      );
      if (isNew) {
        res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
      }
      return res;
    }

    // Validate & fetch
    const validation = validateUrl(url);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const { html } = await fetchPage(validation.url);
    const data = extractMetaTags(html, validation.url.toString());

    // Increment usage after successful analysis
    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({ success: true, data, gate: updatedGate });

    if (isNew) {
      res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    }

    return res;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Analysis failed";
    return NextResponse.json(
      { success: false, error: message },
      { status: 422 },
    );
  }
}
