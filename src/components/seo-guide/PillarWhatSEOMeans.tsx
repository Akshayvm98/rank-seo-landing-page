export function PillarWhatSEOMeans() {
  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <p className="reveal mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            The basics
          </p>
          <h2
            id="what-seo-means"
            className="reveal reveal-delay-1 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.03em] text-foreground md:text-[2.25rem]"
          >
            SEO is simply about being discoverable
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.75] text-muted">
            Search engine optimization is the process of making your pages show
            up when people search for things you can help with. That is it.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mx-auto mt-12 max-w-[520px]">
          <div className="space-y-1">
            {[
              { step: "Someone searches for a question or topic", icon: "search" },
              { step: "Google finds pages that match", icon: "find" },
              { step: "It ranks the most relevant and useful ones", icon: "rank" },
              { step: "People click and get their answer", icon: "click" },
            ].map((item, i) => (
              <div key={item.step}>
                <div className="flex items-center gap-4 rounded-xl bg-white border border-black/[0.04] px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-[13px] font-bold text-accent">
                    {i + 1}
                  </span>
                  <p className="text-[15px] font-medium text-foreground">
                    {item.step}
                  </p>
                </div>
                {i < 3 && (
                  <div className="ml-[30px] flex h-4 items-center">
                    <div className="h-full w-px bg-border-light" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[14px] leading-[1.7] text-muted">
            Your job is to create content that matches what people search for,
            structure it so Google can understand it, and keep improving based on
            what the data tells you.
          </p>
        </div>
      </div>
    </section>
  );
}
