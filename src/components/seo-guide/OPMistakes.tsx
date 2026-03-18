const mistakes = [
  {
    mistake: "Writing titles that are too broad",
    fix: "Be specific. \u201cSEO Tips\u201d loses to \u201cHow to Automate SEO for Small Business.\u201d",
  },
  {
    mistake: "Repeating keywords unnaturally",
    fix: "Use the keyword in the title, H1, and naturally in the body. That\u2019s enough.",
  },
  {
    mistake: "Weak heading structure",
    fix: "One H1. Clear H2s for each section. H3s for sub-points. Don\u2019t skip levels.",
  },
  {
    mistake: "Skipping internal links",
    fix: "Every page should link to 2\u20134 related pages. Orphan pages rank poorly.",
  },
  {
    mistake: "Publishing with unclear intent",
    fix: "Before you publish, ask: what would a searcher expect to find here?",
  },
  {
    mistake: "Optimizing for engines over people",
    fix: "If it reads like it was written for a robot, rewrite it. Clarity wins.",
  },
];

export function OPMistakes() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Watch out
          </p>
          <h2 id="mistakes" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Common on-page SEO mistakes
          </h2>
        </div>

        {/* Compact editorial list */}
        <div className="reveal reveal-delay-2 mt-12 divide-y divide-border-light rounded-2xl border border-black/[0.04] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          {mistakes.map((item) => (
            <div key={item.mistake} className="px-6 py-5 transition-colors hover:bg-border-light/20">
              <p className="text-[15px] font-bold text-foreground">{item.mistake}</p>
              <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">{item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
