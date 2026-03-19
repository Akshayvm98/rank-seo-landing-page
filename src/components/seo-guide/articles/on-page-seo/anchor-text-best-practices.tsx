import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function AnchorTextBestPractices() {
  return (
    <>
      <ArticleHero
        title="Anchor Text Best Practices for SEO"
        subtitle="When you click a link, the clickable text you see is the anchor text. It looks simple, but it sends powerful signals to Google about what the linked page is about. Most people get it wrong by either ignoring it completely or over-optimizing it. This guide shows you how to get it right."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="The small detail that sends big signals">
        <Paragraph>
          Every time you create a link, you choose the words that become
          clickable. Those words are not just for readers. Google uses them to
          understand what the linked page is about and how it relates to the
          content around it.
        </Paragraph>
        <Paragraph>
          Anchor text is one of those{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO
          </a>{" "}
          details that most people overlook. They use &quot;click here&quot; or
          link entire sentences without thinking about it. Meanwhile, sites
          that use anchor text strategically give Google clearer signals and
          get better results from every link they create.
        </Paragraph>
        <Paragraph>
          This{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          article covers what anchor text is, the different types, and the
          best practices for using it naturally and effectively.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What anchor text is */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-it" title="What anchor text is">
        <Paragraph>
          Anchor text is the visible, clickable text in a hyperlink. In HTML,
          it is the text between the opening and closing anchor tags. On the
          page, it typically appears as colored or underlined text that users
          can click to navigate to another page.
        </Paragraph>
        <Paragraph>
          For example, in the sentence &quot;Read our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking guide
          </a>
          ,&quot; the anchor text is &quot;internal linking guide.&quot; That
          text tells both the reader and Google what the destination page is
          about.
        </Paragraph>
        <Paragraph>
          Anchor text serves two purposes. For users, it sets an expectation
          for where the link will take them. For search engines, it provides
          context about the linked page&apos;s topic and relevance.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why anchor text matters for SEO">
        <NumberedList
          items={[
            {
              title: "Improves relevance signals",
              text: "Google uses anchor text as a signal to understand what the linked page is about. Descriptive anchor text reinforces the topic of the destination page, which helps it rank for related queries.",
            },
            {
              title: "Helps Google understand page relationships",
              text: "The anchor text and surrounding content tell Google how two pages are connected. This is especially important for internal linking, where you control every link and every word of anchor text on your site.",
            },
            {
              title: "Improves user navigation",
              text: "Clear, descriptive anchor text helps readers decide whether to click a link. If they know what to expect, they are more likely to click and more likely to find the destination useful, which reduces bounce rates.",
            },
            {
              title: "Supports your internal linking strategy",
              text: "Anchor text is a core part of effective internal linking. The right anchor text distributes relevance signals across your site and helps Google map your topic clusters. Our internal linking best practices guide covers the full strategy.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Types of anchor text */}
      {/* ------------------------------------------------------------------ */}
      <Section id="types" title="Types of anchor text">
        {/* Visual: Anchor Text Types Table */}
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Anchor Text Types
          </p>
          <div className="space-y-2">
            {[
              {
                type: "Exact match",
                example: "\"keyword research guide\"",
                use: "Use sparingly. Powerful but can look manipulative if overused.",
              },
              {
                type: "Partial match",
                example: "\"learn how keyword research works\"",
                use: "Best balance of relevance and naturalness. Use most often.",
              },
              {
                type: "Branded",
                example: "\"RankSEO\" or \"according to RankSEO\"",
                use: "Good for brand mentions and homepage links.",
              },
              {
                type: "Descriptive",
                example: "\"our complete guide to finding keywords\"",
                use: "Natural and reader-friendly. Great for internal links.",
              },
              {
                type: "Generic",
                example: "\"click here\" or \"read more\"",
                use: "Provides no context. Avoid when possible.",
              },
              {
                type: "Naked URL",
                example: "\"rankseo.com/features\"",
                use: "Minimal context. Only use when the URL itself is informative.",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 rounded-lg border border-black/[0.04] bg-accent-bg/10 px-4 py-2.5"
              >
                <span className="shrink-0 text-[13px] font-bold text-foreground sm:w-28">
                  {item.type}
                </span>
                <span className="shrink-0 text-[12px] text-accent sm:w-64">
                  {item.example}
                </span>
                <span className="text-[12px] text-muted">{item.use}</span>
              </div>
            ))}
          </div>
        </div>

        <Paragraph>
          The best practice is to use a natural mix of these types, with a
          focus on partial match and descriptive anchor text. Overusing any
          single type, especially exact match, looks unnatural to Google.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Best practices */}
      {/* ------------------------------------------------------------------ */}
      <Section id="best-practices" title="Anchor text best practices">
        <NumberedList
          items={[
            {
              title: "Use descriptive anchor text that previews the destination",
              text: "The reader should know what they will find before they click. 'Our keyword research guide' tells them exactly what to expect. 'Click here' tells them nothing. Descriptive anchors also give Google clear context about the linked page.",
            },
            {
              title: "Keep anchor text natural and conversational",
              text: "Anchor text should flow naturally within the sentence. If you have to restructure a sentence awkwardly to include a keyword in the anchor, it is forced. Write the sentence naturally first, then select the most relevant phrase to link.",
            },
            {
              title: "Avoid keyword stuffing in anchors",
              text: "Using the exact target keyword as anchor text every time you link to a page looks manipulative. Google's algorithms detect over-optimized anchor text patterns. Mix it up with variations, descriptive phrases, and natural language.",
            },
            {
              title: "Vary your anchor text across links to the same page",
              text: "If five different pages link to your keyword research guide, each should use slightly different anchor text. 'Keyword research guide,' 'how to do keyword research,' 'our guide to finding keywords,' and 'research your keywords' are all natural variations.",
            },
            {
              title: "Match the anchor text to the linked page's content",
              text: "The anchor text should accurately describe what the destination page covers. Misleading anchor text frustrates users and confuses Google. If the link goes to a page about title tags, the anchor should reference title tags, not keyword research.",
            },
            {
              title: "Use contextual links within body content",
              text: "Links within paragraphs carry more weight than links in navigation, footers, or sidebars. The surrounding text gives Google additional context about the link's purpose. Place your most important links within relevant body content.",
            },
            {
              title: "Avoid generic anchors when descriptive alternatives exist",
              text: "Replace 'click here,' 'read more,' and 'learn more' with specific text. Instead of 'click here to learn about SEO,' write 'learn about SEO in our complete guide.' The linked text should carry meaning on its own.",
            },
            {
              title: "Keep anchor text concise",
              text: "Two to five words is the ideal range for most anchor text. Linking entire sentences or paragraphs dilutes the signal because Google does not know which part is most relevant. Select the most descriptive phrase within the sentence.",
            },
          ]}
        />
        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content analysis tools
          </a>{" "}
          automatically review your anchor text patterns across your site and
          flag issues like over-optimization, generic anchors, and missing
          internal link opportunities.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Examples visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="examples" title="Weak vs strong anchor text examples">
        <div className="mt-2 space-y-4">
          {[
            {
              context: "Linking to a keyword research guide",
              bad: "To learn more, click here.",
              good: "Our keyword research guide covers the full process.",
            },
            {
              context: "Linking to an article about blog structure",
              bad: "Read this article for more information.",
              good: "Structure your blog posts for better rankings with our step-by-step guide.",
            },
            {
              context: "Linking to a page about content optimization",
              bad: "Learn more about it here.",
              good: "Our content optimization guide shows how to improve existing pages.",
            },
          ].map((item) => (
            <div
              key={item.context}
              className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
                {item.context}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                    Weak
                  </p>
                  <p className="text-[13px] text-muted">{item.bad}</p>
                </div>
                <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                    Strong
                  </p>
                  <p className="text-[13px] font-medium text-foreground">
                    {item.good}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking-best-practices"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking best practices guide
          </a>{" "}
          covers how anchor text fits into a broader linking strategy. And
          our{" "}
          <a
            href="/seo-guide/on-page-seo/keyword-placement"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword placement guide
          </a>{" "}
          explains how to balance keyword usage across all on-page elements.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common anchor text mistakes">
        <NumberedList
          items={[
            {
              title: "Overusing exact-match anchor text",
              text: "Linking to the same page with the exact same keyword every time signals manipulation. Google's Penguin algorithm specifically targets unnatural anchor text patterns. Fix: vary your anchor text with partial matches, descriptive phrases, and natural language.",
            },
            {
              title: "Using 'click here' everywhere",
              text: "Generic anchor text wastes an opportunity to send relevance signals. Google learns nothing about the linked page from 'click here.' Fix: replace generic anchors with descriptive text that previews the destination content.",
            },
            {
              title: "Forcing keywords into links unnaturally",
              text: "Restructuring sentences awkwardly just to make a keyword the anchor text makes content harder to read and signals over-optimization. Fix: write naturally first, then select the most relevant existing phrase to link.",
            },
            {
              title: "Linking irrelevant pages",
              text: "Using descriptive anchor text that does not match the destination page confuses both users and Google. Fix: ensure the anchor text accurately describes what the linked page covers.",
            },
            {
              title: "Using the same anchor text for different pages",
              text: "If multiple links on your site use 'SEO guide' as anchor text but point to different pages, Google gets conflicting signals about which page is the definitive one. Fix: use unique anchor text variations for each destination.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Checklist */ }
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Anchor text checklist">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Pre-Publish Anchor Text Check
          </p>
          <div className="space-y-2.5">
            {[
              "Every link uses descriptive anchor text (no 'click here')",
              "Anchor text accurately describes the destination page",
              "No page is linked with the exact same anchor text every time",
              "Anchor text is 2-5 words and concise",
              "Links are placed contextually within body content",
              "Mix of partial match, descriptive, and branded anchors used",
              "No keyword stuffing in anchor text",
              "Anchor text reads naturally within the sentence",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-lg border border-black/[0.04] bg-accent-bg/20 px-3.5 py-2.5"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-accent/30 text-[10px] text-accent">
                  ✓
                </span>
                <span className="text-[13px] text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with anchor text optimization">
        <Paragraph>
          Auditing anchor text patterns across dozens or hundreds of pages is
          tedious manually. RankSEO automates the analysis.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                internal linking tools
              </a>{" "}
              analyze your anchor text distribution across every page and flag
              over-optimization, generic anchors, and missed opportunities
            </span>,
            "Shows which pages have repetitive or unvaried anchor text patterns",
            "Suggests descriptive anchor text alternatives based on the destination page content",
            "Identifies links using generic text like 'click here' that should be improved",
            "Monitors anchor text health over time as your content library grows",
          ]}
        />
        <Paragraph>
          Make every link count. Explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO&apos;s features
          </a>{" "}
          or check out our{" "}
          <a
            href="/pricing"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            pricing plans
          </a>{" "}
          to start optimizing your anchor text today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Every link is an opportunity. Use the right words.">
        <Paragraph>
          Anchor text is a small detail with outsized impact. Descriptive,
          varied, and natural anchor text helps Google understand your content,
          strengthens your internal linking, and improves the user experience.
          Generic or over-optimized anchors waste that opportunity.
        </Paragraph>
        <Paragraph>
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers everything else you need to rank.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What is anchor text in SEO?",
            answer: (
              <p>
                Anchor text is the visible, clickable text in a hyperlink. It
                tells both users and search engines what the linked page is
                about. Google uses anchor text as a relevance signal when
                evaluating the destination page.
              </p>
            ),
            answerText:
              "Anchor text is the visible, clickable text in a hyperlink. It tells both users and search engines what the linked page is about. Google uses anchor text as a relevance signal when evaluating the destination page.",
          },
          {
            question: "Does anchor text affect SEO rankings?",
            answer: (
              <p>
                Yes. Google uses anchor text to understand what the linked page
                is about. Descriptive anchor text reinforces topic relevance,
                while generic text like &quot;click here&quot; provides no
                signal. Natural, varied anchor text across your internal links
                strengthens your overall SEO.
              </p>
            ),
            answerText:
              "Yes. Google uses anchor text to understand what the linked page is about. Descriptive anchor text reinforces topic relevance, while generic text like 'click here' provides no signal. Natural, varied anchor text across your internal links strengthens your overall SEO.",
          },
          {
            question: "Should I use exact match anchor text?",
            answer: (
              <p>
                Sparingly. Exact match anchor text is powerful but can look
                manipulative if overused. Use it occasionally, but rely mostly
                on partial match and descriptive anchor text. A natural mix of
                anchor text types looks authentic and avoids over-optimization
                penalties.
              </p>
            ),
            answerText:
              "Sparingly. Exact match anchor text is powerful but can look manipulative if overused. Use it occasionally, but rely mostly on partial match and descriptive anchor text. A natural mix of anchor text types looks authentic and avoids over-optimization penalties.",
          },
          {
            question: "What are the best types of anchor text for SEO?",
            answer: (
              <p>
                Partial match and descriptive anchor text are the safest and
                most effective for internal links. They provide context to
                Google without looking forced. Use a mix of types, including
                branded and natural language, to keep your anchor text profile
                varied and authentic.
              </p>
            ),
            answerText:
              "Partial match and descriptive anchor text are the safest and most effective for internal links. They provide context to Google without looking forced. Use a mix of types, including branded and natural language, to keep your anchor text profile varied and authentic.",
          },
          {
            question: "How do I optimize anchor text for internal links?",
            answer: (
              <p>
                Use descriptive text that tells readers and Google what the
                linked page is about. Keep it to 2 to 5 words. Vary the anchor
                text across different links to the same page. Place links
                within body content for maximum impact. Avoid generic phrases
                like &quot;click here.&quot;
              </p>
            ),
            answerText:
              "Use descriptive text that tells readers and Google what the linked page is about. Keep it to 2 to 5 words. Vary the anchor text across different links to the same page. Place links within body content for maximum impact. Avoid generic phrases like 'click here.'",
          },
          {
            question: "Is 'click here' bad anchor text?",
            answer: (
              <p>
                Yes, from an SEO perspective. &quot;Click here&quot; provides
                no context about the linked page. Google cannot use it to
                understand the relationship between pages. Replace generic
                anchors with descriptive text that previews the destination
                content whenever possible.
              </p>
            ),
            answerText:
              "Yes, from an SEO perspective. 'Click here' provides no context about the linked page. Google cannot use it to understand the relationship between pages. Replace generic anchors with descriptive text that previews the destination content whenever possible.",
          },
        ]}
      />
    </>
  );
}
