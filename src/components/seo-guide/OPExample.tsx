export function OPExample() {
  return (
    <section className="bg-gradient-to-b from-accent-bg/40 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Before &amp; after
          </p>
          <h2 id="example" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Improving a page with better on-page SEO
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Same page, same topic. Small structural changes make a measurable
            difference.
          </p>
        </div>

        {/* Stacked comparison */}
        <div className="reveal reveal-delay-2 mt-12 space-y-6">
          {/* Before */}
          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-7">
            <span className="mb-5 inline-block rounded-full bg-red-50 px-3 py-0.5 text-[11px] font-semibold text-red-500">
              Before optimization
            </span>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3">
                <Detail label="Title" value="SEO Tips" issue="Too vague, no keyword" />
                <Detail label="Meta description" value="(empty)" issue="Missing entirely" />
                <Detail label="URL" value="/blog/post-47" issue="Non-descriptive" />
              </div>
              <div className="space-y-3">
                <Detail label="Headings" value="H1, H1, H3, H2" issue="Multiple H1s, broken hierarchy" />
                <Detail label="Internal links" value="0" issue="Orphan page" />
                <Detail label="Content" value="~320 words" issue="Thin, misses subtopics" />
              </div>
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-accent-muted/40 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-7">
            <span className="mb-5 inline-block rounded-full bg-success-bg px-3 py-0.5 text-[11px] font-semibold text-success">
              After optimization
            </span>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3">
                <Improvement label="Title" value="How to Automate SEO for Small Business (2025)" note="Specific, includes keyword, under 60 chars" />
                <Improvement label="Meta description" value="Learn how to automate keyword research, content, and publishing for small business SEO." note="Compelling, 142 characters" />
                <Improvement label="URL" value="/seo-guide/automate-seo-small-business" note="Clean, keyword-rich, readable" />
              </div>
              <div className="space-y-3">
                <Improvement label="Headings" value="H1 \u2192 H2 \u2192 H3 \u2192 H3 \u2192 H2 \u2192 H2" note="Clear hierarchy, 6 sections" />
                <Improvement label="Internal links" value="4 contextual links" note="Keyword research, content SEO, pricing, features" />
                <Improvement label="Content" value="~1,600 words" note="Full topic coverage, clear structure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value, issue }: { label: string; value: string; issue: string }) {
  return (
    <div className="rounded-lg bg-red-50/30 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-red-400">{label}</p>
      <p className="mt-0.5 text-[13px] font-medium text-foreground">{value}</p>
      <p className="mt-0.5 text-[11px] text-red-400">{issue}</p>
    </div>
  );
}

function Improvement({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-lg bg-accent-bg/30 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-accent">{label}</p>
      <p className="mt-0.5 text-[13px] font-medium text-foreground">{value}</p>
      <p className="mt-0.5 text-[11px] text-accent">{note}</p>
    </div>
  );
}
