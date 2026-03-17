export const guideStructure = [
  {
    category: "Keyword Research",
    pages: [
      { title: "Keyword Research Guide", href: "/seo-guide/keyword-research" },
    ],
  },
  {
    category: "Content",
    pages: [
      { title: "Content SEO Guide", href: "/seo-guide/content-seo" },
    ],
  },
  {
    category: "On-Page",
    pages: [
      { title: "On-Page SEO Guide", href: "/seo-guide/on-page-seo" },
      { title: "Technical SEO Guide", href: "/seo-guide/technical-seo" },
    ],
  },
  {
    category: "Link Building",
    pages: [
      { title: "Link Building Guide", href: "/seo-guide/link-building" },
    ],
  },
  {
    category: "Analytics",
    pages: [
      { title: "SEO Analytics Guide", href: "/seo-guide/seo-analytics" },
    ],
  },
];

// Flat list for prev/next navigation
export const allGuidePages = guideStructure.flatMap((g) => g.pages);

export function getPageTitle(pathname: string): string {
  for (const group of guideStructure) {
    for (const page of group.pages) {
      if (page.href === pathname) return page.title;
    }
  }
  return "SEO Guide";
}

export function getPrevNext(pathname: string) {
  const idx = allGuidePages.findIndex((p) => p.href === pathname);
  return {
    prev: idx > 0 ? allGuidePages[idx - 1] : null,
    next: idx < allGuidePages.length - 1 ? allGuidePages[idx + 1] : null,
  };
}
