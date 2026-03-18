import { type LucideIcon, Users, Sparkles, Clock, Monitor, TrendingUp } from "lucide-react";

const benefits: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "No need to hire an SEO team",
    desc: "One tool replaces an entire workflow",
    icon: Users,
  },
  {
    title: "No need to learn complex tools",
    desc: "Simple interface designed for non-SEO people",
    icon: Sparkles,
  },
  {
    title: "Consistent content without effort",
    desc: "Publish regularly without burning out",
    icon: Clock,
  },
  {
    title: "Clear direction on what to write",
    desc: "Data-driven suggestions, not guesswork",
    icon: Monitor,
  },
  {
    title: "Faster path to organic traffic",
    desc: "Start seeing results in weeks, not months",
    icon: TrendingUp,
  },
];

export function FoundersBenefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Why founders choose RankSEO
        </h2>

        <div className="reveal reveal-delay-1 mt-10 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3.5 rounded-xl border border-border-light bg-white p-4 transition-all duration-200 hover:border-border hover:shadow-sm ${i === benefits.length - 1 ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto" : ""}`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                  <Icon className="h-[18px] w-[18px] text-accent" strokeWidth={1.5} />
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
