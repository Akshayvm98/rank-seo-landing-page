"use client";
import { Icon, Icons } from "@/components/ui/Icon";

export function OPHero() {
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
          How to improve on-page SEO{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            without overcomplicating it
          </span>
        </h1>

        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          On-page SEO is mostly about making your pages clearer, better
          structured, and easier for both search engines and people to
          understand.
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

        {/* Page optimization UI preview */}
        <div className="animate-hero-delay-3 mt-8">
          <div className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-3">
              <span className="text-[13px] font-medium text-foreground">Page Optimizer</span>
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                Score: 88/100
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div className="rounded-lg border border-accent/15 bg-accent-bg/30 px-4 py-2.5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">Title tag</span>
                  <Icon icon={Icons.checkCircle} size="sm" className="text-success" />
                </div>
                <p className="text-[13px] font-medium text-foreground">How to Automate SEO for Small Business | RankSEO</p>
                <p className="mt-0.5 text-[11px] text-muted-light">58 characters · Includes primary keyword</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border-light bg-border-light/20 px-3 py-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Headings</span>
                  <div className="mt-1.5 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="rounded bg-accent-bg px-1 py-0.5 text-[9px] font-bold text-accent">H1</span>
                      <span className="text-[11px] text-foreground truncate">Automate SEO for Small Business</span>
                    </div>
                    <div className="ml-2 flex items-center gap-1.5">
                      <span className="rounded bg-border-light px-1 py-0.5 text-[9px] font-bold text-muted">H2</span>
                      <span className="text-[11px] text-muted truncate">Why Manual SEO Doesn&apos;t Scale</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border-light bg-border-light/20 px-3 py-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-light">Internal links</span>
                    <span className="rounded-full bg-accent-bg px-1.5 py-0.5 text-[9px] font-medium text-accent">3</span>
                  </div>
                  <div className="space-y-1">
                    {["Keyword Research", "Content SEO", "Pricing"].map((link) => (
                      <div key={link} className="flex items-center gap-1.5 text-[11px]">
                        <Icon icon={Icons.link} size="sm" className="text-accent" />
                        <span className="text-accent">{link}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
