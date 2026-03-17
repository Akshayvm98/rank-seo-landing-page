import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BloggersHero } from "@/components/use-cases/BloggersHero";
import { BloggersProblem } from "@/components/use-cases/BloggersProblem";
import { BloggersApproach } from "@/components/use-cases/BloggersApproach";
import { BloggersWorkflow } from "@/components/use-cases/BloggersWorkflow";
import { BloggersBenefits } from "@/components/use-cases/BloggersBenefits";
import { BloggersGrowth } from "@/components/use-cases/BloggersGrowth";
import { BloggersCTA } from "@/components/use-cases/BloggersCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO for Bloggers | Grow Organic Traffic Without Guessing What to Write",
  description:
    "RankSEO helps bloggers find keyword opportunities, generate SEO-friendly articles, optimize content, and publish consistently to grow organic traffic with less guesswork.",
  openGraph: {
    title: "SEO for Bloggers | RankSEO",
    description: "Grow blog traffic with smarter keyword research, content generation, and SEO optimization.",
    url: "https://yourdomain.com/use-cases/bloggers",
    siteName: "RankSEO",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO for Bloggers | RankSEO",
    description: "Stop guessing what to write and start building blog traffic with RankSEO.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/use-cases/bloggers",
  },
};

export default function BloggersPage() {
  return (
    <>
      <Navbar />
      <main>
        <BloggersHero />
        <BloggersProblem />
        <BloggersApproach />
        <BloggersWorkflow />
        <BloggersBenefits />
        <BloggersGrowth />
        <BloggersCTA />
      </main>
      <Footer />
    </>
  );
}
