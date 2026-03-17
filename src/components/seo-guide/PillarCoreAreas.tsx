const areas = [
  {
    title: "Keyword Research",
    desc: "Find keywords you can actually rank for",
    href: "/seo-guide/keyword-research",
    color: "from-blue-50 to-white border-blue-100/60",
    accent: "text-blue-600 bg-blue-50",
  },
  {
    title: "Content SEO",
    desc: "Create structured content that performs",
    href: "/seo-guide/content-seo",
    color: "from-emerald-50 to-white border-emerald-100/60",
    accent: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "On-Page SEO",
    desc: "Improve titles, structure, and internal links",
    href: "/seo-guide/on-page-seo",
    color: "from-violet-50 to-white border-violet-100/60",
    accent: "text-violet-600 bg-violet-50",
  },
  {
    title: "Technical SEO",
    desc: "Make your site crawlable and fast",
    href: "/seo-guide/technical-seo",
    color: "from-amber-50 to-white border-amber-100/60",
    accent: "text-amber-600 bg-amber-50",
  },
  {
    title: "Link Building",
    desc: "Build authority with better links",
    href: "/seo-guide/link-building",
    color: "from-rose-50 to-white border-rose-100/60",
    accent: "text-rose-600 bg-rose-50",
  },
  {
    title: "SEO Analytics",
    desc: "Understand what is working and why",
    href: "/seo-guide/seo-analytics",
    color: "from-cyan-50 to-white border-cyan-100/60",
    accent: "text-cyan-600 bg-cyan-50",
  },
];

export function PillarCoreAreas() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Core areas
          </p>
          <h2
            id="core-areas"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            The core areas of SEO
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.7] text-muted">
            Each area covers one piece of the SEO system. Start anywhere, but
            they work best together.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <a
              key={area.title}
              href={area.href}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative rounded-2xl border bg-gradient-to-b ${area.color} p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1`}
            >
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-[13px] font-bold ${area.accent}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[17px] font-bold text-foreground">
                {area.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-muted">
                {area.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-accent transition-all group-hover:gap-2">
                Read guide
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10m-4-4l4 4-4 4" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
