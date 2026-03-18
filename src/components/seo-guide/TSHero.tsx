export function TSHero() {
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
          Technical SEO{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            without the unnecessary complexity
          </span>
        </h1>

        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          Technical SEO is about making your site easier for search engines
          to crawl, index, and load. Get the foundations right and
          everything else works better.
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

        {/* Technical SEO dashboard UI */}
        <div className="animate-hero-delay-3 mt-8">
          <div className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-3">
              <span className="text-[13px] font-medium text-foreground">Technical SEO Dashboard</span>
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                Health: 91/100
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">Crawl Status</span>
                <div className="mt-1.5 flex items-center gap-4">
                  <div>
                    <p className="text-[18px] font-bold text-foreground">247</p>
                    <p className="text-[10px] text-muted-light">Pages crawled</p>
                  </div>
                  <div className="h-7 w-px bg-border-light" />
                  <div>
                    <p className="text-[18px] font-bold text-success">98%</p>
                    <p className="text-[10px] text-muted-light">Crawlable</p>
                  </div>
                  <div className="h-7 w-px bg-border-light" />
                  <div>
                    <p className="text-[18px] font-bold text-foreground">3</p>
                    <p className="text-[10px] text-muted-light">Blocked</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-success-bg/50 px-2.5 py-2 text-center">
                  <p className="text-[14px] font-bold text-success">1.2s</p>
                  <p className="text-[10px] text-muted-light">LCP</p>
                </div>
                <div className="rounded-lg bg-success-bg/50 px-2.5 py-2 text-center">
                  <p className="text-[14px] font-bold text-success">45ms</p>
                  <p className="text-[10px] text-muted-light">INP</p>
                </div>
                <div className="rounded-lg bg-success-bg/50 px-2.5 py-2 text-center">
                  <p className="text-[14px] font-bold text-success">0.03</p>
                  <p className="text-[10px] text-muted-light">CLS</p>
                </div>
              </div>

              <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Page Speed</span>
                  <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Fast</span>
                </div>
                <div className="h-2 rounded-full bg-border-light">
                  <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-accent to-success" />
                </div>
                <p className="mt-1 text-[11px] text-muted-light">Average load: 1.4s · 88th percentile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
