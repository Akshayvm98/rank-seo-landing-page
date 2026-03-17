const steps = [
  {
    label: "Check crawlability of important pages",
    description: "Use Google Search Console or a crawl tool to verify bots can access your key pages. Look for crawl errors, redirect chains, and orphan pages.",
    status: "pass",
  },
  {
    label: "Confirm pages can be indexed",
    description: "Check that important pages don\u2019t have noindex tags, canonical issues, or duplicate content problems preventing indexing.",
    status: "pass",
  },
  {
    label: "Review site speed and Core Web Vitals",
    description: "Run PageSpeed Insights on your top pages. Focus on LCP, INP, and CLS. Prioritize the fixes with the biggest impact first.",
    status: "warn",
  },
  {
    label: "Validate robots.txt and sitemap",
    description: "Make sure robots.txt isn\u2019t blocking important pages. Confirm your sitemap is up to date, submitted to Search Console, and includes all key URLs.",
    status: "pass",
  },
  {
    label: "Improve internal linking and structure",
    description: "Add contextual links between related pages. Flatten deep page hierarchies. Make sure no important page is more than 3 clicks from the homepage.",
    status: "warn",
  },
  {
    label: "Monitor issues over time",
    description: "Technical SEO isn\u2019t a one-time fix. Set up regular crawls and alerts so you catch new issues before they affect rankings.",
    status: "pass",
  },
];

export function TSWorkflow() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Your workflow
          </p>
          <h2 id="workflow" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            A simple technical SEO workflow that keeps you focused
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Work through these in order. Most sites only need to get these six
            things right to have a solid technical foundation.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-12 grid gap-6 md:grid-cols-[1fr_220px]">
          {/* Checklist panel */}
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)]">
            <div className="space-y-1">
              {steps.map((step, i) => (
                <div
                  key={step.label}
                  className="flex items-start gap-3 rounded-xl px-3 py-3.5 transition-colors hover:bg-border-light/30"
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                      step.status === "pass"
                        ? "bg-success-bg"
                        : "bg-amber-50"
                    }`}
                  >
                    {step.status === "pass" ? (
                      <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="h-3 w-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <span className="text-[14px] font-medium leading-[1.5] text-foreground">
                      {i + 1}. {step.label}
                    </span>
                    <p className="mt-1 text-[13px] leading-[1.6] text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary sidebar */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light">Health Score</p>
              <p className="mt-2 text-[40px] font-bold leading-none tracking-tight text-foreground">91</p>
              <p className="mt-1 text-[12px] text-success font-medium">Good</p>
            </div>

            <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light mb-3">Progress</p>
              <div className="space-y-2 text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Completed</span>
                  <span className="font-semibold text-success">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Needs work</span>
                  <span className="font-semibold text-amber-500">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Critical</span>
                  <span className="font-semibold text-muted-light">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
