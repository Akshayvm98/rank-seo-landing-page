import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We went from scattered SEO tasks to a repeatable content engine in days. The keyword scoring alone saved us hours of manual research every week.",
    name: "Sarah Chen",
    role: "Growth Lead",
    company: "Brightpath",
    initials: "SC",
  },
  {
    quote:
      "The brand voice controls are surprisingly good. I was skeptical, but the output genuinely feels like our team wrote it. We publish with minimal edits now.",
    name: "Marcus Rivera",
    role: "Founder",
    company: "Craftly",
    initials: "MR",
  },
  {
    quote:
      "Going from keyword discovery to a published article in one flow saved us hours every week. Our organic traffic is up 34% in three months.",
    name: "Emily Zhao",
    role: "Content Manager",
    company: "Atlas Studio",
    initials: "EZ",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border-light bg-gradient-to-b from-border-light/30 to-transparent py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="text-[1.875rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
            Real results from real teams
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Marketers and founders scaling organic traffic with confidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} flex flex-col rounded-2xl border border-border-light bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-1`}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400" fill="currentColor" />
                ))}
              </div>

              <blockquote className="mb-6 flex-1 text-[15px] leading-[1.7] text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 border-t border-border-light pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-bg text-[13px] font-semibold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{t.name}</p>
                  <p className="text-[13px] text-muted">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
