import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { SerpPreviewTool } from "@/components/tools/SerpPreviewTool";

export const metadata: Metadata = {
  title: "SERP Preview Tool | Free SEO Tool | RankSEO",
  description:
    "Preview how your page appears in Google search results. Optimize title tags, meta descriptions, and URLs before publishing.",
  openGraph: {
    title: "SERP Preview Tool | RankSEO",
    description:
      "Free tool to preview and optimize your Google search result appearance.",
    url: "https://www.rankseoengine.com/tools/serp-preview-tool",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SERP Preview Tool | RankSEO",
    description:
      "Free tool to preview and optimize your Google search result appearance.",
  },
  alternates: {
    canonical: "https://www.rankseoengine.com/tools/serp-preview-tool",
  },
};

export default function SerpPreviewToolPage() {
  return (
    <ToolLayout>
      <SerpPreviewTool />
    </ToolLayout>
  );
}
