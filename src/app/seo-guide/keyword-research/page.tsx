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
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import { getTopicBySlug, buildGuideMetadata } from "@/lib/guide";

const page = getTopicBySlug("keyword-research")!;

export const metadata: Metadata = buildGuideMetadata(page);

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
      <GuideRelated pathname="/seo-guide/keyword-research" />
    </GuideLayout>
  );
}
