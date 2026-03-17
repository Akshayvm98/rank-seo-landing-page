const backlinks = [
  { label: "External authority", description: "Backlinks from other domains signal that external sites vouch for your content." },
  { label: "Trust signals", description: "Links from reputable, relevant sites carry trust that search engines factor into rankings." },
  { label: "Discovery", description: "Crawlers use backlinks to find new pages. More backlinks mean faster indexing." },
];

const internalLinks = [
  { label: "Context distribution", description: "Internal links pass topical relevance between your own pages, reinforcing authority." },
  { label: "Discoverability", description: "Pages that are well-linked internally are easier for both users and crawlers to find." },
  { label: "Easier win", description: "You control internal links entirely. No outreach, no waiting. Just better site structure." },
];

export function LBInternalVsBacklinks() {
  return (
    <section id="internal-vs-backlinks" className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Know the difference
          </p>
          <h2 id="internal-links-vs-backlinks" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Internal links and backlinks do different jobs
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-[16px] leading-[1.7] text-muted">
            Both matter for SEO, but they work in different ways. Understanding
            the distinction helps you invest your effort where it counts.
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Backlinks panel */}
          <div className="reveal reveal-delay-1 rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-bg">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m5.304-3.066a4.5 4.5 0 00-6.364 6.364L5.879 17.12" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-foreground">Backlinks</h3>
                <p className="text-[12px] text-muted-light">Links from other websites</p>
              </div>
            </div>
            <div className="space-y-3">
              {backlinks.map((item) => (
                <div key={item.label} className="rounded-xl border border-border-light bg-border-light/20 px-4 py-3">
                  <p className="text-[14px] font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-[13px] leading-[1.6] text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal links panel */}
          <div className="reveal reveal-delay-2 rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-bg">
                <svg className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-foreground">Internal Links</h3>
                <p className="text-[12px] text-muted-light">Links within your own site</p>
              </div>
            </div>
            <div className="space-y-3">
              {internalLinks.map((item) => (
                <div key={item.label} className="rounded-xl border border-border-light bg-border-light/20 px-4 py-3">
                  <p className="text-[14px] font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-[13px] leading-[1.6] text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
