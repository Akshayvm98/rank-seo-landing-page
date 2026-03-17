const blocks = [
  {
    title: "Useful, well-structured content",
    description:
      "Pages that answer real questions clearly tend to attract links naturally. When someone needs to reference a topic and your page is the best explanation, they link to it.",
    detail: "Focus on depth, clarity, and structure over word count.",
  },
  {
    title: "Original insights or data",
    description:
      "Content that includes original research, unique data, or a fresh perspective gives people a reason to cite you. Rehashing what already exists rarely earns links.",
    detail: "Even a small survey or case study can become a link magnet.",
  },
  {
    title: "Tools, templates, and practical guides",
    description:
      "Free tools, checklists, and step-by-step guides earn links because they provide ongoing utility. People bookmark and share things that help them do their job.",
    detail: "Make it genuinely useful, not gated behind a signup wall.",
  },
  {
    title: "Strong topic coverage across your site",
    description:
      "When your site covers a topic thoroughly across multiple pages, each page reinforces the others. This cluster effect makes individual pages more link-worthy.",
    detail: "A well-linked cluster signals authority better than a single post.",
  },
];

export function LBGoodLinkBuilding() {
  return (
    <section id="good-link-building" className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            What works
          </p>
          <h2 id="good-link-building-starts" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Good link building usually starts with something worth linking to
          </h2>
          <p className="reveal reveal-delay-2 mt-4 mx-auto max-w-[560px] text-[16px] leading-[1.7] text-muted">
            Most good links are earned when content genuinely deserves attention.
            Before worrying about outreach, make sure your pages are worth referencing.
          </p>
        </div>

        {/* Premium content blocks */}
        <div className="mt-14 space-y-6">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] md:p-7`}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-[14px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-foreground">{block.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.75] text-muted">{block.description}</p>
                  <p className="mt-3 rounded-lg bg-accent-bg/40 px-3 py-2 text-[13px] font-medium text-accent">
                    {block.detail}
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
