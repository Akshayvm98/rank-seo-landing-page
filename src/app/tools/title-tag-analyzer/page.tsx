import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { TitleTagAnalyzer } from "@/components/tools/TitleTagAnalyzer";

export const metadata: Metadata = {
  title: "Title Tag Analyzer | Free SEO Tool | RankSEO",
  description:
    "Analyze your title tag for SEO length, keyword usage, and SERP readiness. Get actionable recommendations.",
  openGraph: {
    title: "Title Tag Analyzer | RankSEO",
    description: "Free tool to check title tag length, keywords, and SEO optimization.",
    url: "https://www.rankseoengine.com/tools/title-tag-analyzer",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Title Tag Analyzer | RankSEO",
    description: "Free tool to check title tag length, keywords, and SEO optimization.",
  },
  alternates: { canonical: "https://www.rankseoengine.com/tools/title-tag-analyzer" },
};

export default function TitleTagAnalyzerPage() {
  return (
    <ToolLayout>
      <TitleTagAnalyzer />
    </ToolLayout>
  );
}
