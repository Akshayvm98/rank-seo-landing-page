import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function KeywordClustering() {
  return (
    <>
      <ArticleHero
        title="Why one keyword per page is not enough anymore"
        subtitle="Modern SEO is not about targeting a single keyword. It is about covering a topic properly using clusters of related keywords."
        readingTime={8}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What is keyword clustering */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-keyword-clustering" title="What is keyword clustering">
        <Paragraph>
          Keyword clustering is grouping related keywords together based on
          meaning and intent — then using those groups to plan stronger content.
        </Paragraph>
        <Paragraph>
          Instead of writing one page for every keyword, you identify which
          keywords belong together and cover them in a single, comprehensive
          piece. The result is content that ranks for multiple terms, not just
          one.
        </Paragraph>
        <Paragraph>
          For example, &ldquo;how to start a blog&rdquo;, &ldquo;starting a
          blog for beginners&rdquo;, and &ldquo;steps to create a blog&rdquo;
          are different keywords — but they share the same intent. One
          well-structured page can rank for all of them.
        </Paragraph>
        <Callout>
          Clustering is not about stuffing keywords. It is about understanding
          which queries belong together so your content is more complete and
          more useful.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why keyword clustering matters">
        <Paragraph>
          Google does not rank pages for individual keywords in isolation
          anymore. It understands topics. When your content covers a topic
          thoroughly, Google rewards it with broader visibility.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Better rankings.</strong> A page that naturally covers a
              cluster of related terms signals depth and relevance. Google
              ranks it for more queries than a page targeting a single keyword.
            </span>,
            <span key="2">
              <strong>Less content overlap.</strong> Without clustering, you
              end up with multiple pages competing for the same searches. This
              is called keyword cannibalization — and it hurts all of them.
            </span>,
            <span key="3">
              <strong>Stronger internal linking.</strong> Clusters give you a
              natural linking structure. The main topic links to supporting
              articles, and supporting articles link back. This builds
              topical authority.
            </span>,
            <span key="4">
              <strong>Smarter content planning.</strong> Instead of guessing
              what to write next, clusters show you the gaps. You see exactly
              which subtopics you have covered and which ones you have not.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What a cluster looks like — Visual 1 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="cluster-example" title="What a keyword cluster looks like">
        <Paragraph>
          Here is an example of how keywords naturally group around a central
          topic.
        </Paragraph>

        {/* Cluster map visual */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col items-center">
              {/* Central node */}
              <div className="relative z-10 rounded-2xl border-2 border-accent/30 bg-accent-bg px-6 py-4 text-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                  Main Topic
                </p>
                <p className="mt-1 text-[16px] font-bold text-foreground">
                  running shoes
                </p>
              </div>

              {/* Connector lines */}
              <div className="flex w-full max-w-[480px] items-start justify-center">
                <div className="mt-0 grid w-full grid-cols-2 gap-3">
                  {[
                    {
                      keyword: "best running shoes",
                      intent: "Commercial",
                      intentColor: "text-amber-600 bg-amber-50",
                    },
                    {
                      keyword: "running shoes for beginners",
                      intent: "Informational",
                      intentColor: "text-blue-600 bg-blue-50",
                    },
                    {
                      keyword: "how to choose running shoes",
                      intent: "Informational",
                      intentColor: "text-blue-600 bg-blue-50",
                    },
                    {
                      keyword: "running shoes vs walking shoes",
                      intent: "Commercial",
                      intentColor: "text-amber-600 bg-amber-50",
                    },
                  ].map((item) => (
                    <div key={item.keyword} className="flex flex-col items-center">
                      <div className="h-6 w-px bg-border-light" />
                      <div className="w-full rounded-xl border border-black/[0.05] bg-border-light/20 px-4 py-3 text-center">
                        <p className="text-[13px] font-medium text-foreground">
                          {item.keyword}
                        </p>
                        <span
                          className={`mt-1.5 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold ${item.intentColor}`}
                        >
                          {item.intent}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-accent-bg/30 border border-accent-muted/20 px-4 py-3">
              <p className="text-[12px] font-semibold text-accent">
                One topic, multiple keywords
              </p>
              <p className="mt-0.5 text-[12px] text-muted">
                These keywords share a common topic but vary in intent. Some
                need a single comprehensive page. Others need their own
                dedicated article. The cluster helps you decide.
              </p>
            </div>
          </div>
        </div>

        <Paragraph>
          Notice how the keywords have different{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intents
          </a>
          . &ldquo;Best running shoes&rdquo; is commercial — users want
          comparisons. &ldquo;How to choose running shoes&rdquo; is
          informational — users want guidance. Clustering helps you see these
          differences before you write.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to create clusters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-create" title="How to create keyword clusters">
        <Paragraph>
          You do not need a complex tool to start clustering. Here is a
          practical process:
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Start with a main topic",
              text: "Pick a broad topic you want to rank for. This becomes the center of your cluster.",
            },
            {
              title: "Find related keywords",
              text: "Use a keyword tool, Google autocomplete, or People Also Ask to find variations and related queries around your topic.",
            },
            {
              title: "Group by intent and similarity",
              text: "Sort keywords into groups based on what the searcher wants. Keywords with the same intent and meaning belong in one cluster.",
            },
            {
              title: "Decide on page structure",
              text: "For each cluster, decide: does this need one comprehensive page or multiple supporting articles? A tight cluster might need one page. A broad cluster might need a pillar page with supporting articles.",
            },
            {
              title: "Map the internal links",
              text: "Plan how the pages in your cluster will link to each other. The main page links to supporting articles, and they link back.",
            },
          ]}
        />
        <Callout type="info">
          For a practical approach to finding the right keywords before
          clustering, see the{" "}
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
      {/* Clusters vs single keywords — Visual 2 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="clusters-vs-single" title="Clusters vs single keywords">
        <Paragraph>
          The difference between targeting individual keywords and using
          clusters is significant. Here is what it looks like in practice.
        </Paragraph>

        {/* Before / After visual */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-100/60 bg-red-50/20 p-5">
            <span className="inline-block rounded-lg bg-red-50 px-2.5 py-1 text-[12px] font-bold text-red-600">
              Before: Single keywords
            </span>
            <div className="mt-4 space-y-2">
              {[
                "running shoes",
                "best running shoes",
                "running shoes guide",
                "buy running shoes",
              ].map((kw) => (
                <div
                  key={kw}
                  className="rounded-lg border border-red-100/40 bg-white/60 px-3 py-2"
                >
                  <p className="text-[13px] text-muted">{kw}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1.5">
              <p className="text-[12px] font-medium text-red-600">
                Problems
              </p>
              <p className="text-[12px] leading-[1.6] text-muted">
                Each keyword gets its own page. Pages compete with each other.
                Thin content. No structure. Google does not know which page to
                rank.
              </p>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/20 p-5">
            <span className="inline-block rounded-lg bg-emerald-50 px-2.5 py-1 text-[12px] font-bold text-emerald-600">
              After: Clustered approach
            </span>
            <div className="mt-4 space-y-2">
              <div className="rounded-lg border-2 border-emerald-200/60 bg-white/80 px-3 py-2">
                <p className="text-[13px] font-semibold text-foreground">
                  running shoes
                </p>
                <p className="text-[10px] text-emerald-600 font-medium">
                  Pillar page
                </p>
              </div>
              {[
                { kw: "best running shoes", type: "Comparison article" },
                { kw: "how to choose running shoes", type: "Guide article" },
                { kw: "running shoes for beginners", type: "Guide article" },
              ].map((item) => (
                <div
                  key={item.kw}
                  className="ml-4 rounded-lg border border-emerald-100/40 bg-white/60 px-3 py-2"
                >
                  <p className="text-[13px] text-muted">{item.kw}</p>
                  <p className="text-[10px] text-emerald-600 font-medium">
                    {item.type}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1.5">
              <p className="text-[12px] font-medium text-emerald-600">
                Benefits
              </p>
              <p className="text-[12px] leading-[1.6] text-muted">
                One clear structure. Each page has a purpose. Internal links
                strengthen authority. Google understands the relationship
                between pages.
              </p>
            </div>
          </div>
        </div>

        <Paragraph>
          The clustered approach does not mean fewer pages — it means smarter
          pages. Each one serves a clear purpose and supports the others.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common clustering mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Creating too many similar pages.</strong> If two keywords
              have the same intent and the same SERP results, they belong on
              one page. Splitting them creates cannibalization.
            </span>,
            <span key="2">
              <strong>Keyword cannibalization.</strong> This happens when
              multiple pages on your site compete for the same query. Google
              does not know which one to rank, so it ranks neither well.
              Clustering prevents this by design.
            </span>,
            <span key="3">
              <strong>Grouping by keyword similarity only.</strong> Words can
              look similar but have different intents. &ldquo;Running shoes
              review&rdquo; and &ldquo;running shoes repair&rdquo; share words
              but need completely different pages. Always check{" "}
              <a
                href="/seo-guide/keyword-research/search-intent"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                intent
              </a>
              .
            </span>,
            <span key="4">
              <strong>Ignoring{" "}
              <a
                href="/seo-guide/keyword-research/keyword-difficulty"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                keyword difficulty
              </a>
              .</strong>{" "}
              A perfect cluster is useless if every keyword in it is too
              competitive for your site. Evaluate difficulty before committing
              to a cluster.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps with clustering">
        <Paragraph>
          Building clusters manually works for a few topics. But when you are
          planning content across dozens of keywords, you need a faster way to
          group and organize them.
        </Paragraph>
        <BulletList
          items={[
            <span key="groups-keywords"><a href="/features" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">Automatically groups keywords</a> by semantic similarity and shared intent</span>,
            "Identifies which keywords belong on one page vs separate pages",
            "Suggests pillar-and-article structures for your topic clusters",
            "Highlights cannibalization risks before you publish",
          ]}
        />
        <Paragraph>
          Clustering turns your{" "}
          <a
            href="/seo-guide/keyword-research"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword research
          </a>{" "}
          into a structured{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content plan
          </a>
          . Instead of a list of keywords, you get a blueprint for what to
          write and how to connect it. For a complete starting point, explore the{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
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
            question: "What is keyword clustering in SEO?",
            answer: (
              <p>
                Keyword clustering is the process of grouping related keywords by meaning and{" "}
                <a href="/seo-guide/keyword-research/search-intent" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">search intent</a>,
                then using those groups to plan stronger content. Instead of targeting one keyword per page, you cover a cluster of related terms in a single comprehensive piece, helping it rank for more queries.
              </p>
            ),
            answerText: "Keyword clustering is the process of grouping related keywords by meaning and search intent, then using those groups to plan stronger content. Instead of targeting one keyword per page, you cover a cluster of related terms in a single comprehensive piece, helping it rank for more queries.",
          },
          {
            question: "How many keywords should be in a cluster?",
            answer: (
              <p>
                There is no fixed number. A tight cluster might have 3–5 closely related keywords that belong on one page. A broader cluster could have 10–20 keywords that need a pillar page plus several supporting articles. The key is grouping by shared intent, not just word similarity.
              </p>
            ),
            answerText: "There is no fixed number. A tight cluster might have 3–5 closely related keywords that belong on one page. A broader cluster could have 10–20 keywords that need a pillar page plus several supporting articles. The key is grouping by shared intent, not just word similarity.",
          },
          {
            question: "What is keyword cannibalization?",
            answer: (
              <p>
                Keyword cannibalization happens when multiple pages on your site compete for the same search query. Google does not know which page to rank, so it often ranks neither well. Clustering prevents this by identifying which keywords belong on one page versus separate pages before you publish.
              </p>
            ),
            answerText: "Keyword cannibalization happens when multiple pages on your site compete for the same search query. Google does not know which page to rank, so it often ranks neither well. Clustering prevents this by identifying which keywords belong on one page versus separate pages before you publish.",
          },
          {
            question: "What is a pillar page in SEO?",
            answer: (
              <p>
                A pillar page is a comprehensive page that covers a broad topic at a high level and links to more detailed supporting articles on subtopics. It acts as the hub of a topic cluster. Supporting articles link back to the pillar, creating a clear structure that Google uses to understand your topical authority.
              </p>
            ),
            answerText: "A pillar page is a comprehensive page that covers a broad topic at a high level and links to more detailed supporting articles on subtopics. It acts as the hub of a topic cluster. Supporting articles link back to the pillar, creating a clear structure that Google uses to understand your topical authority.",
          },
          {
            question: "Should I use a tool for keyword clustering?",
            answer: (
              <p>
                You can cluster keywords manually by checking SERPs and grouping by intent, which works well for a few topics. For larger sites or dozens of keywords, a tool like RankSEO can automatically group keywords by semantic similarity and shared intent, saving significant time and reducing errors.
              </p>
            ),
            answerText: "You can cluster keywords manually by checking SERPs and grouping by intent, which works well for a few topics. For larger sites or dozens of keywords, a tool can automatically group keywords by semantic similarity and shared intent, saving significant time and reducing errors.",
          },
          {
            question: "How do I know if keywords should be on one page or separate pages?",
            answer: (
              <p>
                Search each keyword in Google. If the top results are the same pages for both keywords, they share the same intent and belong on one page. If the results are different, the keywords need separate pages. This SERP overlap test is the most reliable way to decide.
              </p>
            ),
            answerText: "Search each keyword in Google. If the top results are the same pages for both keywords, they share the same intent and belong on one page. If the results are different, the keywords need separate pages. This SERP overlap test is the most reliable way to decide.",
          },
          {
            question: "How does clustering connect to writing content?",
            answer: (
              <p>
                Clustering turns a flat keyword list into a structured content plan. Each cluster becomes an article or page with clear scope, and the relationships between clusters define your{" "}
                <a href="/seo-guide/content-seo/how-to-write-seo-articles" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">article writing</a>{" "}
                priorities and internal linking strategy.
              </p>
            ),
            answerText: "Clustering turns a flat keyword list into a structured content plan. Each cluster becomes an article or page with clear scope, and the relationships between clusters define your article writing priorities and internal linking strategy.",
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
                Build content around topics, not just keywords
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and generate structured keyword clusters
                for your content.
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
