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

export default function HowToIncreaseOrganicTraffic() {
  return (
    <>
      <ArticleHero
        title="How to increase organic traffic without guessing what works"
        subtitle="Organic traffic does not grow randomly. It grows when you consistently focus on the right things."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why traffic doesn't grow */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-traffic-doesnt-grow" title="Why organic traffic does not grow">
        <Paragraph>
          Most sites do not have a traffic problem. They have a strategy
          problem. Content goes up without a plan, nothing gets optimized, and
          no one checks what is working.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>No keyword strategy.</strong> Publishing content without
              knowing what people search for is hoping, not marketing. You need
              to target queries people actually type.
            </span>,
            <span key="2">
              <strong>Inconsistent publishing.</strong> One article per month
              with long gaps in between does not build momentum. Google rewards
              sites that consistently add relevant content.
            </span>,
            <span key="3">
              <strong>No optimization.</strong> Content gets published and
              forgotten. Pages that could rank with small improvements sit
              untouched on page 2 indefinitely.
            </span>,
            <span key="4">
              <strong>No tracking.</strong> If you do not know which pages are
              growing and which are declining, you cannot make informed
              decisions about where to invest your time.
            </span>,
          ]}
        />
        <Callout>
          Traffic growth is not about working harder. It is about working on
          the right things in the right order.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What drives traffic */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-drives-traffic" title="What actually drives organic traffic">
        <Paragraph>
          Organic traffic comes from ranking for keywords people search for.
          Every page that ranks is a door. The more doors you open — and the
          better positioned they are — the more traffic flows in.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Targeting the right keywords.</strong> Not just
              high-volume keywords, but ones you can{" "}
              <a
                href="/seo-guide/keyword-research/how-to-find-easy-keywords"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                realistically rank for
              </a>
              . One page ranking #3 for a keyword with 500 monthly searches
              brings more traffic than ten pages stuck on page 5.
            </span>,
            <span key="2">
              <strong>Creating useful content.</strong> Content that answers
              the searcher&apos;s question completely, in the right format,
              with clear structure. Not just words on a page — useful pages
              that people stay on.
            </span>,
            <span key="3">
              <strong>Optimizing what exists.</strong> Your biggest
              opportunities are often pages you have already published. A few
              targeted{" "}
              <a
                href="/seo-guide/content-seo/content-optimization"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                improvements
              </a>{" "}
              can move a page from page 2 to the top 5.
            </span>,
            <span key="4">
              <strong>Improving over time.</strong> SEO compounds. Each page
              you optimize, each internal link you add, each new article you
              publish strengthens your entire site.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Growth framework — Visual 1 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="growth-framework" title="A simple growth framework">
        <Paragraph>
          This is the system. Not a trick or a hack — a repeatable process
          that compounds over time.
        </Paragraph>

        {/* Growth loop visual */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light mb-4">
              SEO growth loop
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:items-center">
              {[
                {
                  step: "Find",
                  desc: "Keyword opportunities",
                  color: "bg-blue-50 text-blue-600 border-blue-100",
                },
                {
                  step: "Create",
                  desc: "Useful content",
                  color: "bg-violet-50 text-violet-600 border-violet-100",
                },
                {
                  step: "Optimize",
                  desc: "Structure & keywords",
                  color: "bg-amber-50 text-amber-600 border-amber-100",
                },
                {
                  step: "Track",
                  desc: "Performance data",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                },
                {
                  step: "Improve",
                  desc: "Based on results",
                  color: "bg-accent-bg text-accent border-accent-muted",
                },
              ].map((item, i) => (
                <div key={item.step} className="flex flex-1 items-center">
                  <div
                    className={`flex-1 rounded-xl border px-3 py-3 text-center ${item.color}`}
                  >
                    <p className="text-[14px] font-bold">{item.step}</p>
                    <p className="mt-0.5 text-[11px] opacity-70">
                      {item.desc}
                    </p>
                  </div>
                  {i < 4 && (
                    <div className="hidden sm:flex shrink-0 px-1">
                      <Icon icon={Icons.chevronRight} size="sm" className="text-black/15" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <div className="rounded-full bg-accent-bg/50 border border-accent-muted/30 px-4 py-1.5">
                <p className="text-[11px] font-semibold text-accent">
                  ↻ Repeat — this compounds
                </p>
              </div>
            </div>
          </div>
        </div>

        <Paragraph>
          The key insight: this is a loop, not a checklist. You do not finish
          step 5 and stop. You go back to step 1 with better data, better
          instincts, and a stronger site.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Quick wins */}
      {/* ------------------------------------------------------------------ */}
      <Section id="quick-wins" title="Quick wins for faster growth">
        <Paragraph>
          While the growth loop is your long-term system, these actions can
          deliver results in weeks, not months.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Update your best existing content",
              text: "Find pages ranking on positions 5–15. These are close to the top. Small improvements — better headings, updated info, added sections — can push them up.",
            },
            {
              title: "Improve title tags and meta descriptions",
              text: "A better title increases click-through rate from search results. More clicks from the same position means more traffic without ranking higher.",
            },
            {
              title: "Fix internal linking",
              text: "Find pages with no internal links pointing to them. Add relevant links from related content. This helps Google discover and prioritize your pages.",
            },
            {
              title: "Target easier keywords first",
              text: "Instead of fighting for \"email marketing\", target \"email marketing for freelancers\". Lower competition, more realistic rankings, real traffic.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Traffic growth visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example" title="Example: what growth looks like">
        <Paragraph>
          Here is a realistic example of how consistent SEO effort compounds
          over six months.
        </Paragraph>

        {/* Traffic growth graph visual */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[13px] font-semibold text-foreground">
                Organic traffic growth
              </p>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">
                +340% in 6 months
              </span>
            </div>

            {/* Simplified bar chart */}
            <div className="flex items-end gap-2 h-[140px]">
              {[
                { month: "M1", height: "15%", label: "200", note: null },
                { month: "M2", height: "20%", label: "280", note: "First articles published" },
                { month: "M3", height: "30%", label: "420", note: null },
                { month: "M4", height: "45%", label: "640", note: "Optimized existing pages" },
                { month: "M5", height: "65%", label: "900", note: null },
                { month: "M6", height: "100%", label: "880", note: "Compounding effect" },
              ].map((bar) => (
                <div key={bar.month} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-medium text-muted">
                    {bar.label}
                  </span>
                  <div
                    className="w-full rounded-t-lg bg-accent/20 transition-all duration-500 relative group"
                    style={{ height: bar.height }}
                  >
                    <div className="absolute inset-x-0 bottom-0 rounded-t-lg bg-accent/40" style={{ height: '60%' }} />
                    {bar.note && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-0.5 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {bar.note}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-muted">{bar.month}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { action: "Published 12 articles", month: "M1–M3" },
                { action: "Optimized 8 existing pages", month: "M3–M4" },
                { action: "Added 30+ internal links", month: "M4–M6" },
              ].map((item) => (
                <div
                  key={item.action}
                  className="rounded-lg bg-border-light/20 border border-black/[0.03] px-3 py-2 text-center"
                >
                  <p className="text-[11px] font-medium text-foreground">
                    {item.action}
                  </p>
                  <p className="text-[10px] text-muted">{item.month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Paragraph>
          Notice the pattern: growth is slow at first, then accelerates. This
          is because SEO compounds. Each article, each optimization, each link
          makes the next one more effective.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Expecting fast results.</strong> SEO takes time. Most
              pages need 2–6 months to reach their ranking potential. If you
              quit after 4 weeks, you never see the payoff.
            </span>,
            <span key="2">
              <strong>Publishing without strategy.</strong> Random articles on
              random topics do not build authority. Focus on a few core topics
              and go deep.
            </span>,
            <span key="3">
              <strong>Ignoring data.</strong> Google Search Console and{" "}
              <a
                href="/seo-guide/seo-analytics"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                analytics
              </a>{" "}
              tell you exactly what is working. Publishing without checking
              data is driving with your eyes closed.
            </span>,
            <span key="4">
              <strong>Chasing only high-volume keywords.</strong> Big keywords
              are competitive. A mix of lower-volume, lower-competition
              keywords often drives more total traffic than one high-volume
              keyword you cannot rank for.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps you grow traffic">
        <Paragraph>
          Following this framework manually works — but RankSEO makes each
          step faster and more data-driven.
        </Paragraph>
        <BulletList
          items={[
            "Finds keyword opportunities matched to your site's current authority",
            <span key="generates-content"><a href="/features" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">Generates SEO-optimized content</a> ready to publish</span>,
            "Suggests optimizations for existing pages based on competitor analysis",
            "Tracks performance so you know what is working and what to improve next",
          ]}
        />
        <Paragraph>
          The growth loop works with or without tools. But with RankSEO, you
          move through each step faster and with more confidence. For a
          complete starting point, see the{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            full SEO guide
          </a>{" "}
          and learn how to{" "}
          <a
            href="/seo-guide/content-seo/how-to-write-seo-articles"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            write articles that rank
          </a>
          . For broader content strategy, explore the{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content SEO guide
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
            question: "How long does it take to grow organic traffic?",
            answer: (
              <p>
                Most pages need 2 to 6 months to reach their ranking potential. New sites typically see meaningful traffic growth after 3 to 6 months of consistent publishing and optimization. SEO compounds over time, so the longer you invest, the faster growth accelerates.
              </p>
            ),
            answerText:
              "Most pages need 2 to 6 months to reach their ranking potential. New sites typically see meaningful traffic growth after 3 to 6 months of consistent publishing and optimization. SEO compounds over time, so the longer you invest, the faster growth accelerates.",
          },
          {
            question: "What is the best way to increase organic traffic for a new website?",
            answer: (
              <p>
                Start by targeting low-competition, long-tail keywords that your site can realistically rank for. Focus on creating useful content that matches search intent, and build a strong internal linking structure. Learn how to{" "}
                <a
                  href="/seo-guide/keyword-research/how-to-find-easy-keywords"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  find easy keywords
                </a>{" "}
                to get started with realistic targets.
              </p>
            ),
            answerText:
              "Start by targeting low-competition, long-tail keywords that your site can realistically rank for. Focus on creating useful content that matches search intent, and build a strong internal linking structure.",
          },
          {
            question: "What is the difference between organic traffic and paid traffic?",
            answer: (
              <p>
                Organic traffic comes from unpaid search results and grows over time as your content ranks higher. Paid traffic comes from ads and stops the moment you stop paying. Organic traffic compounds and becomes more cost-effective over time, while paid traffic provides immediate but temporary results.
              </p>
            ),
            answerText:
              "Organic traffic comes from unpaid search results and grows over time as your content ranks higher. Paid traffic comes from ads and stops the moment you stop paying. Organic traffic compounds and becomes more cost-effective over time, while paid traffic provides immediate but temporary results.",
          },
          {
            question: "How often should I publish content for SEO?",
            answer: (
              <p>
                Consistency matters more than frequency. Publishing 2 to 4 well-researched, optimized articles per month is better than publishing daily low-quality content. Each article should target a specific keyword and be{" "}
                <a
                  href="/seo-guide/content-seo/content-optimization"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  properly optimized
                </a>{" "}
                before moving on to the next one.
              </p>
            ),
            answerText:
              "Consistency matters more than frequency. Publishing 2 to 4 well-researched, optimized articles per month is better than publishing daily low-quality content. Each article should target a specific keyword and be properly optimized before moving on to the next one.",
          },
          {
            question: "Why did my organic traffic suddenly drop?",
            answer: (
              <p>
                Traffic drops usually happen because of Google algorithm updates, increased competition for your keywords, technical issues like broken pages or slow load times, or content becoming outdated. Check Google Search Console for indexing errors, review your top pages for ranking changes, and compare your content against competitors who may have published better alternatives.
              </p>
            ),
            answerText:
              "Traffic drops usually happen because of Google algorithm updates, increased competition for your keywords, technical issues like broken pages or slow load times, or content becoming outdated. Check Google Search Console for indexing errors, review your top pages for ranking changes, and compare your content against competitors who may have published better alternatives.",
          },
          {
            question: "What does compound growth mean in SEO?",
            answer: (
              <p>
                Compound growth in SEO means that each piece of content, each optimization, and each internal link makes your entire site stronger. A new article benefits from the authority your existing content has built. Over time, the same effort produces increasingly better results because your site has more pages ranking, more internal links distributing authority, and stronger topical relevance.
              </p>
            ),
            answerText:
              "Compound growth in SEO means that each piece of content, each optimization, and each internal link makes your entire site stronger. A new article benefits from the authority your existing content has built. Over time, the same effort produces increasingly better results because your site has more pages ranking, more internal links distributing authority, and stronger topical relevance.",
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
                Start growing your organic traffic the right way
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and build a consistent SEO growth system.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-xl bg-white px-7 text-[14px] font-semibold text-foreground shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book a quick call
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
