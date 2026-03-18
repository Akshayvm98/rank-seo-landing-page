"use client";
import { Icon, Icons } from "@/components/ui/Icon";

export function LBHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-8 md:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[720px] px-6">
        <p className="animate-hero mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
          SEO Guide
        </p>
        <h1 className="animate-hero-delay-1 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          How link building works{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            when you stop treating it like a hack
          </span>
        </h1>

        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          Links still matter for SEO, but not all links are equal. The best
          link building strategies focus on earning attention, not gaming
          algorithms.
        </p>

        <div className="animate-hero-delay-3 mt-7 flex flex-wrap items-center gap-3">
          <a
            href="/pricing"
            className="inline-flex h-11 items-center rounded-xl bg-foreground px-7 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start $1 Trial
          </a>
          <a
            href="/features"
            className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-[13px] font-medium text-foreground transition-all duration-300 hover:border-muted-light hover:bg-white hover:shadow-sm"
          >
            View Features
          </a>
        </div>

        {/* Link authority UI */}
        <div className="animate-hero-delay-3 mt-8">
          <div className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-3">
              <span className="text-[13px] font-medium text-foreground">Link Authority</span>
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                Authority: 72
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">Backlink Sources</span>
                <div className="mt-1.5 space-y-1.5">
                  {[
                    { domain: "techblog.io", authority: "DA 68", type: "Editorial" },
                    { domain: "startupweekly.com", authority: "DA 54", type: "Resource" },
                    { domain: "seoinsights.org", authority: "DA 47", type: "Guest post" },
                  ].map((source) => (
                    <div key={source.domain} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon icon={Icons.link} size="sm" className="text-accent" />
                        <span className="text-[12px] font-medium text-foreground">{source.domain}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-light">{source.type}</span>
                        <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold text-accent">{source.authority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["Link Building", "Content Strategy", "Technical SEO", "Keyword Research"].map((cluster) => (
                  <span
                    key={cluster}
                    className="rounded-lg border border-border-light bg-white px-2.5 py-1 text-[11px] font-medium text-foreground"
                  >
                    {cluster}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
