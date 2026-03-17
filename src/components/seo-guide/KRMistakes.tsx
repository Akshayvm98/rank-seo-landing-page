const mistakes = [
  {
    title: "Chasing volume over opportunity",
    description:
      "A keyword with 50K monthly searches and a difficulty of 90 is worthless to a new site. You'll spend months creating content that never gets seen. Target keywords where you can realistically reach page one.",
  },
  {
    title: "Ignoring search intent",
    description:
      "If someone searches \"keyword research tool\" and you give them a 3,000-word educational guide, they'll bounce. Match the format to what the searcher actually wants \u2014 check the SERP before you write.",
  },
  {
    title: "Writing without topic clusters",
    description:
      "Publishing isolated articles on random keywords means you never build topical authority. Group related keywords into clusters and interlink them. Google rewards depth, not breadth.",
  },
  {
    title: "Not using your own data",
    description:
      "Your Search Console is full of keywords you already have impressions for. These are the lowest-hanging fruit in SEO \u2014 yet most people ignore their own data and start from scratch.",
  },
  {
    title: "Skipping keyword difficulty entirely",
    description:
      "Publishing content without checking difficulty is like entering a race without knowing who you're running against. Even a quick difficulty check saves you from wasting hours on unwinnable keywords.",
  },
  {
    title: "Targeting one keyword per page",
    description:
      "A single page can rank for dozens of related terms if the content is comprehensive. Group 3\u20135 semantically related keywords per page and cover the topic thoroughly.",
  },
];

export function KRMistakes() {
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Watch out
          </p>
          <h2 id="mistakes"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Common keyword research mistakes
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            These trip up even experienced marketers. If any of these sound
            familiar, it&apos;s fixable.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((mistake, i) => (
            <div
              key={mistake.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[14px] font-bold text-red-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[15px] font-bold text-foreground">{mistake.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                {mistake.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
