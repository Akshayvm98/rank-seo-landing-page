const elements = [
  { label: "Title tags", group: "Metadata" },
  { label: "Meta descriptions", group: "Metadata" },
  { label: "URL structure", group: "Metadata" },
  { label: "H1 / H2 / H3 hierarchy", group: "Structure" },
  { label: "Content organization", group: "Structure" },
  { label: "Readability", group: "Structure" },
  { label: "Internal links", group: "Links & Signals" },
  { label: "Keyword placement", group: "Links & Signals" },
  { label: "Topic coverage", group: "Links & Signals" },
];

export function OPWhatItCovers() {
  return (
    <section id="what-it-covers" className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              The scope
            </p>
            <h2 id="what-on-page-seo-covers" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              On-page SEO is more than adding keywords to a page
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                On-page optimization is everything you control directly on the page
                itself: from the title tag and heading structure to how you link
                internally and cover a topic.
              </p>
              <p>
                Most people think of it as &ldquo;put the keyword in the title and
                H1.&rdquo; That&apos;s a start, but the pages that actually rank
                well are the ones that are{" "}
                <span className="font-medium text-foreground">
                  structurally clear and genuinely useful
                </span>
                .
              </p>
              <p>
                Good on-page SEO doesn&apos;t feel &ldquo;optimized.&rdquo;
                It feels well-organized. The kind of page where the reader finds
                exactly what they need without scrolling past filler.
              </p>
            </div>
          </div>

          {/* Grouped elements visual */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              {["Metadata", "Structure", "Links & Signals"].map((group) => (
                <div key={group} className="mb-5 last:mb-0">
                  <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {elements
                      .filter((e) => e.group === group)
                      .map((e) => (
                        <span
                          key={e.label}
                          className="rounded-lg border border-border-light bg-border-light/30 px-3 py-1.5 text-[13px] font-medium text-foreground"
                        >
                          {e.label}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
