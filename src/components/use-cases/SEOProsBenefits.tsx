import { type LucideIcon, Clock, Zap, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

const benefits: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Spend less time on repetitive operational work",
    desc: "Automate keyword expansion, draft generation, and optimization checks so you can focus on what matters.",
    icon: Clock,
  },
  {
    title: "Move faster from research to live content",
    desc: "Connect the steps between keyword discovery and publishing into a single workflow.",
    icon: Zap,
  },
  {
    title: "Keep optimization quality more consistent",
    desc: "Every piece of content is scored for SEO, readability, and structure before it goes live.",
    icon: CheckCircle,
  },
  {
    title: "Scale content production without adding unnecessary process",
    desc: "Increase output without adding headcount or layering on more tools.",
    icon: TrendingUp,
  },
  {
    title: "Free up time for higher-level SEO decisions",
    desc: "Spend more time on strategy, analysis, and growth instead of coordination.",
    icon: Sparkles,
  },
];

export function SEOProsBenefits() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          What changes when execution is no longer the bottleneck
        </h2>

        <div className="reveal reveal-delay-1 mt-10 space-y-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-start gap-4 rounded-xl border border-border-light bg-white p-5 transition-all duration-200 hover:border-border hover:shadow-sm`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-muted">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal reveal-delay-4 mt-10 text-center text-[15px] leading-[1.7] text-muted">
          The strategy stays yours. The busywork doesn&apos;t have to.
        </p>
      </div>
    </section>
  );
}
