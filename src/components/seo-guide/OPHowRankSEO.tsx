const improvements = [
  { label: "Title tag", from: "SEO Tips", to: "How to Automate SEO for Small Business", score: "+12" },
  { label: "Meta description", from: "(empty)", to: "Auto-generated, 142 characters", score: "+8" },
  { label: "Heading structure", from: "H1, H1, H3, H2", to: "H1 \u2192 H2 \u2192 H3 \u2192 H2", score: "+10" },
  { label: "Internal links", from: "0 links", to: "4 contextual links suggested", score: "+6" },
  { label: "Topic coverage", from: "2 subtopics", to: "6 subtopics covered", score: "+9" },
];

export function OPHowRankSEO() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Work smarter
          </p>
          <h2 id="how-rankseo-helps" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            How RankSEO simplifies on-page optimization
          </h2>
          <p className="reveal reveal-delay-2 mt-4 mx-auto max-w-[560px] text-[16px] leading-[1.7] text-muted">
            RankSEO checks your page structure, generates stronger metadata,
            suggests internal links, and scores your content &mdash; all before
            you hit publish.
          </p>
        </div>

        {/* Product block: improvement table */}
        <div className="reveal reveal-delay-2 mt-12 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between border-b border-border-light bg-border-light/20 px-6 py-3.5">
            <span className="text-[13px] font-medium text-foreground">On-Page Improvements</span>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-muted">Score:</span>
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[12px] font-bold text-success">88/100</span>
            </div>
          </div>

          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr_60px] gap-3 border-b border-border-light px-6 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-muted-light">
            <span>Element</span>
            <span>Before</span>
            <span>After</span>
            <span className="text-right">Impact</span>
          </div>

          {improvements.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.2fr_1fr_1fr_60px] items-center gap-3 border-b border-border-light/60 px-6 py-3.5 last:border-0 transition-colors hover:bg-border-light/20"
            >
              <span className="text-[14px] font-medium text-foreground">{row.label}</span>
              <span className="text-[13px] text-red-400 line-through decoration-red-200">{row.from}</span>
              <span className="text-[13px] text-accent">{row.to}</span>
              <span className="text-right">
                <span className="rounded-md bg-success-bg px-2 py-0.5 text-[12px] font-semibold text-success">
                  {row.score}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3 mt-8 text-center">
          <a
            href="/pricing"
            className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start $1 Trial
          </a>
        </div>
      </div>
    </section>
  );
}
