import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { TSHero } from "@/components/seo-guide/TSHero";
import { TSWhatItMeans } from "@/components/seo-guide/TSWhatItMeans";
import { TSCoreAreas } from "@/components/seo-guide/TSCoreAreas";
import { TSWorkflow } from "@/components/seo-guide/TSWorkflow";
import { TSExamples } from "@/components/seo-guide/TSExamples";
import { TSMistakes } from "@/components/seo-guide/TSMistakes";
import { TSHowRankSEO } from "@/components/seo-guide/TSHowRankSEO";
import { TSCTA } from "@/components/seo-guide/TSCTA";

const pageUrl = "https://rankseoengine.com/seo-guide/technical-seo";

export const metadata: Metadata = {
  title: "Technical SEO Guide | Improve Crawlability, Speed, and Indexing",
  description:
    "Learn the technical SEO basics that actually matter, including crawlability, indexing, site speed, Core Web Vitals, sitemaps, and robots.txt.",
  openGraph: {
    title: "Technical SEO Guide | RankSEO",
    description:
      "Learn the technical SEO improvements that help pages get crawled, indexed, and loaded faster.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Guide | RankSEO",
    description:
      "Learn the technical SEO improvements that help pages get crawled, indexed, and loaded faster.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function TechnicalSEOPage() {
  return (
    <GuideLayout pathname="/seo-guide/technical-seo">
      <TSHero />
      <TSWhatItMeans />
      <TSCoreAreas />
      <TSWorkflow />
      <TSExamples />
      <TSMistakes />
      <TSHowRankSEO />
      <TSCTA />
    </GuideLayout>
  );
}
