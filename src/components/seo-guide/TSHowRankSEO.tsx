const healthCards = [
  { label: "Crawlability", value: "98%", status: "Healthy", trend: "+2%" },
  { label: "Indexed pages", value: "241/247", status: "Good", trend: "+6" },
  { label: "Avg. load time", value: "1.4s", status: "Fast", trend: "-0.3s" },
  { label: "Core Web Vitals", value: "Passing", status: "All green", trend: "Stable" },
  { label: "Sitemap", value: "Valid", status: "247 URLs", trend: "Updated" },
  { label: "Broken links", value: "2", status: "Minor", trend: "-5" },
];

export function TSHowRankSEO() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Work smarter
          </p>
          <h2 id="how-rankseo-helps" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            How RankSEO helps keep technical SEO visible
          </h2>
          <p className="reveal reveal-delay-2 mt-4 mx-auto max-w-[560px] text-[16px] leading-[1.7] text-muted">
            RankSEO connects your keyword and content workflows to real site
            performance data, so technical issues don&apos;t silently undermine
            your content work.
          </p>
        </div>

        {/* Product block: health cards + performance summary */}
        <div className="reveal reveal-delay-2 mt-12 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between border-b border-border-light bg-border-light/20 px-6 py-3.5">
            <span className="text-[13px] font-medium text-foreground">Site Health Overview</span>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-muted">Overall:</span>
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[12px] font-bold text-success">91/100</span>
            </div>
          </div>

          {/* Health cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3">
            {healthCards.map((card, i) => (
              <div
                key={card.label}
                className={`px-5 py-4 transition-colors hover:bg-border-light/20 ${
                  i < healthCards.length - (healthCards.length % 3 === 0 ? 3 : healthCards.length % 3)
                    ? "border-b border-border-light/60"
                    : ""
                } ${(i + 1) % 3 !== 0 ? "md:border-r md:border-r-border-light/60" : ""} ${
                  (i + 1) % 2 !== 0 ? "border-r border-r-border-light/60 md:border-r-0" : ""
                } md:border-r ${(i + 1) % 3 === 0 ? "md:!border-r-0" : "md:border-r-border-light/60"}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">{card.label}</p>
                <p className="mt-1.5 text-[20px] font-bold text-foreground">{card.value}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[12px] text-success font-medium">{card.status}</span>
                  <span className="text-[11px] text-muted-light">{card.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Performance summary bar */}
          <div className="border-t border-border-light bg-border-light/10 px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-medium text-foreground">Performance trend (last 30 days)</span>
              <span className="text-[12px] text-success font-medium">Improving</span>
            </div>
            <div className="h-2 rounded-full bg-border-light">
              <div className="h-2 w-[91%] rounded-full bg-gradient-to-r from-accent to-success" />
            </div>
            <div className="mt-2 flex items-center gap-4 text-[11px] text-muted-light">
              <span>Crawl errors: 0</span>
              <span>Index coverage: 97.6%</span>
              <span>Speed: Good</span>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-8 text-center">
          <a
            href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a quick call
          </a>
        </div>
      </div>
    </section>
  );
}
