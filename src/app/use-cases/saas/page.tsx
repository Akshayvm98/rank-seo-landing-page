import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SaaSHero } from "@/components/use-cases/SaaSHero";
import { SaaSGrowthProblem } from "@/components/use-cases/SaaSGrowthProblem";
import { SaaSWhyStalls } from "@/components/use-cases/SaaSWhyStalls";
import { SaaSWorkflow } from "@/components/use-cases/SaaSWorkflow";
import { SaaSBenefits } from "@/components/use-cases/SaaSBenefits";
import { SaaSGrowth } from "@/components/use-cases/SaaSGrowth";
import { SaaSCTA } from "@/components/use-cases/SaaSCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO for SaaS Teams | Build a Predictable Organic Growth Engine",
  description:
    "RankSEO helps SaaS teams turn keyword research, content generation, optimization, and publishing into a repeatable SEO growth system.",
  openGraph: {
    title: "SEO for SaaS Teams | RankSEO",
    description: "Turn SEO into a repeatable growth engine for your SaaS.",
    url: "https://yourdomain.com/use-cases/saas",
    siteName: "RankSEO",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for SaaS Teams | RankSEO",
    description: "Build a more predictable SaaS SEO workflow with RankSEO.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/use-cases/saas",
  },
};

export default function SaaSPage() {
  return (
    <>
      <Navbar />
      <main>
        <SaaSHero />
        <SaaSGrowthProblem />
        <SaaSWhyStalls />
        <SaaSWorkflow />
        <SaaSBenefits />
        <SaaSGrowth />
        <SaaSCTA />
      </main>
      <Footer />
    </>
  );
}
