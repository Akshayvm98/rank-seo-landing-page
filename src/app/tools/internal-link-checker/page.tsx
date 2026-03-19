import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { InternalLinkChecker } from "@/components/tools/InternalLinkChecker";

export const metadata: Metadata = {
  title: "Internal Link Checker | Free SEO Tool | RankSEO",
  description:
    "Analyze internal and external links on any page. Check anchor text quality, link counts, and get SEO linking recommendations.",
  openGraph: {
    title: "Internal Link Checker | RankSEO",
    description:
      "Free tool to analyze internal links, external links, and anchor text quality for SEO.",
    url: "https://rankseoengine.com/tools/internal-link-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Link Checker | RankSEO",
    description:
      "Free tool to analyze internal links, external links, and anchor text quality for SEO.",
  },
  alternates: {
    canonical: "https://rankseoengine.com/tools/internal-link-checker",
  },
};

export default function InternalLinkCheckerPage() {
  return (
    <ToolLayout>
      <InternalLinkChecker />
    </ToolLayout>
  );
}
