const factors = [
  {
    title: "Relevance",
    description:
      "Does this keyword actually relate to what you offer? A high-volume keyword means nothing if your content can't genuinely help the searcher.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-1.135l4.5-4.5a4.5 4.5 0 00-6.364-6.364l-1.757 1.757" />
      </svg>
    ),
  },
  {
    title: "Search volume",
    description:
      "Enough people need to be searching for it. But \"enough\" doesn't mean 50K/month. Even 200 monthly searches can drive real business if the intent is right.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Competition",
    description:
      "Keyword difficulty tells you who you're up against. If page one is all enterprise sites with thousands of backlinks, you need a different keyword.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    title: "Search intent",
    description:
      "What does the searcher actually want? If someone searches \"keyword research\" they want a guide. If they search \"keyword research tool\" they want software. Match the intent.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function KRGoodKeyword() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The fundamentals
          </p>
          <h2 id="good-keywords"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            What actually makes a keyword worth targeting
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Before you start building a keyword list, understand the four things
            that separate a good keyword from a vanity metric.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {factors.map((factor, i) => (
            <div
              key={factor.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl border border-black/[0.04] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg text-accent">
                {factor.icon}
              </div>
              <h3 className="text-[17px] font-bold text-foreground">{factor.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
