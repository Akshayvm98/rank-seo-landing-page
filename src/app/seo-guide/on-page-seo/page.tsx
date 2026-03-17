import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { OPHero } from "@/components/seo-guide/OPHero";
import { OPWhatItCovers } from "@/components/seo-guide/OPWhatItCovers";
import { OPCoreElements } from "@/components/seo-guide/OPCoreElements";
import { OPChecklist } from "@/components/seo-guide/OPChecklist";
import { OPExample } from "@/components/seo-guide/OPExample";
import { OPMistakes } from "@/components/seo-guide/OPMistakes";
import { OPHowRankSEO } from "@/components/seo-guide/OPHowRankSEO";
import { OPCTA } from "@/components/seo-guide/OPCTA";

const pageUrl = "https://rankseoengine.com/seo-guide/on-page-seo";

export const metadata: Metadata = {
  title: "On-Page SEO Guide | How to Optimize Pages for Better Rankings",
  description:
    "Learn how on-page SEO works, what actually matters, and how to improve titles, headings, internal links, metadata, and page structure for better rankings.",
  openGraph: {
    title: "On-Page SEO Guide | RankSEO",
    description:
      "Learn how to optimize pages with better titles, structure, links, and metadata.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Page SEO Guide | RankSEO",
    description:
      "Practical on-page SEO guide for titles, headings, metadata, and page structure.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function OnPageSEOPage() {
  return (
    <GuideLayout pathname="/seo-guide/on-page-seo">
      <OPHero />
      <OPWhatItCovers />
      <OPCoreElements />
      <OPChecklist />
      <OPExample />
      <OPMistakes />
      <OPHowRankSEO />
      <OPCTA />
    </GuideLayout>
  );
}
