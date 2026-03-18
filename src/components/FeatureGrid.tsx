import { Search, Monitor, Settings, BarChart3, LayoutGrid, Repeat2, Bell, Lightbulb, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Keyword Opportunity",
    description: "Find high-potential keywords based on your real search data and ranking gaps.",
    icon: <Search className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Live SERP Analysis",
    description: "Analyze top-ranking pages and understand what competitors are doing differently.",
    icon: <Monitor className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "SEO Optimization",
    description: "Improve structure, clarity, and keyword placement with real-time scoring.",
    icon: <Settings className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Performance Tracker",
    description: "Monitor rankings, clicks, and impressions across all your content over time.",
    icon: <BarChart3 className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Topic Clustering",
    description: "Organize keywords into strong content groups for better topical authority.",
    icon: <LayoutGrid className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Internal Linking",
    description: "Automatically connect related pages across your website for better crawlability.",
    icon: <Repeat2 className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Ranking Alerts",
    description: "Get notified when your keyword positions change so you can act quickly.",
    icon: <Bell className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Content Intelligence",
    description: "AI-powered strategy recommendations that improve with every piece you publish.",
    icon: <Lightbulb className="h-5 w-5" strokeWidth={1.5} />,
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="bg-gradient-to-b from-border-light/40 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Every feature built to crush rankings
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Powered by real search data. Designed to move the metrics that matter most.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group rounded-xl border border-border-light bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-accent-muted/50 hover:shadow-[0_4px_20px_-4px_rgba(13,148,136,0.1)] hover:-translate-y-0.5`}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-accent">
                {f.icon}
              </div>
              <h3 className="mb-1.5 text-[14px] font-semibold text-foreground">{f.title}</h3>
              <p className="text-[13px] leading-[1.6] text-muted">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-10 text-center">
          <a
            href="#workflow"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Learn more about the platform
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
