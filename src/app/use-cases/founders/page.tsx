import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FoundersHero } from "@/components/use-cases/FoundersHero";
import { FoundersProblem } from "@/components/use-cases/FoundersProblem";
import { FoundersSolution } from "@/components/use-cases/FoundersSolution";
import { FoundersHowItWorks } from "@/components/use-cases/FoundersHowItWorks";
import { FoundersOutcomes } from "@/components/use-cases/FoundersOutcomes";
import { FoundersCTA } from "@/components/use-cases/FoundersCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO for Founders | Grow Traffic Without Hiring an SEO Team",
  description:
    "RankSEO helps founders grow organic traffic without hiring an SEO team. Automate keyword research, content creation, and publishing in one workflow.",
  openGraph: {
    title: "SEO for Founders | RankSEO",
    description:
      "Grow organic traffic without hiring an SEO team. Automate keyword research, content, and publishing.",
    url: "/use-cases/founders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Founders | RankSEO",
    description:
      "Grow organic traffic without hiring an SEO team. Automate keyword research, content, and publishing.",
  },
  alternates: {
    canonical: "/use-cases/founders",
  },
};

export default function FoundersPage() {
  return (
    <>
      <Navbar />
      <main>
        <FoundersHero />
        <FoundersProblem />
        <FoundersSolution />
        <FoundersHowItWorks />
        <FoundersOutcomes />
        <FoundersCTA />
      </main>
      <Footer />
    </>
  );
}
