import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { EmailValidator } from "@/components/tools/EmailValidator";

export const metadata: Metadata = {
  title: "Email Validator | Free Tool | RankSEO",
  description:
    "Check whether an email address is valid, risky, disposable, role-based, or unverifiable. Free email validation with honest results.",
  openGraph: {
    title: "Email Validator | RankSEO",
    description: "Free email validation tool. Check syntax, domain, mail server, and deliverability signals.",
    url: "https://www.rankseoengine.com/tools/email-validator",
    siteName: "RankSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Validator | RankSEO",
    description: "Free email validation tool with honest, transparent results.",
  },
  alternates: { canonical: "https://www.rankseoengine.com/tools/email-validator" },
};

export default function EmailValidatorPage() {
  return (
    <ToolLayout>
      <EmailValidator />
    </ToolLayout>
  );
}
