/** Page types in the guide hierarchy */
export type GuidePageType = "pillar" | "topic" | "article";

/** Base fields shared by all guide entries */
interface GuidePageBase {
  /** Unique identifier */
  id: string;
  /** Page type in the hierarchy */
  type: GuidePageType;
  /** Display title (used in nav, breadcrumbs, prev/next) */
  title: string;
  /** URL slug (last segment only, e.g. "keyword-research") */
  slug: string;
  /** Short description for cards, listings, and link previews */
  excerpt: string;
  /** Topic/category label for grouping in the sidebar */
  category: string;
  /** Display order within its category (lower = earlier) */
  order: number;
  /** Whether this page should be included in navigation and sitemap */
  published: boolean;
  /** ISO date string */
  lastUpdated: string;

  /** SEO — <title> tag */
  seoTitle: string;
  /** SEO — <meta name="description"> */
  seoDescription: string;
  /** SEO — Open Graph title */
  ogTitle: string;
  /** SEO — Open Graph description */
  ogDescription: string;
  /** SEO — Open Graph image path */
  ogImage: string;
  /** SEO — Twitter card title */
  twitterTitle: string;
  /** SEO — Twitter card description */
  twitterDescription: string;

  /** IDs of related guide pages (shown at bottom) */
  relatedIds: string[];
}

/** The single pillar/hub page at /seo-guide */
export interface GuidePillarPage extends GuidePageBase {
  type: "pillar";
}

/** A core topic page at /seo-guide/[slug] */
export interface GuideTopicPage extends GuidePageBase {
  type: "topic";
  /** The topic slug this page belongs to (same as its own slug for topics) */
  topicSlug: string;
}

/** A long-tail article nested under a topic at /seo-guide/[topic]/[slug] */
export interface GuideArticlePage extends GuidePageBase {
  type: "article";
  /** Parent topic slug */
  topicSlug: string;
  /** Estimated reading time in minutes */
  readingTime: number;
}

/** Union of all guide page types */
export type GuidePage = GuidePillarPage | GuideTopicPage | GuideArticlePage;

/** Sidebar navigation group (generated from data) */
export interface GuideNavGroup {
  category: string;
  pages: { title: string; href: string }[];
}
