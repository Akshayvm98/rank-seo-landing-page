"use client";
import { Icon, Icons } from "@/components/ui/Icon";

const personas = [
  {
    label: "Founders",
    icon: Icons.rocket,
  },
  {
    label: "Content Marketers",
    icon: Icons.fileText,
  },
  {
    label: "SEO Professionals",
    icon: Icons.barChart,
  },
  {
    label: "Agencies",
    icon: Icons.building,
  },
  {
    label: "Bloggers",
    icon: Icons.penLine,
  },
  {
    label: "SaaS Teams",
    icon: Icons.settings,
  },
];

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h1 className="reveal text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[2.75rem] lg:text-[3rem]">
              SEO workflows built for the way{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                different teams
              </span>{" "}
              actually work
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[520px] text-[17px] leading-[1.65] text-muted">
              RankSEO helps founders, marketers, agencies, bloggers, and SaaS teams turn search data
              into content, publishing, and growth — without the usual manual overhead.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="inline-flex h-11 items-center rounded-lg bg-foreground px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
              >
                Start $1 Trial
              </a>
              <a
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light hover:bg-white"
              >
                View Pricing
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[13px] text-muted-light">
              Choose the use case that fits your workflow best.
            </p>
          </div>

          {/* Right: Persona visual */}
          <div className="reveal reveal-delay-2 relative">
            <PersonaVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaVisual() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] to-accent-light/[0.04] blur-2xl" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Central hub */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/10">
          <span className="text-[20px] font-bold leading-none text-white">R</span>
        </div>

        {/* Connecting lines indicator */}
        <div className="h-6 w-px bg-gradient-to-b from-accent/40 to-border-light" />

        {/* Persona cards grid */}
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
          {personas.map((persona, i) => (
            <div
              key={persona.label}
              className="group relative flex items-center gap-2.5 rounded-xl border border-border-light bg-white p-3 transition-all duration-300 hover:border-accent-muted/50 hover:shadow-[0_2px_12px_-2px_rgba(13,148,136,0.08)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Connector dot */}
              <div className="absolute -top-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent/30" />

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                <Icon icon={persona.icon} size="sm" strokeWidth={1.5} />
              </div>
              <span className="text-[12px] font-medium leading-tight text-foreground">
                {persona.label}
              </span>
            </div>
          ))}
        </div>

        {/* Platform label */}
        <div className="rounded-full border border-border-light bg-white px-4 py-1.5 text-[11px] font-medium text-muted">
          One platform. Multiple workflows.
        </div>
      </div>
    </div>
  );
}
