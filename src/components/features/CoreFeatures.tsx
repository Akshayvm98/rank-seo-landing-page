import { Search, Sparkles, Settings, Upload, BarChart3, Lightbulb } from "lucide-react";

const coreFeatures = [
  {
    title: "Keyword Opportunity Discovery",
    description: "Surface high-ROI keywords from your real search data and ranking gaps.",
    icon: <Search className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Brand Voice Content Generation",
    description: "AI writes articles that match your tone, style, and messaging.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "SEO Optimization Engine",
    description: "Score every article for structure, keywords, readability, and technical SEO.",
    icon: <Settings className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "One-Click Publishing",
    description: "Push content directly to WordPress, Webflow, Framer, or Notion.",
    icon: <Upload className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Performance Tracking",
    description: "Monitor rankings, clicks, and impressions across all your content.",
    icon: <BarChart3 className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Continuous Content Intelligence",
    description: "AI-powered recommendations that sharpen with every article you publish.",
    icon: <Lightbulb className="h-5 w-5" strokeWidth={1.5} />,
  },
];

export function CoreFeatures() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="reveal mx-auto mb-14 max-w-[500px] text-center text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          Everything you need in one workflow
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 rounded-xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-accent-muted/50 hover:shadow-[0_2px_16px_-2px_rgba(13,148,136,0.06)]`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                {f.icon}
              </div>
              <div>
                <h3 className="mb-1 text-[15px] font-semibold text-foreground">{f.title}</h3>
                <p className="text-[13px] leading-[1.6] text-muted">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
