import { Check } from "lucide-react";

export function CSHero() {
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
          How to create SEO content that{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            actually ranks
          </span>
        </h1>

        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          Ranking content isn&apos;t about stuffing keywords into a page.
          It&apos;s about structure, relevance, clarity, and covering the
          right topic well.
        </p>

        <div className="animate-hero-delay-3 mt-7 flex flex-wrap items-center gap-3">
          <a
            href="/pricing"
            className="inline-flex h-11 items-center rounded-xl bg-foreground px-7 text-[14px] font-semibold text-white shadow-lg shadow-foreground/10 transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start $1 Trial
          </a>
        </div>

        {/* Article editor UI */}
        <div className="animate-hero-delay-3 mt-8">
          <div className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between border-b border-border-light px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span className="text-[13px] font-medium text-foreground">Article Editor</span>
              </div>
              <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[11px] font-semibold text-success">
                SEO Score: 91
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div className="rounded-lg bg-border-light/40 px-3 py-2">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted-light">Title tag</p>
                <p className="mt-0.5 text-[13px] font-medium text-foreground">How to Automate SEO for Small Business</p>
              </div>
              <div className="space-y-1.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold text-accent">H1</span>
                  <span className="text-[13px] font-semibold text-foreground">Automate SEO Without the Complexity</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                  <span className="text-[12px] text-muted">Why Manual SEO Doesn&apos;t Scale</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                  <span className="text-[12px] text-muted">What to Automate First</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="rounded bg-border-light px-1.5 py-0.5 text-[10px] font-bold text-muted">H2</span>
                  <span className="text-[12px] text-muted">Tools That Help</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { label: "Title tag", done: true },
                  { label: "Meta description", done: true },
                  { label: "H1 keyword", done: true },
                  { label: "Internal links", done: true },
                  { label: "Image alt text", done: false },
                  { label: "Readability", done: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] ${
                      item.done
                        ? "bg-success-bg text-success"
                        : "bg-border-light/50 text-muted-light"
                    }`}
                  >
                    {item.done && (
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    )}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
