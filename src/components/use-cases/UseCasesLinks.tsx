"use client";
import { Icon, Icons } from "@/components/ui/Icon";

const links = [
  {
    title: "Features",
    href: "/features",
    icon: Icons.sparkles,
  },
  {
    title: "Integrations",
    href: "/integrations",
    icon: Icons.puzzle,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: Icons.tag,
  },
];

export function UseCasesLinks() {
  return (
    <section className="bg-gradient-to-b from-border-light/40 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-10 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Explore more of the RankSEO workflow
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Understand how RankSEO works in more detail — from platform features to integrations
            and pricing.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mx-auto grid max-w-[720px] gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="group flex items-center gap-3 rounded-xl border border-border-light bg-white p-4 transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent">
                <Icon icon={link.icon} size="md" strokeWidth={1.5} />
              </div>
              <span className="text-[14px] font-medium text-foreground">{link.title}</span>
              <Icon icon={Icons.arrowRight} size="sm" className="ml-auto text-muted-light transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
