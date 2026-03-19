import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CanonicalTagChecker } from "@/components/tools/CanonicalTagChecker";

export const metadata: Metadata = {
  title: "Canonical Tag Checker | Free SEO Tool | RankSEO",
  description: "Check if your page has a canonical tag and whether it points to the right URL for SEO.",
  openGraph: { title: "Canonical Tag Checker | RankSEO", description: "Free tool to check canonical tags for SEO.", url: "https://rankseoengine.com/tools/canonical-tag-checker", siteName: "RankSEO", type: "website" },
  twitter: { card: "summary_large_image", title: "Canonical Tag Checker | RankSEO", description: "Free tool to check canonical tags for SEO." },
  alternates: { canonical: "https://rankseoengine.com/tools/canonical-tag-checker" },
};

export default function CanonicalTagCheckerPage() {
  return <ToolLayout><CanonicalTagChecker /></ToolLayout>;
}
