import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PricingPage } from "@/components/pricing/PricingPage";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RankSEO Pricing | $1 Trial for 3 Days",
  description:
    "Start using RankSEO with a $1 trial for 3 days. Full access to keyword discovery, AI content generation, publishing, and analytics.",
  openGraph: {
    title: "RankSEO Pricing",
    description:
      "Try RankSEO for $1 and grow your organic traffic faster.",
    url: "/pricing",
    siteName: "RankSEO",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RankSEO Pricing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankSEO Pricing",
    description: "Start your SEO automation with a $1 trial.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main>
        <PricingPage />
      </main>
      <Footer />
    </>
  );
}
