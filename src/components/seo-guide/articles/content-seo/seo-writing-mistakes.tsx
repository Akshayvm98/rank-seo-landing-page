import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function SeoWritingMistakes() {
  return (
    <>
      <ArticleHero
        title="10 SEO Writing Mistakes That Are Killing Your Rankings"
        subtitle="Most content fails not because of bad writing but because of avoidable SEO mistakes that are easy to fix once you know what to look for."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why SEO writing matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why SEO writing matters">
        <Paragraph>
          Writing for SEO is not about gaming search engines. It is about
          creating content that is structured, relevant, and easy for both
          readers and Google to understand.
        </Paragraph>
        <Paragraph>
          Great writing that ignores SEO basics gets buried. Average writing
          with strong SEO fundamentals often outranks it. That is the reality
          of how search works today, and understanding it is the first step in
          any{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO strategy
          </a>
          .
        </Paragraph>
        <Paragraph>
          The good news is that most SEO writing mistakes are predictable and
          fixable. Once you know what to look for, you can audit your existing{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content SEO
          </a>{" "}
          and stop making the same errors in everything you publish going
          forward.
        </Paragraph>
        <Callout>
          SEO writing is not a separate skill. It is regular writing with
          structure, intent, and a few technical habits built in.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* 10 SEO writing mistakes killing your rankings */}
      {/* ------------------------------------------------------------------ */}
      <Section id="mistakes" title="10 SEO writing mistakes killing your rankings">
        <Paragraph>
          These are the mistakes we see most often when auditing content that
          is underperforming. Each one is common, each one hurts, and each one
          is fixable.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Targeting the wrong keywords",
              text: "You are chasing high-volume terms that sites with ten times your authority already dominate. Fix: Focus on long-tail, low-competition keywords where you can realistically rank. Check what is already on page one before committing to a keyword.",
            },
            {
              title: "Ignoring search intent",
              text: "Your page answers a different question than what the searcher asked. A product page when they wanted a guide. A definition when they wanted a comparison. Fix: Search your keyword, study the top 5 results, and match the format and depth.",
            },
            {
              title: "Writing for keywords instead of people",
              text: "Every other sentence includes the exact keyword. It reads like it was written for a robot, not a human. Fix: Use your keyword naturally in the title, H1, and first paragraph. After that, write for the reader and let variations appear organically.",
            },
            {
              title: "Poor content structure",
              text: "No clear headings, no logical flow, walls of text. Readers cannot scan it and Google cannot parse it. Fix: Use H2s for main sections, H3s for subsections. Keep paragraphs under 3-4 sentences. Make every section earn its place.",
            },
            {
              title: "No internal links",
              text: "Your pages exist in isolation. Google cannot understand how they relate to each other, and readers have no path to explore further. Fix: Add 3-5 internal links per article pointing to related content on your site.",
            },
            {
              title: "Weak title tags",
              text: "Your titles are generic, too long, or missing the keyword entirely. They do not stand out in search results and nobody clicks. Fix: Put your keyword near the front, add a benefit or hook, keep under 60 characters. Make it specific.",
            },
            {
              title: "Thin content",
              text: "Your page has 400 words on a topic that competitors cover in 2,000. Google sees it as incomplete and ranks the more comprehensive alternatives. Fix: Cover the topic thoroughly. Not longer for the sake of length — deeper. Answer every question a reader would have.",
            },
            {
              title: "Not updating old content",
              text: "Content published two years ago with outdated stats and broken links. It was ranking but now it is sliding. Fix: Audit your top pages every 3-6 months. Update data, refresh examples, add new sections, fix broken links.",
            },
            {
              title: "Missing or weak meta descriptions",
              text: "You left the meta description blank or wrote something generic. Google generates one for you, and it is rarely compelling. Fix: Write a specific, 155-character description that includes your keyword and gives a clear reason to click.",
            },
            {
              title: "No clear call to action",
              text: "The reader finishes your article and has nowhere to go. No next step, no related content, no conversion path. Fix: End every article with a clear CTA — whether it is reading a related guide, trying a tool, or subscribing.",
            },
          ]}
        />
        <Paragraph>
          For deeper guidance on specific fixes, see our guides on{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            matching search intent
          </a>
          ,{" "}
          <a
            href="/seo-guide/content-seo/how-to-write-seo-articles"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            writing SEO articles
          </a>
          ,{" "}
          <a
            href="/seo-guide/on-page-seo/title-tags"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            optimizing title tags
          </a>
          , and{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            building internal links
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to fix these mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-to-fix" title="How to fix these mistakes">
        <Paragraph>
          You do not need to fix everything at once. Start with the mistakes
          that are easiest to identify and have the biggest impact.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Audit your top pages first",
              text: "Check your 10 highest-traffic pages for these mistakes. Fixing problems on pages that already get impressions has the fastest impact.",
            },
            {
              title: "Fix intent and structure",
              text: "These two issues cause the most ranking failures. Make sure every page matches what searchers want and is easy to scan.",
            },
            {
              title: "Add internal links and update metadata",
              text: "These are 10-minute fixes per page that compound over time. Work through your content library systematically.",
            },
            {
              title: "Set up a review schedule",
              text: "Check your top content quarterly. SEO is not set-and-forget — the pages that stay on top are the ones that get maintained.",
            },
          ]}
        />
        <Paragraph>
          Once you have the basics in place, move on to deeper improvements
          with our{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>{" "}
          to squeeze more performance out of every page.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps you avoid these mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps you avoid these mistakes">
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                content optimization features
              </a>{" "}
              automatically check your content for these common mistakes before
              you publish.
            </span>,
            "Flags missing internal links, weak titles, and thin content",
            "Analyzes search intent and shows you what top-ranking pages cover",
            "Tracks your content performance and alerts you when pages need updating",
          ]}
        />
        <Paragraph>
          Stop guessing what is wrong with your content.{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            See how RankSEO works
          </a>{" "}
          or{" "}
          <a
            href="/pricing"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            start your $1 trial
          </a>{" "}
          and fix these mistakes today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What are the most common SEO writing mistakes?",
            answer: (
              <p>
                The most common mistakes are targeting the wrong keywords,
                ignoring search intent, poor content structure, missing internal
                links, and not updating old content. These five issues account
                for the majority of ranking failures.
              </p>
            ),
            answerText:
              "The most common mistakes are targeting the wrong keywords, ignoring search intent, poor content structure, missing internal links, and not updating old content. These five issues account for the majority of ranking failures.",
          },
          {
            question: "Why is my content not ranking?",
            answer: (
              <p>
                The most likely reasons are a mismatch between your content and
                search intent, targeting keywords that are too competitive, thin
                content that does not cover the topic thoroughly, or technical
                issues preventing Google from crawling your page.
              </p>
            ),
            answerText:
              "The most likely reasons are a mismatch between your content and search intent, targeting keywords that are too competitive, thin content that does not cover the topic thoroughly, or technical issues preventing Google from crawling your page.",
          },
          {
            question: "How do I improve my SEO writing?",
            answer: (
              <p>
                Start by matching search intent for every keyword you target.
                Structure your content with clear headings, write for humans
                first, add internal links, and optimize your title tag and meta
                description. Then review and update regularly.
              </p>
            ),
            answerText:
              "Start by matching search intent for every keyword you target. Structure your content with clear headings, write for humans first, add internal links, and optimize your title tag and meta description. Then review and update regularly.",
          },
          {
            question: "Can bad writing affect SEO rankings?",
            answer: (
              <p>
                Poor writing increases bounce rate and reduces time on page,
                which signals to Google that your content is not satisfying
                users. Clear, well-structured writing keeps readers engaged and
                improves your chances of ranking.
              </p>
            ),
            answerText:
              "Poor writing increases bounce rate and reduces time on page, which signals to Google that your content is not satisfying users. Clear, well-structured writing keeps readers engaged and improves your chances of ranking.",
          },
          {
            question: "How often should I update my content for SEO?",
            answer: (
              <p>
                Review your top-performing pages every 3-6 months. Update
                outdated statistics, refresh examples, add new sections for
                emerging questions, and fix any broken links. Pages with
                declining traffic should be prioritized immediately.
              </p>
            ),
            answerText:
              "Review your top-performing pages every 3-6 months. Update outdated statistics, refresh examples, add new sections for emerging questions, and fix any broken links. Pages with declining traffic should be prioritized immediately.",
          },
          {
            question: "Is keyword stuffing still a problem?",
            answer: (
              <p>
                Yes. While it has evolved from obvious repetition to subtler
                over-optimization, writing that feels forced or unnatural still
                hurts rankings. Use your keyword naturally and focus on covering
                the topic thoroughly instead.
              </p>
            ),
            answerText:
              "Yes. While it has evolved from obvious repetition to subtler over-optimization, writing that feels forced or unnatural still hurts rankings. Use your keyword naturally and focus on covering the topic thoroughly instead.",
          },
        ]}
      />
    </>
  );
}
