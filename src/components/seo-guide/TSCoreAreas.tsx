const areas = [
  {
    title: "Crawlability",
    description:
      "If search engines can\u2019t crawl your pages, nothing else matters. Crawlability means making sure bots can access and read every important page on your site without hitting dead ends, redirects loops, or blocked resources.",
    detail: "Check for blocked pages, crawl errors, and broken links regularly.",
    status: "Crawlable",
    statusColor: "success" as const,
  },
  {
    title: "Indexing",
    description:
      "Getting crawled is step one. Getting indexed is step two. Indexing means Google has decided your page is worth storing and showing in search results. Pages with noindex tags, thin content, or duplicate issues may get crawled but never indexed.",
    detail: "Use Google Search Console to confirm your important pages are indexed.",
    status: "Indexed",
    statusColor: "success" as const,
  },
  {
    title: "Site speed",
    description:
      "Slow pages frustrate users and search engines alike. Page speed affects both rankings and user experience. The biggest wins usually come from optimizing images, reducing JavaScript, and using efficient hosting.",
    detail: "Target under 2.5 seconds for Largest Contentful Paint (LCP).",
    status: "1.4s avg",
    statusColor: "success" as const,
  },
  {
    title: "Core Web Vitals",
    description:
      "Core Web Vitals measure real user experience: how fast the main content loads (LCP), how quickly the page responds to interaction (INP), and how stable the layout is while loading (CLS). Google uses these as ranking signals.",
    detail: "Focus on LCP, INP, and CLS. All three need to pass for the page to qualify.",
    status: "Passing",
    statusColor: "success" as const,
  },
  {
    title: "Sitemaps & robots.txt",
    description:
      "Your sitemap tells search engines which pages exist and matter. Your robots.txt tells them which areas to skip. Together, they guide crawlers efficiently through your site and prevent wasted crawl budget on unimportant pages.",
    detail: "Keep your sitemap updated. Review robots.txt to avoid blocking important pages.",
    status: "Configured",
    statusColor: "success" as const,
  },
  {
    title: "Site structure",
    description:
      "A clear, logical site structure helps both search engines and users navigate your content. Flat architectures where important pages are within a few clicks of the homepage tend to perform better than deeply nested structures.",
    detail: "Keep important pages within 3 clicks of the homepage. Use internal links.",
    status: "3 levels",
    statusColor: "accent" as const,
  },
];

export function TSCoreAreas() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            What matters most
          </p>
          <h2 id="core-areas" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            The technical SEO areas worth paying attention to first
          </h2>
        </div>

        {/* Alternating left/right layout blocks */}
        <div className="mt-14 space-y-8">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex flex-col gap-5 rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] md:p-7 md:flex-row md:items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Status indicator */}
              <div className="flex shrink-0 flex-col items-center gap-2 md:w-[120px]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-bg text-[16px] font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    area.statusColor === "success"
                      ? "bg-success-bg text-success"
                      : "bg-accent-bg text-accent"
                  }`}
                >
                  {area.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[17px] font-bold text-foreground">{area.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.75] text-muted">{area.description}</p>
                <p className="mt-3 rounded-lg bg-accent-bg/40 px-3 py-2 text-[13px] font-medium text-accent">
                  {area.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
