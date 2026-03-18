const signals = [
  {
    condition: "Impressions rising, clicks rising",
    meaning: "Content is getting discovered and people are clicking. Your SEO is working.",
    status: "healthy",
  },
  {
    condition: "Impressions rising, clicks flat",
    meaning: "Google is showing your pages, but people are not clicking. Your titles and meta descriptions probably need work.",
    status: "attention",
  },
  {
    condition: "Impressions flat, position improving",
    meaning: "You are ranking better for the same queries. Keep going — clicks should follow as you reach page one.",
    status: "healthy",
  },
  {
    condition: "Low CTR on a high-impression page",
    meaning: "The page is visible but not compelling in search results. Rewrite the title to be more specific and useful.",
    status: "attention",
  },
  {
    condition: "Position dropping over 3+ weeks",
    meaning: "A competitor published stronger content, or your page lost relevance. Review the SERP and update your content.",
    status: "warning",
  },
  {
    condition: "Impressions dropping, clicks dropping",
    meaning: "Google is showing your page less. The content may be outdated, too thin, or losing authority. Time to refresh.",
    status: "warning",
  },
];

const statusStyles: Record<string, { badge: string; label: string }> = {
  healthy: {
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
    label: "On track",
  },
  attention: {
    badge: "bg-amber-50 text-amber-600 border-amber-100",
    label: "Needs attention",
  },
  warning: {
    badge: "bg-red-50 text-red-500 border-red-100",
    label: "Investigate",
  },
};

export function SAWorkflow() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            How to read the data
          </p>
          <h2
            id="reading-seo-data"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            A simple way to interpret SEO performance
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            You do not need to be a data analyst. Use this framework: if you see
            a signal, it usually means something specific — and there is a clear
            next step.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-14 space-y-3">
          {signals.map((s) => {
            const style = statusStyles[s.status];
            return (
              <div
                key={s.condition}
                className="rounded-2xl border border-black/[0.04] bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[14px] font-bold text-foreground">
                        If:
                      </span>
                      <span className="text-[14px] font-medium text-foreground">
                        {s.condition}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">
                      {s.meaning}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 self-start rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
                  >
                    {style.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
