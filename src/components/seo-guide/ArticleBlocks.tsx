/**
 * Reusable building blocks for long-tail guide articles.
 * Use these to build article content with consistent typography, spacing, and TOC support.
 *
 * Usage:
 *   import { ArticleHero, Section, Paragraph, BulletList, NumberedList, Callout, DataCard } from "@/components/seo-guide/ArticleBlocks";
 *
 *   export default function MyArticle() {
 *     return (
 *       <>
 *         <ArticleHero title="..." subtitle="..." readingTime={8} />
 *         <Section id="first-heading" title="My First Section">
 *           <Paragraph>Some text here.</Paragraph>
 *           <BulletList items={["Point one", "Point two"]} />
 *         </Section>
 *       </>
 *     );
 *   }
 */

/** Article hero with title, subtitle, reading time, and CTA */
export function ArticleHero({
  title,
  subtitle,
  readingTime,
}: {
  title: string;
  subtitle: string;
  readingTime?: number;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto max-w-[720px] px-6">
        <div className="flex items-center gap-3 mb-4">
          <p className="animate-hero text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
            SEO Guide
          </p>
          {readingTime && (
            <span className="animate-hero rounded-full bg-border-light px-2.5 py-0.5 text-[11px] font-medium text-muted">
              {readingTime} min read
            </span>
          )}
        </div>
        <h1 className="animate-hero-delay-1 text-[2rem] font-bold leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          {title}
        </h1>
        <p className="animate-hero-delay-2 mt-5 text-[16px] leading-[1.7] text-muted">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

/** A content section with an h2 heading (auto-registered in TOC via id) */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border-light py-10 md:py-12">
      <div className="mx-auto max-w-[720px] px-6">
        <h2
          id={id}
          className="reveal text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-foreground md:text-[1.75rem]"
        >
          {title}
        </h2>
        <div className="reveal reveal-delay-1 mt-6">{children}</div>
      </div>
    </section>
  );
}

/** A sub-section with an h3 heading (appears indented in TOC) */
export function SubSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h3
        id={id}
        className="text-[1.125rem] font-bold leading-[1.3] text-foreground"
      >
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/** Standard paragraph */
export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-[1.75] text-muted first:mt-0">
      {children}
    </p>
  );
}

/** Bulleted list */
export function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[14px] leading-[1.7] text-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered list */
export function NumberedList({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-bg text-[11px] font-bold text-accent">
            {i + 1}
          </span>
          <div>
            <p className="text-[14px] font-bold text-foreground">{item.title}</p>
            <p className="mt-0.5 text-[14px] leading-[1.7] text-muted">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Highlighted callout / tip box */
export function Callout({
  children,
  type = "tip",
}: {
  children: React.ReactNode;
  type?: "tip" | "warning" | "info";
}) {
  const styles = {
    tip: "bg-accent-bg/40 border-accent-muted/30 text-accent",
    warning: "bg-amber-50/60 border-amber-100 text-amber-700",
    info: "bg-blue-50/60 border-blue-100 text-blue-700",
  };

  return (
    <div className={`mt-6 rounded-xl border px-5 py-4 ${styles[type]}`}>
      <p className="text-[14px] leading-[1.7] font-medium">{children}</p>
    </div>
  );
}

/** Data card for displaying a metric or stat */
export function DataCard({
  items,
}: {
  items: { label: string; value: string; note?: string }[];
}) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-black/[0.04] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
        >
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted-light">
            {item.label}
          </p>
          <p className="mt-1 text-[20px] font-bold tracking-tight text-foreground">
            {item.value}
          </p>
          {item.note && (
            <p className="mt-1 text-[12px] text-muted">{item.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}
