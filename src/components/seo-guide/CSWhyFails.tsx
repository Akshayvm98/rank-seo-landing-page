const problems = [
  { label: "Poor heading structure", icon: "H1 H1 H3" },
  { label: "Thin content (< 400 words)", icon: "278w" },
  { label: "No internal links", icon: "0 links" },
  { label: "Missing meta description", icon: "empty" },
  { label: "No clear search intent match", icon: "?" },
];

export function CSWhyFails() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              The real issue
            </p>
            <h2 id="why-it-fails"  className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Why a lot of SEO content never ranks
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                You research a keyword, write a post, add a meta description,
                and hit publish. A month later &mdash; nothing. No impressions.
                No clicks. It just sits there.
              </p>
              <p>
                This happens more than most people admit. The problem usually
                isn&apos;t the writing quality. It&apos;s the approach:
              </p>
              <ul className="ml-1 space-y-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                  <span>Targeting topics that are too broad or too competitive</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                  <span>Not matching what the searcher actually wants to find</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                  <span>Weak page structure that doesn&apos;t signal topic coverage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                  <span>Missing subtopics that competitors cover well</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-light" />
                  <span>Content that feels generic &mdash; could be about anything</span>
                </li>
              </ul>
              <p>
                SEO content writing that works starts with understanding{" "}
                <span className="font-medium text-foreground">why</span> someone
                is searching, then building the page to be the best answer.
              </p>
            </div>
          </div>

          {/* Problems visual */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-red-100 bg-red-50/20 p-6">
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-red-500">
                Common page problems
              </p>
              <div className="space-y-3">
                {problems.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <span className="text-[14px] text-foreground">{p.label}</span>
                    <span className="rounded-md bg-red-50 px-2 py-0.5 text-[12px] font-semibold text-red-400">
                      {p.icon}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[12px] text-red-400">
                Pages with these issues rarely reach page one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
