"use client";
import type { LucideIcon } from "lucide-react";
import { Icon, Icons } from "@/components/ui/Icon";

const steps: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Connect your site",
    description: "Link your domain and Search Console",
    icon: Icons.globe,
  },
  {
    number: "02",
    title: "Discover opportunities",
    description: "See what keywords you can realistically rank for",
    icon: Icons.search,
  },
  {
    number: "03",
    title: "Generate content",
    description: "Create articles in your brand voice",
    icon: Icons.penLine,
  },
  {
    number: "04",
    title: "Publish",
    description: "Push directly to your CMS",
    icon: Icons.upload,
  },
  {
    number: "05",
    title: "Track growth",
    description: "Watch your traffic improve over time",
    icon: Icons.trendingUp,
  },
];

export function FoundersHowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[520px] px-6">
        <h2 className="reveal mb-14 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          How it works
        </h2>

        <div className="reveal reveal-delay-1 relative">
          {steps.map((step, i) => {
            return (
              <div key={step.number} className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative flex gap-5`}>
                {/* Rail */}
                <div className="flex flex-col items-center">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                    <Icon icon={step.icon} size="md" className="text-accent" strokeWidth={1.5} />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-px flex-1 ${
                        i === steps.length - 2
                          ? "bg-gradient-to-b from-border to-transparent"
                          : "bg-border-light"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    Step {step.number}
                  </p>
                  <h3 className="mt-1 text-[16px] font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
