const checks = [
  { label: "Does the page target one clear primary topic?", status: "pass" },
  { label: "Is the title specific and relevant?", status: "pass" },
  { label: "Does the meta description make the page worth clicking?", status: "pass" },
  { label: "Is the page easy to scan with clear headings?", status: "warn" },
  { label: "Are related subtopics covered naturally?", status: "pass" },
  { label: "Are there internal links to supporting pages?", status: "warn" },
  { label: "Is the URL clean and descriptive?", status: "pass" },
  { label: "Does the page feel useful, not just optimized?", status: "pass" },
];

export function OPChecklist() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Your checklist
          </p>
          <h2 id="checklist" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            A practical on-page SEO checklist you can actually use
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Run through this before publishing. It takes five minutes and
            prevents months of underperformance.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-12 grid gap-6 md:grid-cols-[1fr_240px]">
          {/* Checklist */}
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)]">
            <div className="space-y-1">
              {checks.map((check, i) => (
                <div
                  key={check.label}
                  className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-border-light/30"
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                      check.status === "pass"
                        ? "bg-success-bg"
                        : "bg-amber-50"
                    }`}
                  >
                    {check.status === "pass" ? (
                      <svg className="h-3 w-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="h-3 w-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] leading-[1.5] text-foreground">{check.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Score summary */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light">SEO Score</p>
              <p className="mt-2 text-[40px] font-bold leading-none tracking-tight text-foreground">88</p>
              <p className="mt-1 text-[12px] text-success font-medium">Good</p>
            </div>

            <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light mb-3">Summary</p>
              <div className="space-y-2 text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Passed</span>
                  <span className="font-semibold text-success">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Needs review</span>
                  <span className="font-semibold text-amber-500">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Failed</span>
                  <span className="font-semibold text-muted-light">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
