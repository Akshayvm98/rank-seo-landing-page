"use client";

import { useReveal } from "@/hooks/useReveal";

const nodes = [
  { label: "Search Console", x: "10%", y: "8%", color: "#4285F4" },
  { label: "WordPress", x: "75%", y: "5%", color: "#21759B" },
  { label: "Webflow", x: "85%", y: "45%", color: "#4353FF" },
  { label: "Framer", x: "70%", y: "80%", color: "#0055FF" },
  { label: "Notion", x: "15%", y: "75%", color: "#000000" },
  { label: "Analytics", x: "5%", y: "42%", color: "#0d9488" },
];

export function IntegrationsHero() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-bg/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="reveal text-[2.5rem] font-bold leading-[1.1] tracking-[-0.03em] text-foreground md:text-[3.25rem]">
              Integrations that make SEO{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                easier to run
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-5 max-w-[520px] text-[17px] leading-[1.65] text-muted">
              Connect RankSEO with your Search Console, CMS, and analytics
              stack to move from keyword discovery to publishing without
              juggling tools.
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
                className="inline-flex h-11 items-center rounded-lg border border-border px-5 text-[14px] font-medium text-foreground transition-all duration-200 hover:border-muted-light hover:bg-surface"
              >
                View Pricing
              </a>
            </div>

            <p className="reveal reveal-delay-3 mt-5 text-[13px] text-muted-light">
              Built to work with the tools modern teams already use.
            </p>
          </div>

          {/* Integration nodes visual */}
          <div className="reveal reveal-delay-2 relative hidden lg:block">
            <div className="relative h-[380px]">
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/20">
                <span className="text-[20px] font-bold text-white">R</span>
              </div>

              {/* Connection lines + nodes */}
              {nodes.map((node) => (
                <div
                  key={node.label}
                  className="absolute"
                  style={{ left: node.x, top: node.y }}
                >
                  <div className="rounded-xl border border-border-light bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <span className="text-[12px] font-medium text-foreground whitespace-nowrap">
                        {node.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
