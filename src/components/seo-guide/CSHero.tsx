export function CSHero() {
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
              How to create SEO content that{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                actually ranks
              </span>
            </h1>

            <p className="animate-hero-delay-2 mt-6 max-w-[480px] text-[17px] leading-[1.7] text-muted">
              Ranking content isn&apos;t about stuffing keywords into a page.
              It&apos;s about structure, relevance, clarity, and covering the
              right topic well.
            </p>

            <div className="animate-hero-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex h-12 items-center rounded-xl bg-foreground px-8 text-[15px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start $1 Trial
              </a>
            </div>

            <p className="animate-hero-delay-4 mt-5 text-[13px] text-muted-light">
              Better structure. Better rankings.
            </p>
          </div>

          {/* Article editor UI */}
          <div className="animate-hero-delay-3 relative">
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] via-accent-light/[0.03] to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
              {/* Editor top bar */}
              <div className="flex items-center justify-between border-b border-border-light px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-success" />
                  <span className="text-[13px] font-medium text-foreground">Article Editor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                    SEO Score: 91
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_180px]">
                {/* Editor content */}
                <div className="border-r border-border-light p-5">
                  <div className="space-y-3">
                    <div className="rounded-lg bg-border-light/40 px-3 py-2">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-light">Title tag</p>
                      <p className="mt-0.5 text-[13px] font-medium text-foreground">How to Automate SEO for Small Business</p>
                    </div>
                    <div className="space-y-2 px-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold text-accent">H1</span>
                        <span className="text-[13px] font-semibold text-foreground">Automate SEO Without the Complexity</span>
                      </div>
                      <div className="ml-4 flex items-center gap-2">
                        <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                        <span className="text-[12px] text-muted">Why Manual SEO Doesn&apos;t Scale</span>
                      </div>
                      <div className="ml-4 flex items-center gap-2">
                        <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                        <span className="text-[12px] text-muted">What to Automate First</span>
                      </div>
                      <div className="ml-8 flex items-center gap-2">
                        <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted-light">H3</span>
                        <span className="text-[12px] text-muted-light">Keyword Research</span>
                      </div>
                      <div className="ml-8 flex items-center gap-2">
                        <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted-light">H3</span>
                        <span className="text-[12px] text-muted-light">Content Generation</span>
                      </div>
                      <div className="ml-4 flex items-center gap-2">
                        <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                        <span className="text-[12px] text-muted">Tools That Help</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar checklist */}
                <div className="p-4">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-muted-light">SEO Checklist</p>
                  <div className="space-y-2">
                    {[
                      { label: "Title tag", done: true },
                      { label: "Meta description", done: true },
                      { label: "H1 keyword", done: true },
                      { label: "Internal links", done: true },
                      { label: "Image alt text", done: false },
                      { label: "Readability", done: true },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <div className={`flex h-4 w-4 items-center justify-center rounded ${item.done ? "bg-success-bg" : "border border-border"}`}>
                          {item.done && (
                            <svg className="h-2.5 w-2.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-[11px] ${item.done ? "text-muted" : "text-muted-light"}`}>{item.label}</span>
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
