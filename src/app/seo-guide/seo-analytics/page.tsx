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
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import { getTopicBySlug, buildGuideMetadata } from "@/lib/guide";

const page = getTopicBySlug("seo-analytics")!;

export const metadata: Metadata = buildGuideMetadata(page);

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
      <GuideRelated pathname="/seo-guide/seo-analytics" />
    </GuideLayout>
  );
}
