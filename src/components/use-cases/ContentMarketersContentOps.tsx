"use client";
import type { LucideIcon } from "lucide-react";
import { Icon, Icons } from "@/components/ui/Icon";

const benefits: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Publish more consistently",
    desc: "Move from sporadic output to a steady publishing cadence your audience and search engines can rely on.",
    icon: Icons.calendar,
  },
  {
    title: "Reduce manual research time",
    desc: "Let real search data and keyword clustering replace hours of manual topic research and spreadsheet juggling.",
    icon: Icons.clock,
  },
  {
    title: "Keep quality high at scale",
    desc: "Built-in optimization scoring and structured drafts help maintain editorial standards even as output increases.",
    icon: Icons.badgeCheck,
  },
  {
    title: "Create clearer editorial direction",
    desc: "Data-driven topic clusters give your team a clear picture of what to create and why it matters.",
    icon: Icons.monitor,
  },
  {
    title: "Simplify optimization before publishing",
    desc: "Check headings, links, metadata, and readability in one view instead of switching between tools.",
    icon: Icons.sliders,
  },
  {
    title: "Reduce context switching across tools",
    desc: "Research, write, optimize, and publish from one platform instead of bouncing between five different apps.",
    icon: Icons.layoutGrid,
  },
];

export function ContentMarketersContentOps() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          Built for content teams that need consistency
        </h2>

        {/* Asymmetric layout */}
        <div className="reveal reveal-delay-1 mt-12">
          {/* Row 1: 2 cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.slice(0, 2).map((benefit, i) => {
              return (
                <div
                  key={benefit.title}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border-light bg-white p-6 transition-all duration-200 hover:border-border hover:shadow-sm`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                    <Icon icon={benefit.icon} size="md" className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Row 2: 3 cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {benefits.slice(2, 5).map((benefit, i) => {
              return (
                <div
                  key={benefit.title}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border-light bg-white p-6 transition-all duration-200 hover:border-border hover:shadow-sm`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                    <Icon icon={benefit.icon} size="md" className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Row 3: 1 wide card */}
          <div className="mt-4">
            {(() => {
              return (
                <div className="reveal reveal-delay-2 rounded-2xl border border-border-light bg-white p-6 transition-all duration-200 hover:border-border hover:shadow-sm">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-bg">
                      <Icon icon={benefits[5].icon} size="md" className="text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-foreground">{benefits[5].title}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-muted">{benefits[5].desc}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
