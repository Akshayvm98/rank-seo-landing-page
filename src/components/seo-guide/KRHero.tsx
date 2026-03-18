const keywords = [
  { keyword: "seo automation tools", volume: "2.4K", difficulty: 34, score: 92 },
  { keyword: "ai content optimization", volume: "1.8K", difficulty: 28, score: 87 },
  { keyword: "organic traffic growth", volume: "3.1K", difficulty: 41, score: 84 },
  { keyword: "find low competition keywords", volume: "1.1K", difficulty: 19, score: 95 },
];

export function KRHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[720px] px-6">
        <p className="animate-hero mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
          SEO Guide
        </p>
        <h1 className="animate-hero-delay-1 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          How to find keywords you can{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            actually rank for
          </span>
        </h1>

        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          Most keyword research advice sounds good in theory. This guide
          shows you how to find real opportunities using actual data.
        </p>

        <div className="animate-hero-delay-3 mt-7 flex flex-wrap items-center gap-3">
          <a
            href="/pricing"
            className="inline-flex h-11 items-center rounded-xl bg-foreground px-7 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start $1 Trial
          </a>
        </div>

        {/* Keyword table UI */}
        <div className="animate-hero-delay-3 mt-8">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span className="text-[13px] font-medium text-foreground">Keyword Opportunities</span>
              </div>
              <span className="rounded-full bg-accent-bg px-2.5 py-0.5 text-[11px] font-medium text-accent">
                {keywords.length} found
              </span>
            </div>

            <div className="mb-1 grid grid-cols-[1fr_55px_65px_55px] gap-2 px-3 text-[10px] font-semibold uppercase tracking-wide text-muted-light">
              <span>Keyword</span>
              <span className="text-right">Volume</span>
              <span className="text-right">Difficulty</span>
              <span className="text-right">Score</span>
            </div>

            <div className="space-y-0.5">
              {keywords.map((kw, i) => (
                <div
                  key={kw.keyword}
                  className={`grid grid-cols-[1fr_55px_65px_55px] items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                    i === 3 ? "bg-accent-bg/50 ring-1 ring-accent/10" : "hover:bg-border-light/50"
                  }`}
                >
                  <span className="text-[12px] text-foreground truncate">{kw.keyword}</span>
                  <span className="text-right text-[11px] text-muted-light">{kw.volume}</span>
                  <span className="text-right">
                    <span
                      className={`inline-block min-w-[28px] rounded-md px-1 py-0.5 text-center text-[10px] font-semibold ${
                        kw.difficulty < 30
                          ? "bg-success-bg text-success"
                          : kw.difficulty < 45
                          ? "bg-amber-50 text-amber-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {kw.difficulty}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="inline-flex h-5 min-w-[36px] items-center justify-center rounded-md bg-success-bg text-[11px] font-semibold text-success">
                      {kw.score}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
