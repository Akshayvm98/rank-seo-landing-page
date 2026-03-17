"use client";

import { useReveal } from "@/hooks/useReveal";

const cards = [
  {
    title: "Connect your real search data",
    description:
      "Link your Google Search Console and domain. Rank SEO analyzes impressions, clicks, rankings, and existing content automatically.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.768a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.343 8.59" />
      </svg>
    ),
  },
  {
    title: "Generate and publish optimized content",
    description:
      "Create SEO-structured articles and publish directly to WordPress, Webflow, Framer, or Notion in just a few clicks.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Define your brand voice",
    description:
      "Choose your tone, add writing samples, and set content guidelines. Rank SEO generates articles that sound natural and aligned with your brand.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Three steps to dominate organic search
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            From raw search data to ranking content. No guesswork.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-border-light bg-white p-7 transition-all duration-300 hover:border-accent-muted/60 hover:shadow-[0_4px_24px_-4px_rgba(13,148,136,0.08)]`}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                {card.icon}
              </div>
              <h3 className="mb-2 text-[16px] font-semibold tracking-[-0.01em] text-foreground">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-muted">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
