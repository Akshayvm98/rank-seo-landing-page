import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { KRHero } from "@/components/seo-guide/KRHero";
import { KRProblem } from "@/components/seo-guide/KRProblem";
import { KRGoodKeyword } from "@/components/seo-guide/KRGoodKeyword";
import { KRWorkflow } from "@/components/seo-guide/KRWorkflow";
import { KRExample } from "@/components/seo-guide/KRExample";
import { KRMistakes } from "@/components/seo-guide/KRMistakes";
import { KRHowRankSEO } from "@/components/seo-guide/KRHowRankSEO";
import { KRCTA } from "@/components/seo-guide/KRCTA";
import { KRRelated } from "@/components/seo-guide/KRRelated";

const pageUrl = "https://rankseoengine.com/seo-guide/keyword-research";

export const metadata: Metadata = {
  title: "Keyword Research Guide | Find Keywords You Can Actually Rank For",
  description:
    "Learn how to find SEO keywords you can actually rank for using real data. Step-by-step keyword research guide with practical workflows and examples.",
  openGraph: {
    title: "Keyword Research Guide | RankSEO",
    description:
      "Find keywords you can actually rank for using real data and smarter workflows.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyword Research Guide | RankSEO",
    description:
      "Find keywords you can actually rank for using real data and smarter workflows.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function KeywordResearchPage() {
  return (
    <GuideLayout pathname="/seo-guide/keyword-research">
      <KRHero />
      <KRProblem />
      <KRGoodKeyword />
      <KRWorkflow />
      <KRExample />
      <KRMistakes />
      <KRHowRankSEO />
      <KRCTA />
      <KRRelated />
    </GuideLayout>
  );
}
