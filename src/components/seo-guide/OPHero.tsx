export function OPHero() {
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
              How to improve on-page SEO{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                without overcomplicating it
              </span>
            </h1>

            <p className="animate-hero-delay-2 mt-6 max-w-[480px] text-[17px] leading-[1.7] text-muted">
              On-page SEO is mostly about making your pages clearer, better
              structured, and easier for both search engines and people to
              understand.
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
              Better pages. Better signals. Better rankings.
            </p>
          </div>

          {/* Page optimization UI */}
          <div className="animate-hero-delay-3 relative">
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] via-accent-light/[0.03] to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border-light px-5 py-3.5">
                <span className="text-[13px] font-medium text-foreground">Page Optimizer</span>
                <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                  Score: 88/100
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* Title tag */}
                <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">Title tag</span>
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[13px] font-medium text-foreground">How to Automate SEO for Small Business | RankSEO</p>
                  <p className="mt-0.5 text-[11px] text-muted-light">58 characters &middot; Includes primary keyword</p>
                </div>

                {/* Meta description */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Meta description</span>
                    <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[12px] leading-[1.5] text-muted">Learn how to automate keyword research, content creation, and publishing for your small business SEO workflow.</p>
                  <p className="mt-0.5 text-[11px] text-muted-light">142 characters</p>
                </div>

                {/* Headings */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Heading structure</span>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold text-accent">H1</span>
                      <span className="text-[12px] text-foreground">Automate SEO for Small Business</span>
                    </div>
                    <div className="ml-3 flex items-center gap-2">
                      <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                      <span className="text-[12px] text-muted">Why Manual SEO Doesn&apos;t Scale</span>
                    </div>
                    <div className="ml-3 flex items-center gap-2">
                      <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                      <span className="text-[12px] text-muted">What to Automate First</span>
                    </div>
                  </div>
                </div>

                {/* Internal links */}
                <div className="rounded-lg border border-border-light bg-border-light/20 px-4 py-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Internal links</span>
                    <span className="rounded-full bg-accent-bg px-2 py-0.5 text-[10px] font-medium text-accent">3 suggestions</span>
                  </div>
                  <div className="space-y-1">
                    {["Keyword Research Guide", "Content SEO Guide", "Pricing"].map((link) => (
                      <div key={link} className="flex items-center gap-2 text-[12px]">
                        <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757" />
                        </svg>
                        <span className="text-accent">{link}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
