import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { SitemapChecker } from "@/components/tools/SitemapChecker";

export const metadata: Metadata = {
  title: "Sitemap Checker | Free SEO Tool | RankSEO",
  description: "Check if your XML sitemap exists and is correctly structured. Analyze URLs, lastmod dates, and sitemap index.",
  openGraph: { title: "Sitemap Checker | RankSEO", description: "Free tool to check XML sitemap structure for SEO.", url: "https://rankseoengine.com/tools/sitemap-checker", siteName: "RankSEO", type: "website" },
  twitter: { card: "summary_large_image", title: "Sitemap Checker | RankSEO", description: "Free tool to check XML sitemap structure for SEO." },
  alternates: { canonical: "https://rankseoengine.com/tools/sitemap-checker" },
};

export default function SitemapCheckerPage() {
  return <ToolLayout><SitemapChecker /></ToolLayout>;
}
