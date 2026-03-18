import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function KeywordDifficulty() {
  return (
    <>
      <ArticleHero
        title="How to tell if a keyword is actually worth targeting"
        subtitle="Keyword difficulty scores can be misleading. Here is how to evaluate whether you can realistically rank — and whether you should even try."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What keyword difficulty actually means */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-keyword-difficulty" title="What keyword difficulty actually means">
        <Paragraph>
          Keyword difficulty is a score that estimates how hard it will be to
          rank on the first page for a given keyword. Most SEO tools show it as
          a number from 0 to 100.
        </Paragraph>
        <Paragraph>
          The problem is that different tools calculate it differently. One tool
          might rate a keyword as 35 while another rates the same keyword as 62.
          They are measuring different things — backlinks, domain authority,
          content quality, SERP features — and weighting them differently.
        </Paragraph>
        <Paragraph>
          That does not make the score useless. It gives you a starting point.
          But if you rely on a single number to decide what to target, you will
          either avoid winnable keywords or waste months chasing ones you cannot
          win.
        </Paragraph>
        <Callout>
          Think of keyword difficulty as a rough filter, not a verdict. It tells
          you where to look closer — not whether to write.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why scores are misleading */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-scores-mislead" title="Why difficulty scores can mislead you">
        <Paragraph>
          Most difficulty scores are based primarily on backlinks — how many
          links the top-ranking pages have. But ranking depends on much more
          than that.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>They ignore content quality.</strong> A page with 200
              backlinks but outdated, thin content can be beaten by a thorough,
              well-structured guide with fewer links.
            </span>,
            <span key="2">
              <strong>They ignore search intent alignment.</strong> If every
              result is a listicle and you write a better listicle that matches
              intent more precisely, you can outrank stronger domains.
            </span>,
            <span key="3">
              <strong>They ignore your site&apos;s specific strengths.</strong>{" "}
              A difficulty score of 50 means something very different for a
              brand-new blog versus a site with established topical authority.
            </span>,
            <span key="4">
              <strong>They miss SERP weaknesses.</strong> Sometimes the top
              results are forums, outdated articles, or off-topic pages. The
              score might be high, but the competition is actually weak.
            </span>,
          ]}
        />
        <Paragraph>
          This is why you need to go beyond the number. The score gets you to
          the right neighborhood. Your own analysis tells you if you can move in.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Difficulty spectrum visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="difficulty-spectrum" title="The difficulty spectrum">
        <Paragraph>
          Here is a practical way to think about keyword difficulty ranges and
          what they typically mean for your chances of ranking.
        </Paragraph>

        <div className="mt-6 space-y-3">
          {[
            {
              range: "0 – 20",
              label: "Easy",
              desc: "Low competition. New sites can rank with solid content and basic on-page SEO. Few backlinks needed.",
              example: "\"what is anchor text\", \"how to add alt text\"",
              color: "border-emerald-100/60 bg-emerald-50/30",
              badge: "text-emerald-600 bg-emerald-50",
              bar: "w-[20%] bg-emerald-400",
            },
            {
              range: "21 – 40",
              label: "Medium",
              desc: "Moderate competition. You need good content, some topical authority, and a few quality backlinks.",
              example: "\"keyword research tips\", \"how to improve site speed\"",
              color: "border-amber-100/60 bg-amber-50/30",
              badge: "text-amber-600 bg-amber-50",
              bar: "w-[40%] bg-amber-400",
            },
            {
              range: "41 – 60",
              label: "Hard",
              desc: "Strong competition. Established sites with good backlink profiles dominate. Requires strong content, authority, and link building.",
              example: "\"best SEO tools\", \"email marketing platforms\"",
              color: "border-orange-100/60 bg-orange-50/30",
              badge: "text-orange-600 bg-orange-50",
              bar: "w-[60%] bg-orange-400",
            },
            {
              range: "61 – 100",
              label: "Very Hard",
              desc: "Dominated by high-authority sites (Wikipedia, major publications, enterprise SaaS). Extremely difficult for newer or smaller sites.",
              example: "\"SEO\", \"project management\", \"CRM\"",
              color: "border-red-100/60 bg-red-50/30",
              badge: "text-red-600 bg-red-50",
              bar: "w-full bg-red-400",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-5 ${item.color} transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-block rounded-lg px-2.5 py-1 text-[12px] font-bold ${item.badge}`}
                >
                  {item.label}
                </span>
                <span className="text-[13px] font-semibold text-foreground">
                  {item.range}
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-black/[0.04]">
                <div className={`h-2 rounded-full ${item.bar}`} />
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-muted">
                {item.desc}
              </p>
              <p className="mt-2 text-[12px] italic text-muted">
                e.g. {item.example}
              </p>
            </div>
          ))}
        </div>

        <Callout type="info">
          These ranges are general guidelines, not rules. A keyword at 45
          difficulty might be easy for a site with strong topical authority in
          that niche — and impossible for a brand-new site targeting an
          unrelated topic.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What to actually evaluate */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-to-evaluate" title="What to actually evaluate">
        <Paragraph>
          Instead of trusting a score, look at the SERP yourself. Here is what
          to check:
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Who is ranking?",
              text: "Are the top results from major authority sites (Forbes, Wikipedia, HubSpot) or from smaller, niche sites? If smaller sites are ranking, you have a chance.",
            },
            {
              title: "How good is their content?",
              text: "Open the top 3 results. Is the content thorough, well-structured, and up to date? Or is it thin, outdated, or clearly auto-generated? Weak content is an opportunity.",
            },
            {
              title: "Do they match intent?",
              text: "Are the ranking pages actually answering what the searcher wants? If the top results miss the intent or only partially address it, you can win by being more precise.",
            },
            {
              title: "How many backlinks do they have?",
              text: "Check the top 3 results in a tool like Ahrefs or Moz. If they have hundreds of referring domains, you need a strong link profile. If they have under 20, content quality matters more.",
            },
            {
              title: "Are there SERP features?",
              text: "Featured snippets, People Also Ask boxes, and knowledge panels can push organic results down. Check if there is still room for a standard result to get clicks.",
            },
          ]}
        />
        <Paragraph>
          This manual check takes 5 minutes per keyword. But it tells you more
          than any difficulty score ever will.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* SERP strength comparison visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="serp-comparison" title="Example: reading SERP strength">
        <Paragraph>
          Let&apos;s compare two keywords with similar difficulty scores but
          very different real-world competition.
        </Paragraph>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              keyword: "best project management software",
              score: "72",
              results: [
                { domain: "forbes.com", da: "95", links: "1,200+" },
                { domain: "g2.com", da: "92", links: "800+" },
                { domain: "pcmag.com", da: "93", links: "600+" },
              ],
              verdict: "Extremely competitive",
              verdictColor: "text-red-600 bg-red-50",
              note: "Dominated by high-authority review sites. Very difficult for a new or niche site to break in.",
            },
            {
              keyword: "project management for freelancers",
              score: "68",
              results: [
                { domain: "freelanceblog.io", da: "38", links: "15" },
                { domain: "solopreneur.com", da: "42", links: "22" },
                { domain: "notion.so", da: "85", links: "45" },
              ],
              verdict: "Winnable with effort",
              verdictColor: "text-emerald-600 bg-emerald-50",
              note: "Despite a similar score, the actual competition is much weaker. Niche sites are ranking with few links.",
            },
          ].map((kw) => (
            <div
              key={kw.keyword}
              className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
            >
              <p className="text-[13px] font-semibold text-foreground">
                &ldquo;{kw.keyword}&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[11px] font-medium text-muted">
                  KD Score:
                </span>
                <span className="rounded bg-border-light px-2 py-0.5 text-[12px] font-bold text-foreground">
                  {kw.score}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {kw.results.map((r) => (
                  <div
                    key={r.domain}
                    className="flex items-center justify-between rounded-lg border border-black/[0.04] bg-border-light/15 px-3 py-2"
                  >
                    <span className="text-[12px] font-medium text-foreground">
                      {r.domain}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted">
                        DA {r.da}
                      </span>
                      <span className="text-[10px] text-muted">
                        {r.links} links
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-border-light/30 px-4 py-3">
                <span
                  className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-bold ${kw.verdictColor}`}
                >
                  {kw.verdict}
                </span>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-muted">
                  {kw.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Paragraph>
          The scores are close — 72 vs 68. But the reality is completely
          different. One is a wall of authority sites. The other has niche
          blogs ranking with minimal links. This is why you check the SERP,
          not just the score.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common mistakes with keyword difficulty">
        <BulletList
          items={[
            <span key="1">
              <strong>Only targeting easy keywords.</strong> If you only go
              after 0–10 difficulty keywords, you will rank — but for queries
              nobody searches. Balance difficulty with volume and intent.
            </span>,
            <span key="2">
              <strong>Avoiding all hard keywords.</strong> Some high-difficulty
              keywords are worth targeting long-term. Build topical authority
              first with easier keywords in the same cluster, then go after the
              harder ones.
            </span>,
            <span key="3">
              <strong>Trusting the score blindly.</strong> The score is an
              estimate based on limited signals. Always verify by looking at
              the actual SERP.
            </span>,
            <span key="4">
              <strong>Ignoring your own authority.</strong> A keyword at
              difficulty 40 might be easy if you already have 50 articles in
              that topic cluster. Your existing authority matters.
            </span>,
            <span key="5">
              <strong>Not considering{" "}
              <a
                href="/seo-guide/keyword-research/search-intent"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                search intent
              </a>
              .</strong>{" "}
              Difficulty without intent analysis is incomplete. A keyword
              might be easy to rank for but impossible to match if the intent
              requires a product page you do not have.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps you evaluate difficulty">
        <Paragraph>
          Checking every keyword manually works, but it does not scale.
          RankSEO combines difficulty scores with SERP analysis so you can
          evaluate keywords faster and more accurately.
        </Paragraph>
        <BulletList
          items={[
            "Shows keyword difficulty alongside SERP composition so you see the full picture",
            "Identifies weak spots in the SERP — outdated content, low-authority domains, poor intent matches",
            "Factors in your site's existing authority and topical coverage",
            "Surfaces keywords where the difficulty score is high but the real competition is beatable",
          ]}
        />
        <Paragraph>
          The goal is not to avoid hard keywords — it is to find the ones
          where your effort has the best chance of paying off. For a
          practical workflow, see the{" "}
          <a
            href="/seo-guide/keyword-research/how-to-find-easy-keywords"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            easy keywords guide
          </a>{" "}
          and the{" "}
          <a
            href="/seo-guide/keyword-research"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword research overview
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
            question: "What is a good keyword difficulty score to target?",
            answer: (
              <p>
                For newer or smaller sites, aim for keywords with a difficulty score between 0 and 30. Sites with some established authority can target scores up to 40 or 50. However, the score is only a starting point — always check the actual SERP to see who is ranking and whether their content is beatable. A score of 40 might be easy if the top results are thin or outdated.
              </p>
            ),
            answerText:
              "For newer or smaller sites, aim for keywords with a difficulty score between 0 and 30. Sites with some established authority can target scores up to 40 or 50. However, the score is only a starting point — always check the actual SERP to see who is ranking and whether their content is beatable. A score of 40 might be easy if the top results are thin or outdated.",
          },
          {
            question: "Why do keyword difficulty scores differ between SEO tools?",
            answer: (
              <p>
                Each tool uses a different formula. Some weight backlinks heavily, others factor in domain authority, content quality, or SERP features. Ahrefs, Moz, and Semrush can give wildly different scores for the same keyword because they measure different signals and use different scales. Use one tool consistently for relative comparisons rather than treating any single score as absolute truth.
              </p>
            ),
            answerText:
              "Each tool uses a different formula. Some weight backlinks heavily, others factor in domain authority, content quality, or SERP features. Ahrefs, Moz, and Semrush can give wildly different scores for the same keyword because they measure different signals and use different scales. Use one tool consistently for relative comparisons rather than treating any single score as absolute truth.",
          },
          {
            question: "Can you rank for high difficulty keywords with a new site?",
            answer: (
              <p>
                It is very difficult but not impossible. The strategy is to build topical authority first by ranking for{" "}
                <a href="/seo-guide/keyword-research/how-to-find-easy-keywords" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">easier keywords</a>
                {" "}in the same topic area, then gradually target harder terms as your site gains authority and backlinks. Trying to rank for high-difficulty keywords on day one almost always fails.
              </p>
            ),
            answerText:
              "It is very difficult but not impossible. The strategy is to build topical authority first by ranking for easier keywords in the same topic area, then gradually target harder terms as your site gains authority and backlinks. Trying to rank for high-difficulty keywords on day one almost always fails.",
          },
          {
            question: "What is the difference between domain authority and keyword difficulty?",
            answer: (
              <p>
                Domain authority measures the overall strength of your entire website based on backlinks and trust signals. Keyword difficulty estimates how hard it is to rank for a specific keyword based on the competition in the SERP. A high domain authority makes it easier to rank for harder keywords, but they are separate metrics. You can have strong domain authority and still struggle with a keyword if the SERP is dominated by even stronger sites.
              </p>
            ),
            answerText:
              "Domain authority measures the overall strength of your entire website based on backlinks and trust signals. Keyword difficulty estimates how hard it is to rank for a specific keyword based on the competition in the SERP. A high domain authority makes it easier to rank for harder keywords, but they are separate metrics. You can have strong domain authority and still struggle with a keyword if the SERP is dominated by even stronger sites.",
          },
          {
            question: "How can I check keyword difficulty without paid tools?",
            answer: (
              <p>
                Search the keyword in Google and manually evaluate the results. Look at who is ranking — are they large authority sites or smaller niche blogs? Check if the content is thorough or thin. Look for outdated pages, forums, or user-generated content in the top results, which signal weaker competition. This manual SERP analysis is often more accurate than any automated score.
              </p>
            ),
            answerText:
              "Search the keyword in Google and manually evaluate the results. Look at who is ranking — are they large authority sites or smaller niche blogs? Check if the content is thorough or thin. Look for outdated pages, forums, or user-generated content in the top results, which signal weaker competition. This manual SERP analysis is often more accurate than any automated score.",
          },
          {
            question: "Should beginners avoid hard keywords entirely?",
            answer: (
              <p>
                Not entirely, but you should prioritize easier wins first. Start by targeting low-difficulty keywords to build traffic and authority, then work your way up. You can still create content for harder keywords as part of a long-term{" "}
                <a href="/seo-guide/keyword-research/keyword-clustering" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">keyword cluster</a>
                {" "}strategy — just do not expect those pages to rank quickly. Think of hard keywords as a 6 to 12 month investment rather than a quick win.
              </p>
            ),
            answerText:
              "Not entirely, but you should prioritize easier wins first. Start by targeting low-difficulty keywords to build traffic and authority, then work your way up. You can still create content for harder keywords as part of a long-term keyword cluster strategy — just do not expect those pages to rank quickly. Think of hard keywords as a 6 to 12 month investment rather than a quick win.",
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
                Stop guessing which keywords you can win
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and see real difficulty analysis — not just
                a number.
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
