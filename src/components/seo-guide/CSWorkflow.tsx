const steps = [
  {
    number: "01",
    title: "Choose a keyword with realistic potential",
    text: "Don\u2019t start writing until you\u2019ve picked a keyword you can actually rank for. Check difficulty, volume, and whether your site has any existing authority on the topic.",
    tag: "Keyword",
  },
  {
    number: "02",
    title: "Understand the search intent",
    text: "Search your keyword and study page one. Is it guides? Listicles? Product pages? Match the format Google already rewards for that query.",
    tag: "Intent",
  },
  {
    number: "03",
    title: "Build an outline around the topic",
    text: "Don\u2019t outline around the keyword \u2014 outline around the full topic. Look at what top results cover, identify gaps, and create a structure that\u2019s genuinely comprehensive.",
    tag: "Structure",
  },
  {
    number: "04",
    title: "Cover related subtopics naturally",
    text: "Include semantically related terms and questions people also ask. This signals topical depth to Google without keyword stuffing.",
    tag: "Depth",
  },
  {
    number: "05",
    title: "Improve readability and structure",
    text: "Short paragraphs, clear H2/H3 hierarchy, bullet points where they help. If a section is hard to scan, it\u2019s hard to rank.",
    tag: "Clarity",
  },
  {
    number: "06",
    title: "Add internal links and metadata",
    text: "Link to related pages on your site. Write a compelling title tag and meta description. These small steps compound into real ranking signals.",
    tag: "Links",
  },
  {
    number: "07",
    title: "Review before publishing",
    text: "Check your SEO score, verify heading structure, confirm your content matches the intent. A five-minute review prevents months of underperformance.",
    tag: "Review",
  },
];

export function CSWorkflow() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The process
          </p>
          <h2 id="workflow"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            A content SEO workflow you can actually repeat
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            This is the same process behind most high-ranking SEO content.
            Follow it consistently and your hit rate will improve.
          </p>
        </div>

        {/* Alternating panels */}
        <div className="mt-14 space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-start gap-5 rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] md:p-6`}
            >
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg text-[14px] font-bold text-accent">
                  {step.number}
                </span>
                <span className="rounded-full bg-border-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-light">
                  {step.tag}
                </span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.75] text-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
