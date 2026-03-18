const traits = [
  {
    title: "Matches search intent",
    description:
      "If someone searches \u201chow to write SEO content,\u201d they want a guide, not a product page. Good content matches the format and depth the searcher expects.",
  },
  {
    title: "Answers the real question",
    description:
      "Not the surface-level question \u2014 the underlying one. If someone searches \u201cSEO article structure,\u201d they want a template they can follow, not a theory lecture.",
  },
  {
    title: "Is structured clearly",
    description:
      "Clean H2s and H3s that reflect the topic. Scannable paragraphs. Logical flow from problem to solution. Structure helps both readers and search engines.",
  },
  {
    title: "Covers the topic deeply enough",
    description:
      "Not 5,000 words of fluff \u2014 but enough to fully address the query. If competitors cover 6 subtopics and you cover 2, you\u2019re leaving ranking signals on the table.",
  },
  {
    title: "Is easy to read",
    description:
      "Short paragraphs. Clear language. No jargon walls. Readability isn\u2019t a vanity metric \u2014 it affects time on page, which affects how Google evaluates your content.",
  },
  {
    title: "Connects to the rest of the site",
    description:
      "Internal links signal relevance and help search engines understand your site\u2019s structure. A well-linked page ranks better than an orphan page with the same content.",
  },
];

export function CSGoodContent() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            What works
          </p>
          <h2 id="good-content"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            What good SEO content usually gets right
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Good SEO content is usually more useful, not just more optimized.
            Here are the traits that consistently correlate with rankings.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {traits.map((trait, i) => (
            <div
              key={trait.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[15px] font-bold text-foreground">{trait.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
