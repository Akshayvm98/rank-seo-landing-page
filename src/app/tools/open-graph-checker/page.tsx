import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { OpenGraphChecker } from "@/components/tools/OpenGraphChecker";

export const metadata: Metadata = {
  title: "Open Graph Checker | Free SEO Tool | RankSEO",
  description: "Check Open Graph tags on any page. Analyze og:title, og:description, og:image, and preview social sharing appearance.",
  openGraph: { title: "Open Graph Checker | RankSEO", description: "Free tool to check Open Graph tags for social sharing.", url: "https://rankseoengine.com/tools/open-graph-checker", siteName: "RankSEO", type: "website" },
  twitter: { card: "summary_large_image", title: "Open Graph Checker | RankSEO", description: "Free tool to check Open Graph tags for social sharing." },
  alternates: { canonical: "https://rankseoengine.com/tools/open-graph-checker" },
};

export default function OpenGraphCheckerPage() {
  return <ToolLayout><OpenGraphChecker /></ToolLayout>;
}
