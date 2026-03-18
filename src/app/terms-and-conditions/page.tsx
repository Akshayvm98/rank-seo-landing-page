import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | RankSEO",
  description:
    "Read the terms and conditions for using RankSEO. Covers subscriptions, billing, content ownership, AI limitations, and your responsibilities.",
  openGraph: {
    title: "Terms and Conditions — Rank SEO",
    description:
      "Read the terms and conditions for using RankSEO.",
    url: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <article className="mx-auto max-w-[740px] px-6">
          <header className="mb-12">
            <h1 className="text-[2rem] font-bold tracking-[-0.03em] text-foreground md:text-[2.5rem]">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-[15px] text-muted">
              Last updated: March 18, 2026
            </p>
          </header>

          <div className="space-y-10 text-[15px] leading-[1.75] text-foreground/80">
            {/* 1. Introduction */}
            <Section title="1. Introduction">
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of
                RankSEO (&ldquo;the Service,&rdquo; &ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;us&rdquo;), an AI-powered SEO
                automation platform operated by RankSEO.
              </p>
              <p>
                By creating an account or using the Service, you agree to be bound by
                these Terms. If you do not agree, please do not use the platform.
              </p>
            </Section>

            {/* 2. Eligibility */}
            <Section title="2. Eligibility">
              <p>To use RankSEO, you must:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete account information</li>
                <li>
                  Have the authority to agree to these Terms on behalf of yourself or
                  the organization you represent
                </li>
              </ul>
            </Section>

            {/* 3. Account Responsibilities */}
            <Section title="3. Account Responsibilities">
              <p>
                You are responsible for maintaining the confidentiality of your login
                credentials and for all activity that occurs under your account.
              </p>
              <p>
                If you suspect unauthorized access to your account, notify us
                immediately at{" "}
                <a
                  href="mailto:support@rankseoengine.com"
                  className="font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  support@rankseoengine.com
                </a>
                .
              </p>
              <p>
                We reserve the right to suspend or terminate accounts that violate
                these Terms or are used for fraudulent purposes.
              </p>
            </Section>

            {/* 4. Use of the Service */}
            <Section title="4. Use of the Service">
              <p>
                RankSEO is designed for legitimate SEO research, content generation,
                and website optimization. You agree not to:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  Use the platform for any illegal, harmful, or fraudulent activity
                </li>
                <li>
                  Attempt to reverse-engineer, copy, or redistribute the platform or
                  its underlying technology
                </li>
                <li>
                  Interfere with the operation of the Service or access it through
                  automated means not provided by us
                </li>
                <li>
                  Use the Service to generate content that is misleading, defamatory,
                  or violates the rights of others
                </li>
                <li>
                  Resell or sublicense access to RankSEO without written permission
                </li>
              </ul>
            </Section>

            {/* 5. Subscription and Billing */}
            <Section title="5. Subscription and Billing">
              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Trial Period
              </h3>
              <p>
                RankSEO offers a 3-day trial for $1. The trial provides full access to
                the platform so you can evaluate the Service before committing to a
                subscription.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Automatic Conversion
              </h3>
              <p>
                At the end of the 3-day trial, your subscription will automatically
                convert to a paid plan at $69 per month. If you do not wish to
                continue, you must cancel before the trial period ends to avoid being
                charged.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Recurring Billing
              </h3>
              <p>
                Subscriptions renew automatically each month on the anniversary of your
                start date. You authorize us to charge your payment method on file for
                each renewal period.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Payment Processing
              </h3>
              <p>
                All payments are processed securely through Stripe. We do not store
                your full payment details on our servers. By providing payment
                information, you agree to Stripe&rsquo;s terms of service.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Pricing Changes
              </h3>
              <p>
                We may adjust pricing from time to time. If pricing changes affect your
                subscription, we will notify you at least 30 days in advance. Continued
                use after the effective date constitutes acceptance of the new pricing.
              </p>
            </Section>

            {/* 6. Cancellation and Refunds */}
            <Section title="6. Cancellation and Refunds">
              <p>You can cancel your subscription at any time from your account settings.</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>During the trial</strong> &mdash; If you cancel within the
                  3-day trial period, no further charges will be applied beyond the $1
                  trial fee.
                </li>
                <li>
                  <strong>After the trial</strong> &mdash; If you cancel after a
                  monthly payment has been processed, you will retain access to the
                  Service until the end of your current billing period. No partial
                  refunds are provided for unused time.
                </li>
              </ul>
              <p className="mt-3">
                Refunds may be issued at our discretion or where required by applicable
                law. To request a refund, contact{" "}
                <a
                  href="mailto:support@rankseoengine.com"
                  className="font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  support@rankseoengine.com
                </a>
                .
              </p>
            </Section>

            {/* 7. Content and Ownership */}
            <Section title="7. Content and Ownership">
              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Your Content
              </h3>
              <p>
                You retain full ownership of your website data, content, and any
                materials you upload or create using the platform. RankSEO does not
                claim ownership over your content.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Generated Content
              </h3>
              <p>
                Content generated by RankSEO&rsquo;s AI tools is provided as a
                starting point and productivity aid. You are responsible for reviewing,
                editing, and approving all generated content before publishing.
                RankSEO does not guarantee that generated content will achieve specific
                search rankings or traffic outcomes.
              </p>

              <h3 className="mt-4 mb-2 text-[15px] font-semibold text-foreground">
                Our Platform
              </h3>
              <p>
                All rights to the RankSEO platform, including its design, code,
                algorithms, and branding, remain the property of RankSEO. Your
                subscription grants you a limited, non-exclusive, non-transferable
                license to use the Service for its intended purpose.
              </p>
            </Section>

            {/* 8. AI and Platform Limitations */}
            <Section title="8. AI and Platform Limitations">
              <p>
                RankSEO uses artificial intelligence to generate content, analyze
                keywords, and provide SEO recommendations. While we strive for
                accuracy and quality, please be aware of the following:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  AI-generated content may contain inaccuracies or require editing
                  before publication
                </li>
                <li>
                  Search engine rankings depend on many factors outside our control,
                  including algorithm updates, competitor activity, and domain
                  authority
                </li>
                <li>
                  We do not guarantee specific rankings, traffic increases, or
                  revenue outcomes
                </li>
                <li>
                  SEO insights and recommendations are based on available data and
                  should be used as guidance, not absolute directives
                </li>
              </ul>
              <p className="mt-3">
                You are ultimately responsible for all content published on your
                website, regardless of whether it was generated using RankSEO.
              </p>
            </Section>

            {/* 9. Third-Party Integrations */}
            <Section title="9. Third-Party Integrations">
              <p>
                RankSEO integrates with third-party services to provide its
                functionality, including:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Google Search Console</strong> &mdash; for accessing your
                  website&rsquo;s search performance data
                </li>
                <li>
                  <strong>CMS platforms</strong> (WordPress, Webflow, Framer, Notion)
                  &mdash; for publishing content directly to your website
                </li>
                <li>
                  <strong>Stripe</strong> &mdash; for payment processing
                </li>
              </ul>
              <p className="mt-3">
                These services are operated by independent third parties and are
                subject to their own terms and policies. RankSEO is not responsible
                for outages, changes, or data handling practices of third-party
                services.
              </p>
            </Section>

            {/* 10. Termination */}
            <Section title="10. Termination">
              <p>
                You may terminate your account at any time by canceling your
                subscription and contacting us to request account deletion.
              </p>
              <p>
                We reserve the right to suspend or terminate your access to the
                Service, with or without notice, if we reasonably believe that you
                have violated these Terms, engaged in fraudulent activity, or used the
                platform in a way that could harm RankSEO or other users.
              </p>
              <p>
                Upon termination, your right to use the Service ends immediately. Any
                data associated with your account may be deleted in accordance with our
                Privacy Policy.
              </p>
            </Section>

            {/* 11. Limitation of Liability */}
            <Section title="11. Limitation of Liability">
              <p>
                The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis without warranties of any kind, whether express
                or implied.
              </p>
              <p>
                To the fullest extent permitted by law, RankSEO shall not be liable
                for:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  Loss of search rankings, organic traffic, or website performance
                </li>
                <li>
                  Loss of revenue, profits, or business opportunities
                </li>
                <li>
                  Data loss resulting from third-party service failures or
                  circumstances beyond our reasonable control
                </li>
                <li>
                  Indirect, incidental, or consequential damages arising from your
                  use of the Service
                </li>
              </ul>
              <p className="mt-3">
                Our total liability for any claim related to the Service shall not
                exceed the amount you paid to RankSEO in the 12 months preceding the
                claim.
              </p>
            </Section>

            {/* 12. Changes to Terms */}
            <Section title="12. Changes to These Terms">
              <p>
                We may update these Terms from time to time. When we make significant
                changes, we will notify you by email or through a notice on the
                platform at least 14 days before the changes take effect.
              </p>
              <p>
                Continued use of the Service after changes become effective constitutes
                your acceptance of the updated Terms. If you do not agree with the
                changes, you may cancel your subscription before they take effect.
              </p>
            </Section>

            {/* 13. Contact */}
            <Section title="13. Contact Us">
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:support@rankseoengine.com"
                  className="font-medium text-accent transition-colors hover:text-accent-hover"
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
