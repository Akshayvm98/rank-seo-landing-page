const metrics = [
  {
    title: "Impressions",
    what: "How often your pages appear in search results.",
    why: "Rising impressions mean Google is showing your content to more people. This is the earliest sign that your SEO work is gaining traction.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="7" />
        <circle cx="10" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Clicks",
    what: "How many people actually visit your page from search.",
    why: "Clicks measure real interest. If impressions are high but clicks stay low, your titles or descriptions are not compelling enough to earn the visit.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 3v8l4-2.5L8 3z" />
        <path d="M10.5 10l2 5 1-0.5-2-5z" />
      </svg>
    ),
  },
  {
    title: "Click-Through Rate (CTR)",
    what: "The percentage of impressions that turn into clicks.",
    why: "CTR tells you how compelling your listing is. A page at position 5 with a 2% CTR is underperforming. Better titles and descriptions can lift traffic without changing rankings.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 14l4-4 3 3 7-7" />
        <path d="M13 6h4v4" />
      </svg>
    ),
  },
  {
    title: "Average Position",
    what: "Where your pages rank on average for their queries.",
    why: "Position trends show where momentum is building. Moving from position 15 to 8 is meaningful progress, even if traffic has not spiked yet.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l4-5 4 3 4-8" />
      </svg>
    ),
  },
];

export function SAMetrics() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            What to measure
          </p>
          <h2
            id="metrics-that-matter"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            The SEO metrics that are actually worth tracking
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            You do not need 30 metrics. These four give you a clear picture of
            whether your SEO is moving in the right direction.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {metrics.map((m, i) => (
            <div
              key={m.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]`}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-accent">
                  {m.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-[14px] font-medium text-muted-light">
                    {m.what}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                    {m.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
