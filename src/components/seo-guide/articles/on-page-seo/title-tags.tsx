import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
} from "@/components/seo-guide/ArticleBlocks";
import { ArrowUp } from "lucide-react";

export default function TitleTags() {
  return (
    <>
      <ArticleHero
        title="How to write title tags that actually get clicks"
        subtitle="Your title is the first thing people see in search results. A small change here can make a big difference."
        readingTime={7}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What is a title tag */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-a-title-tag" title="What is a title tag">
        <Paragraph>
          A title tag is the clickable headline that appears in Google search
          results. It is also what shows in your browser tab and when someone
          shares your link on social media.
        </Paragraph>
        <Paragraph>
          In HTML, it looks like this:{" "}
          <code className="rounded bg-border-light px-1.5 py-0.5 text-[13px] font-mono text-foreground">
            &lt;title&gt;Your Page Title&lt;/title&gt;
          </code>
        </Paragraph>
        <Paragraph>
          It is one of the simplest elements on your page — but it has an
          outsized impact on both rankings and click-through rate.
        </Paragraph>

        {/* Search result preview — Visual 1 */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light mb-3">
              How it appears in search results
            </p>
            <div className="rounded-xl border border-black/[0.04] bg-border-light/10 px-5 py-4">
              <p className="text-[11px] text-emerald-700">
                rankseo.com › seo-guide › on-page-seo
              </p>
              <p className="mt-1 text-[18px] font-medium text-blue-700 leading-snug hover:underline cursor-pointer">
                On-Page SEO Guide | How to Optimize Pages for Better Rankings
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-muted">
                Learn how on-page SEO works, what actually matters, and how to
                improve titles, headings, internal links, metadata, and page
                structure...
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <ArrowUp className="h-4 w-4 text-accent" />
              <p className="text-[12px] font-medium text-accent">
                This is the title tag — the most visible element
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why they matter */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-title-tags-matter" title="Why title tags matter">
        <BulletList
          items={[
            <span key="1">
              <strong>They affect click-through rate.</strong> A compelling
              title gets more clicks from the same ranking position. More
              clicks signals to Google that your result is relevant — which
              can improve your ranking further.
            </span>,
            <span key="2">
              <strong>They influence rankings directly.</strong> Google uses
              your title tag to understand what your page is about. Including
              your primary keyword in the title is one of the strongest
              on-page ranking signals.
            </span>,
            <span key="3">
              <strong>They set expectations.</strong> The title tells the
              searcher what they will get. A clear, accurate title builds
              trust. A vague or misleading one causes bounces.
            </span>,
          ]}
        />
        <Callout>
          Improving your title tag is one of the highest-ROI SEO changes you
          can make. It takes 30 seconds and can measurably increase traffic.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What makes a good title */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-makes-good-title" title="What makes a good title tag">
        <BulletList
          items={[
            <span key="1">
              <strong>Includes the main keyword.</strong> Ideally near the
              beginning. This helps both Google and the searcher understand
              what the page is about at a glance.
            </span>,
            <span key="2">
              <strong>Is clear and specific.</strong> The reader should know
              exactly what they will get. &ldquo;SEO Tips&rdquo; is vague.
              &ldquo;7 SEO Tips That Increased Our Traffic 3x&rdquo; is
              specific.
            </span>,
            <span key="3">
              <strong>Creates value or curiosity.</strong> Give a reason to
              click. A number, a benefit, or a qualifier like
              &ldquo;without&hellip;&rdquo; or &ldquo;for beginners&rdquo;
              adds pull.
            </span>,
            <span key="4">
              <strong>Stays under 60 characters.</strong> Google truncates
              titles that are too long. Keep it concise so the full title
              shows in search results.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Title formulas */}
      {/* ------------------------------------------------------------------ */}
      <Section id="title-formulas" title="Simple formulas for writing titles">
        <Paragraph>
          You do not need to reinvent the wheel every time. These patterns
          work consistently:
        </Paragraph>
        <div className="mt-4 space-y-2">
          {[
            {
              formula: "How to [do something]",
              example: "How to Write Blog Posts That Rank on Google",
            },
            {
              formula: "Best [topic] for [use case]",
              example: "Best CRM Tools for Small Businesses (2026)",
            },
            {
              formula: "[Number] ways to [achieve result]",
              example: "9 Ways to Improve Your Page Speed Today",
            },
            {
              formula: "[Topic] Explained (parenthetical benefit)",
              example: "Keyword Difficulty Explained (How to Tell If You Can Rank)",
            },
            {
              formula: "[Topic]: [specific angle]",
              example: "Internal Linking: The SEO Strategy Most Sites Ignore",
            },
          ].map((item) => (
            <div
              key={item.formula}
              className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            >
              <p className="text-[13px] font-semibold text-foreground">
                {item.formula}
              </p>
              <p className="mt-1 text-[13px] text-muted italic">
                → {item.example}
              </p>
            </div>
          ))}
        </div>
        <Paragraph>
          Pick the formula that matches your content type and keyword. Then
          customize it to be specific to your angle.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Good vs bad examples — Visual 2 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="examples" title="Examples: bad titles vs good titles">
        <Paragraph>
          Small changes in wording make a big difference in clicks.
        </Paragraph>

        <div className="mt-6 space-y-3">
          {[
            {
              bad: "Email Marketing",
              good: "Email Marketing Guide: 7 Strategies That Work in 2026",
              why: "The original is too generic. The improved version is specific, has a number, and includes a year for freshness.",
            },
            {
              bad: "SEO Tips and Tricks for Your Website to Help You Rank Better on Google Search Results",
              good: "11 SEO Tips That Actually Improve Rankings",
              why: "The original is 85 characters — Google will cut it off. The improved version is concise and specific.",
            },
            {
              bad: "Everything About Backlinks",
              good: "Backlink Building Guide (How to Earn Links Without Spam)",
              why: "The original is vague. The improved version adds a clear benefit and a qualifier that builds trust.",
            },
            {
              bad: "Our Blog Post About Content Marketing",
              good: "Content Marketing for Startups: A Practical Guide",
              why: "The original is self-referential and says nothing useful. The improved version is audience-specific.",
            },
          ].map((item) => (
            <div
              key={item.bad}
              className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                    Before
                  </p>
                  <p className="text-[13px] text-muted">{item.bad}</p>
                </div>
                <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                    After
                  </p>
                  <p className="text-[13px] font-medium text-foreground">
                    {item.good}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[12px] leading-[1.6] text-muted">
                {item.why}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common title tag mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Too long.</strong> Anything over 60 characters gets
              truncated. Your most important words might never be seen.
            </span>,
            <span key="2">
              <strong>Too vague.</strong> Titles like &ldquo;Tips&rdquo; or
              &ldquo;Guide&rdquo; without context give no reason to click.
              Be specific about what the page delivers.
            </span>,
            <span key="3">
              <strong>Keyword stuffing.</strong> &ldquo;SEO Tips | SEO Guide |
              Best SEO | SEO Help&rdquo; reads like spam. Use your keyword
              once, naturally.
            </span>,
            <span key="4">
              <strong>Clickbait.</strong> Titles that promise something the
              content does not deliver cause bounces. Google notices high
              bounce rates and adjusts rankings accordingly.
            </span>,
            <span key="5">
              <strong>Duplicate titles.</strong> Every page on your site
              should have a unique title. Duplicate titles confuse Google
              about which page to rank.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps with title tags">
        <Paragraph>
          Writing good titles gets easier with practice. But when you are
          optimizing dozens of pages, having suggestions helps you move
          faster.
        </Paragraph>
        <BulletList
          items={[
            "Generates optimized title tag suggestions based on keyword and intent analysis",
            "Checks title length and flags titles that will be truncated",
            "Suggests variations so you can pick the strongest option",
            "Identifies pages with weak or missing title tags across your site",
          ]}
        />
        <Paragraph>
          For a broader look at page-level optimization beyond titles, see
          the{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO guide
          </a>
          . For improving existing content more broadly, see the{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />
            <div className="relative">
              <h2 className="mx-auto max-w-[440px] text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[1.875rem]">
                Write titles people actually click on
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and generate optimized titles that improve
                your SEO performance.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-xl bg-white px-7 text-[14px] font-semibold text-foreground shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start $1 Trial
                </a>
                <a
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-xl border border-white/15 px-5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  View Pricing
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
