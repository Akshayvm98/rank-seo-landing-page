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

const pageUrl = "https://rankseoengine.com/seo-guide/link-building";

export const metadata: Metadata = {
  title: "Link Building Guide | How to Earn Better Backlinks Without Spam",
  description:
    "Learn practical link building strategies that actually help SEO. Understand backlinks, internal vs external links, common mistakes, and how to build authority without spammy tactics.",
  openGraph: {
    title: "Link Building Guide | RankSEO",
    description:
      "Learn practical link building strategies that improve SEO without relying on spammy tactics.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Building Guide | RankSEO",
    description:
      "Practical link building strategies that improve SEO without spammy tactics.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

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
    </GuideLayout>
  );
}
