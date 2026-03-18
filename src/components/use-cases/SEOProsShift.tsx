"use client";
import { Icon, Icons } from "@/components/ui/Icon";

const youDecide = [
  "Topic prioritization",
  "Search intent judgment",
  "Positioning decisions",
  "Strategic direction",
];

const rankSEOHandles = [
  "Keyword expansion",
  "Draft generation",
  "Optimization checks",
  "Metadata suggestions",
  "Publishing steps",
  "Performance monitoring",
];

export function SEOProsShift() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h2 className="reveal text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[2rem]">
          Automate the execution layer — not the thinking
        </h2>

        <p className="reveal reveal-delay-1 mx-auto mt-4 max-w-[560px] text-center text-[15px] leading-[1.75] text-muted">
          RankSEO is not meant to replace strategic judgment. It is built to
          handle the work that does not need to be manual every time.
        </p>

        <div className="reveal reveal-delay-2 mt-10 grid gap-4 sm:grid-cols-2">
          {/* You Decide */}
          <div className="rounded-xl border border-border-light bg-white p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <Icon icon={Icons.user} size="sm" className="text-white" />
              </div>
              <div>
                <span className="text-[14px] font-semibold text-foreground">You decide</span>
                <p className="text-[11px] text-muted-light">Keep manual</p>
              </div>
            </div>
            <ul className="space-y-3">
              {youDecide.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-foreground/80">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RankSEO Handles */}
          <div className="rounded-xl border border-accent/20 bg-accent-bg/30 p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-[13px] font-bold text-white">R</span>
              </div>
              <div>
                <span className="text-[14px] font-semibold text-foreground">RankSEO handles</span>
                <p className="text-[11px] text-muted-light">Automate</p>
              </div>
            </div>
            <ul className="space-y-3">
              {rankSEOHandles.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-foreground/80">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Icon icon={Icons.check} size="sm" className="text-accent" strokeWidth={2.5} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
