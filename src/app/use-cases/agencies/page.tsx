import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AgenciesHero } from "@/components/use-cases/AgenciesHero";
import { AgenciesReality } from "@/components/use-cases/AgenciesReality";
import { AgenciesWorkflowProblem } from "@/components/use-cases/AgenciesWorkflowProblem";
import { AgenciesHowItWorks } from "@/components/use-cases/AgenciesHowItWorks";
import { AgenciesMultiClient } from "@/components/use-cases/AgenciesMultiClient";
import { AgenciesOutcomes } from "@/components/use-cases/AgenciesOutcomes";
import { AgenciesCTA } from "@/components/use-cases/AgenciesCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO for Agencies | Scale Client SEO Without Scaling Chaos",
  description:
    "RankSEO helps agencies manage keyword research, content production, publishing, and SEO reporting across multiple clients with less manual work and more consistency.",
  openGraph: {
    title: "SEO for Agencies | RankSEO",
    description:
      "Manage SEO across multiple clients with less manual work and more consistency.",
    url: "https://yourdomain.com/use-cases/agencies",
    siteName: "RankSEO",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Agencies | RankSEO",
    description:
      "Build a scalable SEO workflow for multiple clients with RankSEO.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/use-cases/agencies",
  },
};

export default function AgenciesPage() {
  return (
    <>
      <Navbar />
      <main>
        <AgenciesHero />
        <AgenciesReality />
        <AgenciesWorkflowProblem />
        <AgenciesHowItWorks />
        <AgenciesMultiClient />
        <AgenciesOutcomes />
        <AgenciesCTA />
      </main>
      <Footer />
    </>
  );
}
