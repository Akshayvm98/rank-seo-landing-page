const elements = [
  {
    title: "Title tags",
    description:
      "Your title tag is the single strongest on-page signal. It tells search engines what the page is about and it\u2019s what people see in the search results. A specific, relevant title with your primary keyword outperforms a generic one every time.",
    detail: "Keep it under 60 characters. Front-load the keyword. Make it click-worthy.",
  },
  {
    title: "Meta descriptions",
    description:
      "Meta descriptions don\u2019t directly affect rankings, but they affect clicks. A well-written description increases your click-through rate, which sends positive signals back to Google.",
    detail: "150\u2013160 characters. Describe the value. Include a reason to click.",
  },
  {
    title: "Headings and structure",
    description:
      "A clear H1 \u2192 H2 \u2192 H3 hierarchy signals topic coverage. Search engines use headings to understand what each section is about. Readers use them to scan. Both matter for ranking.",
    detail: "One H1 per page. H2s for main sections. H3s for sub-points.",
  },
  {
    title: "Internal links",
    description:
      "Internal links connect your pages into a structure Google can crawl and understand. Every link passes relevance. Pages with strong internal linking rank better than orphan pages with identical content.",
    detail: "Link to related content naturally. Use descriptive anchor text.",
  },
  {
    title: "Content relevance",
    description:
      "Matching search intent and covering the topic thoroughly matters more than repeating keywords. Google evaluates whether your page is the best answer for a query, not just whether it contains the right words.",
    detail: "Cover subtopics competitors cover. Answer the real question.",
  },
];

export function OPCoreElements() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            What matters most
          </p>
          <h2 id="core-elements" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            The on-page SEO elements worth paying attention to
          </h2>
        </div>

        {/* Stacked editorial blocks */}
        <div className="mt-14 space-y-6">
          {elements.map((el, i) => (
            <div
              key={el.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] md:p-7`}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-[14px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-foreground">{el.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.75] text-muted">{el.description}</p>
                  <p className="mt-3 rounded-lg bg-accent-bg/40 px-3 py-2 text-[13px] font-medium text-accent">
                    {el.detail}
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
