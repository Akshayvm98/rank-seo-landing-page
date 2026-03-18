import { type LucideIcon, Layers, AlignLeft, Clock, Repeat2 } from "lucide-react";

const benefits: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Clearer direction on what to write next",
    desc: "Search data shows you which topics are worth your time",
    icon: Layers,
  },
  {
    title: "Better structure for SEO-friendly articles",
    desc: "Every post gets headings, metadata, and keyword support from the start",
    icon: AlignLeft,
  },
  {
    title: "Less time lost on keyword guesswork",
    desc: "Spend your energy writing, not researching in spreadsheets",
    icon: Clock,
  },
  {
    title: "A more repeatable publishing habit",
    desc: "Build a rhythm that becomes easier to maintain over time",
    icon: Repeat2,
  },
];

export function BloggersBenefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.25rem]">
          Built for consistency, not just content output
        </h2>

        <div className="reveal reveal-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`reveal reveal-delay-${(i % 4) + 1} flex flex-col items-center rounded-2xl border border-border-light bg-white p-6 text-center transition-all duration-200 hover:border-border hover:shadow-sm`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-bg">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold leading-snug text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="reveal reveal-delay-3 mx-auto mt-10 max-w-[520px] text-center text-[15px] leading-relaxed text-muted">
          The goal is not just to publish more. It is to publish with purpose.
        </p>
      </div>
    </section>
  );
}
