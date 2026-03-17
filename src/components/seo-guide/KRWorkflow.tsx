const steps = [
  {
    number: "01",
    title: "Start with your niche",
    text: "Write down 5\u201310 topics your audience actually cares about. Don't think about search volume yet \u2014 just think about what problems you solve.",
    ui: {
      label: "Topics",
      items: ["SEO automation", "Content scaling", "Organic traffic", "Keyword tools"],
    },
  },
  {
    number: "02",
    title: "Look at real search data",
    text: "Connect your Search Console. Look at what queries your site already appears for \u2014 even if you\u2019re on page 3. These are your fastest wins.",
    ui: {
      label: "Search Console",
      items: ["142 queries with impressions", "34 queries on page 2\u20133", "12 queries with 0 clicks"],
    },
  },
  {
    number: "03",
    title: "Find keywords where you already have impressions",
    text: "If Google is already showing your pages for a query, you\u2019re halfway there. These keywords need better content, not a new page.",
    ui: {
      label: "Quick wins",
      items: ["\u201cseo automation\u201d \u2014 position 18", "\u201ccontent at scale\u201d \u2014 position 22"],
    },
  },
  {
    number: "04",
    title: "Expand into related terms",
    text: "Use autocomplete, \u201cpeople also ask,\u201d and related searches. Find variations your competitors missed. Long-tail keywords are where the real opportunity lives.",
    ui: {
      label: "Related",
      items: ["seo automation for startups", "how to automate blog writing", "ai seo content tools"],
    },
  },
  {
    number: "05",
    title: "Filter by difficulty and relevance",
    text: "Drop anything with a keyword difficulty above your domain\u2019s weight class. Keep only the keywords that are relevant, achievable, and have clear search intent.",
    ui: {
      label: "Filtered",
      items: ["8 keywords passed", "3 removed (too competitive)", "2 removed (low relevance)"],
    },
  },
  {
    number: "06",
    title: "Group into topics",
    text: "Cluster your keywords into topic groups. One piece of content can target 3\u20135 related keywords. This prevents cannibalization and builds topical authority.",
    ui: {
      label: "Clusters",
      items: ["Cluster A: 4 keywords", "Cluster B: 3 keywords", "Cluster C: 5 keywords"],
    },
  },
];

export function KRWorkflow() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The workflow
          </p>
          <h2 id="workflow"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            A simple keyword research workflow that works
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Follow these six steps and you&apos;ll have a focused, achievable
            keyword list in under an hour.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} grid gap-6 rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] md:grid-cols-[1fr_200px] md:p-7`}
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                    {step.number}
                  </span>
                  <h3 className="text-[16px] font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-[14px] leading-[1.75] text-muted">{step.text}</p>
              </div>

              {/* Mini UI */}
              <div className="rounded-xl border border-border-light bg-border-light/20 p-3.5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted-light">
                  {step.ui.label}
                </p>
                <div className="space-y-1.5">
                  {step.ui.items.map((item) => (
                    <p key={item} className="text-[12px] leading-[1.5] text-muted">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
