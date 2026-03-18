const beforeHeadings = [
  { level: "H1", text: "SEO Tips", issue: "Too vague" },
  { level: "H2", text: "Why SEO Matters", issue: "Generic" },
  { level: "H2", text: "Tips for SEO", issue: "No specificity" },
  { level: "H2", text: "Conclusion", issue: "No value" },
];

const afterHeadings = [
  { level: "H1", text: "How to Automate SEO for Small Business" },
  { level: "H2", text: "Why Manual SEO Doesn\u2019t Scale" },
  { level: "H2", text: "What to Automate First" },
  { level: "H3", text: "Keyword Research Automation" },
  { level: "H3", text: "Content Generation Workflows" },
  { level: "H3", text: "Publishing and Internal Linking" },
  { level: "H2", text: "Tools That Help" },
  { level: "H2", text: "Getting Started in 15 Minutes" },
];

export function CSExample() {
  return (
    <section className="bg-gradient-to-b from-accent-bg/40 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Before &amp; after
          </p>
          <h2 id="example"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Turning a topic into a stronger SEO article
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Same topic. Same keyword. Completely different structure and outcome.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-12 grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-semibold text-red-500">Before</span>
              <span className="text-[12px] text-muted-light">Weak structure</span>
            </div>

            <div className="mb-4 rounded-lg bg-red-50/30 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-red-400">Title tag</p>
              <p className="mt-0.5 text-[13px] text-foreground">SEO Tips for Your Website</p>
            </div>

            <div className="space-y-2">
              {beforeHeadings.map((h) => (
                <div key={h.text} className="flex items-center justify-between rounded-lg bg-border-light/30 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-400">{h.level}</span>
                    <span className="text-[12px] text-foreground">{h.text}</span>
                  </div>
                  <span className="text-[11px] text-red-400">{h.issue}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 text-[12px] text-red-400">
              <p>0 internal links</p>
              <p>No meta description</p>
              <p>~380 words</p>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-accent-muted/40 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">After</span>
              <span className="text-[12px] text-muted-light">Optimized structure</span>
            </div>

            <div className="mb-4 rounded-lg bg-accent-bg/40 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-accent">Title tag</p>
              <p className="mt-0.5 text-[13px] font-medium text-foreground">How to Automate SEO for Small Business (2025 Guide)</p>
            </div>

            <div className="space-y-1.5">
              {afterHeadings.map((h) => (
                <div
                  key={h.text}
                  className={`flex items-center gap-2 rounded-lg bg-border-light/30 px-3 py-1.5 ${
                    h.level === "H3" ? "ml-4" : ""
                  }`}
                >
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                    h.level === "H1" ? "bg-accent-bg text-accent" : h.level === "H2" ? "bg-border-light text-muted" : "bg-border-light text-muted-light"
                  }`}>
                    {h.level}
                  </span>
                  <span className="text-[12px] text-foreground">{h.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 text-[12px] text-accent">
              <p>4 internal links</p>
              <p>Meta description optimized</p>
              <p>~1,800 words &middot; SEO score: 91</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
