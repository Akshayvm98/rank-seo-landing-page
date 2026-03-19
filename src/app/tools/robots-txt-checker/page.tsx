import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RobotsTxtChecker } from "@/components/tools/RobotsTxtChecker";

export const metadata: Metadata = {
  title: "Robots.txt Checker | Free SEO Tool | RankSEO",
  description: "Check your robots.txt file for crawl directives, sitemap references, and SEO issues.",
  openGraph: { title: "Robots.txt Checker | RankSEO", description: "Free tool to analyze robots.txt for SEO.", url: "https://rankseoengine.com/tools/robots-txt-checker", siteName: "RankSEO", type: "website" },
  twitter: { card: "summary_large_image", title: "Robots.txt Checker | RankSEO", description: "Free tool to analyze robots.txt for SEO." },
  alternates: { canonical: "https://rankseoengine.com/tools/robots-txt-checker" },
};

export default function RobotsTxtCheckerPage() {
  return <ToolLayout><RobotsTxtChecker /></ToolLayout>;
}
