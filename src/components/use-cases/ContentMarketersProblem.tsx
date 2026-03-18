"use client";
import type { LucideIcon } from "lucide-react";
import { Icon, Icons } from "@/components/ui/Icon";

const tools: { label: string; icon: LucideIcon; status: string; statusColor: string }[] = [
  { label: "Keyword Tool", icon: Icons.search, status: "Exported CSV", statusColor: "text-amber-600 bg-amber-50" },
  { label: "Google Sheets", icon: Icons.table, status: "Out of date", statusColor: "text-red-500 bg-red-50" },
  { label: "AI Writer", icon: Icons.penLine, status: "No SEO data", statusColor: "text-muted bg-border-light" },
  { label: "CMS Dashboard", icon: Icons.globe, status: "Waiting", statusColor: "text-amber-600 bg-amber-50" },
  { label: "Analytics", icon: Icons.barChart, status: "Disconnected", statusColor: "text-red-500 bg-red-50" },
  { label: "Project Board", icon: Icons.clipboardList, status: "Stale tasks", statusColor: "text-muted bg-border-light" },
];

export function ContentMarketersProblem() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/20 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div>
            <h2 className="reveal text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Publishing consistently is harder than it looks
            </h2>

            <div className="reveal reveal-delay-1 mt-6 space-y-4 text-[16px] leading-[1.7] text-muted">
              <p>
                Content marketers usually don&apos;t struggle with ideas. They
                struggle with execution. The real friction comes from juggling
                too many moving parts at once.
              </p>
              <ul className="space-y-2.5 pl-1">
                {[
                  "Slow keyword research that delays content planning",
                  "Scattered planning across docs, sheets, and tools",
                  "Time-consuming optimization before every publish",
                  "Too many disconnected tools in the workflow",
                  "Pressure to produce more without dropping quality",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-light" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Even strong teams can end up stuck in a cycle of briefs, delays,
                and manual fixes.
              </p>
            </div>
          </div>

          {/* Right: Fragmented Workflow Visual */}
          <div className="reveal reveal-delay-2 relative">
            <div className="relative overflow-hidden rounded-2xl border border-border-light bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <span className="text-[12px] font-medium text-muted-light">Fragmented workflow</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, i) => {
                  return (
                    <div
                      key={i}
                      className="relative rounded-lg border border-dashed border-border bg-background p-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-border-light">
                          <Icon icon={tool.icon} size="sm" className="text-muted" strokeWidth={1.5} />
                        </div>
                        <span className="text-[12px] font-medium text-foreground">{tool.label}</span>
                      </div>
                      <span className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${tool.statusColor}`}>
                        {tool.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Disconnected dashed lines overlay */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <line x1="30%" y1="38%" x2="42%" y2="52%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="70%" y1="38%" x2="58%" y2="55%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="35%" y1="72%" x2="48%" y2="82%" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
