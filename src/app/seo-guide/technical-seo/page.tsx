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
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import { getTopicBySlug, buildGuideMetadata } from "@/lib/guide";

const page = getTopicBySlug("technical-seo")!;

export const metadata: Metadata = buildGuideMetadata(page);

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
      <GuideRelated pathname="/seo-guide/technical-seo" />
    </GuideLayout>
  );
}
