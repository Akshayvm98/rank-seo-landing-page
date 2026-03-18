import { ArrowRight } from "lucide-react";

export function PillarHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-14">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[1000px] px-6 text-center">
        <p className="animate-hero mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
          SEO Guide
        </p>
        <h1 className="animate-hero-delay-1 mx-auto max-w-[720px] text-[2.5rem] font-bold leading-[1.08] tracking-[-0.035em] text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
          A simple way to understand and{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            execute SEO
          </span>
        </h1>
        <p className="animate-hero-delay-2 mx-auto mt-6 max-w-[540px] text-[17px] leading-[1.7] text-muted">
          SEO is not about hacks or guesswork. It is about understanding what to
          create, how to structure it, and how to improve it over time.
        </p>
        <div className="animate-hero-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#core-areas"
            className="inline-flex h-12 items-center rounded-xl bg-foreground px-8 text-[15px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore the Guide
          </a>
          <a
            href="/pricing"
            className="inline-flex h-12 items-center rounded-xl border border-border px-6 text-[14px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
          >
            Start $1 Trial
          </a>
        </div>
        <p className="animate-hero-delay-4 mt-5 text-[13px] text-muted-light">
          Learn SEO. Apply it. Grow traffic.
        </p>

        {/* System diagram visual */}
        <div className="animate-hero-delay-3 mx-auto mt-16 max-w-[600px]">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between gap-2">
              {[
                { label: "Keywords", icon: "🔍" },
                { label: "Content", icon: "✍️" },
                { label: "Optimize", icon: "⚙️" },
                { label: "Track", icon: "📊" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg text-[18px]">
                      {step.icon}
                    </span>
                    <span className="mt-2 text-[12px] font-semibold text-foreground">
                      {step.label}
                    </span>
                  </div>
                  {i < 3 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-border" strokeWidth={1.5} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
