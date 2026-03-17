import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { SAHero } from "@/components/seo-guide/SAHero";
import { SAWhyTrack } from "@/components/seo-guide/SAWhyTrack";
import { SAMetrics } from "@/components/seo-guide/SAMetrics";
import { SAWorkflow } from "@/components/seo-guide/SAWorkflow";
import { SAExample } from "@/components/seo-guide/SAExample";
import { SAMistakes } from "@/components/seo-guide/SAMistakes";
import { SAHowRankSEO } from "@/components/seo-guide/SAHowRankSEO";
import { SACTA } from "@/components/seo-guide/SACTA";

const pageUrl = "https://rankseoengine.com/seo-guide/seo-analytics";

export const metadata: Metadata = {
  title: "SEO Analytics Guide | Track What Actually Drives Traffic",
  description:
    "Learn how to track SEO performance using clicks, impressions, rankings, and CTR. Practical guide to understanding what is working and what to improve.",
  openGraph: {
    title: "SEO Analytics Guide | RankSEO",
    description: "Track SEO performance with real metrics that actually matter.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Analytics Guide | RankSEO",
    description:
      "Practical SEO analytics guide for tracking clicks, impressions, rankings, and growth.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: pageUrl },
};

export default function SEOAnalyticsPage() {
  return (
    <GuideLayout pathname="/seo-guide/seo-analytics">
      <SAHero />
      <SAWhyTrack />
      <SAMetrics />
      <SAWorkflow />
      <SAExample />
      <SAMistakes />
      <SAHowRankSEO />
      <SACTA />
    </GuideLayout>
  );
}
