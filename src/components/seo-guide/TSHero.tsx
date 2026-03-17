export function TSHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="animate-hero mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              SEO Guide
            </p>
            <h1 className="animate-hero-delay-1 text-[2.5rem] font-bold leading-[1.08] tracking-[-0.035em] text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
              Technical SEO{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                without the unnecessary complexity
              </span>
            </h1>

            <p className="animate-hero-delay-2 mt-6 max-w-[480px] text-[17px] leading-[1.7] text-muted">
              Technical SEO is about making your site easier for search engines
              to crawl, index, and load. Get the foundations right and
              everything else works better.
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
              Faster pages. Better crawling. Stronger indexing.
            </p>
          </div>

          {/* Technical SEO dashboard UI */}
          <div className="animate-hero-delay-3 relative">
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] via-accent-light/[0.03] to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border-light px-5 py-3.5">
                <span className="text-[13px] font-medium text-foreground">Technical SEO Dashboard</span>
                <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                  Health: 91/100
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* Crawl status */}
                <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">Crawl Status</span>
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-[20px] font-bold text-foreground">247</p>
                      <p className="text-[11px] text-muted-light">Pages crawled</p>
                    </div>
                    <div className="h-8 w-px bg-border-light" />
                    <div>
                      <p className="text-[20px] font-bold text-success">98%</p>
                      <p className="text-[11px] text-muted-light">Crawlable</p>
                    </div>
                    <div className="h-8 w-px bg-border-light" />
                    <div>
                      <p className="text-[20px] font-bold text-foreground">3</p>
                      <p className="text-[11px] text-muted-light">Blocked</p>
                    </div>
                  </div>
                </div>

                {/* Sitemap health */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Sitemap Health</span>
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-muted">sitemap.xml</span>
                      <span className="font-medium text-success">Valid &middot; 247 URLs</span>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-muted">robots.txt</span>
                      <span className="font-medium text-success">Configured</span>
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Core Web Vitals</span>
                  <div className="mt-2 grid grid-cols-3 gap-3">
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
                </div>

                {/* Page speed */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Page Speed</span>
                    <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-medium text-success">Fast</span>
                  </div>
                  <div className="h-2 rounded-full bg-border-light">
                    <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-accent to-success" />
                  </div>
                  <p className="mt-1 text-[11px] text-muted-light">Average load: 1.4s &middot; 88th percentile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
