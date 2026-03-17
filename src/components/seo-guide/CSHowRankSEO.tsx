const capabilities = [
  {
    title: "Finds the right keyword first",
    description:
      "RankSEO pulls real Search Console data to surface keywords where you already have impressions. You start writing with a proven opportunity, not a guess.",
  },
  {
    title: "Generates structured drafts",
    description:
      "Every article is generated with a clear H1\u2013H3 hierarchy, proper topic coverage, and your brand voice. The structure is SEO-ready from the start.",
  },
  {
    title: "Suggests metadata automatically",
    description:
      "Title tags, meta descriptions, and Open Graph data are generated for every article. No more blank fields or afterthought meta descriptions.",
  },
  {
    title: "Improves internal linking",
    description:
      "RankSEO identifies linking opportunities across your existing content and suggests relevant internal links for every new article.",
  },
  {
    title: "Checks SEO score before publishing",
    description:
      "Every article gets a score based on structure, keyword usage, readability, and completeness. Fix issues before they cost you rankings.",
  },
];

export function CSHowRankSEO() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              Work smarter
            </p>
            <h2 id="how-rankseo-helps"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              How RankSEO makes content SEO easier
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-[15px] leading-[1.7] text-muted">
              Everything in this guide can be done manually. But when you&apos;re
              publishing consistently, automation turns a slow process into a
              repeatable system.
            </p>
            <div className="reveal reveal-delay-3 mt-8">
              <a
                href="/pricing"
                className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start $1 Trial
              </a>
            </div>
          </div>

          {/* Feature list */}
          <div className="reveal reveal-delay-2 space-y-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[12px] font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">{cap.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.7] text-muted">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
