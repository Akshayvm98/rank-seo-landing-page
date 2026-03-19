import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageAltTextChecker } from "@/components/tools/ImageAltTextChecker";

export const metadata: Metadata = {
  title: "Image Alt Text Checker | Free SEO Tool | RankSEO",
  description: "Check image alt text on any page. Find missing, empty, generic, and duplicate alt text for better accessibility and SEO.",
  openGraph: { title: "Image Alt Text Checker | RankSEO", description: "Free tool to check image alt text for accessibility and SEO.", url: "https://rankseoengine.com/tools/image-alt-text-checker", siteName: "RankSEO", type: "website" },
  twitter: { card: "summary_large_image", title: "Image Alt Text Checker | RankSEO", description: "Free tool to check image alt text for accessibility and SEO." },
  alternates: { canonical: "https://rankseoengine.com/tools/image-alt-text-checker" },
};

export default function ImageAltTextCheckerPage() {
  return <ToolLayout><ImageAltTextChecker /></ToolLayout>;
}
