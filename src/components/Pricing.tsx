"use client";
import { Icon, Icons } from "@/components/ui/Icon";

const features = [
  "Generate up to 30 SEO articles per month",
  "Automatic keyword research (Search Console + Google Ads + SERP)",
  "AI-written articles in your brand voice",
  "Direct publishing (WordPress, Webflow, Framer, Notion)",
  "SEO score + optimization suggestions",
  "Internal linking + metadata generation",
  "AI featured images + 100+ languages",
  "Analytics for rankings, clicks, impressions",
  "Multi-site + team access",
];

const valueGroups = [
  {
    title: "Discover",
    icon: Icons.search,
    items: ["Keyword opportunities", "SERP analysis", "Competitor insights"],
  },
  {
    title: "Create",
    icon: Icons.penLine,
    items: ["AI articles in your voice", "SEO optimization", "Internal linking"],
  },
  {
    title: "Grow",
    icon: Icons.trendingUp,
    items: ["Publish to CMS", "Track rankings", "Performance analytics"],
  },
];

const howItWorks = [
  {
    number: "1",
    title: "Connect your site",
    description: "Link your domain and Google Search Console in a few clicks",
  },
  {
    number: "2",
    title: "Set your brand voice",
    description: "Define your tone, add writing samples, and set content guidelines",
  },
  {
    number: "3",
    title: "Start growing",
    description: "Get keyword opportunities and publish your first optimized article",
  },
];

const trustSignals = [
  {
    icon: Icons.banknote,
    text: "No hidden fees",
  },
  {
    icon: Icons.x,
    text: "Cancel anytime",
  },
  {
    icon: Icons.monitor,
    text: "Full feature access",
  },
  {
    icon: Icons.shieldCheck,
    text: "Secure payments (Stripe)",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* ── Header ── */}
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Simple pricing. Real results.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            One plan. Full access. Cancel anytime.
          </p>
        </div>

        {/* ── Pricing Card ── */}
        <div className="reveal mx-auto max-w-[480px]">
          <div className="relative rounded-2xl border border-accent/20 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(13,148,136,0.12)] md:p-10">
            {/* Plan name + price */}
            <div className="text-center">
              <h3 className="text-[18px] font-semibold text-foreground">Starter</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1.5">
                <span className="text-[3rem] font-bold tracking-tight text-foreground">$69</span>
                <span className="text-[15px] text-muted">/ month</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-border-light" />

            {/* Features */}
            <ul className="space-y-3.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] leading-snug text-foreground/80">
                  <Icon icon={Icons.check} size="sm" className="mt-0.5 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="mt-8 flex h-12 items-center justify-center rounded-lg bg-foreground text-[15px] font-semibold text-white transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10"
            >
              Get Started
            </a>

            <p className="mt-3 text-center text-[13px] text-muted-light">
              $69/month. Cancel anytime.
            </p>
          </div>
        </div>

        {/* ── Value Breakdown ── */}
        <div className="mt-24 md:mt-28">
          <h3 className="reveal mb-12 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.75rem]">
            Everything you need to grow organic traffic
          </h3>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {valueGroups.map((group, i) => (
              <div key={group.title} className={`reveal reveal-delay-${i + 1}`}>
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-accent">
                    <Icon icon={group.icon} size="md" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[16px] font-semibold text-foreground">{group.title}</h4>
                </div>
                <ul className="space-y-2.5 pl-[46px]">
                  {group.items.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── How It Works ── */}
        <div className="mt-24 md:mt-28">
          <h3 className="reveal mb-12 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-foreground md:text-[1.75rem]">
            How it works
          </h3>

          <div className="reveal reveal-delay-1 relative grid gap-8 md:grid-cols-3 md:gap-6">
            {/* Connecting line (desktop) */}
            <div className="pointer-events-none absolute top-6 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] hidden h-px bg-border md:block" />

            {howItWorks.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-white text-[16px] font-bold text-accent">
                  {step.number}
                </div>
                <h4 className="mb-1.5 text-[15px] font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="mx-auto max-w-[240px] text-[13px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Block ── */}
        <div className="mt-24 md:mt-28">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />

            <div className="relative">
              <h3 className="mx-auto max-w-[500px] text-[1.875rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[2.25rem]">
                Start your first article in minutes
              </h3>
              <p className="mx-auto mt-4 max-w-[400px] text-[15px] leading-relaxed text-white/60">
                No setup friction. No SEO expertise needed.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex h-12 items-center rounded-lg bg-white px-8 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
              >
                Get Started
              </a>
              <p className="mt-4 text-[13px] text-white/40">
                Cancel anytime. No commitments.
              </p>
            </div>
          </div>
        </div>

        {/* ── Trust Signals ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustSignals.map((signal) => (
            <div key={signal.text} className="flex items-center gap-2 text-[13px] text-muted-light">
              <Icon icon={signal.icon} size="sm" className="text-muted-light" strokeWidth={1.5} />
              {signal.text}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[13px] text-muted-light/70">
          Used by growing teams and founders.
        </p>
      </div>
    </section>
  );
}
