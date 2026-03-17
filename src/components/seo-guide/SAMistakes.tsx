const mistakes = [
  {
    mistake: "Focusing only on rankings",
    fix: "Rankings are one signal among many. A page can rank well and still get no traffic if the CTR is low or the query has no volume.",
  },
  {
    mistake: "Ignoring impressions entirely",
    fix: "Impressions are the earliest indicator. If they are rising, your content is being discovered. If they are flat, Google is not showing it.",
  },
  {
    mistake: "Expecting instant results",
    fix: "SEO moves in weeks and months, not days. Checking daily creates anxiety, not insight. Review data weekly or monthly for real patterns.",
  },
  {
    mistake: "Not connecting content to performance",
    fix: "Publishing without tracking is guessing. Every piece of content should be connected to a query, and every query should have a page you can measure.",
  },
  {
    mistake: "Not updating underperforming pages",
    fix: "Old content does not stay relevant forever. Pages that ranked six months ago may need a refresh to maintain or improve their position.",
  },
  {
    mistake: "Checking data without context",
    fix: "A 10% traffic drop means nothing without knowing the time range, seasonal patterns, and what changed. Always compare like-for-like periods.",
  },
];

export function SAMistakes() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Watch out
          </p>
          <h2
            id="mistakes"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            Common SEO analytics mistakes
          </h2>
        </div>

        <div className="reveal reveal-delay-2 mt-12 divide-y divide-border-light rounded-2xl border border-black/[0.04] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          {mistakes.map((item) => (
            <div
              key={item.mistake}
              className="px-6 py-5 transition-colors hover:bg-border-light/20"
            >
              <p className="text-[15px] font-bold text-foreground">
                {item.mistake}
              </p>
              <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">
                {item.fix}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 mt-6 text-center text-[14px] text-muted">
          Good SEO decisions usually come from patterns, not single data points.
        </p>
      </div>
    </section>
  );
}
