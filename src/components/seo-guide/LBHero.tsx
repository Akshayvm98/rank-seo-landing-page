export function LBHero() {
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
              How link building works{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                when you stop treating it like a hack
              </span>
            </h1>

            <p className="animate-hero-delay-2 mt-6 max-w-[480px] text-[17px] leading-[1.7] text-muted">
              Links still matter for SEO, but not all links are equal. The best
              link building strategies focus on earning attention, not gaming
              algorithms.
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
              Better content. Better links. Better authority.
            </p>
          </div>

          {/* Authority / backlink UI */}
          <div className="animate-hero-delay-3 relative">
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] via-accent-light/[0.03] to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border-light px-5 py-3.5">
                <span className="text-[13px] font-medium text-foreground">Link Authority Dashboard</span>
                <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                  Authority: 72
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* Backlink sources */}
                <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">Backlink Sources</span>
                  <div className="mt-2 space-y-2">
                    {[
                      { domain: "techblog.io", authority: "DA 68", type: "Editorial" },
                      { domain: "startupweekly.com", authority: "DA 54", type: "Resource" },
                      { domain: "seoinsights.org", authority: "DA 47", type: "Guest post" },
                    ].map((source) => (
                      <div key={source.domain} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757" />
                          </svg>
                          <span className="text-[12px] font-medium text-foreground">{source.domain}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-muted-light">{source.type}</span>
                          <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold text-accent">{source.authority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Internal link connections */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Internal Links</span>
                    <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">12 connections</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { from: "/keyword-research", to: "/content-seo" },
                      { from: "/content-seo", to: "/link-building" },
                      { from: "/on-page-seo", to: "/link-building" },
                    ].map((link) => (
                      <div key={`${link.from}-${link.to}`} className="flex items-center gap-2 text-[12px]">
                        <span className="text-muted">{link.from}</span>
                        <svg className="h-3 w-3 text-muted-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        <span className="text-accent">{link.to}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Article clusters */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Topic Clusters</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Link Building", "Content Strategy", "Technical SEO", "Keyword Research"].map((cluster) => (
                      <span
                        key={cluster}
                        className="rounded-lg border border-border-light bg-white px-2.5 py-1 text-[11px] font-medium text-foreground"
                      >
                        {cluster}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] text-muted-light">4 clusters &middot; 18 linked pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
