const guides = [
  {
    title: "Keyword Research Guide",
    description: "How to find SEO keywords you can actually rank for using real data.",
    href: "/seo-guide/keyword-research",
  },
  {
    title: "On-Page SEO Guide",
    description: "Optimize your pages for search engines without over-engineering it.",
    href: "/seo-guide/on-page-seo",
  },
  {
    title: "SEO Analytics Guide",
    description: "Track what matters and understand your organic growth with real data.",
    href: "/seo-guide/seo-analytics",
  },
];

export function CSRelated() {
  return (
    <section className="border-t border-border-light py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h3 className="reveal mb-8 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-light">
          Continue reading
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {guides.map((guide, i) => (
            <a
              key={guide.title}
              href={guide.href}
              className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <h4 className="text-[15px] font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                {guide.title}
              </h4>
              <p className="mt-1.5 text-[14px] leading-[1.65] text-muted">
                {guide.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
                Read guide
                <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
