import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { IntegrationsHero } from "@/components/integrations/IntegrationsHero";
import { IntegrationsOverview } from "@/components/integrations/IntegrationsOverview";
import { IntegrationDetails } from "@/components/integrations/IntegrationDetails";
import { IntegrationsWorkflow } from "@/components/integrations/IntegrationsWorkflow";
import { WhyIntegrations } from "@/components/integrations/WhyIntegrations";
import { IntegrationsFAQ } from "@/components/integrations/IntegrationsFAQ";
import { IntegrationsCTA } from "@/components/integrations/IntegrationsCTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "RankSEO Integrations | Connect Search Console, CMS & Analytics",
  description:
    "Explore RankSEO integrations for Google Search Console, WordPress, Webflow, Framer, Notion, and analytics. Automate SEO from keyword discovery to publishing.",
  openGraph: {
    title: "RankSEO Integrations",
    description:
      "Connect your SEO workflow with Search Console, CMS platforms, and analytics tools.",
    url: "/integrations",
    siteName: "RankSEO",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RankSEO Integrations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankSEO Integrations",
    description:
      "See how RankSEO connects with your CMS, analytics, and SEO workflow.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/integrations",
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <IntegrationsHero />
        <IntegrationsOverview />
        <IntegrationDetails />
        <IntegrationsWorkflow />
        <WhyIntegrations />
        <IntegrationsFAQ />
        <IntegrationsCTA />
      </main>
      <Footer />
    </>
  );
}
