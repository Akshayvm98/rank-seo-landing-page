import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function HowToUpdateOldContent() {
  return (
    <>
      <ArticleHero
        title="How to Update Old Content for SEO (Step-by-Step Guide)"
        subtitle="Refreshing existing content is one of the fastest ways to improve rankings without creating anything new."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why updating old content matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-update" title="Why updating old content matters">
        <Paragraph>
          Every piece of content has a shelf life. Stats become outdated,
          competitors publish better versions, and search intent shifts over
          time. What ranked well a year ago may already be losing ground.
        </Paragraph>
        <Paragraph>
          Google favors freshness for many queries. When two pages are equally
          relevant, the one with more current information often wins. This is
          especially true for topics where accuracy matters — think statistics,
          tools, strategies, and best practices.
        </Paragraph>
        <Paragraph>
          The best part: updating is significantly faster than creating new
          content from scratch. You already have the foundation — the research,
          the structure, the backlinks. You just need to bring it up to date.
          This is a core principle covered in our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          and the{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content SEO
          </a>{" "}
          section in particular.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Signs your content needs updating */}
      {/* ------------------------------------------------------------------ */}
      <Section id="signs" title="Signs your content needs updating">
        <Paragraph>
          Not every page needs a refresh. Focus your energy on the ones showing
          clear signals of decline.
        </Paragraph>
        <BulletList
          items={[
            <span key="rankings">
              <strong>Rankings dropped.</strong> Pages that used to rank on page
              one are now on page two or beyond.
            </span>,
            <span key="traffic">
              <strong>Traffic declined.</strong> Steady traffic that has been
              trending down over 3-6 months.
            </span>,
            <span key="outdated">
              <strong>Outdated information.</strong> Stats, screenshots, or
              references from more than 2 years ago.
            </span>,
            <span key="thin">
              <strong>Thin content.</strong> Pages with fewer than 800 words on
              topics that competitors cover in depth.
            </span>,
            <span key="engagement">
              <strong>Poor engagement.</strong> High bounce rate and low time on
              page compared to similar content.
            </span>,
            <span key="intent">
              <strong>Missing intent match.</strong> The page answers a slightly
              different question than what searchers now want.
            </span>,
          ]}
        />
        <Callout>
          Start with pages ranking on positions 5-20 — these have the most
          upside with the least effort.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Step-by-step process to update content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="process" title="Step-by-step process to update content">
        <Paragraph>
          Follow this process for every page you update. It keeps the work
          focused and measurable.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Identify underperforming pages",
              text: "Use Search Console to find pages with declining clicks or impressions. Sort by position 5-20 for the biggest opportunities. These pages already have some authority — they just need a push.",
            },
            {
              title: "Audit current keywords",
              text: "Check which keywords the page ranks for now vs. what it should target. Look for new keyword opportunities that have emerged since the page was published. Understanding keyword difficulty helps you prioritize which terms to go after.",
            },
            {
              title: "Improve content depth and quality",
              text: "Add missing subtopics, update examples, include recent data. Compare against top-ranking competitors to find content gaps you can fill.",
            },
            {
              title: "Fix internal linking",
              text: "Add links to newer content, remove broken links, and ensure the page connects to your topic cluster. Strong internal linking helps both readers and search engines understand how your content fits together.",
            },
            {
              title: "Optimize headings and structure",
              text: "Rewrite H2s and H3s to match current search intent. Add sections for questions people are now asking. Clear, descriptive headings make your content easier to scan and help Google understand what each section covers.",
            },
            {
              title: "Refresh metadata",
              text: "Update the title tag and meta description with current keywords and a stronger hook. A compelling title can improve click-through rate even before rankings change.",
            },
            {
              title: "Re-publish and track performance",
              text: "Update the publish date, submit the URL in Search Console, and monitor rankings for 4-6 weeks. Give Google enough time to re-evaluate the page before deciding if further changes are needed.",
            },
          ]}
        />
        <Paragraph>
          For more on specific steps, see our guides on{" "}
          <a
            href="/seo-guide/keyword-research/keyword-difficulty"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword difficulty
          </a>
          ,{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization
          </a>
          , and{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What NOT to do when updating content */}
      {/* ------------------------------------------------------------------ */}
      <Section id="mistakes" title="What NOT to do when updating content">
        <Paragraph>
          Updating content is powerful, but there are some common pitfalls that
          can hurt your rankings instead of helping them.
        </Paragraph>
        <BulletList
          items={[
            <span key="url">
              <strong>Do not change the URL.</strong> Changing slugs breaks
              backlinks and resets any authority the page has built.
            </span>,
            <span key="remove">
              <strong>Do not remove content that ranks.</strong> If a section
              drives traffic for specific keywords, keep it even if you are
              restructuring.
            </span>,
            <span key="stuff">
              <strong>Do not keyword stuff.</strong> Adding more keyword mentions
              does not help. Focus on depth and value instead.
            </span>,
            <span key="all">
              <strong>Do not update everything at once.</strong> Prioritize 3-5
              pages per month so you can measure what works.
            </span>,
            <span key="redirects">
              <strong>Do not ignore redirects.</strong> If you must change a URL,
              set up a 301 redirect immediately.
            </span>,
          ]}
        />
        <Callout type="warning">
          The biggest mistake is updating content without checking what it
          currently ranks for. You might accidentally remove the sections driving
          your traffic.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps you update content faster">
        <Paragraph>
          Manually auditing every page takes hours. RankSEO automates the
          tedious parts so you can focus on making the actual improvements.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                content audit features
              </a>{" "}
              automatically flag pages with declining performance and suggest
              specific improvements.
            </span>,
            "Compares your content against top-ranking competitors to find gaps",
            "Tracks ranking changes after updates so you know what worked",
            "Suggests internal linking opportunities you may have missed",
          ]}
        />
        <Paragraph>
          Use our{" "}
          <a
            href="/seo-guide/content-seo/blog-seo-checklist"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            blog SEO checklist
          </a>{" "}
          to make sure updated posts meet every optimization standard before you
          hit publish.
        </Paragraph>
        <Paragraph>
          Ready to find out which pages need attention?{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            Explore RankSEO&apos;s features
          </a>{" "}
          to see how content audits work, or{" "}
          <a
            href="/pricing"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            start your $1 trial
          </a>{" "}
          to run your first audit today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "How often should I update old content?",
            answer: (
              <p>
                Review your top-performing pages every 3-6 months. Pages with
                declining traffic should be prioritized immediately. Not every
                page needs frequent updates — focus on those with the most
                ranking potential.
              </p>
            ),
            answerText:
              "Review your top-performing pages every 3-6 months. Pages with declining traffic should be prioritized immediately. Not every page needs frequent updates — focus on those with the most ranking potential.",
          },
          {
            question: "Does updating content actually improve rankings?",
            answer: (
              <p>
                Yes. Google re-evaluates pages when they are updated with fresh,
                relevant content. Many sites see ranking improvements within 2-6
                weeks of a meaningful content refresh.
              </p>
            ),
            answerText:
              "Yes. Google re-evaluates pages when they are updated with fresh, relevant content. Many sites see ranking improvements within 2-6 weeks of a meaningful content refresh.",
          },
          {
            question:
              "Should I change the publish date when updating?",
            answer: (
              <p>
                Yes, if the update is substantial — new sections, updated data,
                rewritten paragraphs. Do not change the date for minor fixes
                like typo corrections.
              </p>
            ),
            answerText:
              "Yes, if the update is substantial — new sections, updated data, rewritten paragraphs. Do not change the date for minor fixes like typo corrections.",
          },
          {
            question: "What parts of content should I update first?",
            answer: (
              <p>
                Start with the title tag, introduction, and any outdated
                statistics or examples. Then check headings, add missing
                subtopics, and update internal links.
              </p>
            ),
            answerText:
              "Start with the title tag, introduction, and any outdated statistics or examples. Then check headings, add missing subtopics, and update internal links.",
          },
          {
            question: "Can old content rank again after an update?",
            answer: (
              <p>
                Absolutely. Pages that once ranked well often have existing
                backlinks and authority. Refreshing them can restore and even
                improve their previous rankings.
              </p>
            ),
            answerText:
              "Absolutely. Pages that once ranked well often have existing backlinks and authority. Refreshing them can restore and even improve their previous rankings.",
          },
          {
            question: "How do I know if a content update worked?",
            answer: (
              <p>
                Track the page in Search Console for 4-6 weeks after updating.
                Look for changes in impressions, clicks, average position, and
                click-through rate.
              </p>
            ),
            answerText:
              "Track the page in Search Console for 4-6 weeks after updating. Look for changes in impressions, clicks, average position, and click-through rate.",
          },
        ]}
      />
    </>
  );
}
