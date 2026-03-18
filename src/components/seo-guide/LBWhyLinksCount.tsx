import { Search, Share2, ShieldCheck, BarChart3 } from "lucide-react";

const roles = [
  {
    label: "Discover pages",
    description: "Crawlers follow links to find and index new pages across the web.",
    icon: <Search className="h-5 w-5 text-accent" strokeWidth={1.5} />,
  },
  {
    label: "Understand relationships",
    description: "Links between pages signal topical relevance and content hierarchy.",
    icon: <Share2 className="h-5 w-5 text-accent" strokeWidth={1.5} />,
  },
  {
    label: "Identify trusted sources",
    description: "Links from authoritative sites pass trust signals to the pages they point to.",
    icon: <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={1.5} />,
  },
  {
    label: "Interpret authority",
    description: "Pages with more quality backlinks tend to rank higher for competitive queries.",
    icon: <BarChart3 className="h-5 w-5 text-accent" strokeWidth={1.5} />,
  },
];

export function LBWhyLinksCount() {
  return (
    <section id="why-links-matter" className="py-8 md:py-10">
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
