const badChoices = [
  { keyword: "best shoes", volume: "110K", difficulty: 94, result: "Page 8" },
  { keyword: "how to lose weight", volume: "201K", difficulty: 97, result: "Not indexed" },
  { keyword: "CRM software", volume: "74K", difficulty: 91, result: "Page 5" },
];

const goodChoices = [
  { keyword: "crm for freelancers", volume: "880", difficulty: 22, result: "Page 1" },
  { keyword: "lightweight running shoes flat feet", volume: "1.2K", difficulty: 18, result: "Position 4" },
  { keyword: "meal prep for muscle gain beginners", volume: "2.1K", difficulty: 24, result: "Position 2" },
];

export function KRProblem() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              The real problem
            </p>
            <h2 id="why-it-fails"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Why most keyword research doesn&apos;t work
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                Here&apos;s what usually happens: you open a keyword tool, sort by
                volume, pick the biggest numbers, write content around them, hit
                publish&hellip; and nothing happens.
              </p>
              <p>
                No traffic. No rankings. No idea why.
              </p>
              <p>
                The issue isn&apos;t that keyword research is broken. It&apos;s that most people
                optimize for volume when they should be optimizing for{" "}
                <span className="font-medium text-foreground">opportunity</span>.
                High volume means high competition, and unless your domain already
                has authority, you&apos;re invisible.
              </p>
              <p>
                Smart SEO keyword research starts with what you can actually win &mdash;
                not what looks impressive in a spreadsheet.
              </p>
            </div>
          </div>

          {/* Visual comparison */}
          <div className="reveal reveal-delay-2 space-y-5">
            {/* Bad keywords */}
            <div className="rounded-xl border border-red-100 bg-red-50/30 p-5">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-red-500">
                What most people target
              </p>
              <div className="space-y-2">
                {badChoices.map((kw) => (
                  <div key={kw.keyword} className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
                    <span className="text-[13px] text-foreground">{kw.keyword}</span>
                    <div className="flex items-center gap-3 text-[12px]">
                      <span className="text-muted-light">{kw.volume}</span>
                      <span className="rounded bg-red-100 px-1.5 py-0.5 font-medium text-red-500">{kw.difficulty}</span>
                      <span className="text-red-400">{kw.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Good keywords */}
            <div className="rounded-xl border border-accent-muted/40 bg-accent-bg/30 p-5">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-accent">
                What actually ranks
              </p>
              <div className="space-y-2">
                {goodChoices.map((kw) => (
                  <div key={kw.keyword} className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
                    <span className="text-[13px] text-foreground">{kw.keyword}</span>
                    <div className="flex items-center gap-3 text-[12px]">
                      <span className="text-muted-light">{kw.volume}</span>
                      <span className="rounded bg-success-bg px-1.5 py-0.5 font-medium text-success">{kw.difficulty}</span>
                      <span className="font-medium text-accent">{kw.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
