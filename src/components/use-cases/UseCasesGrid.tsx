"use client";
import { Icon, Icons } from "@/components/ui/Icon";

const useCases = [
  {
    title: "Founders",
    href: "/use-cases/founders",
    description:
      "Grow organic traffic without hiring an SEO team or learning a whole new discipline.",
    icon: Icons.rocket,
  },
  {
    title: "Content Marketers",
    href: "/use-cases/content-marketers",
    description:
      "Scale SEO content production with a workflow that is easier to manage and easier to repeat.",
    icon: Icons.fileText,
  },
  {
    title: "SEO Professionals",
    href: "/use-cases/seo-professionals",
    description:
      "Automate execution, reduce repetitive work, and stay focused on strategy.",
    icon: Icons.barChart,
  },
  {
    title: "Agencies",
    href: "/use-cases/agencies",
    description:
      "Manage SEO across multiple clients with cleaner workflows and less operational overhead.",
    icon: Icons.building,
  },
  {
    title: "Bloggers",
    href: "/use-cases/bloggers",
    description:
      "Stop guessing what to write and build blog traffic with more clarity and consistency.",
    icon: Icons.penLine,
  },
  {
    title: "SaaS Teams",
    href: "/use-cases/saas",
    description:
      "Turn SEO into a more repeatable growth channel for your product and content team.",
    icon: Icons.settings,
  },
];

export function UseCasesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Find the use case that fits your workflow
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => (
            <a
              key={uc.title}
              href={uc.href}
              className={`reveal reveal-delay-${(i % 4) + 1} group rounded-xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-border hover:shadow-sm`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-bg text-accent">
                <Icon icon={uc.icon} size="md" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-foreground">{uc.title}</h3>
              <p className="mb-4 text-[14px] leading-[1.6] text-muted">{uc.description}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent transition-colors group-hover:text-accent-hover">
                View use case
                <Icon icon={Icons.arrowRight} size="sm" className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
