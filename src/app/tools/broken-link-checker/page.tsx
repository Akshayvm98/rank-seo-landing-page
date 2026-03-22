import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { BrokenLinkChecker } from "@/components/tools/BrokenLinkChecker";

export const metadata: Metadata = {
  title: "Broken Link Checker | Free SEO Tool | RankSEO",
  description:
    "Find broken internal and external links on any page. Check link status codes, detect dead links, and get fix recommendations.",
  openGraph: {
    title: "Broken Link Checker | RankSEO",
    description:
      "Free tool to find broken links, check status codes, and fix dead links for better SEO.",
    url: "https://www.rankseoengine.com/tools/broken-link-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Broken Link Checker | RankSEO",
    description:
      "Free tool to find broken links, check status codes, and fix dead links for better SEO.",
  },
  alternates: {
    canonical: "https://www.rankseoengine.com/tools/broken-link-checker",
  },
};

export default function BrokenLinkCheckerPage() {
  return (
    <ToolLayout>
      <BrokenLinkChecker />
    </ToolLayout>
  );
}
