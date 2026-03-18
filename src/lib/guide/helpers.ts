import type { Metadata } from "next";
import type {
  GuidePage,
  GuideTopicPage,
  GuideArticlePage,
  GuideNavGroup,
} from "./types";
import { guidePages } from "./guide-data";

const SITE_URL = "https://rankseoengine.com";

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

/** All published pages, sorted by order */
export function getPublishedPages(): GuidePage[] {
  return guidePages.filter((p) => p.published).sort((a, b) => a.order - b.order);
}

/** The single pillar page */
export function getPillarPage() {
  return guidePages.find((p) => p.type === "pillar") ?? null;
}

/** All published topic pages, sorted by order */
export function getTopicPages(): GuideTopicPage[] {
  return getPublishedPages().filter(
    (p): p is GuideTopicPage => p.type === "topic",
  );
}

/** Get a topic page by its slug */
export function getTopicBySlug(slug: string): GuideTopicPage | null {
  return getTopicPages().find((p) => p.slug === slug) ?? null;
}

/** Get all articles that belong to a topic */
export function getArticlesByTopic(topicSlug: string): GuideArticlePage[] {
  return getPublishedPages().filter(
    (p): p is GuideArticlePage =>
      p.type === "article" && p.topicSlug === topicSlug,
  );
}

/** Get an article by its topic slug and article slug */
export function getArticleBySlug(
  topicSlug: string,
  articleSlug: string,
): GuideArticlePage | null {
  return (
    getArticlesByTopic(topicSlug).find((p) => p.slug === articleSlug) ?? null
  );
}

/** Get a page by its full href path (e.g. "/seo-guide/keyword-research") */
export function getPageByHref(href: string): GuidePage | null {
  return getPublishedPages().find((p) => getPageHref(p) === href) ?? null;
}

/** Get related pages for a given page */
export function getRelatedPages(page: GuidePage): GuidePage[] {
  return page.relatedIds
    .map((id) => guidePages.find((p) => p.id === id))
    .filter((p): p is GuidePage => p != null && p.published);
}

// ---------------------------------------------------------------------------
// URL helpers
// ---------------------------------------------------------------------------

/** Build the href for any guide page */
export function getPageHref(page: GuidePage): string {
  if (page.type === "pillar") return "/seo-guide";
  if (page.type === "topic") return `/seo-guide/${page.slug}`;
  return `/seo-guide/${page.topicSlug}/${page.slug}`;
}

/** Build the full canonical URL for a guide page */
export function getCanonicalUrl(page: GuidePage): string {
  return `${SITE_URL}${getPageHref(page)}`;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

/** Flat ordered list of topic + article pages (for prev/next) */
function getNavList() {
  return getPublishedPages().filter((p) => p.type !== "pillar");
}

/** Get the page title from a pathname */
export function getPageTitle(pathname: string): string {
  const page = getPageByHref(pathname);
  return page?.title ?? "SEO Guide";
}

/** Get prev/next pages for navigation */
export function getPrevNext(pathname: string) {
  const navList = getNavList();
  const idx = navList.findIndex((p) => getPageHref(p) === pathname);
  return {
    prev:
      idx > 0
        ? { title: navList[idx - 1].title, href: getPageHref(navList[idx - 1]) }
        : null,
    next:
      idx >= 0 && idx < navList.length - 1
        ? { title: navList[idx + 1].title, href: getPageHref(navList[idx + 1]) }
        : null,
  };
}

/** Build sidebar navigation groups from the data registry */
export function getNavGroups(): GuideNavGroup[] {
  const navPages = getNavList();
  const groups: GuideNavGroup[] = [];

  for (const page of navPages) {
    let group = groups.find((g) => g.category === page.category);
    if (!group) {
      group = { category: page.category, pages: [] };
      groups.push(group);
    }
    group.pages.push({ title: page.title, href: getPageHref(page) });
  }

  return groups;
}

// ---------------------------------------------------------------------------
// Breadcrumb helper
// ---------------------------------------------------------------------------

/** Build breadcrumb trail for any guide page */
export function getBreadcrumbs(
  pathname: string,
): { label: string; href: string }[] {
  const crumbs: { label: string; href: string }[] = [
    { label: "SEO Guide", href: "/seo-guide" },
  ];

  const page = getPageByHref(pathname);
  if (!page || page.type === "pillar") return crumbs;

  if (page.type === "article") {
    const topic = getTopicBySlug(page.topicSlug);
    if (topic) {
      crumbs.push({ label: topic.title, href: getPageHref(topic) });
    }
  }

  crumbs.push({ label: page.title, href: getPageHref(page) });
  return crumbs;
}

// ---------------------------------------------------------------------------
// Static params helper (for dynamic routes)
// ---------------------------------------------------------------------------

/** Generate static params for all published articles (for generateStaticParams) */
export function getAllArticleParams(): { topic: string; article: string }[] {
  return getPublishedPages()
    .filter((p): p is GuideArticlePage => p.type === "article")
    .map((p) => ({ topic: p.topicSlug, article: p.slug }));
}

// ---------------------------------------------------------------------------
// Metadata helper
// ---------------------------------------------------------------------------

/** Generate Next.js Metadata object from a guide page entry */
export function buildGuideMetadata(page: GuidePage): Metadata {
  const canonical = getCanonicalUrl(page);
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: {
      title: page.ogTitle,
      description: page.ogDescription,
      url: canonical,
      images: [page.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle,
      description: page.twitterDescription,
      images: [page.ogImage],
    },
    alternates: { canonical },
  };
}

// ---------------------------------------------------------------------------
// Sitemap helper
// ---------------------------------------------------------------------------

/** Return sitemap entries for all published guide pages */
export function getGuideSitemapEntries() {
  return getPublishedPages().map((page) => ({
    url: getCanonicalUrl(page),
    lastModified: new Date(page.lastUpdated),
    changeFrequency: (page.type === "pillar" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: page.type === "pillar" ? 0.9 : 0.85,
  }));
}
