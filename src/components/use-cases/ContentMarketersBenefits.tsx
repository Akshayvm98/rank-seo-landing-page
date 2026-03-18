"use client";
import type { LucideIcon } from "lucide-react";
import { Icon, Icons } from "@/components/ui/Icon";

const benefits: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Faster content production",
    desc: "Generate and publish in a fraction of the time",
    icon: Icons.zap,
  },
  {
    title: "Less manual research",
    desc: "Real search data replaces guesswork",
    icon: Icons.search,
  },
  {
    title: "Consistent publishing cadence",
    desc: "Build a rhythm that compounds over time",
    icon: Icons.calendar,
  },
  {
    title: "Better SEO structure",
    desc: "Every article is optimized from the start",
    icon: Icons.sparkles,
  },
  {
    title: "Clear direction for what to write",
    desc: "Data tells you what your audience wants",
    icon: Icons.monitor,
  },
];

export function ContentMarketersBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          What changes with RankSEO
        </h2>

        <div className="reveal reveal-delay-1 mt-10 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit, i) => {
            return (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3.5 rounded-xl border border-border-light bg-white p-4 transition-all duration-200 hover:border-border hover:shadow-sm ${i === benefits.length - 1 ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto" : ""}`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                  <Icon icon={benefit.icon} size="md" className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
