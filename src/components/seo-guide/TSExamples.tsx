const issues = [
  {
    problem: "Important pages blocked by robots.txt",
    fix: "Update robots.txt rules to allow crawling of key pages and resources.",
    severity: "High",
  },
  {
    problem: "Pages not indexed due to noindex tag",
    fix: "Remove noindex or check CMS configuration that may be adding it automatically.",
    severity: "High",
  },
  {
    problem: "Slow-loading pages hurting user experience",
    fix: "Optimize images, reduce JavaScript bundles, and enable compression.",
    severity: "Medium",
  },
  {
    problem: "Missing or outdated sitemap",
    fix: "Generate an updated sitemap and submit it through Google Search Console.",
    severity: "Medium",
  },
  {
    problem: "Weak internal linking leaving pages orphaned",
    fix: "Add contextual links between related pages to improve discoverability.",
    severity: "Medium",
  },
];

export function TSExamples() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Real examples
          </p>
          <h2 id="examples" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Examples of technical SEO issues that quietly hurt rankings
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            These are the kinds of problems that don&apos;t show up in your
            content but silently prevent pages from performing.
          </p>
        </div>

        {/* Issue/fix cards */}
        <div className="reveal reveal-delay-2 mt-12 space-y-4">
          {issues.map((item) => (
            <div
              key={item.problem}
              className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
                    </svg>
                    <p className="text-[15px] font-bold text-foreground">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2 ml-6">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <p className="text-[14px] leading-[1.6] text-muted">{item.fix}</p>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    item.severity === "High"
                      ? "bg-red-50 text-red-500"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {item.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
