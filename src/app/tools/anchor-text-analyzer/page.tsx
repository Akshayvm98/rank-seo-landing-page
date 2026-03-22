import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { AnchorTextAnalyzer } from "@/components/tools/AnchorTextAnalyzer";

export const metadata: Metadata = {
  title: "Anchor Text Analyzer | Free SEO Tool | RankSEO",
  description:
    "Analyze anchor text quality on any page. Find generic, empty, and repeated anchors. Get SEO recommendations.",
  openGraph: {
    title: "Anchor Text Analyzer | RankSEO",
    description: "Free tool to analyze anchor text quality for SEO.",
    url: "https://www.rankseoengine.com/tools/anchor-text-analyzer",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor Text Analyzer | RankSEO",
    description: "Free tool to analyze anchor text quality for SEO.",
  },
  alternates: { canonical: "https://www.rankseoengine.com/tools/anchor-text-analyzer" },
};

export default function AnchorTextAnalyzerPage() {
  return (
    <ToolLayout>
      <AnchorTextAnalyzer />
    </ToolLayout>
  );
}
