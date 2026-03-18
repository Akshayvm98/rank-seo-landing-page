const flowSteps = [
  { label: "Discover", description: "Search engines find your pages through links and sitemaps", icon: "search" },
  { label: "Crawl", description: "Bots visit and read the content on each page", icon: "crawl" },
  { label: "Understand", description: "Engines parse structure, content, and relationships", icon: "structure" },
  { label: "Index", description: "Relevant pages get stored and made available for queries", icon: "index" },
  { label: "Load", description: "Pages need to load fast for both bots and real users", icon: "speed" },
];

export function TSWhatItMeans() {
  return (
    <section id="what-it-means" className="py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              The basics
            </p>
            <h2 id="what-technical-seo-means" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Technical SEO is really about site accessibility for search engines
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                Technical SEO covers everything that helps search engines
                discover your pages, crawl them efficiently, understand their
                structure, index the right ones, and load them quickly for
                visitors.
              </p>
              <p>
                It sounds complicated, but most of it comes down to a few
                fundamentals:{" "}
                <span className="font-medium text-foreground">
                  can search engines reach your pages, and do those pages load
                  well?
                </span>
              </p>
              <p>
                You don&apos;t need to be a developer to handle the basics. And
                the basics are what matter most for the majority of sites.
              </p>
            </div>
          </div>

          {/* Crawl → Index → Performance flow visual */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                How search engines process your site
              </p>
              <div className="space-y-3">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-3.5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-[13px] font-bold text-accent">
                        {i + 1}
                      </span>
                      {i < flowSteps.length - 1 && (
                        <div className="my-1 h-3 w-px bg-border-light" />
                      )}
                    </div>
                    <div className="pt-1">
                      <p className="text-[14px] font-bold text-foreground">{step.label}</p>
                      <p className="mt-0.5 text-[13px] leading-[1.6] text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
