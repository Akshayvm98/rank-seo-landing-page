import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UrlSlugAnalyzer } from "@/components/tools/UrlSlugAnalyzer";

export const metadata: Metadata = {
  title: "URL Slug Analyzer | Free SEO Tool | RankSEO",
  description:
    "Check if your URL slug is SEO-friendly. Analyze length, readability, keywords, and get optimization recommendations.",
  openGraph: {
    title: "URL Slug Analyzer | RankSEO",
    description: "Free tool to analyze URL slugs for SEO readability and optimization.",
    url: "https://rankseoengine.com/tools/url-slug-analyzer",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Slug Analyzer | RankSEO",
    description: "Free tool to analyze URL slugs for SEO readability and optimization.",
  },
  alternates: { canonical: "https://rankseoengine.com/tools/url-slug-analyzer" },
};

export default function UrlSlugAnalyzerPage() {
  return (
    <ToolLayout>
      <UrlSlugAnalyzer />
    </ToolLayout>
  );
}
