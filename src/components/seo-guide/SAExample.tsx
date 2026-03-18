"use client";
import { Icon, Icons } from "@/components/ui/Icon";

export function SAExample() {
  return (
    <section className="bg-gradient-to-b from-accent-bg/40 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Real scenario
          </p>
          <h2
            id="example"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            Example: What this data actually tells you
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Analytics only matters if you act on it. Here is a real scenario and
            how to interpret the numbers.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-12 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* Data panel */}
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-foreground">
                /blog/seo-checklist
              </span>
              <span className="rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
                Last 28 days
              </span>
            </div>

            {/* Metric row */}
            <div className="mb-4 grid grid-cols-3 gap-3">
              {[
                { label: "Impressions", value: "4,200", change: "+38%", up: true },
                { label: "Clicks", value: "84", change: "+4%", up: true },
                { label: "CTR", value: "2.0%", change: "-0.3%", up: false },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-black/[0.04] bg-white p-3"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wide text-muted-light">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[17px] font-bold tracking-tight text-foreground">
                    {m.value}
                  </p>
                  <span
                    className={`text-[11px] font-semibold ${m.up ? "text-success" : "text-red-500"}`}
                  >
                    {m.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Impressions chart - rising */}
            <div className="rounded-xl bg-gradient-to-b from-accent-bg/30 to-white border border-black/[0.04] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-muted">
                  Impressions (rising)
                </span>
                <span className="text-[11px] font-semibold text-success">
                  ↑ Growing
                </span>
              </div>
              <div className="flex items-end justify-between gap-[3px] h-[50px]">
                {[18, 22, 25, 30, 28, 35, 38, 42, 45, 50, 55, 60, 65, 72].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-accent/20"
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            {/* Clicks chart - flat */}
            <div className="mt-3 rounded-xl border border-black/[0.04] bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-medium text-muted">
                  Clicks (flat)
                </span>
                <span className="text-[11px] font-semibold text-amber-500">
                  → Stable
                </span>
              </div>
              <div className="flex items-end justify-between gap-[3px] h-[50px]">
                {[30, 28, 32, 30, 35, 28, 32, 30, 34, 30, 28, 35, 32, 30].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-amber-200/60"
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Analysis panel */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-50 text-amber-500">
                  <Icon icon={Icons.alertTriangle} size="sm" fill="currentColor" />
                </span>
                <h3 className="text-[15px] font-bold text-foreground">
                  What is happening
                </h3>
              </div>
              <p className="text-[14px] leading-[1.7] text-muted">
                Google is showing this page to significantly more people (+38%
                impressions), but almost nobody is clicking. The CTR is 2.0% and
                actually dropping. The page is visible — but not compelling.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-bg text-accent">
                  <Icon icon={Icons.check} size="sm" fill="currentColor" />
                </span>
                <h3 className="text-[15px] font-bold text-foreground">
                  What to do next
                </h3>
              </div>
              <ul className="space-y-2.5 text-[14px] leading-[1.7] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Rewrite the title tag to be more specific and useful — match
                    what searchers actually want.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Improve the meta description with a clear benefit and
                    call-to-action.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Check the SERP — see what competitors are doing differently
                    in their listings.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Re-check in 2–3 weeks to see if CTR improved.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-accent-bg/40 border border-accent-muted/30 px-5 py-4">
              <p className="text-[13px] leading-[1.7] text-accent font-medium">
                This is a classic &ldquo;visibility without engagement&rdquo;
                signal. The fix is almost always about improving how the page
                appears in search results, not the content itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
