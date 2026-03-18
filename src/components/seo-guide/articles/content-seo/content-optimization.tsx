"use client";
import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";
import { Icon, Icons } from "@/components/ui/Icon";

export default function ContentOptimization() {
  return (
    <>
      <ArticleHero
        title="How to improve your content without rewriting everything"
        subtitle="Most SEO gains come from improving existing content, not constantly creating new pages."
        readingTime={8}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why content needs optimization */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-optimize" title="Why content needs optimization">
        <Paragraph>
          Publishing content is not the finish line. Rankings shift.
          Competitors publish better pages. Information becomes outdated. What
          ranked six months ago might be slipping now.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Rankings change constantly.</strong> Google re-evaluates
              pages as new content appears. A page that ranked #3 can drop to
              page two if competitors improve theirs.
            </span>,
            <span key="2">
              <strong>Competitors improve.</strong> Someone will eventually
              write a more thorough, better-structured version of your content.
              If you do not update, they overtake you.
            </span>,
            <span key="3">
              <strong>Content gets stale.</strong> Outdated stats, broken
              links, old screenshots — these erode trust with both readers and
              Google.
            </span>,
          ]}
        />
        <Paragraph>
          The good news: you do not need to start over. Most pages can be
          significantly improved with targeted updates that take a fraction of
          the time it took to write the original.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What optimization means */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-optimization-means" title="What content optimization actually means">
        <Paragraph>
          Content optimization is making your existing pages better — more
          relevant, more complete, and easier to read — so they perform better
          in search.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Improving structure.</strong> Better headings, clearer
              sections, logical flow. Structure helps both readers and Google
              understand your content.
            </span>,
            <span key="2">
              <strong>Updating information.</strong> Replace outdated stats,
              add new developments, remove references that no longer apply.
              Fresh content signals relevance.
            </span>,
            <span key="3">
              <strong>Enhancing readability.</strong> Break up long paragraphs.
              Simplify complex sentences. Add visual breaks like lists and
              callouts.
            </span>,
            <span key="4">
              <strong>Strengthening keyword coverage.</strong> Add related
              terms you missed. Cover subtopics that top competitors address
              but you do not. Fill the gaps without stuffing.
            </span>,
          ]}
        />
        <Callout>
          Optimization is not about adding more words. It is about making
          every word count and closing the gaps between your content and what
          the searcher actually needs.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Quick wins */}
      {/* ------------------------------------------------------------------ */}
      <Section id="quick-wins" title="Quick wins that make an immediate difference">
        <Paragraph>
          These are high-impact changes you can make in 30 minutes or less per
          page. Start here before doing a full rewrite.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Improve your title tag",
              text: "Make it specific, compelling, and include your primary keyword. A better title improves click-through rate from search results — which directly impacts rankings.",
            },
            {
              title: "Rewrite your meta description",
              text: "Write a clear, benefit-focused description that tells the searcher exactly what they will get. This does not directly affect rankings but improves clicks.",
            },
            {
              title: "Fix your headings",
              text: "Make sure H2s are descriptive, not vague. Replace generic headings like \"Overview\" with specific ones like \"Why page speed affects rankings.\"",
            },
            {
              title: "Add missing sections",
              text: "Check what top competitors cover that you do not. Add sections that fill those gaps — this is often the biggest single improvement you can make.",
            },
            {
              title: "Update internal links",
              text: "Link to newer, relevant content on your site. Remove links to pages that no longer exist. Strong internal linking builds topical authority.",
            },
            {
              title: "Refresh outdated information",
              text: "Update old statistics, fix broken external links, and replace references to tools or features that have changed.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Step-by-step process */}
      {/* ------------------------------------------------------------------ */}
      <Section id="optimization-process" title="How to optimize step by step">
        <Paragraph>
          Here is a structured workflow for optimizing any existing page.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Review current performance",
              text: "Check Google Search Console for the page's impressions, clicks, CTR, and average position. Identify which keywords it ranks for and where it is losing ground.",
            },
            {
              title: "Identify weak areas",
              text: "Compare your page against the top 3 results. What do they cover that you do not? Is their structure clearer? Do they match intent better?",
            },
            {
              title: "Update the content",
              text: "Add missing sections, update outdated information, improve examples. Focus on depth where it matters — not just adding more words.",
            },
            {
              title: "Improve the structure",
              text: "Reorganize sections for better flow. Add descriptive headings. Break up long paragraphs. Add lists, callouts, or visual breaks where they help.",
            },
            {
              title: "Republish and monitor",
              text: "Update the publish date if the changes are substantial. Monitor rankings over the next 2–4 weeks to see the impact. Iterate if needed.",
            },
          ]}
        />
        <Callout type="info">
          For help identifying which pages need attention, see the{" "}
          <a
            href="/seo-guide/seo-analytics"
            className="underline underline-offset-2"
          >
            SEO analytics guide
          </a>{" "}
          — it covers how to read performance data and spot declining pages.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Before / After visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example" title="Example: before and after optimization">
        <Paragraph>
          Here is what a typical optimization looks like in practice.
        </Paragraph>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-100/60 bg-red-50/20 p-5">
            <span className="inline-block rounded-lg bg-red-50 px-2.5 py-1 text-[12px] font-bold text-red-600">
              Before optimization
            </span>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-white/60 border border-red-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-red-500">Title tag</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  &ldquo;Email Marketing — Everything You Need to Know&rdquo;
                </p>
              </div>
              <div className="rounded-lg bg-white/60 border border-red-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-red-500">Headings</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  Introduction / Overview / Tips / Conclusion
                </p>
              </div>
              <div className="rounded-lg bg-white/60 border border-red-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-red-500">Content</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  1,200 words. No lists. Long paragraphs. Stats from 2023.
                </p>
              </div>
              <div className="rounded-lg bg-white/60 border border-red-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-red-500">Internal links</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  2 links, one broken
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[11px] text-muted">Position:</span>
                <span className="rounded bg-red-50 px-2 py-0.5 text-[12px] font-bold text-red-600">
                  #14 (page 2)
                </span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/20 p-5">
            <span className="inline-block rounded-lg bg-emerald-50 px-2.5 py-1 text-[12px] font-bold text-emerald-600">
              After optimization
            </span>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-emerald-600">Title tag</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  &ldquo;Email Marketing Guide: 7 Strategies That Work in 2026&rdquo;
                </p>
              </div>
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-emerald-600">Headings</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  Why email marketing works / 7 strategies / Tools to use /
                  Common mistakes
                </p>
              </div>
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-emerald-600">Content</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  2,100 words. Lists and callouts. Short paragraphs. 2026
                  stats.
                </p>
              </div>
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <p className="text-[11px] font-medium text-emerald-600">Internal links</p>
                <p className="mt-0.5 text-[12px] text-muted">
                  6 relevant links, all working
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[11px] text-muted">Position:</span>
                <span className="rounded bg-emerald-50 px-2 py-0.5 text-[12px] font-bold text-emerald-600">
                  #4 (page 1)
                </span>
              </div>
            </div>
          </div>
        </div>

        <Paragraph>
          No full rewrite. The core content stayed the same. The improvements
          were structural: better title, specific headings, updated stats,
          more internal links, and better formatting. The result: a jump from
          page 2 to position 4.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Optimization checklist visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Content optimization checklist">
        <Paragraph>
          Use this checklist every time you optimize a page. It covers the
          areas that have the biggest impact on rankings.
        </Paragraph>

        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <p className="text-[13px] font-semibold text-foreground mb-4">
              Optimization checklist
            </p>
            <div className="space-y-2">
              {[
                {
                  category: "Structure",
                  items: [
                    "Title tag is specific and includes primary keyword",
                    "Meta description is compelling and accurate",
                    "H2 headings are descriptive (not generic)",
                    "Logical section flow from intro to conclusion",
                  ],
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  category: "Content",
                  items: [
                    "All information is current and accurate",
                    "Missing subtopics are covered",
                    "Examples and data are up to date",
                    "No thin or filler sections",
                  ],
                  color: "text-violet-600 bg-violet-50 border-violet-100",
                },
                {
                  category: "Readability",
                  items: [
                    "Paragraphs are 2–3 sentences max",
                    "Lists and callouts break up text",
                    "Language is clear and simple",
                    "Content is scannable via headings",
                  ],
                  color: "text-amber-600 bg-amber-50 border-amber-100",
                },
                {
                  category: "Links & Keywords",
                  items: [
                    "Internal links point to relevant pages",
                    "No broken links (internal or external)",
                    "Primary keyword appears naturally",
                    "Related terms are used throughout",
                  ],
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
              ].map((group) => (
                <div key={group.category}>
                  <span
                    className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-bold ${group.color}`}
                  >
                    {group.category}
                  </span>
                  <div className="mt-2 space-y-1.5 mb-4">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-lg border border-black/[0.03] bg-border-light/10 px-3 py-2"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-black/10 bg-white">
                          <Icon icon={Icons.check} size="sm" strokeWidth={3} className="text-accent opacity-0 group-hover:opacity-100" />
                        </span>
                        <span className="text-[13px] text-muted">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common optimization mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Rewriting everything.</strong> If a page ranks on page 2,
              it does not need a full rewrite. It needs targeted improvements.
              Rewriting can actually lose the signals Google already
              associates with the page.
            </span>,
            <span key="2">
              <strong>Over-optimizing keywords.</strong> Adding your keyword to
              every heading and every paragraph makes content feel forced.
              Google is smart enough to understand synonyms and related terms.
              Write naturally.
            </span>,
            <span key="3">
              <strong>Ignoring user experience.</strong> Optimization is not
              just about keywords and structure. If your page loads slowly, has
              intrusive popups, or is hard to read on mobile, none of the
              content improvements will matter. See the{" "}
              <a
                href="/seo-guide/content-seo"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                content SEO guide
              </a>{" "}
              for more.
            </span>,
            <span key="4">
              <strong>Optimizing the wrong pages.</strong> Focus on pages that
              are close to ranking well — positions 5–20. These have the
              highest potential ROI. A page at position 50 might need a
              different strategy entirely.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps with optimization">
        <Paragraph>
          Going through this process manually works for a few pages. But when
          you have dozens of articles that need attention, you need a faster
          way to identify what to fix and how.
        </Paragraph>
        <BulletList
          items={[
            <span key="scores-seo"><a href="/features" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">Scores each page&apos;s SEO strength</a> and highlights specific weaknesses</span>,
            "Suggests missing sections based on what top competitors cover",
            "Identifies keyword gaps — related terms you should be using but are not",
            "Tracks improvements over time so you can see what is working",
          ]}
        />
        <Paragraph>
          Optimization is where the biggest SEO gains hide. You already have
          the content — RankSEO helps you make it perform. For writing new
          content from scratch, see the{" "}
          <a
            href="/seo-guide/content-seo/how-to-write-seo-articles"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO article writing guide
          </a>
          . For the full picture, start with the{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            complete SEO guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "How often should I update my content?",
            answer: (
              <p>
                Review your top-performing pages every 3–6 months and update any that show declining rankings or outdated information. Pages in competitive niches may need quarterly updates, while evergreen content might only need a yearly refresh.
              </p>
            ),
            answerText: "Review your top-performing pages every 3–6 months and update any that show declining rankings or outdated information. Pages in competitive niches may need quarterly updates, while evergreen content might only need a yearly refresh.",
          },
          {
            question: "Which content should I optimize first?",
            answer: (
              <p>
                Start with pages ranking in positions 5–20. These are close to page 1 and have the highest potential return on investment. Small improvements can push them into top positions. Pages stuck beyond position 30 may need a{" "}
                <a href="/seo-guide/content-seo/why-your-content-is-not-ranking" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">different strategy</a>.
              </p>
            ),
            answerText: "Start with pages ranking in positions 5–20. These are close to page 1 and have the highest potential return on investment. Small improvements can push them into top positions. Pages stuck beyond position 30 may need a different strategy.",
          },
          {
            question: "Does content length matter for SEO?",
            answer: (
              <p>
                Length itself is not a ranking factor. What matters is completeness — covering the topic thoroughly enough that the reader does not need to search again. Sometimes that takes 800 words, sometimes 2,500. Match the depth to the query, not an arbitrary word count.
              </p>
            ),
            answerText: "Length itself is not a ranking factor. What matters is completeness — covering the topic thoroughly enough that the reader does not need to search again. Sometimes that takes 800 words, sometimes 2,500. Match the depth to the query, not an arbitrary word count.",
          },
          {
            question: "How do I know if my content needs updating?",
            answer: (
              <p>
                Check Google Search Console for declining impressions, clicks, or average position. Also look for outdated statistics, broken links, or missing sections that competitors now cover. If the page has slipped from its peak position, optimization is likely needed.
              </p>
            ),
            answerText: "Check Google Search Console for declining impressions, clicks, or average position. Also look for outdated statistics, broken links, or missing sections that competitors now cover. If the page has slipped from its peak position, optimization is likely needed.",
          },
          {
            question: "What is the difference between optimizing and rewriting?",
            answer: (
              <p>
                Optimization means improving what exists — better headings, updated info, added sections, stronger{" "}
                <a href="/seo-guide/on-page-seo/title-tags" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">title tags</a>. Rewriting means replacing the content entirely. Optimization is almost always the better first step because it preserves existing ranking signals.
              </p>
            ),
            answerText: "Optimization means improving what exists — better headings, updated info, added sections, stronger title tags. Rewriting means replacing the content entirely. Optimization is almost always the better first step because it preserves existing ranking signals.",
          },
          {
            question: "How long does it take for optimization to impact rankings?",
            answer: (
              <p>
                Most content optimizations take 2–4 weeks to show results in rankings, though some changes — like improving title tags for better CTR — can impact traffic within days. Monitor your pages in Google Search Console after making changes.
              </p>
            ),
            answerText: "Most content optimizations take 2–4 weeks to show results in rankings, though some changes — like improving title tags for better CTR — can impact traffic within days. Monitor your pages in Google Search Console after making changes.",
          },
        ]}
      />

      {/* ------------------------------------------------------------------ */}
      {/* CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />
            <div className="relative">
              <h2 className="mx-auto max-w-[440px] text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[1.875rem]">
                Improve rankings without starting from scratch
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and optimize your content with clear,
                actionable suggestions.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-xl bg-white px-7 text-[14px] font-semibold text-foreground shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start $1 Trial
                </a>
                <a
                  href="/features"
                  className="inline-flex h-11 items-center rounded-xl border border-white/15 px-5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  See Features
                </a>
              </div>
              <p className="mt-4 text-[12px] text-white/40">
                Full access during trial. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
