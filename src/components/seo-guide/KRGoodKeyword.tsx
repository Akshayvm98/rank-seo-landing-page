import { Link, BarChart3, Filter, ArrowUpCircle } from "lucide-react";

const factors = [
  {
    title: "Relevance",
    description:
      "Does this keyword actually relate to what you offer? A high-volume keyword means nothing if your content can't genuinely help the searcher.",
    icon: <Link className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Search volume",
    description:
      "Enough people need to be searching for it. But \"enough\" doesn't mean 50K/month. Even 200 monthly searches can drive real business if the intent is right.",
    icon: <BarChart3 className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Competition",
    description:
      "Keyword difficulty tells you who you're up against. If page one is all enterprise sites with thousands of backlinks, you need a different keyword.",
    icon: <Filter className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Search intent",
    description:
      "What does the searcher actually want? If someone searches \"keyword research\" they want a guide. If they search \"keyword research tool\" they want software. Match the intent.",
    icon: <ArrowUpCircle className="h-5 w-5" strokeWidth={1.5} />,
  },
];

export function KRGoodKeyword() {
  return (
    <section className="bg-gradient-to-b from-border-light/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The fundamentals
          </p>
          <h2 id="good-keywords"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            What actually makes a keyword worth targeting
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Before you start building a keyword list, understand the four things
            that separate a good keyword from a vanity metric.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {factors.map((factor, i) => (
            <div
              key={factor.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl border border-black/[0.04] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg text-accent">
                {factor.icon}
              </div>
              <h3 className="text-[17px] font-bold text-foreground">{factor.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
