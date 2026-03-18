"use client";
import {
  getPageByHref,
  getRelatedPages,
  getArticlesByTopic,
  getPageHref,
} from "@/lib/guide";
import type { GuidePage } from "@/lib/guide";
import { Icon, Icons } from "@/components/ui/Icon";

/**
 * Data-driven related articles section.
 * Uses relatedIds from the guide registry, with a fallback to same-topic pages.
 */
export function GuideRelated({ pathname }: { pathname: string }) {
  const currentPage = getPageByHref(pathname);
  if (!currentPage) return null;

  let related: GuidePage[] = getRelatedPages(currentPage);

  // Fallback: if no relatedIds, show other pages from the same topic
  if (related.length === 0 && currentPage.type !== "pillar") {
    const topicSlug =
      currentPage.type === "topic"
        ? currentPage.topicSlug
        : currentPage.topicSlug;
    related = getArticlesByTopic(topicSlug).filter(
      (p) => p.id !== currentPage.id,
    );
  }

  // Show max 3
  related = related.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <h3 className="reveal mb-8 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-light">
          Continue reading
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((page, i) => (
            <a
              key={page.id}
              href={getPageHref(page)}
              className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-black/[0.04] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5`}
            >
              <h4 className="text-[15px] font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                {page.title}
              </h4>
              <p className="mt-1.5 text-[14px] leading-[1.65] text-muted">
                {page.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-accent">
                Read guide
                <Icon icon={Icons.arrowRight} size="sm" className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
