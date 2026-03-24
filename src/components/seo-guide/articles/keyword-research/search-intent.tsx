import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function SearchIntent() {
  return (
    <>
      <ArticleHero
        title="Search intent is why some pages rank and others don't"
        subtitle="You can write great content and still not rank if it doesn't match what the user is actually looking for."
        readingTime={8}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What is search intent */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-search-intent" title="What is search intent">
        <Paragraph>
          Search intent is the reason behind a search. Not the keyword itself,
          but what the person actually wants when they type it in.
        </Paragraph>
        <Paragraph>
          Someone searching &ldquo;best project management tools&rdquo; is not
          looking for a definition of project management. They want a
          comparison. They want options. If you show them a glossary page, they
          will bounce — and Google will notice.
        </Paragraph>
        <Paragraph>
          Google&apos;s entire job is to match results to intent. If your
          content does not match what the searcher expects, it will not rank —
          no matter how well it is written or how many backlinks it has.
        </Paragraph>
        <Callout>
          Think of intent as the question behind the question. The keyword is
          what they type. The intent is what they actually want.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* The 4 types */}
      {/* ------------------------------------------------------------------ */}
      <Section id="four-types" title="The 4 types of search intent">
        <Paragraph>
          Every search falls into one of four categories. Understanding which
          one your keyword belongs to tells you exactly what kind of content to
          create.
        </Paragraph>

        {/* Intent grid visual */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              type: "Informational",
              desc: "The user wants to learn something. They are looking for an explanation, a guide, or an answer.",
              examples: "\"what is search intent\", \"how to start a blog\"",
              format: "Blog post, guide, explainer",
              color: "border-blue-100/60 bg-blue-50/30",
              badge: "text-blue-600 bg-blue-50",
            },
            {
              type: "Navigational",
              desc: "The user wants to find a specific site or page. They already know where they want to go.",
              examples: "\"Slack login\", \"Notion pricing\"",
              format: "Landing page, product page",
              color: "border-violet-100/60 bg-violet-50/30",
              badge: "text-violet-600 bg-violet-50",
            },
            {
              type: "Commercial",
              desc: "The user is comparing options before making a decision. They are researching, not buying yet.",
              examples: "\"best CRM for startups\", \"Mailchimp vs ConvertKit\"",
              format: "Comparison, review, listicle",
              color: "border-amber-100/60 bg-amber-50/30",
              badge: "text-amber-600 bg-amber-50",
            },
            {
              type: "Transactional",
              desc: "The user is ready to take action — buy, sign up, download, or start a trial.",
              examples: "\"buy Ahrefs\", \"sign up for Notion\"",
              format: "Product page, pricing page, signup",
              color: "border-emerald-100/60 bg-emerald-50/30",
              badge: "text-emerald-600 bg-emerald-50",
            },
          ].map((item) => (
            <div
              key={item.type}
              className={`rounded-2xl border p-5 ${item.color} transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]`}
            >
              <span className={`inline-block rounded-lg px-2.5 py-1 text-[12px] font-bold ${item.badge}`}>
                {item.type}
              </span>
              <p className="mt-3 text-[14px] leading-[1.65] text-muted">
                {item.desc}
              </p>
              <div className="mt-3 space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light">
                  Examples
                </p>
                <p className="text-[12px] italic text-muted">{item.examples}</p>
              </div>
              <div className="mt-2 space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light">
                  Best format
                </p>
                <p className="text-[12px] text-foreground font-medium">
                  {item.format}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Paragraph>
          The key insight: the same topic can have different intents depending on
          how the query is phrased. &ldquo;CRM&rdquo; is vague.
          &ldquo;Best CRM for freelancers&rdquo; is commercial.
          &ldquo;HubSpot login&rdquo; is navigational. Each one needs a
          completely different page.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why content fails */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-content-fails" title="Why content fails without matching intent">
        <Paragraph>
          This is the most common reason good content does not rank. The writing
          is solid, the keyword is right, but the format is wrong.
        </Paragraph>
        <Paragraph>
          Here is what that looks like:
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Wrong format.</strong> You write a long-form guide for a
              keyword where Google shows listicles. The searcher wanted a quick
              comparison, not a 3,000-word essay.
            </span>,
            <span key="2">
              <strong>Wrong depth.</strong> You write a shallow overview for a
              keyword where users want a detailed tutorial. They click, skim,
              leave.
            </span>,
            <span key="3">
              <strong>Wrong angle.</strong> You write about a product feature
              for a keyword where users want unbiased advice. They do not trust
              content that feels like a sales pitch.
            </span>,
          ]}
        />
        <Paragraph>
          Google measures this through engagement signals. When people click
          your result and immediately go back to try another one, Google learns
          that your page is not what they wanted. Over time, it pushes you down.
        </Paragraph>
        <Callout type="warning">
          You can have the best content in the world. If it does not match what
          the searcher expects, Google will rank something else — even if that
          something else is objectively worse.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to identify intent */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-identify" title="How to identify intent for any keyword">
        <Paragraph>
          You do not need a tool for this. You need Google and five minutes.
          Here is the process:
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Search the keyword",
              text: "Open an incognito window and type the keyword into Google. Look at the first page of results.",
            },
            {
              title: "Note the content types",
              text: "Are the results blog posts? Listicles? Product pages? Videos? The dominant format tells you what Google thinks the intent is.",
            },
            {
              title: "Check the structure",
              text: "Are top results using step-by-step formats? Comparison tables? Quick answers? This tells you the depth and structure users expect.",
            },
            {
              title: "Look at the angle",
              text: "Are results written for beginners or experts? Is the tone educational or transactional? Match the level of your audience.",
            },
            {
              title: "Decide if you can match it",
              text: "If the intent requires a product page and you are writing a blog post, stop. Create the right type of content instead.",
            },
          ]}
        />
        <Callout type="info">
          For a full breakdown of how to evaluate keywords before writing, see
          the{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-easy-keywords"
            className="underline underline-offset-2"
          >
            easy keywords guide
          </a>
          .
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Example */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example" title="Example: reading intent from the SERP">
        <Paragraph>
          Let&apos;s look at the keyword: <strong>&ldquo;email marketing
          tools&rdquo;</strong>
        </Paragraph>

        {/* SERP breakdown visual */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-foreground">
                SERP Analysis
              </span>
              <span className="rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
                &ldquo;email marketing tools&rdquo;
              </span>
            </div>
            <div className="space-y-2">
              {[
                {
                  title: "12 Best Email Marketing Tools (2026)",
                  domain: "techreviews.com",
                  type: "Listicle",
                  intent: "Commercial",
                },
                {
                  title: "Top Email Marketing Platforms Compared",
                  domain: "marketingblog.io",
                  type: "Comparison",
                  intent: "Commercial",
                },
                {
                  title: "Best Email Tools for Small Businesses",
                  domain: "startuphub.com",
                  type: "Listicle",
                  intent: "Commercial",
                },
                {
                  title: "Email Marketing Software | G2 Reviews",
                  domain: "g2.com",
                  type: "Review aggregator",
                  intent: "Commercial",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-black/[0.04] bg-border-light/15 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-foreground">
                      {r.title}
                    </p>
                    <p className="text-[11px] text-muted">{r.domain}</p>
                  </div>
                  <div className="ml-3 flex shrink-0 items-center gap-2">
                    <span className="rounded bg-border-light px-2 py-0.5 text-[10px] font-medium text-muted">
                      {r.type}
                    </span>
                    <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                      {r.intent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-accent-bg/30 border border-accent-muted/20 px-4 py-3">
              <p className="text-[12px] font-semibold text-accent">
                Pattern: 100% commercial intent
              </p>
              <p className="mt-0.5 text-[12px] text-muted">
                Every result is a listicle or comparison. Writing a
                &ldquo;What is email marketing?&rdquo; guide for this keyword
                would fail — the intent is comparison, not education.
              </p>
            </div>
          </div>
        </div>

        <Paragraph>
          The SERP makes it clear: this keyword has commercial intent. Users
          want to compare options. If you write an informational blog post for
          this query, you are fighting against what Google already knows users
          want.
        </Paragraph>
        <Paragraph>
          The right move: create a comparison page that reviews email marketing
          tools, with clear pros and cons, and position your product naturally
          within the list.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common intent mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Not checking the SERP at all.</strong> Most people never
              look at what Google is already showing. They guess the intent and
              get it wrong.
            </span>,
            <span key="2">
              <strong>Assuming all keywords are informational.</strong> Not
              every keyword needs a blog post. Some need a product page, a
              comparison, or a landing page.
            </span>,
            <span key="3">
              <strong>Mixing intents on one page.</strong> A page that tries to
              explain a concept, compare tools, and sell a product all at once
              confuses both users and Google. One page, one intent.
            </span>,
            <span key="4">
              <strong>Ignoring format signals.</strong> If every result is a
              video, writing a text post is fighting the format. If every result
              is a list, writing a narrative essay misses the point.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps you match intent">
        <Paragraph>
          Understanding intent manually works, but it is slow when you are
          evaluating dozens of keywords. RankSEO helps by analyzing what
          already ranks and showing you the patterns.
        </Paragraph>
        <BulletList
          items={[
            "Analyzes the SERP for each keyword to identify dominant content types",
            "Shows whether results are informational, commercial, or transactional",
            <span key="content-structure">Suggests <a href="/features" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">content structure</a> based on what is already working</span>,
            "Helps you avoid creating content that fights the wrong battle",
          ]}
        />
        <Paragraph>
          The goal is not just to find keywords — it is to understand what kind
          of{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content to create
          </a>{" "}
          for each one. Intent is the bridge between{" "}
          <a
            href="/seo-guide/keyword-research"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword research
          </a>{" "}
          and content that actually ranks. For a full walkthrough, see the{" "}
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
            question: "What are the 4 types of search intent?",
            answer: (
              <p>
                The four types are informational (learning something), navigational (finding a specific site), commercial (comparing options before buying), and transactional (ready to take action like purchasing or signing up). Each type requires a different content format to rank.
              </p>
            ),
            answerText: "The four types are informational (learning something), navigational (finding a specific site), commercial (comparing options before buying), and transactional (ready to take action like purchasing or signing up). Each type requires a different content format to rank.",
          },
          {
            question: "How do I determine search intent for a keyword?",
            answer: (
              <p>
                Search the keyword in an incognito window and look at the first page of results. The dominant content type — listicles, guides, product pages, comparisons — tells you what Google thinks the searcher wants. Match your content format to what is already ranking.
              </p>
            ),
            answerText: "Search the keyword in an incognito window and look at the first page of results. The dominant content type — listicles, guides, product pages, comparisons — tells you what Google thinks the searcher wants. Match your content format to what is already ranking.",
          },
          {
            question: "Why does search intent matter for SEO?",
            answer: (
              <p>
                Google&apos;s job is matching results to intent. If your content does not match what the searcher expects — even if it is well-written and keyword-optimized — it will not rank. Intent alignment is often the difference between page 1 and page 5.
              </p>
            ),
            answerText: "Google's job is matching results to intent. If your content does not match what the searcher expects — even if it is well-written and keyword-optimized — it will not rank. Intent alignment is often the difference between page 1 and page 5.",
          },
          {
            question: "Can search intent change over time?",
            answer: (
              <p>
                Yes. As user behavior shifts and Google updates its algorithms, the dominant intent for a keyword can change. A keyword that was informational might become commercial as more product pages start ranking. Check SERPs periodically for your important keywords.
              </p>
            ),
            answerText: "Yes. As user behavior shifts and Google updates its algorithms, the dominant intent for a keyword can change. A keyword that was informational might become commercial as more product pages start ranking. Check SERPs periodically for your important keywords.",
          },
          {
            question: "What should I do when a keyword has mixed intent?",
            answer: (
              <p>
                Some keywords show a mix of content types in the SERP. In this case, match the dominant format (what appears most) or narrow your keyword to one with clearer intent. For example, instead of &ldquo;CRM software&rdquo; try &ldquo;best CRM software for freelancers&rdquo; which has obvious commercial intent.
              </p>
            ),
            answerText: "Some keywords show a mix of content types in the SERP. In this case, match the dominant format or narrow your keyword to one with clearer intent. For example, instead of 'CRM software' try 'best CRM software for freelancers' which has obvious commercial intent.",
          },
          {
            question: "How do I match intent with content format?",
            answer: (
              <p>
                Informational intent needs guides and explainers. Commercial intent needs comparisons and listicles. Transactional intent needs product or pricing pages. Check what format dominates the SERP and{" "}
                <a href="/seo-guide/content-seo/how-to-write-seo-articles" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">write your article</a>{" "}
                in that same format.
              </p>
            ),
            answerText: "Informational intent needs guides and explainers. Commercial intent needs comparisons and listicles. Transactional intent needs product or pricing pages. Check what format dominates the SERP and write your article in that same format.",
          },
          {
            question: "Is search intent more important than keywords?",
            answer: (
              <p>
                They work together, but intent is the foundation. Targeting the right keyword with the wrong format will fail. Start by understanding intent, then{" "}
                <a href="/seo-guide/keyword-research/how-to-find-easy-keywords" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">find keywords</a>{" "}
                where you can match that intent with better content than what currently ranks.
              </p>
            ),
            answerText: "They work together, but intent is the foundation. Targeting the right keyword with the wrong format will fail. Start by understanding intent, then find keywords where you can match that intent with better content than what currently ranks.",
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
                Match your content to what users actually want
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and create content aligned with real search
                intent.
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
