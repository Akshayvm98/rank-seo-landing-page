import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PillarHero } from "@/components/seo-guide/PillarHero";
import { PillarWhatSEOMeans } from "@/components/seo-guide/PillarWhatSEOMeans";
import { PillarHowSEOWorks } from "@/components/seo-guide/PillarHowSEOWorks";
import { PillarCoreAreas } from "@/components/seo-guide/PillarCoreAreas";
import { PillarConnections } from "@/components/seo-guide/PillarConnections";
import { PillarRankSEO } from "@/components/seo-guide/PillarRankSEO";
import { PillarCTA } from "@/components/seo-guide/PillarCTA";
import { getPillarPage, buildGuideMetadata } from "@/lib/guide";

const page = getPillarPage()!;

export const metadata: Metadata = buildGuideMetadata(page);

export default function SEOGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <PillarHero />
        <PillarWhatSEOMeans />
        <PillarHowSEOWorks />
        <PillarCoreAreas />
        <PillarConnections />
        <PillarRankSEO />
        <PillarCTA />
      </main>
      <Footer />
    </>
  );
}
