import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { LBHero } from "@/components/seo-guide/LBHero";
import { LBWhyLinksCount } from "@/components/seo-guide/LBWhyLinksCount";
import { LBGoodLinkBuilding } from "@/components/seo-guide/LBGoodLinkBuilding";
import { LBApproaches } from "@/components/seo-guide/LBApproaches";
import { LBInternalVsBacklinks } from "@/components/seo-guide/LBInternalVsBacklinks";
import { LBMistakes } from "@/components/seo-guide/LBMistakes";
import { LBHowRankSEO } from "@/components/seo-guide/LBHowRankSEO";
import { LBCTA } from "@/components/seo-guide/LBCTA";
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import { getTopicBySlug, buildGuideMetadata } from "@/lib/guide";

const page = getTopicBySlug("link-building")!;

export const metadata: Metadata = buildGuideMetadata(page);

export default function LinkBuildingPage() {
  return (
    <GuideLayout pathname="/seo-guide/link-building">
      <LBHero />
      <LBWhyLinksCount />
      <LBGoodLinkBuilding />
      <LBApproaches />
      <LBInternalVsBacklinks />
      <LBMistakes />
      <LBHowRankSEO />
      <LBCTA />
      <GuideRelated pathname="/seo-guide/link-building" />
    </GuideLayout>
  );
}
