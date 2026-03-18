import { AlertTriangle } from "lucide-react";

const mistakes = [
  {
    mistake: "Chasing low-quality backlinks",
    fix: "A link from a spammy directory or irrelevant blog does more harm than good. Focus on relevance and quality, not volume.",
  },
  {
    mistake: "Focusing on quantity over relevance",
    fix: "Ten links from topically relevant sites outperform a hundred links from unrelated ones. Context matters more than count.",
  },
  {
    mistake: "Ignoring internal links",
    fix: "Internal links are the most underused link building tool. Every page on your site should connect to related pages with clear anchor text.",
  },
  {
    mistake: "Publishing pages not worth linking to",
    fix: "If your content is thin, generic, or outdated, no amount of outreach will earn quality links. Start with the page itself.",
  },
  {
    mistake: "Treating outreach like a numbers game",
    fix: "Mass emailing hundreds of strangers with a template pitch rarely works and often damages your reputation. Be selective and genuine.",
  },
  {
    mistake: "Expecting backlinks to fix weak content",
    fix: "Links can amplify a strong page. They rarely rescue a weak one. If a page isn\u2019t ranking, the problem is usually the content, not the link count.",
  },
];

export function LBMistakes() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            Watch out
          </p>
          <h2 id="mistakes" className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]">
            Common link building mistakes
          </h2>
        </div>

        {/* Warning-style editorial layout */}
        <div className="reveal reveal-delay-2 mt-12 divide-y divide-border-light rounded-2xl border border-black/[0.04] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          {mistakes.map((item) => (
            <div key={item.mistake} className="px-6 py-5 transition-colors hover:bg-border-light/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[15px] font-bold text-foreground">{item.mistake}</p>
                  <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 mt-8 text-center text-[15px] font-medium leading-[1.7] text-muted">
          Links can amplify a strong page. They rarely rescue a weak one.
        </p>
      </div>
    </section>
  );
}
