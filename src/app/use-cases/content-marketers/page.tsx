import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContentMarketersHero } from "@/components/use-cases/ContentMarketersHero";
import { ContentMarketersProblem } from "@/components/use-cases/ContentMarketersProblem";
import { ContentMarketersSolution } from "@/components/use-cases/ContentMarketersSolution";
import { ContentMarketersWorkflow } from "@/components/use-cases/ContentMarketersWorkflow";
import { ContentMarketersContentOps } from "@/components/use-cases/ContentMarketersContentOps";
import { ContentMarketersWhatChanges } from "@/components/use-cases/ContentMarketersWhatChanges";
import { ContentMarketersCTA } from "@/components/use-cases/ContentMarketersCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO for Content Marketers | Scale Content Without Burnout",
  description:
    "RankSEO helps content marketers scale SEO content faster with keyword research, AI content generation, optimization, publishing, and performance tracking in one workflow.",
  openGraph: {
    title: "SEO for Content Marketers | RankSEO",
    description: "Scale SEO content faster without burning out your team.",
    url: "https://yourdomain.com/use-cases/content-marketers",
    siteName: "RankSEO",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Content Marketers | RankSEO",
    description: "Build a repeatable SEO content workflow with RankSEO.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/use-cases/content-marketers",
  },
};

export default function ContentMarketersPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContentMarketersHero />
        <ContentMarketersProblem />
        <ContentMarketersSolution />
        <ContentMarketersWorkflow />
        <ContentMarketersContentOps />
        <ContentMarketersWhatChanges />
        <ContentMarketersCTA />
      </main>
      <Footer />
    </>
  );
}
