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
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import { getTopicBySlug, buildGuideMetadata } from "@/lib/guide";

const page = getTopicBySlug("content-seo")!;

export const metadata: Metadata = buildGuideMetadata(page);

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
      <GuideRelated pathname="/seo-guide/content-seo" />
    </GuideLayout>
  );
}
