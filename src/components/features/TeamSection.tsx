import { Globe, Users, ArrowLeftRight } from "lucide-react";

const teamFeatures = [
  {
    title: "Multi-site support",
    description: "Manage multiple domains and projects from a single dashboard.",
    icon: <Globe className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Team access",
    description: "Invite team members with role-based permissions and shared workflows.",
    icon: <Users className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Shared workflows",
    description: "Collaborate on content from research to approval to publishing.",
    icon: <ArrowLeftRight className="h-5 w-5" strokeWidth={1.5} />,
  },
];

export function TeamSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[500px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Built for individuals and teams
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Whether you work solo or with a team, RankSEO scales with you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teamFeatures.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border-light bg-white p-7 text-center`}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-bg text-accent">
                {f.icon}
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-foreground">{f.title}</h3>
              <p className="text-[14px] leading-[1.65] text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
