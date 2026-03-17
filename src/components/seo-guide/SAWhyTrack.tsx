export function SAWhyTrack() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              The real problem
            </p>
            <h2
              id="why-seo-feels-hard"
              className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
            >
              Why SEO often feels unclear or slow
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                SEO results are not instant. You publish content, wait weeks, and
                check rankings hoping something moved. Multiple metrics shift at
                different speeds — impressions can rise while clicks stay flat,
                or positions improve while traffic barely changes.
              </p>
              <p>
                The problem is not that SEO is broken. The problem is that most
                people check their data randomly, without context, and look at
                the wrong numbers. They open Search Console, see a chart, and
                have no idea what it means.
              </p>
              <p>
                When you know which signals matter and how to read them, SEO
                stops feeling like guesswork. It starts feeling like a system you
                can actually manage.
              </p>
            </div>
          </div>

          {/* Visual: confused analytics state */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-foreground">
                  Without a framework
                </span>
                <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-medium text-red-500">
                  Unclear
                </span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    metric: "Impressions",
                    value: "↑ 42%",
                    status: "What does this mean?",
                    color: "bg-amber-50 text-amber-600 border-amber-100",
                  },
                  {
                    metric: "Clicks",
                    value: "→ Flat",
                    status: "Is this a problem?",
                    color: "bg-red-50 text-red-500 border-red-100",
                  },
                  {
                    metric: "Position",
                    value: "↓ 3 spots",
                    status: "Should I worry?",
                    color: "bg-red-50 text-red-500 border-red-100",
                  },
                  {
                    metric: "Traffic",
                    value: "↑ 8%",
                    status: "From where?",
                    color: "bg-amber-50 text-amber-600 border-amber-100",
                  },
                ].map((row) => (
                  <div
                    key={row.metric}
                    className="flex items-center justify-between rounded-xl border border-black/[0.04] bg-border-light/20 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] font-medium text-foreground">
                        {row.metric}
                      </span>
                      <span className="text-[13px] font-semibold text-muted">
                        {row.value}
                      </span>
                    </div>
                    <span
                      className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${row.color}`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-border-light/40 px-4 py-3">
                <p className="text-[13px] italic text-muted">
                  &ldquo;Numbers without context just create more
                  questions.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
