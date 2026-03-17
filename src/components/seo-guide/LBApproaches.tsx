const strategies = [
  {
    title: "Create link-worthy resources",
    description:
      "Build pages that serve as the best reference on a topic. Comprehensive guides, visual explainers, and well-organized reference pages naturally attract links over time.",
    note: "This takes patience. Most link-worthy pages earn links slowly, then steadily.",
  },
  {
    title: "Publish original data or useful insights",
    description:
      "Run a small survey, analyze public data, or share lessons from your own experience. Original findings give journalists and bloggers something new to cite.",
    note: "Even modest data sets can earn links if the insights are genuinely useful.",
  },
  {
    title: "Improve internal linking across your site",
    description:
      "Internal links are the easiest links you can build. Connect related pages with descriptive anchor text to help search engines understand your site structure and pass authority between pages.",
    note: "Audit your existing pages regularly. Most sites under-link internally.",
  },
  {
    title: "Turn strong content into reference-worthy pages",
    description:
      "Some of your best content may already exist but isn&apos;t structured well enough to earn links. Reorganize, expand, and improve existing pages so they become the definitive resource.",
    note: "Updating a good page often works better than publishing something new.",
  },
  {
    title: "Use outreach carefully and selectively",
    description:
      "Reaching out to relevant sites can work, but only when you have something genuinely valuable to share. Personalized, relevant outreach to a small list beats mass email campaigns.",
    note: "If your pitch starts with a template, rethink it.",
  },
  {
    title: "Refresh pages that could earn more links over time",
    description:
      "Pages that already have some backlinks can earn more if you keep them current. Update stats, add new sections, and improve formatting to make them worth re-sharing.",
    note: "A page that was good in 2023 might need updates to stay link-worthy in 2026.",
  },
];

export function LBApproaches() {
  return (
    <section id="approaches" className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Strategies
          </p>
          <h2 id="link-building-approaches" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Link building approaches that are still worth considering
          </h2>
          <p className="reveal reveal-delay-2 mt-4 mx-auto max-w-[560px] text-[16px] leading-[1.7] text-muted">
            No hacks, no guarantees. These are approaches that tend to work when
            combined with genuinely good content.
          </p>
        </div>

        {/* Stacked card layout */}
        <div className="mt-14 space-y-5">
          {strategies.map((strategy, i) => (
            <div
              key={strategy.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] md:p-7`}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-[14px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-foreground">{strategy.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.75] text-muted">{strategy.description}</p>
                  <p className="mt-3 flex items-start gap-2 text-[13px] leading-[1.6] text-muted-light">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-muted-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <span>{strategy.note}</span>
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
