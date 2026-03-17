const steps = [
  {
    num: "01",
    title: "Find opportunities",
    desc: "Research what people search for and where you have a realistic chance of ranking.",
  },
  {
    num: "02",
    title: "Create content",
    desc: "Write pages that answer those searches better than what already exists.",
  },
  {
    num: "03",
    title: "Optimize pages",
    desc: "Structure titles, headings, links, and meta tags so Google can understand your content.",
  },
  {
    num: "04",
    title: "Build connections",
    desc: "Earn links from other sites and connect your own pages to each other.",
  },
  {
    num: "05",
    title: "Measure performance",
    desc: "Track impressions, clicks, and rankings to see what is working and what needs improvement.",
  },
];

export function PillarHowSEOWorks() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The system
          </p>
          <h2
            id="how-seo-works"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            SEO works as a system, not a single tactic
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.7] text-muted">
            Each part feeds into the next. Skip one and the whole system
            underperforms.
          </p>
        </div>

        <div className="reveal reveal-delay-2 relative mt-14">
          {/* Vertical connector line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-border-light hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-start gap-5`}
              >
                <span className="relative z-10 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-bg text-[14px] font-bold text-accent shadow-sm">
                  {step.num}
                </span>
                <div className="flex-1 rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <h3 className="text-[16px] font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Loop arrow */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 3l3 3-3 3" />
              <path d="M3 10a7 7 0 0114 0" />
              <path d="M6 17l-3-3 3-3" />
              <path d="M17 10a7 7 0 01-14 0" />
            </svg>
            <span className="text-[13px] font-medium text-accent">
              Then repeat — SEO is a continuous cycle
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
