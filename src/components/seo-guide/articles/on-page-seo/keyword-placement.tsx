import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function KeywordPlacement() {
  return (
    <>
      <ArticleHero
        title="Keyword Placement Best Practices for SEO"
        subtitle="Some people ignore keywords entirely. Others stuff them into every sentence. Both approaches hurt rankings. The truth is that where you place keywords matters more than how many times you repeat them. This guide shows you exactly where to put them and how to keep your writing natural."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="Placement matters more than repetition">
        <Paragraph>
          Keyword placement is one of the most misunderstood parts of{" "}
          <a
            href="/seo-guide/on-page-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            on-page SEO
          </a>
          . Some writers treat it like a checklist: mention the keyword a
          certain number of times and you are optimized. Others avoid keywords
          altogether because they have heard that &quot;Google is smart enough
          to figure it out.&quot;
        </Paragraph>
        <Paragraph>
          Neither approach is right. Google does understand context, but it
          still uses specific signals from your content to determine relevance.
          The key is putting the right keywords in the right places, naturally,
          without forcing them. This{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          article covers every placement that matters and how to get it right.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What keyword placement means */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-it-means" title="What keyword placement means in modern SEO">
        <Paragraph>
          Keyword placement is about context, not repetition. It means putting
          your target keyword and its variations in the specific parts of your
          page where Google looks for relevance signals.
        </Paragraph>
        <Paragraph>
          Modern SEO does not reward keyword density. Google understands
          synonyms, related terms, and the overall meaning of your content. But
          it still gives more weight to keywords that appear in structural
          elements like titles, headings, and the opening paragraph. These
          placements tell Google what the page is primarily about.
        </Paragraph>
        <Paragraph>
          Understanding{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent
          </a>{" "}
          is just as important as placement. If your keyword appears in all the
          right places but your content does not match what the searcher wants,
          placement alone will not save you.
        </Paragraph>
        <Callout type="info">
          Google has said repeatedly that keyword density is not a ranking
          factor. What matters is that keywords appear in the right structural
          positions and that the overall content is relevant and useful.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Where to place keywords */}
      {/* ------------------------------------------------------------------ */}
      <Section id="where-to-place" title="Where to place keywords for maximum impact">
        <Paragraph>
          There are seven key locations where keyword placement has the most
          impact. Each one serves a different purpose.
        </Paragraph>

        {/* Visual: Keyword Placement Map */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Keyword Placement Map
          </p>
          <div className="space-y-2">
            {[
              { location: "Title Tag", impact: "Highest", note: "Primary keyword, front-loaded when possible" },
              { location: "H1 Heading", impact: "Highest", note: "Matches or mirrors the title tag" },
              { location: "Introduction", impact: "High", note: "Within the first 2-3 sentences" },
              { location: "H2 Headings", impact: "High", note: "Variations in ~50% of section headings" },
              { location: "Body Content", impact: "Medium", note: "Natural usage throughout, no forcing" },
              { location: "Meta Description", impact: "Medium", note: "Influences CTR, not ranking directly" },
              { location: "URL Slug", impact: "Low-Medium", note: "Short, clean, includes primary keyword" },
            ].map((item) => (
              <div
                key={item.location}
                className="flex items-center gap-3 rounded-lg border border-black/[0.04] bg-accent-bg/10 px-4 py-2.5"
              >
                <span className="shrink-0 text-[13px] font-bold text-foreground w-32">
                  {item.location}
                </span>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                  item.impact === "Highest"
                    ? "bg-accent-bg text-accent"
                    : item.impact === "High"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {item.impact}
                </span>
                <span className="text-[12px] text-muted">{item.note}</span>
              </div>
            ))}
          </div>
        </div>

        <NumberedList
          items={[
            {
              title: "Title tag",
              text: "Your title tag is the single most important place for your primary keyword. It appears in search results, browser tabs, and social shares. Include your keyword naturally, ideally near the beginning. Our title tags guide covers this in detail.",
            },
            {
              title: "H1 heading",
              text: "Your H1 should include the primary keyword and clearly describe the page topic. It usually matches or closely mirrors your title tag. Use exactly one H1 per page.",
            },
            {
              title: "Introduction (first 100 words)",
              text: "Include your primary keyword naturally within the first two to three sentences. This confirms to both Google and readers what the page is about. Do not force it. Write the introduction naturally, then check the keyword is there.",
            },
            {
              title: "H2 and H3 headings",
              text: "Use keyword variations in about half of your H2 headings. Do not stuff every heading. The rest should be clear and descriptive without keywords. H3s rarely need keywords unless they naturally fit.",
            },
            {
              title: "Body content",
              text: "Use your primary keyword and its variations throughout the content wherever they fit naturally. Do not set a target number. Write thoroughly about the topic and the keywords will appear organically. If they do not, the content might not be relevant enough.",
            },
            {
              title: "Meta description",
              text: "Include your primary keyword in the meta description. It does not directly affect rankings, but Google bolds matching keywords in search results, which improves click-through rate. Keep it under 155 characters.",
            },
            {
              title: "URL slug",
              text: "Include your primary keyword in the URL. Keep it short, clean, and readable. Avoid unnecessary words, numbers, or parameters. /keyword-placement is better than /how-to-place-keywords-for-seo-in-2024.",
            },
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/on-page-seo/title-tags"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            title tags guide
          </a>{" "}
          and{" "}
          <a
            href="/seo-guide/on-page-seo/headings-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            headings guide
          </a>{" "}
          go deeper into the most important placement areas.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How to use keywords naturally */}
      {/* ------------------------------------------------------------------ */}
      <Section id="natural-usage" title="How to use keywords naturally">
        <Paragraph>
          The best keyword placement is invisible. If a reader notices that a
          keyword is being repeated or forced, you have overdone it. Here is
          how to keep it natural.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Write the content first, optimize second",
              text: "Write your article focusing on answering the topic thoroughly. Once the draft is done, check that the keyword appears in the key positions (title, H1, intro, a few headings). This produces far more natural writing than trying to insert keywords as you go.",
            },
            {
              title: "Use variations and synonyms",
              text: "Google understands that 'keyword placement,' 'where to put keywords,' and 'keyword positioning' are the same concept. Using variations keeps the writing fresh and covers more search queries naturally.",
            },
            {
              title: "Read it out loud",
              text: "If a sentence sounds awkward when spoken, the keyword placement is forced. Rewrite the sentence so the keyword fits the natural rhythm. If it cannot fit naturally, the keyword does not belong in that sentence.",
            },
            {
              title: "Focus on clarity over keyword count",
              text: "Every sentence should serve the reader. If adding a keyword makes a sentence less clear, leave it out. Google values content quality over keyword frequency.",
            },
          ]}
        />
        <Paragraph>
          Understanding{" "}
          <a
            href="/seo-guide/keyword-research/keywords-per-page"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            how many keywords to target per page
          </a>{" "}
          helps prevent over-optimization from the start.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Examples visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="examples" title="Bad vs good keyword placement: examples">
        <Paragraph>
          Seeing the difference side by side makes it clear.
        </Paragraph>

        {/* Visual: Good vs Bad Placement Cards */}
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
              Keyword stuffed vs natural
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                  Stuffed
                </p>
                <p className="text-[13px] text-muted">
                  &quot;Keyword placement is important for SEO. Good keyword
                  placement helps your keyword placement strategy. Learn
                  keyword placement tips for better keyword placement
                  results.&quot;
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                  Natural
                </p>
                <p className="text-[13px] font-medium text-foreground">
                  &quot;Where you place keywords matters more than how often
                  you repeat them. This guide covers the specific locations
                  that signal relevance to Google and how to use them without
                  over-optimizing.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
              Forced heading vs descriptive heading
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                  Forced
                </p>
                <p className="text-[13px] text-muted">
                  &quot;Keyword Placement SEO Tips for Keyword Placement&quot;
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                  Clean
                </p>
                <p className="text-[13px] font-medium text-foreground">
                  &quot;Where to Place Keywords for Maximum Impact&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content analysis features
          </a>{" "}
          automatically detect over-optimized keyword usage and suggest more
          natural alternatives.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common keyword placement mistakes">
        <NumberedList
          items={[
            {
              title: "Keyword stuffing",
              text: "Repeating the same keyword excessively in an attempt to manipulate rankings. Google's algorithms detect this pattern and it can trigger quality filters that lower your rankings. Fix: write naturally and let keywords appear organically. If a keyword appears more than 2 to 3 times per 500 words, it is probably too much.",
            },
            {
              title: "Forcing keywords into every heading",
              text: "Stuffing your target keyword into every H2 and H3 makes the content feel robotic and signals over-optimization to Google. Fix: use keyword variations in about half your headings. The rest should be clear and descriptive without forced keywords.",
            },
            {
              title: "Repeating the exact same phrase",
              text: "Using the exact keyword phrase every time instead of variations makes the content repetitive and unnatural. Google understands synonyms. Fix: alternate between your primary keyword, close variations, and natural language that expresses the same concept.",
            },
            {
              title: "Ignoring semantic variations",
              text: "Focusing only on the exact-match keyword and ignoring related terms limits the queries your page can rank for. Fix: research semantic and supporting keywords and weave them into your content naturally.",
            },
            {
              title: "Placing keywords without context",
              text: "Dropping a keyword into a sentence where it does not fit grammatically or contextually. Fix: every keyword mention should be part of a meaningful sentence that serves the reader. If it does not read well, rewrite the sentence around the keyword.",
            },
            {
              title: "Missing keywords in key structural elements",
              text: "Some writers avoid placing keywords in the title, H1, and introduction, thinking Google will 'figure it out.' While Google is smart, these positions carry the strongest relevance signals. Fix: always include your primary keyword in the title tag, H1, and first few sentences.",
            },
          ]}
        />
        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/content-seo/content-optimization"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content optimization guide
          </a>{" "}
          covers how to audit and fix keyword placement issues in existing
          content.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Checklist visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Keyword placement checklist">
        <Paragraph>
          Run through this before publishing any page.
        </Paragraph>

        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Pre-Publish Keyword Check
          </p>
          <div className="space-y-2.5">
            {[
              "Primary keyword appears in the title tag",
              "Primary keyword is in the H1 heading",
              "Keyword appears naturally within the first 2-3 sentences",
              "Keyword variations used in about half of H2 headings",
              "Body content uses keywords and variations naturally throughout",
              "Meta description includes the primary keyword",
              "URL slug contains the primary keyword and is clean",
              "No sentence sounds awkward due to forced keyword insertion",
              "Content reads naturally when spoken out loud",
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
      <Section id="rankseo" title="How RankSEO helps with keyword placement">
        <Paragraph>
          Checking keyword placement manually across every page is tedious.
          RankSEO automates the analysis.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                on-page SEO tools
              </a>{" "}
              scan every key position (title, headings, intro, body, meta) and
              flag missing or over-optimized keyword usage
            </span>,
            "Detects keyword stuffing and suggests more natural alternatives",
            "Recommends semantic variations you should include for better coverage",
            "Compares your keyword usage against top-ranking pages for the same query",
            "Monitors keyword placement across your entire site at scale",
          ]}
        />
        <Paragraph>
          Stop guessing whether your keywords are in the right places. Explore{" "}
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
          to start optimizing your keyword placement today.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Put keywords where they matter. Let the rest flow naturally.">
        <Paragraph>
          Keyword placement is simple when you stop overthinking it. Put your
          primary keyword in the title, H1, and introduction. Use variations in
          your headings and body. Write naturally. That is the entire strategy.
        </Paragraph>
        <Paragraph>
          The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers every other factor that affects your rankings.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "Where should I place keywords for SEO?",
            answer: (
              <p>
                The most important places are your title tag, H1 heading,
                introduction (first 2 to 3 sentences), H2 headings (about half
                of them), body content (naturally throughout), meta description,
                and URL slug. These positions carry the strongest relevance
                signals for Google.
              </p>
            ),
            answerText:
              "The most important places are your title tag, H1 heading, introduction (first 2 to 3 sentences), H2 headings (about half of them), body content (naturally throughout), meta description, and URL slug. These positions carry the strongest relevance signals for Google.",
          },
          {
            question: "How many times should I use a keyword on a page?",
            answer: (
              <p>
                There is no magic number. Focus on including the keyword in key
                structural positions (title, H1, intro, headings) and letting
                it appear naturally in the body. If the content reads
                naturally and covers the topic thoroughly, the frequency will
                take care of itself.
              </p>
            ),
            answerText:
              "There is no magic number. Focus on including the keyword in key structural positions (title, H1, intro, headings) and letting it appear naturally in the body. If the content reads naturally and covers the topic thoroughly, the frequency will take care of itself.",
          },
          {
            question: "Is keyword stuffing bad for SEO?",
            answer: (
              <p>
                Yes. Keyword stuffing, which means repeating a keyword
                excessively to try to manipulate rankings, can trigger
                Google&apos;s quality filters and lower your rankings. Write
                naturally, use variations, and focus on answering the search
                query thoroughly instead of repeating the same phrase.
              </p>
            ),
            answerText:
              "Yes. Keyword stuffing, which means repeating a keyword excessively to try to manipulate rankings, can trigger Google's quality filters and lower your rankings. Write naturally, use variations, and focus on answering the search query thoroughly instead of repeating the same phrase.",
          },
          {
            question: "Should I use keywords in headings?",
            answer: (
              <p>
                Yes, but selectively. Include your primary keyword or close
                variations in about half of your H2 headings where they fit
                naturally. Do not force keywords into every heading. The rest
                should be descriptive and clear without keyword insertion.
              </p>
            ),
            answerText:
              "Yes, but selectively. Include your primary keyword or close variations in about half of your H2 headings where they fit naturally. Do not force keywords into every heading. The rest should be descriptive and clear without keyword insertion.",
          },
          {
            question: "Can I rank without using exact match keywords?",
            answer: (
              <p>
                Yes. Google understands synonyms, related terms, and context.
                You can rank for a keyword without using the exact phrase if
                your content thoroughly covers the topic. However, including the
                exact keyword in key positions like the title and H1 still
                gives the strongest relevance signal.
              </p>
            ),
            answerText:
              "Yes. Google understands synonyms, related terms, and context. You can rank for a keyword without using the exact phrase if your content thoroughly covers the topic. However, including the exact keyword in key positions like the title and H1 still gives the strongest relevance signal.",
          },
          {
            question: "Does the meta description affect keyword rankings?",
            answer: (
              <p>
                Not directly. Google has said that meta descriptions are not a
                ranking factor. However, including your keyword in the meta
                description causes Google to bold it in search results, which
                can improve your click-through rate. Higher CTR can indirectly
                support better rankings.
              </p>
            ),
            answerText:
              "Not directly. Google has said that meta descriptions are not a ranking factor. However, including your keyword in the meta description causes Google to bold it in search results, which can improve your click-through rate. Higher CTR can indirectly support better rankings.",
          },
        ]}
      />
    </>
  );
}
