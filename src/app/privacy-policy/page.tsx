import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | RankSEO",
  description:
    "Learn how RankSEO collects, uses, and protects your data. Our privacy policy covers account information, website data, cookies, and your rights.",
  openGraph: {
    title: "Privacy Policy — Rank SEO",
    description:
      "Learn how RankSEO collects, uses, and protects your data.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <article className="mx-auto max-w-[740px] px-6">
          <header className="mb-12">
            <h1 className="text-[2rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
              Privacy Policy
            </h1>
            <p className="mt-3 text-[15px] text-muted">
              Last updated: March 18, 2026
            </p>
          </header>

          <div className="prose-policy space-y-10 text-[15px] leading-[1.75] text-foreground/80">
            {/* 1. Introduction */}
            <Section title="1. Introduction">
              <p>
                RankSEO (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is an
                AI-powered SEO automation platform that helps businesses grow organic
                traffic through keyword research, content generation, and performance
                tracking.
              </p>
              <p>
                We are committed to protecting your privacy and handling your data
                responsibly. This Privacy Policy explains what information we collect,
                how we use it, and the choices you have.
              </p>
              <p>
                By using RankSEO, you agree to the practices described in this policy.
              </p>
            </Section>

            {/* 2. Information We Collect */}
            <Section title="2. Information We Collect">
              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Account Information
              </h3>
              <p>
                When you create an account, we collect your name, email address, and
                password. If you sign up through a third-party provider (such as
                Google), we receive basic profile information from that service.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Billing Information
              </h3>
              <p>
                Payment processing is handled by Stripe. We do not store your credit
                card number or full payment details on our servers. Stripe may collect
                billing information as described in their own privacy policy.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Website and Search Data
              </h3>
              <p>
                When you connect your Google Search Console, we access search
                performance data for your domain, including impressions, clicks,
                keyword rankings, and indexed pages. This data is used solely to
                provide SEO insights and generate content recommendations.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Usage Data
              </h3>
              <p>
                We automatically collect information about how you interact with the
                platform, including pages visited, features used, device type, browser,
                operating system, and IP address.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Analytics Data
              </h3>
              <p>
                We use analytics tools to understand how the platform is used and to
                improve the product experience. This may include aggregated and
                anonymized interaction data.
              </p>
            </Section>

            {/* 3. How We Use Information */}
            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Provide, maintain, and improve the RankSEO platform</li>
                <li>
                  Generate SEO insights, keyword recommendations, and optimized
                  content based on your search data
                </li>
                <li>Process payments and manage your subscription</li>
                <li>
                  Communicate with you about your account, product updates, and
                  support requests
                </li>
                <li>Monitor platform performance and fix technical issues</li>
                <li>Ensure security and prevent fraud or abuse</li>
                <li>
                  Comply with legal obligations
                </li>
              </ul>
            </Section>

            {/* 4. Data Security */}
            <Section title="4. Data Security">
              <p>
                We take reasonable measures to protect your data from unauthorized
                access, loss, or misuse. These include:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Secure authentication with hashed passwords</li>
                <li>
                  Role-based access controls limiting internal data access to
                  authorized personnel only
                </li>
                <li>Regular security reviews and infrastructure monitoring</li>
              </ul>
              <p className="mt-3">
                While no system is completely secure, we continuously work to
                strengthen our protections and respond promptly to any identified
                vulnerabilities.
              </p>
            </Section>

            {/* 5. Third-Party Services */}
            <Section title="5. Third-Party Services">
              <p>
                We work with trusted third-party services to operate the platform.
                These include:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Google Search Console</strong> &mdash; to access your
                  website&rsquo;s search performance data
                </li>
                <li>
                  <strong>Stripe</strong> &mdash; for secure payment processing
                </li>
                <li>
                  <strong>Hosting providers</strong> &mdash; for infrastructure and
                  data storage
                </li>
                <li>
                  <strong>Analytics providers</strong> &mdash; to understand product
                  usage and improve the experience
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties. Data is
                shared with these services only to the extent necessary to provide and
                improve the platform.
              </p>
            </Section>

            {/* 6. Cookies */}
            <Section title="6. Cookies">
              <p>
                RankSEO uses cookies and similar technologies for the following
                purposes:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Essential cookies</strong> &mdash; required for
                  authentication, session management, and core platform functionality
                </li>
                <li>
                  <strong>Analytics cookies</strong> &mdash; used to understand how
                  the platform is used so we can improve the product
                </li>
              </ul>
              <p className="mt-3">
                We do not use advertising or tracking cookies. You can manage cookie
                preferences through your browser settings.
              </p>
            </Section>

            {/* 7. Data Retention */}
            <Section title="7. Data Retention">
              <p>
                We retain your data for as long as your account is active and as
                needed to provide the service. If you close your account or request
                deletion, we will remove your personal data within 30 days, except
                where retention is required by law or for legitimate business purposes
                (such as resolving disputes or enforcing agreements).
              </p>
              <p>
                Aggregated and anonymized data that cannot identify you may be retained
                indefinitely for analytics and product improvement.
              </p>
            </Section>

            {/* 8. Your Rights */}
            <Section title="8. Your Rights">
              <p>You have the right to:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Access</strong> the personal data we hold about you
                </li>
                <li>
                  <strong>Correct</strong> inaccurate or incomplete information
                </li>
                <li>
                  <strong>Delete</strong> your account and personal data
                </li>
                <li>
                  <strong>Export</strong> your data in a portable format
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:support@rankseoengine.com"
                  className="font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  support@rankseoengine.com
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            {/* 9. Children's Privacy */}
            <Section title="9. Children&rsquo;s Privacy">
              <p>
                RankSEO is not intended for use by individuals under the age of 16. We
                do not knowingly collect personal information from children. If we
                become aware that we have collected data from a child under 16, we will
                take steps to delete it promptly.
              </p>
            </Section>

            {/* 10. Changes to This Policy */}
            <Section title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes
                in our practices, technology, or legal requirements. When we make
                significant changes, we will notify you by email or through a notice on
                the platform.
              </p>
              <p>
                We encourage you to review this page periodically. The &ldquo;Last
                updated&rdquo; date at the top indicates when the policy was last
                revised.
              </p>
            </Section>

            {/* 11. Contact */}
            <Section title="11. Contact Us">
              <p>
                If you have questions about this Privacy Policy or how we handle your
                data, contact us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:support@rankseoengine.com"
                  className="font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  support@rankseoengine.com
                </a>
              </p>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-[1.25rem] font-semibold tracking-[-0.01em] text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
