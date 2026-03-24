import type { Metadata } from "next";
import { LaunchVideo } from "@/components/LaunchVideo";

export const metadata: Metadata = {
  title: "RankSEO Launch",
  description: "Make your website a traffic engine. AI-powered SEO automation.",
  openGraph: {
    title: "RankSEO Launch",
    description: "Make your website a traffic engine that grows itself.",
    url: "https://www.rankseoengine.com/launch",
    siteName: "RankSEO",
    type: "website",
  },
};

export default function LaunchPage() {
  return <LaunchVideo />;
}
