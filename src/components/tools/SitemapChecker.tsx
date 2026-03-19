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
import type { SitemapResult } from "@/lib/tools/sitemap-analysis";

const TOOL_ID = "sitemap-checker";

const severityStyles: Record<string, string> = {
  good: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
  warning: "border-amber-200 bg-amber-50/30 text-amber-700",
  problem: "border-red-200 bg-red-50/30 text-red-700",
};

export function SitemapChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SitemapResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;
    setLoading(true); setError(null); setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });
    try {
      const res = await fetch("/api/tools/sitemap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!data.success) {
        if (res.status === 429) { setGate(data.gate); setShowGateModal(true); return; }
        throw new Error(data.error || "Analysis failed");
      }
      setResult(data.data); setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, found: data.data.found });
      if (data.gate?.showSignupPrompt) trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally { setLoading(false); }
  }

  return (
    <>
      <ToolHero badge="Free SEO Tool" title="Sitemap Checker" subtitle="Check if your XML sitemap exists and is correctly structured for SEO." />
      <ToolInput value={url} onChange={setUrl} onSubmit={handleAnalyze} loading={loading} placeholder="https://example.com" buttonText="Check sitemap" />
      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />
      {error && <div className="mx-auto max-w-[680px] px-6 py-4"><div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">{error}</div></div>}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">Checked URL</p>
              <p className="mt-1 text-[14px] font-medium text-foreground">{result.url}</p>
              {result.discoveredVia !== "none" && <p className="text-[12px] text-muted">Discovered via: {result.discoveredVia}</p>}
            </div>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Status" value={result.found ? "Found" : "Not found"} />
              <ToolResultCard label="Type" value={result.type === "urlset" ? "URL sitemap" : result.type === "sitemapindex" ? "Sitemap index" : result.type} />
              <ToolResultCard label="URLs" value={result.urlCount} />
              <ToolResultCard label="Child sitemaps" value={result.childSitemapCount} />
              <ToolResultCard label="Has lastmod" value={result.hasLastmod ? "Yes" : "No"} />
            </div>

            {/* Sample URLs/sitemaps */}
            {result.sampleUrls.length > 0 && (
              <div className="mt-6 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Sample URLs ({result.urlCount} total)</p>
                <div className="space-y-1">{result.sampleUrls.map((u, i) => <p key={i} className="text-[13px] text-muted truncate">{u}</p>)}</div>
              </div>
            )}
            {result.sampleSitemaps.length > 0 && (
              <div className="mt-4 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Child sitemaps ({result.childSitemapCount} total)</p>
                <div className="space-y-1">{result.sampleSitemaps.map((s, i) => <p key={i} className="text-[13px] text-accent truncate">{s}</p>)}</div>
              </div>
            )}

            {/* Findings */}
            {result.findings.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">Findings</p>
                <div className="space-y-2">{result.findings.map((f, i) => (
                  <div key={i} className={`rounded-xl border px-5 py-3 text-[13px] ${severityStyles[f.severity]}`}>{f.message}</div>
                ))}</div>
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
            { href: "/seo-guide/technical-seo/how-long-to-index", label: "How Long to Index a Page" },
            { href: "/seo-guide/technical-seo", label: "Technical SEO Guide" },
          ].map((link) => (<a key={link.href} href={link.href} className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{link.label}</a>))}
        </div>
      </div></section>

      <ToolCTA title="Want full sitemap and crawl analysis?" description="RankSEO monitors your sitemap, crawlability, and indexing health across your entire site." />

      <ToolFAQ faqs={[
        { question: "What is an XML sitemap?", answer: "An XML sitemap is a file that lists all important URLs on your website. It helps search engines discover and crawl your pages more efficiently." },
        { question: "Does a sitemap help SEO?", answer: "Yes. A sitemap helps search engines find all your pages, especially new or deep pages that might not be easily discovered through links alone. It is especially important for large or new sites." },
        { question: "How do I find my sitemap?", answer: "Check your robots.txt file for a Sitemap directive. If not there, try /sitemap.xml or /sitemap_index.xml at your domain root. Most CMS platforms generate sitemaps automatically." },
        { question: "Should my sitemap be in robots.txt?", answer: "Yes. Adding a Sitemap directive to robots.txt helps search engines discover your sitemap automatically without needing to submit it manually in Search Console." },
        { question: "What is a sitemap index?", answer: "A sitemap index is a file that references multiple child sitemaps. It is used when a site has too many URLs for a single sitemap file (the limit is 50,000 URLs per sitemap)." },
      ]} />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
