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
import type {
  ReadabilityLevel,
  SentenceMetrics,
  ParagraphMetrics,
} from "@/lib/tools/readability-analysis";

const TOOL_ID = "readability-checker";

interface AnalysisResult {
  url: string;
  title: string;
  totalWords: number;
  sentenceMetrics: SentenceMetrics;
  paragraphMetrics: ParagraphMetrics;
  headingCount: number;
  readingTimeMinutes: number;
  level: ReadabilityLevel;
  insights: string[];
  recommendations: string[];
}

const levelStyles: Record<ReadabilityLevel, { bg: string; text: string; badge: string }> = {
  "hard to read": { bg: "bg-red-50/40", text: "text-red-700", badge: "bg-red-100 text-red-700" },
  "needs improvement": { bg: "bg-amber-50/40", text: "text-amber-700", badge: "bg-amber-100 text-amber-700" },
  "fairly readable": { bg: "bg-blue-50/40", text: "text-blue-700", badge: "bg-blue-100 text-blue-700" },
  "easy to read": { bg: "bg-emerald-50/40", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700" },
};

const levelBorders: Record<ReadabilityLevel, string> = {
  "hard to read": "border-red-200",
  "needs improvement": "border-amber-200",
  "fairly readable": "border-blue-200",
  "easy to read": "border-emerald-200",
};

function sentenceLengthLabel(avg: number): string {
  if (avg <= 14) return "Short (easy)";
  if (avg <= 20) return "Good";
  if (avg <= 28) return "Long";
  return "Very long";
}

function sentenceLengthColor(avg: number): string {
  if (avg <= 14) return "bg-emerald-100 text-emerald-700";
  if (avg <= 20) return "bg-emerald-100 text-emerald-700";
  if (avg <= 28) return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}

function paragraphDensityLabel(avg: number): string {
  if (avg <= 3) return "Easy to scan";
  if (avg <= 5) return "Acceptable";
  return "Dense";
}

function paragraphDensityColor(avg: number): string {
  if (avg <= 3) return "bg-emerald-100 text-emerald-700";
  if (avg <= 5) return "bg-blue-100 text-blue-700";
  return "bg-amber-100 text-amber-700";
}

export function ReadabilityChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [gate, setGate] = useState<GateDecision | null>(null);
  const [showGateModal, setShowGateModal] = useState(false);

  async function handleAnalyze() {
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    trackToolEvent("analysis_started", { toolId: TOOL_ID, url });

    try {
      const res = await fetch("/api/tools/readability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!data.success) {
        if (res.status === 429) {
          setGate(data.gate);
          setShowGateModal(true);
          trackToolEvent("gate_triggered", { toolId: TOOL_ID });
          return;
        }
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data.data);
      setGate(data.gate);
      trackToolEvent("analysis_completed", { toolId: TOOL_ID, level: data.data.level });

      if (data.gate?.showSignupPrompt) {
        trackToolEvent("signup_prompt_shown", { toolId: TOOL_ID });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      trackToolEvent("analysis_failed", { toolId: TOOL_ID, error: message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToolHero
        badge="Free SEO Tool"
        title="Readability Checker"
        subtitle="Analyze sentence length, paragraph structure, and content clarity for better SEO and user experience."
      />

      <ToolInput
        value={url}
        onChange={setUrl}
        onSubmit={handleAnalyze}
        loading={loading}
        placeholder="https://example.com/blog-post"
        buttonText="Check readability"
      />

      <SignupPrompt visible={gate?.allowed === true && gate.showSignupPrompt} />

      {error && (
        <div className="mx-auto max-w-[680px] px-6 py-4">
          <div className="rounded-xl border border-red-200 bg-red-50/40 px-5 py-3 text-[14px] text-red-700">
            {error}
          </div>
        </div>
      )}

      {result && (
        <section className="py-8 md:py-10">
          <div className="mx-auto max-w-[880px] px-6">
            {/* Page info */}
            <div className="mb-6">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
                Analyzed page
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-foreground truncate">
                {result.title || result.url}
              </h2>
              <p className="mt-0.5 text-[13px] text-muted truncate">{result.url}</p>
            </div>

            {/* Overview cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <ToolResultCard label="Words" value={result.totalWords.toLocaleString()} />
              <ToolResultCard label="Sentences" value={result.sentenceMetrics.totalSentences} />
              <ToolResultCard label="Paragraphs" value={result.paragraphMetrics.totalParagraphs} />
              <ToolResultCard label="Headings" value={result.headingCount} />
              <ToolResultCard label="Reading time" value={`${result.readingTimeMinutes} min`} />
            </div>

            {/* Readability score */}
            <div className={`mt-6 rounded-2xl border p-6 ${levelStyles[result.level].bg} ${levelBorders[result.level]}`}>
              <div className="flex items-center gap-3">
                <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide ${levelStyles[result.level].badge}`}>
                  {result.level}
                </span>
                <span className={`text-[14px] font-semibold ${levelStyles[result.level].text}`}>
                  Readability level
                </span>
              </div>
              <p className={`mt-2 text-[13px] leading-[1.6] ${levelStyles[result.level].text}`}>
                {result.level === "easy to read" && "This content is well-structured and easy to follow. Sentence and paragraph lengths are within good ranges for most readers."}
                {result.level === "fairly readable" && "This content is reasonably readable with some areas that could be improved for better scannability and clarity."}
                {result.level === "needs improvement" && "This content has readability issues that may cause readers to disengage. Consider improving sentence length and paragraph structure."}
                {result.level === "hard to read" && "This content is difficult to read. Long sentences, dense paragraphs, or missing structure make it hard for readers to stay engaged."}
              </p>
            </div>

            {/* Detailed metrics */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {/* Sentence length */}
              <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Sentence length
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[22px] font-bold text-foreground">
                    {result.sentenceMetrics.averageWordsPerSentence}
                  </span>
                  <span className="text-[13px] text-muted">words/sentence avg</span>
                </div>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${sentenceLengthColor(result.sentenceMetrics.averageWordsPerSentence)}`}>
                  {sentenceLengthLabel(result.sentenceMetrics.averageWordsPerSentence)}
                </span>
                {result.sentenceMetrics.longSentences > 0 && (
                  <p className="mt-2 text-[12px] text-muted">
                    {result.sentenceMetrics.longSentences} long sentence{result.sentenceMetrics.longSentences !== 1 ? "s" : ""} ({result.sentenceMetrics.longSentencePercent}% of total)
                  </p>
                )}
              </div>

              {/* Paragraph density */}
              <div className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
                  Paragraph density
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[22px] font-bold text-foreground">
                    {result.paragraphMetrics.averageSentencesPerParagraph}
                  </span>
                  <span className="text-[13px] text-muted">sentences/paragraph avg</span>
                </div>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${paragraphDensityColor(result.paragraphMetrics.averageSentencesPerParagraph)}`}>
                  {paragraphDensityLabel(result.paragraphMetrics.averageSentencesPerParagraph)}
                </span>
                {result.paragraphMetrics.denseParagraphs > 0 && (
                  <p className="mt-2 text-[12px] text-muted">
                    {result.paragraphMetrics.denseParagraphs} dense paragraph{result.paragraphMetrics.denseParagraphs !== 1 ? "s" : ""} (6+ sentences)
                  </p>
                )}
              </div>
            </div>

            {/* Insights */}
            {result.insights.length > 0 && (
              <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-blue-600 mb-3">
                  Insights
                </p>
                <ul className="space-y-2">
                  {result.insights.map((ins, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-blue-800 leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {ins}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent-bg/20 p-5">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent mb-3">
                  Recommendations
                </p>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-foreground leading-[1.6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Related guides */}
      <section className="py-6">
        <div className="mx-auto max-w-[680px] px-6">
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light mb-3">
            Related SEO guides
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/seo-guide/content-seo/content-readability", label: "Content Readability for SEO" },
              { href: "/seo-guide/content-seo/blog-structure", label: "Blog Structure for SEO" },
              { href: "/seo-guide/on-page-seo/headings-seo", label: "Heading Tags Best Practices" },
              { href: "/seo-guide/content-seo/seo-introductions", label: "SEO-Friendly Introductions" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-black/[0.04] bg-white px-4 py-3 text-[13px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ToolCTA
        title="Want readability analysis across your entire site?"
        description="RankSEO checks readability, content structure, and engagement signals across every page on your site."
      />

      <ToolFAQ
        faqs={[
          {
            question: "What is readability in SEO?",
            answer:
              "Readability refers to how easy your content is to read and understand. In SEO, it affects user engagement metrics like time on page and bounce rate. Content that is easy to read keeps visitors engaged, which indirectly supports better rankings.",
          },
          {
            question: "Does readability directly affect rankings?",
            answer:
              "Readability is not a direct ranking factor in Google's algorithm. However, it strongly influences user engagement signals that do affect rankings. Readable content gets lower bounce rates, higher time on page, and fewer users returning to search results.",
          },
          {
            question: "What is a good readability score?",
            answer:
              "For web content, aim for short sentences (15 to 20 words average), short paragraphs (2 to 4 sentences), and clear headings. Most readers prefer content written at an 8th to 9th grade level, even on technical topics.",
          },
          {
            question: "How do I make content easier to read?",
            answer:
              "Use shorter sentences, break long paragraphs into smaller chunks, add headings every 200 to 300 words, use bullet points for lists, and avoid unnecessary jargon. Read your content out loud to catch awkward phrasing.",
          },
          {
            question: "Are short paragraphs better for SEO?",
            answer:
              "Short paragraphs (2 to 4 sentences) are better for web readability, which supports SEO indirectly. On screens, especially mobile, short paragraphs create visual breathing room and make content easier to scan.",
          },
        ]}
      />

      <GateModal open={showGateModal} onClose={() => setShowGateModal(false)} />
    </>
  );
}
