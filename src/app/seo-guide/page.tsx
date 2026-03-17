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

const pageUrl = "https://rankseoengine.com/seo-guide";

export const metadata: Metadata = {
  title: "SEO Guide | Learn SEO Without the Guesswork",
  description:
    "A complete SEO guide covering keyword research, content, on-page SEO, technical SEO, link building, and analytics. Practical, structured, and easy to follow.",
  openGraph: {
    title: "SEO Guide | RankSEO",
    description:
      "Learn SEO with a structured guide covering keywords, content, technical SEO, and more.",
    url: pageUrl,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Guide | RankSEO",
    description:
      "Learn SEO with a structured guide covering keywords, content, technical SEO, and more.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: pageUrl },
};

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
