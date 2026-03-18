const mistakes = [
  {
    title: "Writing for keywords instead of people",
    description:
      "If your content reads like it was written for a search engine, readers will bounce. Write for the person first, then optimize. SEO content optimization should enhance clarity, not replace it.",
  },
  {
    title: "Skipping search intent",
    description:
      "Publishing a product comparison when the searcher wants a how-to guide is a guaranteed way to not rank. Always check what format Google rewards before you write.",
  },
  {
    title: "Weak heading structure",
    description:
      "Headings aren\u2019t decorative. They signal topic coverage to search engines. If your H2s are vague or don\u2019t reflect what the section covers, you\u2019re leaving ranking signals behind.",
  },
  {
    title: "Thin coverage",
    description:
      "You don\u2019t need to write 5,000 words. But if every competitor covers 6 subtopics and you cover 2, your page looks incomplete. Cover the topic well enough to be the best result.",
  },
  {
    title: "Forgetting internal links",
    description:
      "Every page without internal links is an orphan page. Link related content together so Google understands your site\u2019s structure and passes authority where it matters.",
  },
  {
    title: "Publishing without reviewing structure",
    description:
      "A five-minute check of your heading hierarchy, meta tags, and internal links before publishing prevents months of wondering why your content isn\u2019t ranking.",
  },
];

export function CSMistakes() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Avoid these
          </p>
          <h2 id="mistakes"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Common content SEO mistakes
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((mistake, i) => (
            <div
              key={mistake.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[14px] font-bold text-red-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[15px] font-bold text-foreground">{mistake.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                {mistake.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
