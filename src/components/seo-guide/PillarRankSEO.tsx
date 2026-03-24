const features = [
  {
    title: "Keyword discovery",
    desc: "Find keywords with real search volume that match your content and competition level.",
  },
  {
    title: "Content generation",
    desc: "Create structured, SEO-ready content that targets the right queries from the start.",
  },
  {
    title: "On-page optimization",
    desc: "Automatically check titles, headings, meta tags, and internal links for every page.",
  },
  {
    title: "Performance tracking",
    desc: "Connect Search Console data and track impressions, clicks, and rankings over time.",
  },
];

export function PillarRankSEO() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              Where RankSEO fits
            </p>
            <h2
              id="where-rankseo-fits"
              className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
            >
              Where RankSEO fits into this process
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-[15px] leading-[1.7] text-muted">
              RankSEO handles the repetitive parts of SEO so you can focus on
              creating better content and making smarter decisions. It connects
              every stage — from keyword research to performance tracking — in
              one workflow.
            </p>
            <div className="reveal reveal-delay-3 mt-8">
              <a
                href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book a quick call
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 space-y-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[12px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.7] text-muted">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
