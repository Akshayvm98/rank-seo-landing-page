import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ReadabilityChecker } from "@/components/tools/ReadabilityChecker";

export const metadata: Metadata = {
  title: "Readability Checker | Free SEO Tool | RankSEO",
  description:
    "Analyze content readability on any page. Check sentence length, paragraph structure, and scannability. Get actionable recommendations.",
  openGraph: {
    title: "Readability Checker | RankSEO",
    description:
      "Free tool to analyze content readability, sentence length, and paragraph structure for SEO.",
    url: "https://www.rankseoengine.com/tools/readability-checker",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Readability Checker | RankSEO",
    description:
      "Free tool to analyze content readability, sentence length, and paragraph structure for SEO.",
  },
  alternates: {
    canonical: "https://www.rankseoengine.com/tools/readability-checker",
  },
};

export default function ReadabilityCheckerPage() {
  return (
    <ToolLayout>
      <ReadabilityChecker />
    </ToolLayout>
  );
}
