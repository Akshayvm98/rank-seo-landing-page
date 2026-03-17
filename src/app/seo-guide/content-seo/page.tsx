import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { CSHero } from "@/components/seo-guide/CSHero";
import { CSWhyFails } from "@/components/seo-guide/CSWhyFails";
import { CSGoodContent } from "@/components/seo-guide/CSGoodContent";
import { CSWorkflow } from "@/components/seo-guide/CSWorkflow";
import { CSExample } from "@/components/seo-guide/CSExample";
import { CSMistakes } from "@/components/seo-guide/CSMistakes";
import { CSHowRankSEO } from "@/components/seo-guide/CSHowRankSEO";
import { CSCTA } from "@/components/seo-guide/CSCTA";
import { CSRelated } from "@/components/seo-guide/CSRelated";

const pageUrl = "https://rankseoengine.com/seo-guide/content-seo";

export const metadata: Metadata = {
  title: "Content SEO Guide | How to Write Content That Actually Ranks",
  description:
    "Learn how to create SEO content that is structured, relevant, and built to rank. Practical guide to writing and optimizing content for organic traffic.",
  openGraph: {
    title: "Content SEO Guide | RankSEO",
    description:
      "Learn how to write and optimize content that actually ranks.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content SEO Guide | RankSEO",
    description:
      "Learn how to write and optimize content that actually ranks.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function ContentSEOPage() {
  return (
    <GuideLayout pathname="/seo-guide/content-seo">
      <CSHero />
      <CSWhyFails />
      <CSGoodContent />
      <CSWorkflow />
      <CSExample />
      <CSMistakes />
      <CSHowRankSEO />
      <CSCTA />
      <CSRelated />
    </GuideLayout>
  );
}
