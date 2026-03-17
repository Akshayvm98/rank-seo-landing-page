import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SEOProsHero } from "@/components/use-cases/SEOProsHero";
import { SEOProsReality } from "@/components/use-cases/SEOProsReality";
import { SEOProsShift } from "@/components/use-cases/SEOProsShift";
import { SEOProsWorkflow } from "@/components/use-cases/SEOProsWorkflow";
import { SEOProsProductDetail } from "@/components/use-cases/SEOProsProductDetail";
import { SEOProsBenefits } from "@/components/use-cases/SEOProsBenefits";
import { SEOProsCTA } from "@/components/use-cases/SEOProsCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO Automation for Professionals | Save Time on Execution, Not Strategy",
  description:
    "RankSEO helps SEO professionals automate keyword research, content production, optimization, and publishing while staying in control of strategy and performance.",
  openGraph: {
    title: "SEO Automation for Professionals | RankSEO",
    description: "Automate SEO execution while staying in control of strategy.",
    url: "https://yourdomain.com/use-cases/seo-professionals",
    siteName: "RankSEO",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Automation for Professionals | RankSEO",
    description: "Reduce repetitive SEO work and scale execution with RankSEO.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/use-cases/seo-professionals",
  },
};

export default function SEOProfessionalsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SEOProsHero />
        <SEOProsReality />
        <SEOProsShift />
        <SEOProsWorkflow />
        <SEOProsProductDetail />
        <SEOProsBenefits />
        <SEOProsCTA />
      </main>
      <Footer />
    </>
  );
}
