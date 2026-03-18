const capabilities = [
  {
    label: "Search Console integration",
    desc: "Pulls real impression, click, and position data directly into your workflow — no switching between tabs.",
  },
  {
    label: "Keyword performance tracking",
    desc: "See which keywords are driving traffic and which are gaining impressions but not clicks yet.",
  },
  {
    label: "Article performance visibility",
    desc: "Track every article from publish to rank. See what is working and what needs improvement.",
  },
  {
    label: "Opportunity detection",
    desc: "Surfaces pages ranking on positions 8–20 with high impressions — your fastest growth opportunities.",
  },
  {
    label: "Trend insights",
    desc: "Understand whether your organic traffic is growing, stable, or declining — and why.",
  },
];

export function SAHowRankSEO() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              How RankSEO helps
            </p>
            <h2
              id="how-rankseo-helps"
              className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
            >
              How RankSEO turns data into useful insights
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-[15px] leading-[1.7] text-muted">
              Instead of jumping between Search Console, spreadsheets, and your
              CMS, RankSEO brings your SEO analytics into the same place where
              you create and publish content. See what is working, find
              opportunities, and make better decisions — all in one workflow.
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

          {/* Dashboard visual */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)]">
              {/* Header bar */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-foreground">
                  Performance Insights
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-[11px] font-medium text-success">
                    Connected
                  </span>
                </div>
              </div>

              {/* Capabilities list */}
              <div className="space-y-2.5">
                {capabilities.map((c, i) => (
                  <div
                    key={c.label}
                    className="flex items-start gap-3 rounded-xl border border-black/[0.04] bg-border-light/15 p-4 transition-colors hover:bg-border-light/30"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-bg text-[11px] font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-bold text-foreground">
                        {c.label}
                      </h3>
                      <p className="mt-0.5 text-[13px] leading-[1.6] text-muted">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Performance trend bar */}
              <div className="mt-4 rounded-xl bg-accent-bg/30 border border-accent-muted/20 px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-medium text-muted">
                    Organic growth trend
                  </span>
                  <span className="text-[12px] font-semibold text-accent">
                    +31% this quarter
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-accent-muted/30">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
