export function PillarCTA() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />
          <div className="relative">
            <h2 className="mx-auto max-w-[480px] text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.25rem]">
              Turn SEO into a system, not a task
            </h2>
            <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.65] text-white/60">
              Try RankSEO for $1 and start building consistent organic growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-xl bg-white px-8 text-[15px] font-semibold text-foreground shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book a quick call
              </a>
              <a
                href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-xl border border-white/15 px-6 text-[14px] font-medium text-white/80 transition-all duration-300 hover:border-white/25 hover:text-white"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-5 text-[13px] text-white/40">
              Full access during trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
