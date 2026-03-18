"use client";
import { Icon, Icons } from "@/components/ui/Icon";
import type { LucideIcon } from "lucide-react";

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Pulls real Search Console data",
    description:
      "No guessing. RankSEO connects to your Google Search Console and finds queries where you already have impressions but aren't ranking yet. These are your fastest wins.",
    icon: Icons.database,
  },
  {
    title: "Finds opportunities automatically",
    description:
      "Instead of scrolling through spreadsheets, RankSEO surfaces keyword opportunities you'd miss manually \u2014 low difficulty, decent volume, high relevance to your site.",
    icon: Icons.sparkles,
  },
  {
    title: "Scores every keyword",
    description:
      "Each keyword gets an opportunity score based on volume, difficulty, and your existing authority. No more guessing which keyword to target first.",
    icon: Icons.star,
  },
  {
    title: "Groups into topic clusters",
    description:
      "RankSEO automatically clusters related keywords so you build topical authority instead of publishing scattered, disconnected articles.",
    icon: Icons.layers,
  },
];

export function KRHowRankSEO() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            A simpler way
          </p>
          <h2 id="how-rankseo-helps"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            How RankSEO makes keyword research easier
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Everything in this guide can be done manually. But if you&apos;d
            rather skip the spreadsheets, RankSEO handles the heavy lifting.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-5 rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-accent">
                <Icon icon={feature.icon} size="md" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
