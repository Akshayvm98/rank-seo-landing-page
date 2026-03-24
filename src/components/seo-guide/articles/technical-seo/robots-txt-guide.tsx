import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function RobotsTxtGuide() {
  return (
    <>
      <ArticleHero
        title="Robots.txt Guide: How to Use It for SEO (With Examples)"
        subtitle="Control how search engines crawl your site with a simple text file. Learn what robots.txt does, how to write one, and how to avoid the most common mistakes."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* What is robots.txt */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-robots-txt" title="What is robots.txt">
        <Paragraph>
          Robots.txt is a plain text file that sits at the root of your website
          and tells search engine crawlers which pages they can and cannot
          access. Every website can have one, and it is always located at{" "}
          <code className="rounded bg-border-light px-1.5 py-0.5 text-[13px] font-mono text-foreground">
            yoursite.com/robots.txt
          </code>
          .
        </Paragraph>
        <Paragraph>
          When a crawler like Googlebot visits your site, it checks this file
          first. The rules inside tell the bot which directories and pages to
          skip, which ones to crawl, and where to find your sitemap.
        </Paragraph>
        <Paragraph>
          It is important to understand that robots.txt is a suggestion, not a
          hard block. Well-behaved bots like Google and Bing respect it, but
          malicious bots may ignore it entirely. If you need to truly prevent
          access to a page, you need server-level authentication.
        </Paragraph>
        <Paragraph>
          Robots.txt is part of{" "}
          <a
            href="/seo-guide/technical-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            technical SEO
          </a>
          , which covers the behind-the-scenes work that helps search engines
          understand and crawl your site effectively. For a complete overview of
          how technical SEO fits into a broader strategy, see the{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            full SEO guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it matters for SEO */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why robots.txt matters for SEO">
        <BulletList
          items={[
            <span key="1">
              <strong>Controls crawl budget.</strong> Search engines have a
              limited number of pages they will crawl per visit. Robots.txt
              helps focus that budget on pages that matter.
            </span>,
            <span key="2">
              <strong>Prevents indexing of private pages.</strong> Keep admin
              panels, staging environments, and internal tools out of search
              results.
            </span>,
            <span key="3">
              <strong>Avoids duplicate content issues.</strong> Block filtered
              or sorted versions of the same page that add no SEO value.
            </span>,
            <span key="4">
              <strong>Protects server resources.</strong> Prevent aggressive
              bots from overloading your server by blocking them entirely.
            </span>,
            <span key="5">
              <strong>Directs crawlers to your sitemap.</strong> The Sitemap
              directive tells search engines exactly where to find your XML
              sitemap.
            </span>,
          ]}
        />
        <Callout type="info">
          Robots.txt does not remove pages from Google. If a page is already
          indexed and you want it removed, you need a noindex meta tag or a
          removal request in Search Console.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How robots.txt works */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-it-works" title="How robots.txt works">
        <Paragraph>
          A robots.txt file is made up of simple directives, each on its own
          line. The four most common directives are User-agent, Disallow, Allow,
          and Sitemap.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "User-agent",
              text: "Specifies which crawler the rules apply to. Use * for all bots, or a specific name like Googlebot.",
            },
            {
              title: "Disallow",
              text: "Tells the bot not to crawl a specific path. Disallow: /admin/ blocks everything under the /admin/ directory.",
            },
            {
              title: "Allow",
              text: "Overrides a Disallow for a specific path. Useful when you block a directory but want one page inside it to be crawlable.",
            },
            {
              title: "Sitemap",
              text: "Points crawlers to your XML sitemap. Place this at the bottom of robots.txt so every bot can find it.",
            },
          ]}
        />
        <Paragraph>
          A typical robots.txt file looks like this: User-agent: * followed by
          Disallow: /admin/, Disallow: /staging/, Allow: /, and Sitemap:
          https://yoursite.com/sitemap.xml. Each rule goes on its own line.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common robots.txt rules with examples */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-rules" title="Common robots.txt rules with examples">
        <Paragraph>
          Here are the most practical robots.txt rules you will use on real
          sites. Each example shows the directives and what they do.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Block all crawlers from a directory.</strong> User-agent: *
              and Disallow: /private/ &mdash; prevents all bots from accessing
              anything under /private/.
            </span>,
            <span key="2">
              <strong>Allow all crawlers everywhere.</strong> User-agent: * and
              Disallow: (empty) &mdash; this is the most permissive setting.
              Every page is crawlable.
            </span>,
            <span key="3">
              <strong>Block a specific bot.</strong> User-agent: AhrefsBot and
              Disallow: / &mdash; blocks the Ahrefs crawler from your entire
              site while letting other bots through.
            </span>,
            <span key="4">
              <strong>Block a single page.</strong> User-agent: * and Disallow:
              /thank-you &mdash; prevents crawlers from accessing a specific
              page.
            </span>,
            <span key="5">
              <strong>Allow one page in a blocked directory.</strong>{" "}
              User-agent: * and Disallow: /docs/ then Allow: /docs/public
              &mdash; blocks the docs directory except for the public page.
            </span>,
            <span key="6">
              <strong>Point to your sitemap.</strong> Sitemap:
              https://yoursite.com/sitemap.xml &mdash; goes at the bottom of
              the file, outside any User-agent block.
            </span>,
          ]}
        />
        <Callout type="tip">
          Always test your robots.txt changes before deploying. A single
          misplaced rule can accidentally block your entire site from Google.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes to avoid */}
      {/* ------------------------------------------------------------------ */}
      <Section id="mistakes" title="Common mistakes to avoid">
        <BulletList
          items={[
            <span key="1">
              <strong>Blocking your entire site.</strong> Disallow: / blocks
              everything. This is the most common and most damaging mistake,
              especially on staging sites that accidentally go live.
            </span>,
            <span key="2">
              <strong>Blocking CSS and JavaScript.</strong> Google needs to
              render your pages. Blocking CSS/JS files prevents Google from
              understanding your page layout and content.
            </span>,
            <span key="3">
              <strong>Using robots.txt to hide sensitive content.</strong>{" "}
              Robots.txt is publicly accessible. Anyone can read it. Never use
              it to hide passwords, API keys, or confidential pages.
            </span>,
            <span key="4">
              <strong>Forgetting to update after a redesign.</strong> Old
              robots.txt rules may block new URL patterns or allow paths that no
              longer exist.
            </span>,
            <span key="5">
              <strong>Not including a Sitemap directive.</strong> It takes one
              line and helps every search engine find your sitemap instantly.
            </span>,
          ]}
        />
        <Callout type="warning">
          Robots.txt is public. Do not list URLs in Disallow that you want to
          keep secret &mdash; you are actually advertising their existence.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to create and test robots.txt */}
      {/* ------------------------------------------------------------------ */}
      <Section id="create-and-test" title="How to create and test robots.txt">
        <Paragraph>
          Setting up a robots.txt file takes just a few minutes. Follow these
          steps to get it right the first time.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Create the file",
              text: "Use any text editor. Save it as robots.txt with no file extension changes. Keep it plain text, no HTML.",
            },
            {
              title: "Add your rules",
              text: "Start with User-agent: * for rules that apply to all bots. Add Disallow lines for paths you want to block. Add your Sitemap line at the bottom.",
            },
            {
              title: "Upload to your root directory",
              text: "The file must be at yoursite.com/robots.txt. It will not work in subdirectories.",
            },
            {
              title: "Test in Search Console",
              text: "Use Google Search Console's robots.txt tester to verify your rules work as expected before relying on them.",
            },
            {
              title: "Monitor regularly",
              text: "Check your robots.txt after site migrations, redesigns, or CMS updates. Automated changes can overwrite your custom rules.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with technical SEO">
        <Paragraph>
          Managing robots.txt manually works for simple sites, but as your site
          grows, it becomes easy to miss misconfigurations. Automated auditing
          catches problems before they hurt your rankings.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                technical SEO features
              </a>{" "}
              automatically audit your site for crawlability issues, including
              robots.txt misconfigurations.
            </span>,
            "Detects pages accidentally blocked from crawlers",
            "Monitors robots.txt changes and alerts you to problems",
            "Checks that your sitemap is properly referenced",
          ]}
        />
        <Paragraph>
          Explore all{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO features
          </a>{" "}
          or check out{" "}
          <a
            href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            pricing
          </a>{" "}
          to get started with automated technical SEO audits today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What is robots.txt used for?",
            answer: (
              <p>
                Robots.txt tells search engine crawlers which pages on your site
                they can and cannot access. It helps you control crawl budget,
                prevent indexing of private pages, and direct bots to your
                sitemap.
              </p>
            ),
            answerText:
              "Robots.txt tells search engine crawlers which pages on your site they can and cannot access. It helps you control crawl budget, prevent indexing of private pages, and direct bots to your sitemap.",
          },
          {
            question: "Can robots.txt block Google from indexing a page?",
            answer: (
              <p>
                Robots.txt can prevent Google from crawling a page, but if other
                sites link to it, Google may still index the URL without
                crawling the content. To fully prevent indexing, use a noindex
                meta tag instead.
              </p>
            ),
            answerText:
              "Robots.txt can prevent Google from crawling a page, but if other sites link to it, Google may still index the URL without crawling the content. To fully prevent indexing, use a noindex meta tag instead.",
          },
          {
            question: "Is robots.txt important for SEO?",
            answer: (
              <p>
                Yes. It helps search engines spend their crawl budget on your
                most important pages and prevents them from wasting time on
                admin pages, duplicates, or staging content.
              </p>
            ),
            answerText:
              "Yes. It helps search engines spend their crawl budget on your most important pages and prevents them from wasting time on admin pages, duplicates, or staging content.",
          },
          {
            question: "What happens if robots.txt has errors?",
            answer: (
              <p>
                Errors can accidentally block important pages from being crawled
                and indexed. In the worst case, a single wrong rule like
                Disallow: / can remove your entire site from search results.
              </p>
            ),
            answerText:
              "Errors can accidentally block important pages from being crawled and indexed. In the worst case, a single wrong rule like Disallow: / can remove your entire site from search results.",
          },
          {
            question: "How do I fix robots.txt errors?",
            answer: (
              <p>
                Use Google Search Console&apos;s robots.txt tester to identify
                which rules are blocking which pages. Fix the rules in your
                file, re-upload, and request a re-crawl of affected pages.
              </p>
            ),
            answerText:
              "Use Google Search Console's robots.txt tester to identify which rules are blocking which pages. Fix the rules in your file, re-upload, and request a re-crawl of affected pages.",
          },
          {
            question: "Do I need robots.txt if I have a small site?",
            answer: (
              <p>
                Even small sites benefit from a basic robots.txt file. At
                minimum, include a Sitemap directive so search engines can find
                your sitemap easily.
              </p>
            ),
            answerText:
              "Even small sites benefit from a basic robots.txt file. At minimum, include a Sitemap directive so search engines can find your sitemap easily.",
          },
        ]}
      />
    </>
  );
}
