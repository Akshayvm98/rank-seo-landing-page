export function SAHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="animate-hero mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              SEO Analytics Guide
            </p>
            <h1 className="animate-hero-delay-1 text-[2.5rem] font-bold leading-[1.08] tracking-[-0.035em] text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
              How to know if your SEO is{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                actually working
              </span>
            </h1>
            <p className="animate-hero-delay-2 mt-6 max-w-[480px] text-[17px] leading-[1.7] text-muted">
              SEO analytics is not about tracking everything. It is about
              understanding the few signals that show what is improving and what
              needs attention.
            </p>
            <div className="animate-hero-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center rounded-xl bg-foreground px-8 text-[15px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start $1 Trial
              </a>
              <a
                href="/features"
                className="inline-flex h-12 items-center rounded-xl border border-border px-6 text-[14px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
              >
                View Features
              </a>
            </div>
            <p className="animate-hero-delay-4 mt-5 text-[13px] text-muted-light">
              Clear data. Better decisions.
            </p>
          </div>

          {/* Analytics dashboard visual */}
          <div className="animate-hero-delay-3 relative">
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] via-accent-light/[0.03] to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-foreground">
                  Organic Performance
                </span>
                <span className="rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
                  Last 30 days
                </span>
              </div>

              {/* Metric cards row */}
              <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Impressions", value: "186K", change: "+18%" },
                  { label: "Clicks", value: "9,241", change: "+24%" },
                  { label: "CTR", value: "4.97%", change: "+0.8%" },
                  { label: "Avg Position", value: "12.8", change: "-2.4" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-black/[0.04] bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wide text-muted-light">
                      {m.label}
                    </p>
                    <p className="mt-1 text-[18px] font-bold tracking-tight text-foreground">
                      {m.value}
                    </p>
                    <span className="text-[11px] font-semibold text-success">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Impressions graph */}
              <div className="mb-3 rounded-xl border border-black/[0.04] bg-gradient-to-b from-accent-bg/30 to-white p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-muted">
                    Impressions
                  </span>
                  <span className="text-[11px] font-semibold text-accent">
                    +18% vs prev.
                  </span>
                </div>
                <div className="flex items-end justify-between gap-[3px] h-[56px]">
                  {[28, 32, 30, 38, 42, 40, 48, 52, 50, 58, 62, 68, 72, 78].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-accent/25"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Clicks graph */}
              <div className="rounded-xl border border-black/[0.04] bg-gradient-to-b from-accent-bg/20 to-white p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-muted">
                    Clicks
                  </span>
                  <span className="text-[11px] font-semibold text-accent">
                    +24% vs prev.
                  </span>
                </div>
                <div className="flex items-end justify-between gap-[3px] h-[56px]">
                  {[22, 28, 25, 35, 32, 42, 38, 50, 48, 55, 60, 65, 70, 78].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-accent to-accent-light/70"
                        style={{ height: `${h}%`, opacity: 0.45 + h / 180 }}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Top keywords */}
              <div className="mt-3 rounded-xl border border-black/[0.04] bg-white p-4">
                <p className="mb-2 text-[11px] font-medium text-muted">
                  Top Keywords
                </p>
                <div className="space-y-1.5">
                  {[
                    { kw: "seo analytics guide", pos: "4", clicks: "1,240" },
                    { kw: "track seo performance", pos: "7", clicks: "892" },
                    { kw: "search console metrics", pos: "6", clicks: "761" },
                    { kw: "organic traffic tracking", pos: "11", clicks: "438" },
                  ].map((k) => (
                    <div
                      key={k.kw}
                      className="flex items-center justify-between rounded-lg bg-border-light/30 px-3 py-1.5"
                    >
                      <span className="text-[12px] text-foreground">{k.kw}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-muted">
                          pos {k.pos}
                        </span>
                        <span className="text-[11px] font-medium text-accent">
                          {k.clicks}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
