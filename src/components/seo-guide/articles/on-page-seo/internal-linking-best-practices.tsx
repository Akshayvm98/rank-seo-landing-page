import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  DataCard,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function InternalLinkingBestPractices() {
  return (
    <>
      <ArticleHero
        title="Internal Linking Best Practices for SEO"
        subtitle="Internal linking is one of the most underused SEO tactics. It costs nothing, takes minutes, and directly improves how Google crawls, understands, and ranks your content. Yet most sites do it poorly or not at all. This guide covers the best practices that actually move the needle."
        readingTime={10}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="The easiest SEO win most people ignore">
        <Paragraph>
          Ask any SEO what they would fix first on most websites and internal
          linking is near the top of the list. It is one of the few things
          you can control completely, it works immediately, and it compounds
          over time.
        </Paragraph>
        <Paragraph>
          Yet most sites treat internal links as an afterthought. Pages get
          published with zero links to related content. Important pages sit
          with only one or two internal links pointing to them. Entire
          sections of the site are orphaned, invisible to both users and
          Google.
        </Paragraph>
        <Paragraph>
          This{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO
          </a>{" "}
          article covers the specific best practices that make internal
          linking effective. For the foundational concepts, see our{" "}
          <a
            href="/seo-guide/on-page-seo/internal-linking"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            internal linking guide
          </a>
          . This article goes deeper into strategy and execution.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What internal linking is */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-is-it" title="What internal linking is">
        <Paragraph>
          Internal links are hyperlinks that connect one page on your website
          to another page on the same website. They are different from
          external links, which point to pages on other domains.
        </Paragraph>
        <DataCard
          items={[
            {
              label: "For users",
              value: "Navigation",
              note: "Helps readers find related content and go deeper",
            },
            {
              label: "For Google",
              value: "Structure",
              note: "Shows how pages relate and which ones matter most",
            },
            {
              label: "For SEO",
              value: "Authority flow",
              note: "Distributes ranking power across your site",
            },
          ]}
        />
        <Paragraph>
          Every internal link serves as a signal. It tells Google that the
          linked page exists, that it is related to the linking page, and
          that it is important enough to reference. The more internal links a
          page receives from relevant, authoritative pages on your site, the
          stronger the signal that it matters.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why it matters */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-it-matters" title="Why internal linking matters for SEO">
        <NumberedList
          items={[
            {
              title: "Distributes authority across pages",
              text: "Pages that receive backlinks from external sites accumulate authority. Internal links pass some of that authority to other pages on your site. A strong internal linking structure ensures that authority flows to the pages that need it most, instead of concentrating on just a few.",
            },
            {
              title: "Helps pages get indexed faster",
              text: "Google discovers new pages by following links. When you add internal links from already-indexed pages to new content, Google finds and crawls the new pages faster. This is especially important for new websites with limited crawl budget.",
            },
            {
              title: "Improves crawlability",
              text: "Google's crawler follows links to navigate your site. A well-linked site is easy to crawl completely. A poorly linked site leaves pages orphaned and undiscoverable, even if they are in your sitemap.",
            },
            {
              title: "Increases time on site",
              text: "Relevant internal links keep readers on your site longer by guiding them to related content. Higher engagement signals tell Google your content is valuable, which supports better rankings.",
            },
            {
              title: "Strengthens topical relevance",
              text: "Linking related pages together builds topic clusters that signal expertise to Google. When multiple pages on the same topic link to each other, Google understands that your site has depth on that subject.",
            },
          ]}
        />
        <Paragraph>
          Our guide on{" "}
          <a
            href="/seo-guide/technical-seo/why-pages-are-not-indexed"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            why pages are not indexed
          </a>{" "}
          highlights how weak internal linking is one of the most common
          reasons pages fail to get indexed at all.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Best practices */}
      {/* ------------------------------------------------------------------ */}
      <Section id="best-practices" title="Internal linking best practices">
        <NumberedList
          items={[
            {
              title: "Link to relevant pages only",
              text: "Every internal link should make sense in context. The linked page should add value to the reader at that specific point in the content. Random links to unrelated pages confuse both readers and Google. Before adding a link, ask: would a reader actually benefit from visiting this page right now?",
            },
            {
              title: "Use descriptive anchor text",
              text: "Anchor text tells Google and readers what the linked page is about. 'Our keyword research guide' is descriptive. 'Click here' is not. Use natural, descriptive phrases that include relevant keywords without being forced. Avoid using the same exact anchor text for every link to the same page.",
            },
            {
              title: "Link from high-authority pages to important targets",
              text: "Pages that receive the most external backlinks and traffic have the most authority to pass. Identify your strongest pages and add internal links from them to the pages you most want to rank. This strategically directs authority where it matters.",
            },
            {
              title: "Use contextual links within body content",
              text: "Links embedded naturally within paragraphs carry more weight than links in navigation menus, footers, or sidebars. Contextual links are surrounded by relevant text, which gives Google more signals about the relationship between the two pages.",
            },
            {
              title: "Keep link counts reasonable",
              text: "There is no hard limit, but overloading a page with dozens of internal links dilutes the value of each one. For a typical blog post, 3 to 8 contextual internal links is a good range. Focus on quality and relevance over quantity.",
            },
            {
              title: "Update old content with links to new pages",
              text: "Every time you publish a new page, go back to 3 to 5 related existing articles and add links to the new content. This is one of the most overlooked best practices. Old content often has the most authority, and adding links from it helps new pages get discovered and indexed faster.",
            },
            {
              title: "Ensure every important page has multiple internal links",
              text: "If a page is important to your business, it should receive internal links from at least 3 to 5 other pages. Check your most important pages and verify they are well-linked. Orphan pages with zero or one internal link are almost invisible to Google.",
            },
            {
              title: "Make links natural and useful",
              text: "Links should feel like a natural part of the content, not an SEO tactic. If removing a link would make the content worse for the reader, it belongs. If the content reads just as well without it, the link may be forced.",
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
          automatically identify internal linking opportunities across your
          site, showing you exactly which pages should link to which and what
          anchor text to use.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Strategy section with visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="linking-strategy" title="How to build an internal linking strategy">
        <Paragraph>
          Random linking is not a strategy. Effective internal linking follows
          a clear structure that mirrors how your content is organized.
        </Paragraph>

        {/* Visual: Linking Structure Diagram */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Content Linking Hierarchy
          </p>
          <div className="space-y-2">
            <div className="rounded-xl border border-accent/20 bg-accent-bg/40 px-4 py-3 text-center">
              <p className="text-[14px] font-bold text-foreground">Pillar Page</p>
              <p className="mt-0.5 text-[11px] text-muted">
                Broad topic overview. Links down to all topic pages.
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-muted text-[14px]">↓</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {["Topic Page A", "Topic Page B", "Topic Page C"].map((t) => (
                <div key={t} className="rounded-xl border border-black/[0.04] bg-white px-4 py-2.5 text-center">
                  <p className="text-[13px] font-bold text-foreground">{t}</p>
                  <p className="mt-0.5 text-[10px] text-muted">Links up to pillar, down to articles</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <span className="text-muted text-[14px]">↓</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {["Article 1", "Article 2", "Article 3", "Article 4", "Article 5", "Article 6"].map((a) => (
                <div key={a} className="rounded-xl border border-black/[0.04] bg-gray-50/50 px-3 py-2 text-center">
                  <p className="text-[12px] font-bold text-foreground">{a}</p>
                  <p className="mt-0.5 text-[10px] text-muted">Links up and sideways</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NumberedList
          items={[
            {
              title: "Map your content to a pillar-topic-article hierarchy",
              text: "Every piece of content should belong to a topic cluster. Pillar pages cover broad topics, topic pages go deeper, and articles address specific questions. Links flow up, down, and sideways within each cluster.",
            },
            {
              title: "Link clusters together where topics overlap",
              text: "When two topic clusters share common ground, link between them. A keyword research article that mentions content optimization should link to the content optimization guide. Cross-cluster links build broader authority.",
            },
            {
              title: "Build topical authority through depth",
              text: "The more pages you have on a topic, and the better they are interlinked, the stronger Google's confidence that your site is an authority on that subject. This lifts rankings for every page in the cluster, not just the one with the most links.",
            },
            {
              title: "Audit your linking structure quarterly",
              text: "As your site grows, linking gaps appear. New pages may not get linked from older content. Important pages may lose internal links as content is updated. Regular audits catch these issues before they affect rankings.",
            },
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/content-seo/blog-structure"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            blog structure guide
          </a>{" "}
          covers how to organize individual pages to create natural anchor
          points for internal links. And our{" "}
          <a
            href="/seo-guide/keyword-research/keyword-prioritization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword prioritization guide
          </a>{" "}
          helps you decide which pages deserve the most internal link
          attention.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Good vs bad visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="good-vs-bad" title="Strategic vs random internal linking">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-2">
                Random linking
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Links to whatever page comes to mind</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Generic anchor text like &quot;click here&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>New pages have zero internal links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Important pages are underlinked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>No connection between related content</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-2">
                Strategic linking
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Links to contextually relevant pages only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Descriptive anchor text with natural keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>New pages linked from 3 to 5 existing articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Important pages receive links from strongest pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Topic clusters interlinked for authority</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common internal linking mistakes">
        <NumberedList
          items={[
            {
              title: "Linking randomly with no relevance",
              text: "Adding internal links just to hit a number without considering whether the linked page is actually relevant to the reader. Google uses the context around links to understand relationships. Random links send confusing signals. Fix: only link to pages that genuinely add value at that point in the content.",
            },
            {
              title: "Overusing exact-match anchor text",
              text: "Using the exact same keyword phrase as anchor text for every link to a page looks manipulative. Fix: vary your anchor text naturally. Use the keyword sometimes, but also use descriptive phrases, partial matches, and natural language.",
            },
            {
              title: "Ignoring orphan pages",
              text: "Pages with zero internal links pointing to them are effectively invisible. Google may not find them, and even if it does, the lack of internal links signals that the page is not important. Fix: audit for orphan pages regularly and add links from relevant content.",
            },
            {
              title: "Linking irrelevant pages together",
              text: "Connecting pages that have nothing in common dilutes the topical signal for both. A page about keyword research should not link to a page about email marketing unless there is a genuine connection. Fix: link within topic clusters and only cross-link when the relationship is real.",
            },
            {
              title: "Too many links on a single page",
              text: "Stuffing 30 or 40 internal links into one article overwhelms readers and dilutes the value passed through each link. Fix: keep contextual links to 3 to 8 per post. Every link should serve the reader, not just the SEO.",
            },
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/on-page-seo/keyword-placement"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword placement guide
          </a>{" "}
          covers how to balance keyword usage in anchor text without
          over-optimizing.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Checklist */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Internal linking audit checklist">
        <div className="mt-2 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Quick Internal Linking Audit
          </p>
          <div className="space-y-2.5">
            {[
              "Every important page receives at least 3-5 internal links",
              "No orphan pages exist (every page has at least one internal link pointing to it)",
              "New content is linked from 3-5 existing related articles",
              "Anchor text is descriptive and varied, not generic or repetitive",
              "Links are contextual (within body content, not just navigation)",
              "Topic clusters are interlinked with links flowing up, down, and sideways",
              "High-authority pages link to the pages you most want to rank",
              "Link counts per page are reasonable (3-8 contextual links typical)",
              "Old content is regularly updated with links to newer pages",
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
      <Section id="rankseo" title="How RankSEO helps with internal linking">
        <Paragraph>
          Finding linking opportunities, identifying orphan pages, and
          maintaining a healthy internal linking structure manually is
          time-consuming. RankSEO automates the entire process.
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
              scan your entire site and surface specific linking
              opportunities you are missing, with recommended anchor text
            </span>,
            "Identifies orphan pages that have no internal links pointing to them",
            "Shows which high-authority pages should link to your priority targets",
            "Detects over-optimized anchor text patterns before they become a problem",
            "Monitors your internal linking health over time and alerts you when gaps appear",
          ]}
        />
        <Paragraph>
          Stop leaving link equity on the table. Explore{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            RankSEO&apos;s features
          </a>{" "}
          or check out our{" "}
          <a
            href="https://cal.com/rankseo/15min" target="_blank" rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            pricing plans
          </a>{" "}
          to start building a stronger internal linking structure today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Link strategically. Every link is a signal.">
        <Paragraph>
          Internal linking is one of the few SEO tactics that is completely
          within your control, costs nothing, and works immediately. Link
          relevant pages together, use descriptive anchor text, ensure no page
          is orphaned, and direct authority to the pages that matter most. Do
          that consistently and your entire site benefits.
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
            question: "What is internal linking in SEO?",
            answer: (
              <p>
                Internal linking is the practice of adding hyperlinks from one
                page on your website to another page on the same website. It
                helps users navigate between related content and helps Google
                understand your site structure, discover new pages, and
                distribute ranking authority.
              </p>
            ),
            answerText:
              "Internal linking is the practice of adding hyperlinks from one page on your website to another page on the same website. It helps users navigate between related content and helps Google understand your site structure, discover new pages, and distribute ranking authority.",
          },
          {
            question: "How many internal links should a page have?",
            answer: (
              <p>
                There is no strict limit, but 3 to 8 contextual internal links
                per blog post is a good range for most content. Focus on
                relevance and value rather than hitting a specific number.
                Every link should genuinely help the reader find related,
                useful content.
              </p>
            ),
            answerText:
              "There is no strict limit, but 3 to 8 contextual internal links per blog post is a good range for most content. Focus on relevance and value rather than hitting a specific number. Every link should genuinely help the reader find related, useful content.",
          },
          {
            question: "Do internal links help SEO rankings?",
            answer: (
              <p>
                Yes. Internal links help Google discover and index pages,
                understand the relationship between content, and distribute
                authority across your site. Pages with strong internal linking
                from relevant, high-authority pages tend to rank better than
                isolated pages with few internal links.
              </p>
            ),
            answerText:
              "Yes. Internal links help Google discover and index pages, understand the relationship between content, and distribute authority across your site. Pages with strong internal linking from relevant, high-authority pages tend to rank better than isolated pages with few internal links.",
          },
          {
            question: "What is anchor text and why does it matter?",
            answer: (
              <p>
                Anchor text is the clickable text of a hyperlink. It matters
                because Google uses it to understand what the linked page is
                about. Descriptive anchor text like &quot;keyword research
                guide&quot; gives Google a clear signal, while generic text
                like &quot;click here&quot; provides no context.
              </p>
            ),
            answerText:
              "Anchor text is the clickable text of a hyperlink. It matters because Google uses it to understand what the linked page is about. Descriptive anchor text like 'keyword research guide' gives Google a clear signal, while generic text like 'click here' provides no context.",
          },
          {
            question: "Can internal linking improve indexing speed?",
            answer: (
              <p>
                Yes. Google discovers new pages by following links. Adding
                internal links from already-indexed pages to new content helps
                Google find and crawl new pages faster. This is one of the most
                effective ways to speed up indexing, especially for new
                websites with limited crawl budget.
              </p>
            ),
            answerText:
              "Yes. Google discovers new pages by following links. Adding internal links from already-indexed pages to new content helps Google find and crawl new pages faster. This is one of the most effective ways to speed up indexing, especially for new websites with limited crawl budget.",
          },
          {
            question: "What is an orphan page?",
            answer: (
              <p>
                An orphan page is a page on your site that has no internal
                links pointing to it. It can only be found through the sitemap
                or by typing the URL directly. Orphan pages are hard for Google
                to discover and are often deprioritized for indexing. Fix them
                by adding internal links from relevant content.
              </p>
            ),
            answerText:
              "An orphan page is a page on your site that has no internal links pointing to it. It can only be found through the sitemap or by typing the URL directly. Orphan pages are hard for Google to discover and are often deprioritized for indexing. Fix them by adding internal links from relevant content.",
          },
        ]}
      />
    </>
  );
}
