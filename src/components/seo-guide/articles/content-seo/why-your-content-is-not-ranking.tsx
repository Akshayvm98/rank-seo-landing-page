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

export default function WhyYourContentIsNotRanking() {
  return (
    <>
      <ArticleHero
        title="Why your content is not ranking (even if it's good)"
        subtitle="You can spend hours writing content and still see no results. Most of the time, the issue is not effort — it is strategy."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* The real problem */}
      {/* ------------------------------------------------------------------ */}
      <Section id="the-real-problem" title="The real problem">
        <Paragraph>
          You wrote a solid article. You researched the topic. You hit
          publish. And nothing happened. No traffic, no rankings, no clicks.
        </Paragraph>
        <Paragraph>
          This is frustrating — but it is also common. And the reason is
          almost never that your writing is bad. The issue is usually
          strategic: the wrong keyword, the wrong format, or missing
          fundamentals that Google needs to rank your page.
        </Paragraph>
        <Paragraph>
          SEO is not just writing. It is writing the right thing, in the right
          way, for the right query. When one of those pieces is off, even
          excellent content gets buried.
        </Paragraph>
        <Callout>
          Before you blame your writing, check your strategy. Most ranking
          problems are structural, not creative. The{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers the full process from research to ranking.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Most common reasons — Visual 1 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-reasons" title="The most common reasons content does not rank">
        <Paragraph>
          Here are the five issues that cause most content to underperform.
          Usually, it is a combination of two or three — not just one.
        </Paragraph>

        {/* Problem breakdown cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              problem: "Wrong keyword choice",
              desc: "You targeted a keyword that is too competitive, has no search volume, or does not match your site's authority level.",
              fix: "Find keywords you can realistically rank for",
              link: "/seo-guide/keyword-research/how-to-find-easy-keywords",
              color: "border-red-100/60 bg-red-50/20",
              icon: "text-red-500",
            },
            {
              problem: "Search intent mismatch",
              desc: "Your content format does not match what Google shows for that query. A guide when users want a listicle. A definition when they want a comparison.",
              fix: "Understand and match search intent",
              link: "/seo-guide/keyword-research/search-intent",
              color: "border-amber-100/60 bg-amber-50/20",
              icon: "text-amber-500",
            },
            {
              problem: "Weak content structure",
              desc: "No clear headings. Long, unbroken paragraphs. Missing sections that competitors cover. Google cannot understand what your page is about.",
              fix: "Improve structure and depth",
              link: "/seo-guide/content-seo/content-optimization",
              color: "border-blue-100/60 bg-blue-50/20",
              icon: "text-blue-500",
            },
            {
              problem: "Missing internal links",
              desc: "Your page is isolated. No other pages on your site link to it, so Google does not see it as important or connected to your broader content.",
              fix: "Build internal link structure",
              link: "/seo-guide/content-seo/content-optimization",
              color: "border-violet-100/60 bg-violet-50/20",
              icon: "text-violet-500",
            },
          ].map((item) => (
            <div
              key={item.problem}
              className={`rounded-2xl border p-5 ${item.color} transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]`}
            >
              <p className={`text-[13px] font-bold ${item.icon}`}>
                {item.problem}
              </p>
              <p className="mt-2 text-[13px] leading-[1.65] text-muted">
                {item.desc}
              </p>
              <a
                href={item.link}
                className="mt-3 inline-block text-[12px] font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                {item.fix} →
              </a>
            </div>
          ))}
        </div>

        <Paragraph>
          A fifth factor — <strong>low domain authority</strong> — matters
          too. If your site is new and you are targeting keywords dominated by
          established sites, you need to build authority gradually. Start with
          easier keywords and work your way up.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to diagnose */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-diagnose" title="How to diagnose your problem">
        <Paragraph>
          Before you fix anything, figure out what is actually wrong. Here is
          a quick diagnostic process:
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Check your keyword difficulty",
              text: "Is the keyword too competitive for your site? If every result is from a high-authority domain and your site is new, the keyword might be out of reach right now.",
            },
            {
              title: "Analyze the search results",
              text: "Search your keyword in Google. Do the top results look like your content? Same format, same depth, same angle? If not, you have an intent mismatch.",
            },
            {
              title: "Compare your content structure",
              text: "Open the top 3 results and compare their headings to yours. Are they covering sections you are missing? Is their structure clearer?",
            },
            {
              title: "Review your internal links",
              text: "How many pages on your site link to this article? If the answer is zero or one, the page is isolated. Google sees it as less important.",
            },
            {
              title: "Check content depth",
              text: "Is your content thorough enough? Not longer for the sake of length — but does it answer the question completely, including follow-up questions?",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to fix it — Visual 2 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-fix" title="How to fix it">
        <Paragraph>
          Once you know what is wrong, here is the workflow to fix it.
        </Paragraph>

        {/* Fix workflow visual */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
              {[
                {
                  step: "1",
                  label: "Diagnose",
                  desc: "Find the root cause",
                  color: "bg-red-50 text-red-600 border-red-100",
                },
                {
                  step: "2",
                  label: "Improve",
                  desc: "Fix structure and gaps",
                  color: "bg-amber-50 text-amber-600 border-amber-100",
                },
                {
                  step: "3",
                  label: "Optimize",
                  desc: "Refine keywords and links",
                  color: "bg-blue-50 text-blue-600 border-blue-100",
                },
                {
                  step: "4",
                  label: "Track",
                  desc: "Monitor and iterate",
                  color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                },
              ].map((item, i) => (
                <div key={item.step} className="flex flex-1 items-center">
                  <div
                    className={`flex-1 rounded-xl border px-4 py-3 text-center ${item.color}`}
                  >
                    <p className="text-[18px] font-bold">{item.step}</p>
                    <p className="text-[13px] font-semibold">{item.label}</p>
                    <p className="mt-0.5 text-[11px] opacity-70">
                      {item.desc}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden sm:flex shrink-0 px-1.5">
                      <Icon icon={Icons.chevronRight} size="sm" className="text-black/15" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Paragraph>
          Here is what each step looks like in practice:
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Choose better keywords.</strong> If the keyword is too
              hard, find a{" "}
              <a
                href="/seo-guide/keyword-research/how-to-find-easy-keywords"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                lower-competition alternative
              </a>{" "}
              that still reaches your audience.
            </span>,
            <span key="2">
              <strong>Align with intent.</strong> Reformat your content to
              match what Google is already showing. If the SERP is all
              listicles, rewrite as a listicle.
            </span>,
            <span key="3">
              <strong>Improve structure.</strong> Add clear headings. Break up
              walls of text. Cover the subtopics that top competitors address.
            </span>,
            <span key="4">
              <strong>Optimize content.</strong> Update outdated information.
              Add related keywords naturally. Improve your title and meta
              description.
            </span>,
            <span key="5">
              <strong>Add internal links.</strong> Link to this page from other
              relevant pages on your site. Link from this page to related
              content. Build connections.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Example */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example" title="Example: diagnosing a non-ranking page">
        <Paragraph>
          Let&apos;s say you wrote a 2,000-word article on &ldquo;email
          marketing strategies&rdquo; and it is stuck on page 3.
        </Paragraph>

        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="space-y-3">
              {[
                {
                  check: "Keyword difficulty",
                  finding: "KD 74 — dominated by HubSpot, Mailchimp, Forbes",
                  status: "Problem",
                  statusColor: "text-red-600 bg-red-50",
                },
                {
                  check: "Search intent",
                  finding:
                    "SERP shows listicles with 10+ strategies. Your article is a narrative guide.",
                  status: "Mismatch",
                  statusColor: "text-amber-600 bg-amber-50",
                },
                {
                  check: "Content structure",
                  finding:
                    "5 headings. Competitors have 12–15 with clearer sub-sections.",
                  status: "Weak",
                  statusColor: "text-amber-600 bg-amber-50",
                },
                {
                  check: "Internal links",
                  finding: "1 internal link pointing to this page",
                  status: "Isolated",
                  statusColor: "text-red-600 bg-red-50",
                },
              ].map((row) => (
                <div
                  key={row.check}
                  className="flex items-center justify-between rounded-xl border border-black/[0.04] bg-border-light/15 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium text-foreground">
                      {row.check}
                    </p>
                    <p className="mt-0.5 text-[12px] text-muted">
                      {row.finding}
                    </p>
                  </div>
                  <span
                    className={`ml-3 shrink-0 rounded-md px-2 py-0.5 text-[11px] font-bold ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-accent-bg/30 border border-accent-muted/20 px-4 py-3">
              <p className="text-[12px] font-semibold text-accent">
                Recommended action
              </p>
              <p className="mt-0.5 text-[12px] text-muted">
                Retarget to a less competitive long-tail keyword like
                &ldquo;email marketing strategies for small businesses&rdquo;.
                Restructure as a numbered listicle. Add 5+ internal links from
                related content.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Publishing and forgetting.</strong> Content is not a
              &ldquo;set it and forget it&rdquo; asset. Pages need updates,
              optimization, and promotion over time.
            </span>,
            <span key="2">
              <strong>Chasing high-competition keywords.</strong> If every
              result is from a site with 10x your authority, you are in the
              wrong fight. Start with keywords you can win.
            </span>,
            <span key="3">
              <strong>Ignoring the data.</strong> Google Search Console tells
              you exactly which queries bring impressions but not clicks, which
              pages are declining, and where you are close to page 1. Use it.
              See the{" "}
              <a
                href="/seo-guide/seo-analytics"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                SEO analytics guide
              </a>{" "}
              for more.
            </span>,
            <span key="4">
              <strong>Blaming the algorithm.</strong> Most ranking problems are
              fixable. Before assuming Google is broken, check the five areas
              listed above. The answer is almost always there.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps">
        <Paragraph>
          Diagnosing ranking problems manually takes time — especially when
          you have multiple pages that are not performing. RankSEO speeds up
          the process.
        </Paragraph>
        <BulletList
          items={[
            "Identifies which pages are underperforming and why",
            "Finds lower-competition keyword alternatives for pages stuck on hard keywords",
            <span key="analyzes-content"><a href="/features" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">Analyzes your content</a> against top-ranking competitors</span>,
            "Suggests specific improvements: structure, keywords, internal links",
          ]}
        />
        <Paragraph>
          The goal is not to guess what is wrong — it is to see it clearly and
          fix it systematically. For a deeper dive into improving existing
          content, see the{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>
          . For more on building a content strategy, explore the{" "}
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
            question: "How long does it take for new content to start ranking?",
            answer: (
              <p>
                New content typically takes 2 to 6 months to reach its ranking potential. Pages targeting low-competition keywords can rank faster, sometimes within weeks. High-competition keywords may take 6 to 12 months or longer, especially for newer sites with less domain authority.
              </p>
            ),
            answerText:
              "New content typically takes 2 to 6 months to reach its ranking potential. Pages targeting low-competition keywords can rank faster, sometimes within weeks. High-competition keywords may take 6 to 12 months or longer, especially for newer sites with less domain authority.",
          },
          {
            question: "Why does my content not rank even though it is well written?",
            answer: (
              <p>
                Good writing is necessary but not sufficient for ranking. Common reasons include targeting keywords that are too competitive, not matching the search intent Google expects, weak content structure, or missing{" "}
                <a
                  href="/seo-guide/on-page-seo/internal-linking"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  internal links
                </a>{" "}
                that help Google discover and prioritize your page. Ranking requires both quality content and sound SEO strategy.
              </p>
            ),
            answerText:
              "Good writing is necessary but not sufficient for ranking. Common reasons include targeting keywords that are too competitive, not matching the search intent Google expects, weak content structure, or missing internal links that help Google discover and prioritize your page. Ranking requires both quality content and sound SEO strategy.",
          },
          {
            question: "How important are backlinks for ranking content?",
            answer: (
              <p>
                Backlinks remain one of the strongest ranking signals. They tell Google that other websites trust your content. However, their importance varies by keyword competition. For low-competition keywords, strong content and good on-page SEO may be enough. For competitive terms, backlinks are usually essential to reach page 1.
              </p>
            ),
            answerText:
              "Backlinks remain one of the strongest ranking signals. They tell Google that other websites trust your content. However, their importance varies by keyword competition. For low-competition keywords, strong content and good on-page SEO may be enough. For competitive terms, backlinks are usually essential to reach page 1.",
          },
          {
            question: "Can you rank on Google without backlinks?",
            answer: (
              <p>
                Yes, but only for lower-competition keywords. If you target long-tail keywords with less competition, thorough content,{" "}
                <a
                  href="/seo-guide/content-seo/content-optimization"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  proper optimization
                </a>
                , and strong internal linking can be enough to rank. For competitive keywords, you will almost always need backlinks from other websites.
              </p>
            ),
            answerText:
              "Yes, but only for lower-competition keywords. If you target long-tail keywords with less competition, thorough content, proper optimization, and strong internal linking can be enough to rank. For competitive keywords, you will almost always need backlinks from other websites.",
          },
          {
            question: "Should I delete content that is not ranking?",
            answer: (
              <p>
                Not necessarily. First, diagnose why the content is not ranking. It may need better keyword targeting, improved structure, or more internal links. If the content targets a keyword with zero search volume or is thin and cannot be improved, consolidating it into a stronger page or redirecting it may be the better option.
              </p>
            ),
            answerText:
              "Not necessarily. First, diagnose why the content is not ranking. It may need better keyword targeting, improved structure, or more internal links. If the content targets a keyword with zero search volume or is thin and cannot be improved, consolidating it into a stronger page or redirecting it may be the better option.",
          },
          {
            question: "How do I fix pages that are underperforming in search?",
            answer: (
              <p>
                Start by identifying the root cause: check keyword difficulty, compare your content structure against top-ranking competitors, verify your search intent alignment, and review your internal linking. Then make targeted improvements such as updating outdated information, adding missing sections, improving headings, and building internal links from your higher-authority pages.
              </p>
            ),
            answerText:
              "Start by identifying the root cause: check keyword difficulty, compare your content structure against top-ranking competitors, verify your search intent alignment, and review your internal linking. Then make targeted improvements such as updating outdated information, adding missing sections, improving headings, and building internal links from your higher-authority pages.",
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
                Fix what is holding your content back
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and turn underperforming content into
                ranking pages.
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
