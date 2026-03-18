import { ArrowRight } from "lucide-react";

const connections = [
  {
    from: "Keywords",
    to: "Content",
    desc: "Research tells you what to write about. Without keyword data, you are guessing what people search for.",
  },
  {
    from: "Content",
    to: "Links",
    desc: "Strong content earns links naturally. Nobody links to thin, generic pages.",
  },
  {
    from: "Links",
    to: "Authority",
    desc: "Links signal trust. The more relevant sites that link to you, the higher Google ranks your pages.",
  },
  {
    from: "Analytics",
    to: "Improvement",
    desc: "Data shows what is working and what is not. Every review cycle should produce a next step.",
  },
];

export function PillarConnections() {
  return (
    <section className="bg-gradient-to-b from-accent-bg/30 to-transparent py-8 md:py-10">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The loop
          </p>
          <h2
            id="how-everything-connects"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            SEO works best when everything connects
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.7] text-muted">
            Each part of SEO feeds the next. When they work together, growth
            compounds over time.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-12 space-y-1">
          {connections.map((c, i) => (
            <div key={c.from}>
              <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded-lg bg-accent-bg px-2.5 py-1 text-[12px] font-bold text-accent">
                    {c.from}
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent/50" strokeWidth={1.5} />
                  <span className="rounded-lg bg-accent-bg px-2.5 py-1 text-[12px] font-bold text-accent">
                    {c.to}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.7] text-muted">
                  {c.desc}
                </p>
              </div>
              {i < connections.length - 1 && (
                <div className="ml-8 flex h-3 items-center">
                  <div className="h-full w-px bg-accent/15" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3 mt-8 rounded-xl bg-accent-bg/40 border border-accent-muted/30 px-5 py-4 text-center">
          <p className="text-[14px] font-medium text-accent">
            SEO is not a one-time project. It is a feedback loop — publish,
            measure, improve, repeat.
          </p>
        </div>
      </div>
    </section>
  );
}
