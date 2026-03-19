"use client";

import { Icon, Icons } from "@/components/ui/Icon";

// ---------------------------------------------------------------------------
// Engine workflow steps
// ---------------------------------------------------------------------------

const ENGINE_STEPS = [
  {
    icon: Icons.search,
    title: "Discover",
    label: "Find keywords you can win",
    color: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-200/60",
    glowColor: "bg-blue-400",
  },
  {
    icon: Icons.penLine,
    title: "Create",
    label: "Generate optimized content",
    color: "from-violet-500/10 to-violet-500/5",
    borderColor: "border-violet-200/60",
    glowColor: "bg-violet-400",
  },
  {
    icon: Icons.sparkles,
    title: "Optimize",
    label: "Refine for search and readers",
    color: "from-accent/10 to-accent/5",
    borderColor: "border-accent/30",
    glowColor: "bg-accent",
  },
  {
    icon: Icons.upload,
    title: "Publish",
    label: "Ship to your site instantly",
    color: "from-emerald-500/10 to-emerald-500/5",
    borderColor: "border-emerald-200/60",
    glowColor: "bg-emerald-400",
  },
  {
    icon: Icons.barChart,
    title: "Measure",
    label: "Track rankings and traffic",
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-200/60",
    glowColor: "bg-amber-400",
  },
  {
    icon: Icons.repeat,
    title: "Improve",
    label: "Update and compound growth",
    color: "from-rose-500/10 to-rose-500/5",
    borderColor: "border-rose-200/60",
    glowColor: "bg-rose-400",
  },
];

const METRICS = [
  { value: "20%+", label: "Growth in organic impressions" },
  { value: "<15 min", label: "To first optimized article" },
  { value: "75+", label: "Average SEO score" },
  { value: "60%+", label: "Returning users monthly" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function TrustMetrics() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/15 via-transparent to-accent-bg/10" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2 h-[300px] w-[300px] rounded-full bg-violet-400/[0.03] blur-[80px]" />

      <div className="relative mx-auto max-w-[1100px] px-6">
        {/* ── Header ── */}
        <div className="reveal text-center mb-14 md:mb-16">
          <p className="inline-block rounded-full bg-accent-bg px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-accent mb-4">
            Built as a system
          </p>
          <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Turn your website into a<br className="hidden sm:block" />
            self-growing traffic engine
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-muted">
            RankSEO connects keyword discovery, content creation, optimization,
            publishing, and performance tracking into one continuous growth loop.
          </p>
        </div>

        {/* ── Engine workflow ── */}
        <div className="reveal reveal-delay-1 relative mb-6">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] -translate-y-1/2 h-[2px]">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-200/40 via-accent/20 to-rose-200/40" />
            {/* Animated pulse traveling the line */}
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-full">
              <div
                className="h-full w-[30%] rounded-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                style={{
                  animation: "pulse-travel 4s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {ENGINE_STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative`}
              >
                <div
                  className={`relative rounded-2xl border ${step.borderColor} bg-gradient-to-b ${step.color} p-5 text-center transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 backdrop-blur-sm`}
                >
                  {/* Subtle glow dot */}
                  <div className={`absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full ${step.glowColor} opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-[3px]`} />

                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 shadow-sm border border-black/[0.04] transition-transform duration-300 group-hover:scale-110">
                    <Icon icon={step.icon} size="md" className="text-foreground" />
                  </div>
                  <p className="mt-3 text-[14px] font-bold text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-[1.4] text-muted">
                    {step.label}
                  </p>

                  {/* Arrow connector (between cards on mobile/tablet) */}
                  {i < ENGINE_STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-5 w-5 items-center justify-center rounded-full bg-white border border-black/[0.06] shadow-sm">
                      <Icon icon={Icons.chevronRight} size="sm" className="text-muted-light" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Loop indicator */}
          <div className="reveal reveal-delay-4 mt-4 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-accent/15 bg-accent-bg/30 px-4 py-1.5">
              <Icon icon={Icons.repeat} size="sm" className="text-accent" />
              <span className="text-[11px] font-medium text-accent">
                Continuous improvement loop
              </span>
            </div>
          </div>
        </div>

        {/* ── Metrics ── */}
        <div className="reveal reveal-delay-3 mt-14 md:mt-16">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group rounded-xl border border-black/[0.04] bg-white/70 backdrop-blur-sm p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5`}
              >
                <p className="text-[1.75rem] font-bold tracking-tight text-foreground md:text-[2rem]">
                  {m.value}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframe for the pulse travel animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pulse-travel {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(400%); }
            }
          `,
        }}
      />
    </section>
  );
}
