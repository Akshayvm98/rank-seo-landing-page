"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    name: "Standard",
    description: "For solo creators and small sites",
    monthly: 29,
    annual: 23,
    features: [
      "1 domain / project",
      "Keyword discovery",
      "AI article generation",
      "SEO scoring & optimization",
      "CMS publishing (WordPress)",
      "Basic performance analytics",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Premium",
    description: "For growing brands and content teams",
    monthly: 99,
    annual: 79,
    features: [
      "Up to 5 domains / projects",
      "Advanced opportunity analysis",
      "Competitor tracking & SERP analysis",
      "Brand voice profiles",
      "All CMS integrations",
      "Full analytics dashboard",
      "Priority support",
    ],
    cta: "Start free",
    featured: true,
  },
  {
    name: "Team",
    description: "For agencies and multi-brand teams",
    monthly: null,
    annual: null,
    features: [
      "Unlimited domains & workspaces",
      "User roles and permissions",
      "Content approval workflows",
      "Shared publishing pipelines",
      "Advanced reporting & exports",
      "Custom onboarding",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  const ref = useReveal();

  return (
    <section id="pricing" ref={ref} className="bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-6 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Transparent pricing. No surprises.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Start free. Scale when you are ready.
          </p>
        </div>

        {/* Toggle */}
        <div className="reveal reveal-delay-1 mb-12 flex items-center justify-center gap-3">
          <span className={`text-[14px] font-medium ${!annual ? "text-foreground" : "text-muted"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors duration-200 ${
              annual ? "bg-accent" : "bg-border"
            }`}
            aria-label="Toggle annual pricing"
          >
            <div
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                annual ? "translate-x-[22px]" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-[14px] font-medium ${annual ? "text-foreground" : "text-muted"}`}>
            Annual
          </span>
          {annual && (
            <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[12px] font-medium text-success">
              Save 20%
            </span>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                plan.featured
                  ? "border-accent/30 bg-white shadow-[0_4px_32px_-8px_rgba(13,148,136,0.12)]"
                  : "border-border-light bg-white hover:border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-[12px] font-medium text-white">
                  Most popular
                </div>
              )}

              <h3 className="text-[18px] font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-[14px] text-muted">{plan.description}</p>

              <div className="mt-5 mb-6">
                {plan.monthly !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-[2.5rem] font-bold tracking-tight text-foreground">
                      ${annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="text-[14px] text-muted">/month</span>
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-[2rem] font-bold tracking-tight text-foreground">
                      Custom
                    </span>
                  </div>
                )}
              </div>

              <a
                href="#"
                className={`mb-6 flex h-11 items-center justify-center rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                  plan.featured
                    ? "bg-foreground text-white hover:bg-foreground/90 hover:shadow-md"
                    : "border border-border text-foreground hover:border-muted-light hover:bg-border-light/50"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-muted">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-3 mt-8 text-center text-[13px] text-muted-light">
          No credit card required for early access. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
