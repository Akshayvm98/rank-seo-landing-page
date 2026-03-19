// ---------------------------------------------------------------------------
// Registry of all free tools — single source of truth
// ---------------------------------------------------------------------------

import type { ToolMeta } from "./types";

export const freeTools: ToolMeta[] = [
  {
    id: "content-length-analyzer",
    slug: "content-length-analyzer",
    name: "Content Length Analyzer",
    tagline: "Check if your content is the right length for SEO",
    description:
      "Analyze any page's word count, headings, links, and reading time. Get SEO recommendations based on content length.",
    category: "Content",
    icon: "fileText",
    href: "/tools/content-length-analyzer",
    published: true,
  },
  {
    id: "meta-tag-checker",
    slug: "meta-tag-checker",
    name: "Meta Tag Checker",
    tagline: "Analyze meta tags on any page for SEO",
    description:
      "Check title tags, meta descriptions, Open Graph, Twitter Cards, canonical, robots, and all other meta tags. Get length assessments and optimization tips.",
    category: "On-Page SEO",
    icon: "tag",
    href: "/tools/meta-tag-checker",
    published: true,
  },
  {
    id: "heading-structure-checker",
    slug: "heading-structure-checker",
    name: "Heading Structure Checker",
    tagline: "Analyze heading hierarchy and detect SEO issues",
    description:
      "Check H1, H2, H3 structure on any page. Detect missing headings, hierarchy issues, and get actionable recommendations.",
    category: "On-Page SEO",
    icon: "alignLeft",
    href: "/tools/heading-structure-checker",
    published: true,
  },
  {
    id: "keyword-density-checker",
    slug: "keyword-density-checker",
    name: "Keyword Density Checker",
    tagline: "Analyze keyword frequency and content balance",
    description:
      "Check keyword density, see top terms, and analyze specific keyword usage on any page. Get practical SEO recommendations.",
    category: "On-Page SEO",
    icon: "target",
    href: "/tools/keyword-density-checker",
    published: true,
  },
  {
    id: "readability-checker",
    slug: "readability-checker",
    name: "Readability Checker",
    tagline: "Analyze content clarity and structure",
    description:
      "Check sentence length, paragraph density, heading usage, and overall readability. Get actionable recommendations to improve content.",
    category: "Content SEO",
    icon: "bookOpen",
    href: "/tools/readability-checker",
    published: true,
  },
  {
    id: "internal-link-checker",
    slug: "internal-link-checker",
    name: "Internal Link Checker",
    tagline: "Analyze internal links and anchor text quality",
    description:
      "Check internal and external links, anchor text quality, and linking balance on any page. Get actionable SEO recommendations.",
    category: "Technical SEO",
    icon: "link",
    href: "/tools/internal-link-checker",
    published: true,
  },
  {
    id: "broken-link-checker",
    slug: "broken-link-checker",
    name: "Broken Link Checker",
    tagline: "Find broken links and dead pages",
    description:
      "Check all internal and external links on a page. Detect broken links, redirects, and unreachable URLs with status codes.",
    category: "Technical SEO",
    icon: "alertCircle",
    href: "/tools/broken-link-checker",
    published: true,
  },
  {
    id: "serp-preview-tool",
    slug: "serp-preview-tool",
    name: "SERP Preview Tool",
    tagline: "Preview your Google search result appearance",
    description:
      "See how your title tag, meta description, and URL appear in Google search results. Optimize before publishing.",
    category: "SERP & Optimization",
    icon: "monitor",
    href: "/tools/serp-preview-tool",
    published: true,
  },
  {
    id: "url-slug-analyzer",
    slug: "url-slug-analyzer",
    name: "URL Slug Analyzer",
    tagline: "Check if your URL slug is SEO-friendly",
    description:
      "Analyze URL slug length, readability, keyword presence, and structure. Get optimization recommendations.",
    category: "SERP & Optimization",
    icon: "route",
    href: "/tools/url-slug-analyzer",
    published: true,
  },
  {
    id: "content-structure-checker",
    slug: "content-structure-checker",
    name: "Content Structure Checker",
    tagline: "Audit heading, paragraph, and section flow",
    description:
      "Check headings, paragraphs, lists, and internal links. Evaluate content structure for readability and SEO.",
    category: "Content SEO",
    icon: "layers",
    href: "/tools/content-structure-checker",
    published: true,
  },
  {
    id: "title-tag-analyzer",
    slug: "title-tag-analyzer",
    name: "Title Tag Analyzer",
    tagline: "Optimize your title tag for SEO and SERP",
    description:
      "Check title tag length, keyword usage, repetition, and SERP readiness. Get actionable recommendations.",
    category: "SERP & Optimization",
    icon: "penLine",
    href: "/tools/title-tag-analyzer",
    published: true,
  },
  {
    id: "anchor-text-analyzer",
    slug: "anchor-text-analyzer",
    name: "Anchor Text Analyzer",
    tagline: "Analyze anchor text quality for SEO",
    description:
      "Check anchor text quality across all links. Find generic, empty, and repeated anchors with SEO recommendations.",
    category: "On-Page SEO",
    icon: "link",
    href: "/tools/anchor-text-analyzer",
    published: true,
  },
  {
    id: "robots-txt-checker",
    slug: "robots-txt-checker",
    name: "Robots.txt Checker",
    tagline: "Check crawl directives and sitemap references",
    description:
      "Analyze your robots.txt file for crawl rules, sitemap directives, and common SEO issues.",
    category: "Technical SEO",
    icon: "shieldCheck",
    href: "/tools/robots-txt-checker",
    published: true,
  },
  {
    id: "sitemap-checker",
    slug: "sitemap-checker",
    name: "Sitemap Checker",
    tagline: "Check XML sitemap structure and discoverability",
    description:
      "Analyze your XML sitemap for URLs, lastmod dates, sitemap index structure, and discoverability via robots.txt.",
    category: "Technical SEO",
    icon: "layoutGrid",
    href: "/tools/sitemap-checker",
    published: true,
  },
  {
    id: "canonical-tag-checker",
    slug: "canonical-tag-checker",
    name: "Canonical Tag Checker",
    tagline: "Check canonical tags for SEO correctness",
    description:
      "Analyze canonical tags on any page. Detect missing, duplicate, or misconfigured canonical URLs with recommendations.",
    category: "Technical SEO",
    icon: "checkCircle",
    href: "/tools/canonical-tag-checker",
    published: true,
  },
  {
    id: "noindex-checker",
    slug: "noindex-checker",
    name: "Noindex Checker",
    tagline: "Check for noindex directives blocking indexing",
    description:
      "Detect noindex meta tags and X-Robots-Tag headers that prevent pages from appearing in search results.",
    category: "Technical SEO",
    icon: "alertTriangle",
    href: "/tools/noindex-checker",
    published: true,
  },
  {
    id: "open-graph-checker",
    slug: "open-graph-checker",
    name: "Open Graph Checker",
    tagline: "Check Open Graph tags for social sharing",
    description:
      "Analyze og:title, og:description, og:image, and other Open Graph tags. Preview social sharing appearance.",
    category: "SERP & Optimization",
    icon: "share2",
    href: "/tools/open-graph-checker",
    published: true,
  },
  {
    id: "image-alt-text-checker",
    slug: "image-alt-text-checker",
    name: "Image Alt Text Checker",
    tagline: "Check image alt text for accessibility and SEO",
    description:
      "Find missing, empty, generic, and duplicate alt text on images. Improve accessibility and image SEO.",
    category: "On-Page SEO",
    icon: "fileText",
    href: "/tools/image-alt-text-checker",
    published: true,
  },
];

export function getToolBySlug(slug: string): ToolMeta | null {
  return freeTools.find((t) => t.slug === slug && t.published) ?? null;
}

export function getPublishedTools(): ToolMeta[] {
  return freeTools.filter((t) => t.published);
}
