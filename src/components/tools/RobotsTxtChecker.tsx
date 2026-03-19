"use client";

import { useState } from "react";
import { ToolHero } from "./ToolHero";
import { ToolInput } from "./ToolInput";
import { ToolResultCard } from "./ToolResultCard";
import { ToolCTA } from "./ToolCTA";
import { ToolFAQ } from "./ToolFAQ";
import { GateModal } from "./GateModal";
import { SignupPrompt } from "./SignupPrompt";
import { trackToolEvent } from "@/lib/tools/event-tracking";
import type { GateDecision } from "@/lib/tools/types";
import type { RobotsTxtResult } from "@/lib/tools/robots-analysis";

const TOOL_ID = "robots-txt-checker";

const severityStyles: Record<string, string> = {
  good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
  warning: "border-amber-200 bg-amber-50/30 text-amber-700",
  problem: "border-red-200 bg-red-50/30 text-red-700",
};

export function RobotsTxtChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<RobotsTxtResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/robots-txt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        throw new Error(data.error || "Analysis failed");
      }
      setResult(data.data);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, found: data.data.found });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Robots.txt Checker" subtitle="Check your robots.txt file for crawl directives, sitemap references, and common SEO issues." />

      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com" buttonText="Check robots.txt" />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {error && <div className="mx-auto max-w-[680px] px-6 py-4"><div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">{error}</div></div>}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Checked URL</p>
              <p className="mt-1 text-[14px] font-medium text-foreground">{result.url}</p>
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Status" value={result.found ? "Found" : "Not found"} note={`HTTP ${result.statusCode}`} />
              <ToolResultCard label="Sitemaps" value={result.sitemaps.length} />
              <ToolResultCard label="User-agents" value={result.groups.length} />
              <ToolResultCard label="Disallow rules" value={result.totalDisallows} />
              <ToolResultCard label="Allow rules" value={result.totalAllows} />
            </div>

            {/* Directives */}
            {result.found && result.groups.length > 0 && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Parsed directives</p>
                <div className="space-y-4">
                  {result.groups.map((group, i) => (
                    <div key={i} className="rounded-lg border border-border-light p-4">
                      <p className="text-[13px] font-bold text-foreground mb-2">User-agent: {group.userAgent}</p>
                      {group.disallows.length > 0 && (
                        <div className="mb-2">
                          {group.disallows.map((d, j) => (
                            <p key={j} className="text-[12px] text-red-600 font-mono">Disallow: {d}</p>
                          ))}
                        </div>
                      )}
                      {group.allows.length > 0 && (
                        <div className="mb-2">
                          {group.allows.map((a, j) => (
                            <p key={j} className="text-[12px] text-emerald-600 font-mono">Allow: {a}</p>
                          ))}
                        </div>
                      )}
                      {group.crawlDelay !== undefined && (
                        <p className="text-[12px] text-amber-600 font-mono">Crawl-delay: {group.crawlDelay}</p>
                      )}
                      {group.disallows.length === 0 && group.allows.length === 0 && (
                        <p className="text-[12px] text-muted">No rules defined for this user-agent.</p>
                      )}
                    </div>
                  ))}
                </div>
                {result.sitemaps.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border-light">
                    <p className="text-[12px] font-semibold text-muted mb-1">Sitemaps:</p>
                    {result.sitemaps.map((s, i) => (
                      <p key={i} className="text-[12px] text-accent font-mono truncate">{s}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Findings */}
            {result.findings.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Findings</p>
                <div className="space-y-2">
                  {result.findings.map((f, i) => (
                    <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${severityStyles[f.severity]}`}>{f.message}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">Recommendations</p>
              <ul className="space-y-2">{result.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{rec}</li>
              ))}</ul>
            </div>
          </div>
        </section>
      )}

      <section className="py-6"><div className="mx-auto max-w-[680px] px-6">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Related SEO guides</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { href: "/seo-guide/technical-seo/robots-txt-guide", label: "Robots.txt Guide" },
            { href: "/seo-guide/technical-seo/why-pages-are-not-indexed", label: "Why Pages Are Not Indexed" },
            { href: "/seo-guide/technical-seo/discovered-not-indexed", label: "Discovered but Not Indexed" },
            { href: "/seo-guide/technical-seo", label: "Technical SEO Guide" },
          ].map((link) => (<a key={link.href} href={link.href} className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{link.label}</a>))}
        </div>
      </div></section>

      <ToolCTA title="Want a full technical SEO audit?" description="RankSEO checks robots.txt, sitemaps, crawlability, and indexing issues across your entire site." />

      <ToolFAQ faqs={[
        { question: "What is robots.txt?", answer: "robots.txt is a text file at the root of a website that tells search engine crawlers which pages they can and cannot access. It helps control crawl behavior but does not guarantee pages will not be indexed." },
        { question: "Does every website need robots.txt?", answer: "Not strictly, but it is recommended. A robots.txt file gives you control over how crawlers access your site. Without one, all crawlers will attempt to access all pages, which is usually fine for most sites." },
        { question: "Can robots.txt block Google?", answer: "Yes. A Disallow: / rule under User-agent: * will tell all crawlers, including Google, not to crawl any page on your site. However, Google may still index URLs it finds through external links, just without crawling the content." },
        { question: "Should robots.txt include a sitemap?", answer: "Yes. Adding a Sitemap directive in robots.txt helps search engines discover your XML sitemap, which lists all the pages you want indexed. It is a simple best practice." },
        { question: "What does Disallow mean in robots.txt?", answer: "Disallow tells crawlers not to access the specified path. For example, Disallow: /admin/ tells crawlers to skip all URLs starting with /admin/. An empty Disallow line means nothing is blocked." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
