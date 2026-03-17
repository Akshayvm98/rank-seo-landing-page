const mistakes = [
  {
    mistake: "Overcomplicating things early",
    fix: "Start with the basics: crawlability, indexing, and speed. Advanced techniques can wait until those are solid.",
  },
  {
    mistake: "Obsessing over tiny issues while bigger problems remain",
    fix: "A missing sitemap matters more than a single redirect chain. Prioritize by impact, not by count.",
  },
  {
    mistake: "Blocking pages unintentionally",
    fix: "Review robots.txt and meta robots tags regularly. One wrong rule can hide your best content from search engines.",
  },
  {
    mistake: "Ignoring indexing signals",
    fix: "Check Search Console for coverage issues. Pages that aren\u2019t indexed can\u2019t rank, no matter how good the content is.",
  },
  {
    mistake: "Treating robots.txt like a magic solution",
    fix: "Robots.txt controls crawling, not indexing. If you need to prevent indexing, use noindex instead.",
  },
  {
    mistake: "Overlooking site speed and page experience",
    fix: "Core Web Vitals are ranking factors. Slow pages lose visitors and rankings. Test regularly and fix what\u2019s slow.",
  },
];

export function TSMistakes() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Watch out
          </p>
          <h2 id="mistakes" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Common technical SEO mistakes
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
