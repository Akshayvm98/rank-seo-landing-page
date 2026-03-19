import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ContentStructureChecker } from "@/components/tools/ContentStructureChecker";

export const metadata: Metadata = {
  title: "Content Structure Checker | Free SEO Tool | RankSEO",
  description:
    "Analyze headings, paragraphs, lists, and internal links. Check content structure and get SEO recommendations.",
  openGraph: {
    title: "Content Structure Checker | RankSEO",
    description: "Free tool to analyze content structure, heading usage, and SEO readiness.",
    url: "https://rankseoengine.com/tools/content-structure-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Structure Checker | RankSEO",
    description: "Free tool to analyze content structure, heading usage, and SEO readiness.",
  },
  alternates: { canonical: "https://rankseoengine.com/tools/content-structure-checker" },
};

export default function ContentStructureCheckerPage() {
  return (
    <ToolLayout>
      <ContentStructureChecker />
    </ToolLayout>
  );
}
