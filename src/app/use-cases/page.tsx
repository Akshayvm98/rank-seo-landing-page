import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { UseCasesHero } from "@/components/use-cases/UseCasesHero";
import { UseCasesGrid } from "@/components/use-cases/UseCasesGrid";
import { UseCasesAdapts } from "@/components/use-cases/UseCasesAdapts";
import { UseCasesSelector } from "@/components/use-cases/UseCasesSelector";
import { UseCasesLinks } from "@/components/use-cases/UseCasesLinks";
import { UseCasesCTA } from "@/components/use-cases/UseCasesCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RankSEO Use Cases | SEO Automation for Founders, Agencies, SaaS Teams, and More",
  description:
    "Explore how RankSEO helps founders, content marketers, SEO professionals, agencies, bloggers, and SaaS teams automate SEO workflows and grow organic traffic.",
  openGraph: {
    title: "RankSEO Use Cases",
    description: "See how RankSEO helps different teams and workflows grow through SEO.",
    url: "https://yourdomain.com/use-cases",
    siteName: "RankSEO",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankSEO Use Cases",
    description: "Explore SEO use cases for founders, agencies, SaaS teams, bloggers, and more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/use-cases",
  },
};

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <UseCasesHero />
        <UseCasesGrid />
        <UseCasesAdapts />
        <UseCasesSelector />
        <UseCasesLinks />
        <UseCasesCTA />
      </main>
      <Footer />
    </>
  );
}
