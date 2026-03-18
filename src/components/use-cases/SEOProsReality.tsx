"use client";
import type { LucideIcon } from "lucide-react";
import { Icon, Icons } from "@/components/ui/Icon";

const stages: { label: string; icon: LucideIcon }[] = [
  { label: "Research", icon: Icons.search },
  { label: "Draft", icon: Icons.penLine },
  { label: "Optimize", icon: Icons.sliders },
  { label: "Publish", icon: Icons.upload },
  { label: "Track", icon: Icons.barChart },
];

export function SEOProsReality() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:items-center">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
              You already know what needs to be done. The problem is doing it at scale.
            </h2>

            <div className="reveal reveal-delay-1 mt-5 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                For SEO professionals, strategy is rarely the bottleneck. Execution is.
                The real drag usually comes from:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  "Repetitive keyword analysis",
                  "Slow content production cycles",
                  "Manual optimization passes",
                  "Fragmented publishing workflows",
                  "Too much time spent coordinating steps that should be connected",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Most tools give you more data. Very few reduce the actual workload.
              </p>
            </div>
          </div>

          {/* Right: Operational Bottleneck Visual */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-xl border border-border-light bg-white p-5">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-muted-light">
                Operational bottlenecks
              </p>
              <div className="space-y-3">
                {stages.map((stage, i) => {
                  return (
                    <div key={stage.label}>
                      <div className="flex items-center gap-3 rounded-lg border border-border-light/80 bg-border-light/20 px-4 py-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
                          <Icon icon={stage.icon} size="sm" className="text-red-400" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-medium text-foreground">{stage.label}</span>
                        <div className="ml-auto rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-medium text-red-400">
                          Manual
                        </div>
                      </div>
                      {i < stages.length - 1 && (
                        <div className="flex justify-center py-1">
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="h-1 w-px bg-border" />
                            <Icon icon={Icons.chevronDown} size="sm" className="text-border" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-center text-[11px] text-muted-light">
                Disconnected stages. Repeated effort at each step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
