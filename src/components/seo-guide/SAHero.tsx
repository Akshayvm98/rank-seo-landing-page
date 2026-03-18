export function SAHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[720px] px-6">
        <p className="animate-hero mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
          SEO Guide
        </p>
        <h1 className="animate-hero-delay-1 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          How to know if your SEO is{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            actually working
          </span>
        </h1>

        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          SEO analytics is not about tracking everything. It is about
          understanding the few signals that show what is improving and what
          needs attention.
        </p>

        <div className="animate-hero-delay-3 mt-7 flex flex-wrap items-center gap-3">
          <a
            href="/pricing"
            className="inline-flex h-11 items-center rounded-xl bg-foreground px-7 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start $1 Trial
          </a>
          <a
            href="/features"
            className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-[13px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
          >
            View Features
          </a>
        </div>

        {/* Analytics dashboard UI */}
        <div className="animate-hero-delay-3 mt-8">
          <div className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-3">
              <span className="text-[13px] font-medium text-foreground">Organic Performance</span>
              <span className="rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
                Last 30 days
              </span>
            </div>

            <div className="p-4 space-y-3">
              {/* Metric cards */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Impressions", value: "186K", change: "+18%" },
                  { label: "Clicks", value: "9,241", change: "+24%" },
                  { label: "CTR", value: "4.97%", change: "+0.8%" },
                  { label: "Avg Pos", value: "12.8", change: "-2.4" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border-light bg-border-light/20 px-2.5 py-2 text-center"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wide text-muted-light">
                      {m.label}
                    </p>
                    <p className="mt-0.5 text-[14px] font-bold text-foreground">
                      {m.value}
                    </p>
                    <span className="text-[10px] font-semibold text-success">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Impressions graph */}
              <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-2.5">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">
                    Impressions
                  </span>
                  <span className="text-[10px] font-semibold text-accent">
                    +18% vs prev.
                  </span>
                </div>
                <div className="flex items-end justify-between gap-[3px] h-[40px]">
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

              {/* Top keywords */}
              <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-2.5">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-light">
                  Top Keywords
                </p>
                <div className="space-y-1">
                  {[
                    { kw: "seo analytics guide", pos: "4", clicks: "1,240" },
                    { kw: "track seo performance", pos: "7", clicks: "892" },
                    { kw: "search console metrics", pos: "6", clicks: "761" },
                  ].map((k) => (
                    <div
                      key={k.kw}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[12px] font-medium text-foreground">{k.kw}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-light">
                          pos {k.pos}
                        </span>
                        <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold text-accent">
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
