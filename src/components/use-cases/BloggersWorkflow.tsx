"use client";
import type { LucideIcon } from "lucide-react";
import { Icon, Icons } from "@/components/ui/Icon";

const steps: { number: string; title: string; description: string | React.ReactNode; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Find blog topics with potential",
    description: "Use keyword and search data to uncover topics worth targeting.",
    icon: Icons.search,
  },
  {
    number: "02",
    title: "Build a realistic content plan",
    description: "Prioritize ideas you can actually publish and rank for.",
    icon: Icons.layoutList,
  },
  {
    number: "03",
    title: "Generate optimized drafts",
    description: "Create articles with structure, headings, and SEO support already in place.",
    icon: Icons.penLine,
  },
  {
    number: "04",
    title: "Improve before you publish",
    description: "Review your SEO score, internal links, and metadata.",
    icon: Icons.sparkles,
  },
  {
    number: "05",
    title: "Publish and keep going",
    description: (
      <span>
        Send posts to your CMS and build momentum over time. See all{" "}
        <a href="/integrations" className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-hover">
          integrations
        </a>
        .
      </span>
    ),
    icon: Icons.upload,
  },
  {
    number: "06",
    title: "See what performs",
    description: "Track impressions, clicks, rankings, and article performance.",
    icon: Icons.trendingUp,
  },
];

export function BloggersWorkflow() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          How bloggers use RankSEO
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mt-3 max-w-[480px] text-center text-[15px] text-muted">
          Six steps from topic research to measurable traffic growth.
        </p>

        {/* Desktop: 3x2 grid */}
        <div className="reveal reveal-delay-2 mt-14 hidden lg:block">
          <div className="grid grid-cols-3 gap-5">
            {steps.map((step, i) => {
              return (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                      {step.number}
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg/50">
                      <Icon icon={step.icon} size="md" className="text-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Stacked cards */}
        <div className="reveal reveal-delay-2 mt-10 space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-border-light bg-white p-5`}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
