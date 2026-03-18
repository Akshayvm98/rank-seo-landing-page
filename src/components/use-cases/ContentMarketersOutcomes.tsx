import { type LucideIcon, BookOpen, TrendingUp, Smile } from "lucide-react";

const outcomes: { label: string; desc: string; icon: LucideIcon }[] = [
  {
    label: "More articles published",
    desc: "Consistent output",
    icon: BookOpen,
  },
  {
    label: "Better rankings",
    desc: "Over time",
    icon: TrendingUp,
  },
  {
    label: "Less stress",
    desc: "Managing the process",
    icon: Smile,
  },
];

export function ContentMarketersOutcomes() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <h2 className="reveal text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          From content backlog to content engine
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.75] text-muted">
          Instead of struggling to keep up, you build a repeatable system that
          scales with your goals.
        </p>

        <div className="reveal reveal-delay-2 mx-auto mt-10 grid max-w-[600px] gap-4 sm:grid-cols-3">
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-xl border border-border-light bg-white px-5 py-6 text-center transition-all duration-200 hover:border-border hover:shadow-sm"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-[15px] font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-[13px] text-muted">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
