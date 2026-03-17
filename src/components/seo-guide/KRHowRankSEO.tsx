const features = [
  {
    title: "Pulls real Search Console data",
    description:
      "No guessing. RankSEO connects to your Google Search Console and finds queries where you already have impressions but aren't ranking yet. These are your fastest wins.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Finds opportunities automatically",
    description:
      "Instead of scrolling through spreadsheets, RankSEO surfaces keyword opportunities you'd miss manually \u2014 low difficulty, decent volume, high relevance to your site.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Scores every keyword",
    description:
      "Each keyword gets an opportunity score based on volume, difficulty, and your existing authority. No more guessing which keyword to target first.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Groups into topic clusters",
    description:
      "RankSEO automatically clusters related keywords so you build topical authority instead of publishing scattered, disconnected articles.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
    ),
  },
];

export function KRHowRankSEO() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            A simpler way
          </p>
          <h2 id="how-rankseo-helps"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            How RankSEO makes keyword research easier
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Everything in this guide can be done manually. But if you&apos;d
            rather skip the spreadsheets, RankSEO handles the heavy lifting.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-5 rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-accent">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
