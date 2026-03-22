import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { NoindexChecker } from "@/components/tools/NoindexChecker";

export const metadata: Metadata = {
  title: "Noindex Checker | Free SEO Tool | RankSEO",
  description: "Check if a page has noindex directives that prevent it from appearing in Google search results.",
  openGraph: { title: "Noindex Checker | RankSEO", description: "Free tool to check noindex and robots directives.", url: "https://www.rankseoengine.com/tools/noindex-checker", siteName: "RankSEO", type: "website" },
  twitter: { card: "summary_large_image", title: "Noindex Checker | RankSEO", description: "Free tool to check noindex and robots directives." },
  alternates: { canonical: "https://www.rankseoengine.com/tools/noindex-checker" },
};

export default function NoindexCheckerPage() {
  return <ToolLayout><NoindexChecker /></ToolLayout>;
}
