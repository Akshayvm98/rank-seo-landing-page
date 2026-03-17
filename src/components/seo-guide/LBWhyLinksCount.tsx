const roles = [
  {
    label: "Discover pages",
    description: "Crawlers follow links to find and index new pages across the web.",
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    label: "Understand relationships",
    description: "Links between pages signal topical relevance and content hierarchy.",
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    label: "Identify trusted sources",
    description: "Links from authoritative sites pass trust signals to the pages they point to.",
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: "Interpret authority",
    description: "Pages with more quality backlinks tend to rank higher for competitive queries.",
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export function LBWhyLinksCount() {
  return (
    <section id="why-links-matter" className="border-t border-border-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
              Why links matter
            </p>
            <h2 id="why-links-still-matter" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              Links still help search engines understand trust and relevance
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-[15px] leading-[1.75] text-muted">
              <p>
                Search engines treat links as connections between pages. Each link
                is a signal &mdash; sometimes about relevance, sometimes about trust,
                sometimes about how content relates across a site or across the web.
              </p>
              <p>
                Not every link matters equally. A link from a highly relevant,
                authoritative page carries more weight than one from a random
                directory. And{" "}
                <span className="font-medium text-foreground">
                  the context around the link matters just as much as the link itself
                </span>
                .
              </p>
              <p>
                Links aren&apos;t the only ranking factor, but they remain one of
                the most consistent ones. Understanding how they work helps you
                build a more sustainable SEO strategy.
              </p>
            </div>
          </div>

          {/* Visual: pages connected by links */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                How search engines use links
              </p>
              <div className="space-y-3">
                {roles.map((role) => (
                  <div
                    key={role.label}
                    className="flex items-start gap-3.5 rounded-xl border border-border-light bg-border-light/20 px-4 py-3.5 transition-colors hover:bg-border-light/40"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg">
                      {role.icon}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-foreground">{role.label}</p>
                      <p className="mt-0.5 text-[13px] leading-[1.6] text-muted">{role.description}</p>
                    </div>
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
