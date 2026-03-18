import { CheckCircle } from "lucide-react";

const candidates = [
  { keyword: "seo automation tools", volume: "2.4K", difficulty: 34, intent: "Commercial", selected: false },
  { keyword: "automate seo for small business", volume: "720", difficulty: 14, intent: "Informational", selected: true },
  { keyword: "best seo software 2025", volume: "8.1K", difficulty: 78, intent: "Commercial", selected: false },
  { keyword: "how to automate keyword research", volume: "1.1K", difficulty: 21, intent: "Informational", selected: false },
  { keyword: "seo tools comparison", volume: "5.4K", difficulty: 69, intent: "Commercial", selected: false },
];

export function KRExample() {
  return (
    <section className="bg-gradient-to-b from-accent-bg/40 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Real example
          </p>
          <h2 id="example"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Finding a keyword you can rank for
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Let&apos;s say you run a small SaaS that helps with SEO. Here&apos;s
            how you&apos;d evaluate a real keyword list.
          </p>
        </div>

        {/* Keyword table */}
        <div className="reveal reveal-delay-2 mt-12 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)]">
          {/* Header */}
          <div className="grid grid-cols-[1fr_70px_80px_100px_40px] gap-3 border-b border-border-light bg-border-light/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-muted-light">
            <span>Keyword</span>
            <span className="text-right">Volume</span>
            <span className="text-right">Difficulty</span>
            <span className="text-right">Intent</span>
            <span />
          </div>

          {/* Rows */}
          {candidates.map((kw) => (
            <div
              key={kw.keyword}
              className={`grid grid-cols-[1fr_70px_80px_100px_40px] items-center gap-3 border-b border-border-light/60 px-5 py-3.5 last:border-0 ${
                kw.selected ? "bg-accent-bg/40" : ""
              }`}
            >
              <span className={`text-[14px] ${kw.selected ? "font-semibold text-foreground" : "text-foreground"}`}>
                {kw.keyword}
              </span>
              <span className="text-right text-[13px] text-muted-light">{kw.volume}</span>
              <span className="text-right">
                <span
                  className={`inline-block min-w-[32px] rounded-md px-1.5 py-0.5 text-center text-[11px] font-semibold ${
                    kw.difficulty < 25
                      ? "bg-success-bg text-success"
                      : kw.difficulty < 50
                      ? "bg-amber-50 text-amber-600"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {kw.difficulty}
                </span>
              </span>
              <span className="text-right text-[12px] text-muted">{kw.intent}</span>
              <span className="text-right">
                {kw.selected && (
                  <CheckCircle className="ml-auto h-5 w-5 text-accent" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Analysis */}
        <div className="reveal reveal-delay-3 mt-8 rounded-2xl border border-accent/10 bg-white p-6 md:p-8">
          <h3 className="text-[16px] font-bold text-foreground">
            Why &ldquo;automate seo for small business&rdquo; wins
          </h3>
          <div className="mt-4 space-y-3 text-[14px] leading-[1.75] text-muted">
            <p>
              <span className="font-medium text-foreground">Low difficulty (14):</span>{" "}
              The top results are forum posts and thin blog articles. A well-structured
              guide would outperform them easily.
            </p>
            <p>
              <span className="font-medium text-foreground">Clear intent:</span>{" "}
              Someone searching this wants to learn how to automate their SEO workflow.
              That&apos;s exactly what your product does.
            </p>
            <p>
              <span className="font-medium text-foreground">Decent volume (720/mo):</span>{" "}
              Not massive, but 720 people searching with high intent beats 8,000 people
              you&apos;ll never reach on page one.
            </p>
            <p>
              <span className="font-medium text-foreground">Perfect relevance:</span>{" "}
              Your product literally does this. The content writes itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
