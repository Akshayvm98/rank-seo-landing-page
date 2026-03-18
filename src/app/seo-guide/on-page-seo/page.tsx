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
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import { getTopicBySlug, buildGuideMetadata } from "@/lib/guide";

const page = getTopicBySlug("on-page-seo")!;

export const metadata: Metadata = buildGuideMetadata(page);

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
      <GuideRelated pathname="/seo-guide/on-page-seo" />
    </GuideLayout>
  );
}
