import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
} from "@/components/seo-guide/ArticleBlocks";

export default function HowToFindEasyKeywords() {
  return (
    <>
      <ArticleHero
        title="How to find keywords you can actually rank for"
        subtitle="Most people chase high-volume keywords and never rank. The real opportunity is in finding keywords that are easier, more specific, and more achievable."
        readingTime={7}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why most keyword research fails */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-keyword-research-fails" title="Why most keyword research fails">
        <Paragraph>
          Here is what usually happens. Someone opens a keyword tool, types in
          their topic, sorts by search volume, and picks the biggest number they
          can find. Then they write a page, publish it, and wait.
        </Paragraph>
        <Paragraph>
          Nothing happens. The page sits on page 5. Traffic stays at zero. They
          wonder if SEO is broken.
        </Paragraph>
        <Paragraph>
          The problem is not SEO. The problem is picking keywords you have no
          realistic chance of ranking for. High-volume keywords are almost always
          dominated by established sites with years of authority and hundreds of
          backlinks. Competing head-on is like opening a coffee shop next to
          Starbucks on day one.
        </Paragraph>
        <BulletList
          items={[
            "Chasing volume without checking who already ranks",
            "Ignoring how competitive the search results actually are",
            "Picking broad terms instead of specific, answerable queries",
          ]}
        />
        <Paragraph>
          The fix is simple: stop chasing volume and start looking for keywords
          where the competition is weak enough for you to win.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What makes a keyword "easy" */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-makes-keyword-easy" title='What makes a keyword "easy"'>
        <Paragraph>
          An easy keyword is not necessarily a low-volume keyword. It is a
          keyword where the existing search results are weak enough that a
          well-structured page can break in. Three things make a keyword easier
          to rank for:
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Lower competition",
              text: "The pages currently ranking are thin, outdated, or poorly optimized. Forums, old blog posts, and generic listicles in the top 10 are a strong signal.",
            },
            {
              title: "Specific intent",
              text: "The searcher wants something clear and answerable. \"Best CRM for freelancers\" is easier than \"CRM\" because the intent is narrow and the audience is defined.",
            },
            {
              title: "Weaker domains in the SERP",
              text: "If the first page has small blogs, niche sites, or low-authority pages instead of major publications, you have a real shot.",
            },
          ]}
        />
        <Callout>
          A keyword with 200 searches per month and weak competition will bring
          you more traffic than a keyword with 10,000 searches that you will
          never rank for.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Step-by-step process */}
      {/* ------------------------------------------------------------------ */}
      <Section id="step-by-step-process" title="How to find easy keywords step by step">
        <Paragraph>
          This is the process that actually works. It is not complicated, but it
          requires you to look at the search results instead of just the
          numbers.
        </Paragraph>

        {/* Workflow visual */}
        <div className="mt-8 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-foreground">
                Keyword Selection Workflow
              </span>
              <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                5 steps
              </span>
            </div>
            <div className="space-y-1">
              {[
                { step: "Broad topic", desc: "Start with what you know" },
                { step: "Long-tail variations", desc: "Get specific" },
                { step: "SERP check", desc: "Look at what ranks" },
                { step: "Competition eval", desc: "Can you win?" },
                { step: "Relevance check", desc: "Does it fit your brand?" },
              ].map((s, i) => (
                <div key={s.step}>
                  <div className="flex items-center gap-3 rounded-xl border border-black/[0.04] bg-border-light/15 px-4 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[12px] font-bold text-accent">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <span className="text-[14px] font-semibold text-foreground">
                        {s.step}
                      </span>
                      <span className="ml-2 text-[13px] text-muted">
                        {s.desc}
                      </span>
                    </div>
                    {i < 4 && (
                      <svg className="h-4 w-4 text-accent/40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8 3v10m-3-3l3 3 3-3" />
                      </svg>
                    )}
                  </div>
                  {i < 4 && (
                    <div className="ml-[22px] flex h-2 items-center">
                      <div className="h-full w-px bg-border-light" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <NumberedList
          items={[
            {
              title: "Start with a broad topic you know",
              text: "Pick something your business actually covers. If you sell project management software, start with \"project management\" — not \"productivity\" or \"business tools.\"",
            },
            {
              title: "Find long-tail variations",
              text: "Add specifics: \"project management for remote teams,\" \"simple project management for freelancers,\" \"how to manage client projects.\" These are longer, more specific, and easier to rank for.",
            },
            {
              title: "Check the search results manually",
              text: "Google your keyword. Look at the first page. Are the top results from massive sites? Or are there forums, old posts, and weak pages? If the results look beatable, you have an opportunity.",
            },
            {
              title: "Evaluate the competition",
              text: "Look at the pages that rank. Are they well-structured? Do they answer the question fully? If you can write something meaningfully better, the keyword is worth pursuing.",
            },
            {
              title: "Validate relevance to your brand",
              text: "A keyword is only useful if it connects to something you sell or do. Ranking for an irrelevant keyword brings traffic that never converts.",
            },
          ]}
        />
        <Callout type="info">
          For a deeper look at the full{" "}
          <a href="/seo-guide/keyword-research" className="underline underline-offset-2">
            keyword research process
          </a>
          , see our complete guide.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Example */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example" title="Example: spotting an easy keyword">
        <Paragraph>
          Let&apos;s say you run a small email marketing tool. You want to rank
          for something related to email marketing, but &ldquo;email marketing&rdquo;
          itself has millions of competing pages.
        </Paragraph>
        <Paragraph>
          Instead, you search for: <strong>&ldquo;how to write a welcome email
          sequence for SaaS.&rdquo;</strong>
        </Paragraph>

        {/* SERP comparison visual */}
        <div className="mt-8 reveal">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Weak SERP */}
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-amber-50 text-amber-500">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-[13px] font-semibold text-foreground">
                  Current top results
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { title: "5 Welcome Email Templates (2021)", domain: "randomsite.io", tag: "Outdated" },
                  { title: "What is a Welcome Email?", domain: "blog.generic.com", tag: "Too broad" },
                  { title: "Forum: welcome email advice?", domain: "community.xyz", tag: "Thin" },
                ].map((r) => (
                  <div key={r.title} className="rounded-lg bg-border-light/30 px-3 py-2.5">
                    <p className="text-[13px] font-medium text-foreground leading-tight">
                      {r.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[11px] text-muted">{r.domain}</span>
                      <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-600">
                        {r.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your opportunity */}
            <div className="rounded-2xl border border-accent-muted/40 bg-gradient-to-b from-accent-bg/30 to-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-accent-bg text-accent">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-[13px] font-semibold text-foreground">
                  Your optimized page
                </span>
              </div>
              <div className="rounded-lg border border-accent-muted/30 bg-white px-3 py-2.5">
                <p className="text-[13px] font-medium text-foreground leading-tight">
                  How to Write a Welcome Email Sequence for SaaS (With Examples)
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[11px] text-muted">yourdomain.com</span>
                  <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-semibold text-accent">
                    Specific + Fresh
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                {["SaaS-specific angle", "2026 examples included", "Clear structure with H2s", "Actionable templates"].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span className="text-[12px] text-muted">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Paragraph>
          The current results are outdated, too broad, or from low-authority
          domains. A well-structured, specific page targeting this exact query
          has a strong chance of ranking on page one — even without hundreds of
          backlinks.
        </Paragraph>
        <Callout>
          This is what &ldquo;easy&rdquo; looks like in practice. Not zero
          competition, but weak enough competition that good content can win.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common mistakes when picking keywords">
        <BulletList
          items={[
            <span key="1">
              <strong>Chasing high volume only.</strong> A keyword with 50,000
              monthly searches means nothing if you rank on page 8. Lower
              volume with less competition wins every time for newer sites.
            </span>,
            <span key="2">
              <strong>Ignoring search intent.</strong> If someone searches
              &ldquo;best CRM software,&rdquo; they want a comparison — not a
              product page. Match the format to what the searcher actually
              expects.
            </span>,
            <span key="3">
              <strong>Copying competitors blindly.</strong> Just because a
              competitor ranks for a keyword does not mean you should target
              it. They may have years of domain authority you cannot match
              right away.
            </span>,
            <span key="4">
              <strong>Picking keywords that are too broad.</strong>{" "}
              &ldquo;Marketing&rdquo; is not a keyword strategy.
              &ldquo;Email marketing for ecommerce stores&rdquo; is. The more
              specific you are, the easier it is to rank — and the more
              relevant the traffic.
            </span>,
            <span key="5">
              <strong>Not checking the actual SERP.</strong> Numbers alone do
              not tell you if a keyword is easy. You have to look at what
              currently ranks and decide if you can do better.
            </span>,
          ]}
        />
        <Callout type="warning">
          The biggest mistake is never publishing because you are still
          &ldquo;researching.&rdquo; Pick a realistic keyword, write the best
          page you can, publish it, and move on.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps you find easy keywords">
        <Paragraph>
          Doing this manually works, but it takes time — especially once you are
          looking at dozens of keyword variations. RankSEO speeds this up by
          pulling in real search data and surfacing the keywords where you
          actually have a chance.
        </Paragraph>
        <BulletList
          items={[
            "Shows keyword difficulty alongside volume so you can spot easy wins instantly",
            "Surfaces queries where you already have impressions but are not ranking well yet",
            "Suggests content ideas based on keywords that match your domain strength",
            "Connects keyword data to your content pipeline so nothing gets lost",
          ]}
        />
        <Paragraph>
          It is not about generating a massive keyword list. It is about finding
          the 10–20 keywords where you can realistically rank and then helping
          you{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            create content
          </a>{" "}
          that targets them.
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
                Find keywords that actually bring traffic
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and discover keyword opportunities you can
                realistically rank for.
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
