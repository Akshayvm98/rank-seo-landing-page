"use client";

import { useReveal } from "@/hooks/useReveal";

const innerNodes = [
  { label: "Search Console", color: "#4285F4", angle: 0 },
  { label: "WordPress", color: "#21759B", angle: 120 },
  { label: "Notion", color: "#000000", angle: 240 },
];

const outerNodes = [
  { label: "Webflow", color: "#4353FF", angle: 45 },
  { label: "Framer", color: "#0055FF", angle: 135 },
  { label: "Analytics", color: "#0d9488", angle: 225 },
  { label: "Stripe", color: "#635BFF", angle: 315 },
];

function OrbitNode({
  label,
  color,
  angle,
  radius,
  counterClass,
}: {
  label: string;
  color: string;
  angle: number;
  radius: number;
  counterClass: string;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <div
      className={`absolute left-1/2 top-1/2 ${counterClass}`}
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      <div className="rounded-xl border border-border-light bg-white px-3.5 py-2 shadow-sm">
        <div className="flex items-center gap-2">
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-[12px] font-medium text-foreground whitespace-nowrap">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

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

          {/* Orbit visual */}
          <div className="reveal reveal-delay-2 relative hidden lg:flex items-center justify-center">
            <div className="relative h-[400px] w-[400px]">
              {/* Pulse rings */}
              <div className="pulse-ring absolute inset-[80px] rounded-full border border-accent/10" />
              <div className="pulse-ring absolute inset-[40px] rounded-full border border-accent/5" style={{ animationDelay: "2s" }} />

              {/* Static orbit tracks */}
              <div className="absolute inset-[80px] rounded-full border border-border-light" />
              <div className="absolute inset-[20px] rounded-full border border-border-light/60" />

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/20">
                <span className="text-[20px] font-bold text-white">R</span>
              </div>

              {/* Inner orbit ring */}
              <div className="orbit-ring absolute inset-[80px]">
                {innerNodes.map((node) => (
                  <OrbitNode
                    key={node.label}
                    label={node.label}
                    color={node.color}
                    angle={node.angle}
                    radius={120}
                    counterClass="orbit-node"
                  />
                ))}
              </div>

              {/* Outer orbit ring */}
              <div className="orbit-ring-reverse absolute inset-[20px]">
                {outerNodes.map((node) => (
                  <OrbitNode
                    key={node.label}
                    label={node.label}
                    color={node.color}
                    angle={node.angle}
                    radius={180}
                    counterClass="orbit-node-reverse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
