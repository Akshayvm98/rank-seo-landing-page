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

export default function SeoIntroductions() {
  return (
    <>
      <ArticleHero
        title="How to Write SEO-Friendly Introductions"
        subtitle="Your introduction is the first thing readers see and the first thing they judge. If it is vague, slow, or generic, they leave. If it is clear, relevant, and direct, they stay. Most blog posts lose readers before the first heading because the introduction fails to do its job."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}
      <Section id="introduction" title="The introduction decides whether people read or leave">
        <Paragraph>
          You have probably read blog posts that start with &quot;In
          today&apos;s digital world...&quot; or &quot;SEO is important for
          every business...&quot; Those introductions say nothing. They do not
          address the reader&apos;s problem, they do not set expectations, and
          they do not give anyone a reason to keep reading.
        </Paragraph>
        <Paragraph>
          The introduction shapes both engagement and SEO performance. It tells
          the reader whether the page matches their{" "}
          <a
            href="/seo-guide/keyword-research/search-intent"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            search intent
          </a>
          . It tells Google what the page is about. And it sets the tone for
          everything that follows.
        </Paragraph>
        <Paragraph>
          This{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content SEO
          </a>{" "}
          article gives you a practical framework for writing introductions
          that hook readers, match intent, and improve your rankings.
        </Paragraph>

        {/* Visual: Intro Framework Block */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            The SEO Introduction Framework
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-black/[0.04] bg-accent-bg/30 px-4 py-3 text-center">
              <p className="text-[13px] font-bold text-foreground">1. Problem</p>
              <p className="mt-1 text-[12px] text-muted">
                Start with the reader&apos;s pain point
              </p>
            </div>
            <div className="rounded-xl border border-black/[0.04] bg-accent-bg/30 px-4 py-3 text-center">
              <p className="text-[13px] font-bold text-foreground">2. Relevance</p>
              <p className="mt-1 text-[12px] text-muted">
                Show you understand their situation
              </p>
            </div>
            <div className="rounded-xl border border-black/[0.04] bg-accent-bg/30 px-4 py-3 text-center">
              <p className="text-[13px] font-bold text-foreground">3. Promise</p>
              <p className="mt-1 text-[12px] text-muted">
                Tell them what this article will give them
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Why introductions matter */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-introductions-matter" title="Why introductions matter for SEO">
        <Paragraph>
          Your introduction is not just a warm-up paragraph. It directly
          affects four things that determine whether your content ranks.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Intent confirmation",
              text: "When someone lands on your page from Google, they need to know instantly that they are in the right place. Your introduction confirms that the page matches what they searched for. If it does not, they hit the back button and Google counts that as a negative signal.",
            },
            {
              title: "Engagement and dwell time",
              text: "A strong introduction pulls readers into the content. The longer people stay on your page, the stronger the signal to Google that your content is valuable. A weak introduction causes immediate bounces.",
            },
            {
              title: "Content framing",
              text: "The introduction sets up the structure of everything that follows. It tells the reader what to expect, which makes the rest of the article easier to follow. This improves readability scores and user satisfaction.",
            },
            {
              title: "Keyword context",
              text: "Including your primary keyword naturally in the introduction helps Google understand what the page is about right from the start. This is especially important for passage-level indexing, where Google can rank specific sections independently.",
            },
          ]}
        />
        <Callout type="info">
          Google uses pogo-sticking (when users click a result, immediately
          return to the SERP, and click a different result) as a ranking signal.
          A strong introduction reduces pogo-sticking by confirming that the
          reader found the right page.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What makes a good intro */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-makes-good-intro" title="What makes an SEO-friendly introduction">
        <Paragraph>
          A good SEO introduction is not about clever writing or creative
          hooks. It is about clarity, relevance, and speed. Here is what
          separates strong introductions from weak ones.
        </Paragraph>

        {/* Visual: Weak vs Strong Comparison Cards */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-4">
            Weak vs Strong Introduction Traits
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-2">
                Weak Introduction
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Opens with a generic statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Does not mention the reader&apos;s problem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Takes 3+ paragraphs to get to the point</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>No clear promise of what the reader will learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-red-400">✕</span>
                  <span>Keyword is missing or awkwardly forced</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-2">
                Strong Introduction
              </p>
              <ul className="space-y-1.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Starts with the reader&apos;s specific problem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Shows understanding of the reader&apos;s situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Gets to the point within 3 to 5 sentences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Clearly states what the article will cover</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">✓</span>
                  <span>Primary keyword appears naturally in context</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Paragraph>
          The difference comes down to empathy. A strong introduction speaks
          directly to the reader&apos;s situation. A weak one talks about the
          topic in the abstract. Our{" "}
          <a
            href="/seo-guide/content-seo/how-to-write-seo-articles"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            guide on writing SEO articles
          </a>{" "}
          covers how this principle applies to the rest of the content too.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Step-by-step framework */}
      {/* ------------------------------------------------------------------ */}
      <Section id="framework" title="Step-by-step framework for writing better introductions">
        <Paragraph>
          Follow these five steps every time you write an introduction. The
          process takes five minutes and makes every article stronger.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Start with the reader's problem",
              text: "Open with the specific issue your reader is facing. Not a general statement about the industry. Not a definition. The actual problem they searched for. If your article is about blog structure, start with 'Your blog post is not ranking and you cannot figure out why.' This immediately tells the reader they are in the right place.",
            },
            {
              title: "Show you understand the intent",
              text: "In one or two sentences, demonstrate that you understand the full context of their situation. Mention what they have probably tried, what confuses them, or why the problem exists. This builds trust and keeps them reading.",
            },
            {
              title: "State what the article will cover",
              text: "Set a clear expectation. 'This guide shows you the exact structure that works' is a promise. The reader now knows what they will get if they keep reading. Without this, they are guessing whether the article is worth their time.",
            },
            {
              title: "Include the primary keyword naturally",
              text: "Your main keyword should appear in the introduction, ideally within the first two to three sentences. Do not force it. Write the introduction first, then check that the keyword fits naturally. If it does not, rewrite the sentence around it.",
            },
            {
              title: "Keep it to 3 to 5 sentences",
              text: "The introduction is not the article. It is the doorway. Get the reader through it quickly. Long introductions lose people. If your introduction is longer than 5 sentences, you are probably including information that belongs in the first section instead.",
            },
          ]}
        />
        <Callout type="tip">
          Write the introduction last. Once you have written the full article,
          you know exactly what it covers and can write a focused introduction
          that accurately sets expectations.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common introduction mistakes to avoid">
        <Paragraph>
          These mistakes show up constantly in blog posts that fail to rank or
          keep readers. Each one is easy to fix once you know what to look for.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Starting too broadly",
              text: "Opening with 'SEO is a crucial part of digital marketing' or 'In today's fast-paced world...' tells the reader nothing they do not already know. It wastes their time and signals that the content might be equally vague. Fix: start with the specific problem, not the category it belongs to.",
            },
            {
              title: "Writing a generic hook",
              text: "Hooks like 'Did you know that 68% of online experiences begin with a search engine?' are overused and do not connect to the reader's specific problem. Fix: skip the statistics and speak directly to the reader's situation.",
            },
            {
              title: "Delaying the point",
              text: "Some introductions spend three paragraphs building up to the topic. By that point, the reader has already scrolled past or left. Fix: get to the point in the first sentence. Context can come in the second and third sentences, but the problem should be clear immediately.",
            },
            {
              title: "Stuffing keywords awkwardly",
              text: "Forcing the keyword into the introduction multiple times makes the writing stiff and unnatural. 'This SEO-friendly introduction guide will help you write SEO-friendly introductions for your SEO content.' Fix: use the keyword once, naturally, within the first few sentences.",
            },
            {
              title: "Failing to match search intent",
              text: "If someone searches 'how to write an introduction,' they want a practical how-to. An introduction that starts with the history of content writing misses the intent completely. Fix: search your target keyword, see what ranks, and match the format and tone.",
            },
            {
              title: "Making the introduction too long",
              text: "An introduction that runs 8 to 10 sentences is not an introduction. It is the first section of the article masquerading as a preamble. Fix: cap it at 3 to 5 sentences. Move everything else into the body.",
            },
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Examples */}
      {/* ------------------------------------------------------------------ */}
      <Section id="examples" title="Weak vs strong introductions: real examples">
        <Paragraph>
          Seeing the difference side by side makes it click. Here are three
          examples showing weak introductions improved into strong ones.
        </Paragraph>

        {/* Example 1 */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
            Topic: How to find low-competition keywords
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                Weak
              </p>
              <p className="text-[13px] text-muted">
                &quot;Keyword research is one of the most important aspects of
                SEO. Finding the right keywords can help you rank higher on
                Google and get more traffic to your website. In this article, we
                will explore how to find keywords.&quot;
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                Strong
              </p>
              <p className="text-[13px] font-medium text-foreground">
                &quot;You have been targeting keywords for months and nothing
                ranks. The problem is not your content. It is that you are
                targeting keywords you cannot win yet. This guide shows you how
                to find low-competition keywords that your site can actually
                rank for.&quot;
              </p>
            </div>
          </div>
          <p className="mt-3 text-[12px] text-muted">
            <strong>Why it works:</strong> The strong version names the
            problem, empathizes with the reader, identifies the root cause,
            and sets a clear expectation.
          </p>
        </div>

        {/* Example 2 */}
        <div className="mt-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
            Topic: Blog post structure
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                Weak
              </p>
              <p className="text-[13px] text-muted">
                &quot;In today&apos;s digital landscape, content is king. A
                well-structured blog post is essential for SEO success. Let us
                look at how to structure your posts.&quot;
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                Strong
              </p>
              <p className="text-[13px] font-medium text-foreground">
                &quot;You wrote a detailed article, published it, and waited.
                Weeks later it is sitting on page four. The content is solid but
                the structure is working against you. This guide shows you
                exactly how to structure a blog post so Google can understand
                it and readers stay on the page.&quot;
              </p>
            </div>
          </div>
          <p className="mt-3 text-[12px] text-muted">
            <strong>Why it works:</strong> The strong version describes a
            specific scenario the reader has experienced, diagnoses the
            issue, and promises a concrete outcome.
          </p>
        </div>

        {/* Example 3 */}
        <div className="mt-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-light mb-3">
            Topic: Internal linking
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100/60 bg-red-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-red-500 mb-1">
                Weak
              </p>
              <p className="text-[13px] text-muted">
                &quot;Internal links are links that connect different pages on
                your website. They are an important part of SEO. This article
                will explain everything you need to know about internal
                linking.&quot;
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100/60 bg-emerald-50/20 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">
                Strong
              </p>
              <p className="text-[13px] font-medium text-foreground">
                &quot;Your pages are not ranking even though the content is
                good. One reason most people overlook: your pages are isolated.
                Google cannot find them because nothing links to them. Internal
                linking fixes that, and it takes 10 minutes per article.&quot;
              </p>
            </div>
          </div>
          <p className="mt-3 text-[12px] text-muted">
            <strong>Why it works:</strong> The strong version connects the
            reader&apos;s frustration to a specific, fixable cause and
            promises a quick solution.
          </p>
        </div>

        <Paragraph>
          Our{" "}
          <a
            href="/seo-guide/content-seo/blog-structure"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            blog structure guide
          </a>{" "}
          covers how to apply this same level of intent-matching to every
          section of your post, not just the introduction.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Intro checklist visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="checklist" title="Introduction checklist">
        <Paragraph>
          Run through this before publishing any article.
        </Paragraph>

        {/* Visual: Checklist */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-accent mb-4">
            Pre-Publish Introduction Check
          </p>
          <div className="space-y-2.5">
            {[
              "Opens with the reader's specific problem or situation",
              "Confirms the page matches the search intent within 2 sentences",
              "Primary keyword appears naturally in the first 3 sentences",
              "Sets a clear expectation for what the article will deliver",
              "Total length is 3 to 5 sentences maximum",
              "Does not start with a generic statement or cliché",
              "Reads well on mobile without excessive scrolling",
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

        <Paragraph>
          RankSEO&apos;s{" "}
          <a
            href="/features"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content analysis features
          </a>{" "}
          automatically check your introduction for keyword presence, length,
          and readability, so you catch issues before publishing.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="rankseo" title="How RankSEO helps with content introductions">
        <Paragraph>
          Writing a strong introduction consistently across every article
          takes practice and review. RankSEO builds that review into your
          workflow.
        </Paragraph>
        <BulletList
          items={[
            <span key="feat">
              RankSEO&apos;s{" "}
              <a
                href="/features"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                content optimization tools
              </a>{" "}
              analyze your introduction for keyword placement, readability,
              and intent match before you publish
            </span>,
            "Flags introductions that are too long, too vague, or missing the primary keyword",
            "Compares your introduction against top-ranking content for the same keyword",
            "Suggests improvements based on what works for pages that currently rank well",
            "Scores readability and engagement potential so you can optimize before hitting publish",
          ]}
        />
        <Paragraph>
          Stop losing readers in the first paragraph. Explore{" "}
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
          to start writing introductions that keep readers engaged.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Conclusion */}
      {/* ------------------------------------------------------------------ */}
      <Section id="conclusion" title="Your introduction is your first impression. Make it count.">
        <Paragraph>
          A great introduction does three things in three to five sentences:
          names the problem, shows understanding, and promises a clear
          outcome. That is it. No filler, no clichés, no slow build-up.
        </Paragraph>
        <Paragraph>
          Apply this framework to your next article and watch the difference in
          engagement. The rest of our{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            SEO guide
          </a>{" "}
          covers everything else you need to create content that ranks.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What is an SEO-friendly introduction?",
            answer: (
              <p>
                An SEO-friendly introduction is a short opening paragraph that
                clearly addresses the reader&apos;s problem, matches the search
                intent, includes the primary keyword naturally, and sets a clear
                expectation for what the article will cover. It is typically 3
                to 5 sentences long.
              </p>
            ),
            answerText:
              "An SEO-friendly introduction is a short opening paragraph that clearly addresses the reader's problem, matches the search intent, includes the primary keyword naturally, and sets a clear expectation for what the article will cover. It is typically 3 to 5 sentences long.",
          },
          {
            question: "Should I include keywords in the first paragraph?",
            answer: (
              <p>
                Yes. Including your primary keyword naturally in the first two
                to three sentences helps Google understand what the page is
                about. Do not force it. Write the introduction naturally first,
                then check that the keyword appears. If it does not fit, adjust
                the wording slightly.
              </p>
            ),
            answerText:
              "Yes. Including your primary keyword naturally in the first two to three sentences helps Google understand what the page is about. Do not force it. Write the introduction naturally first, then check that the keyword appears. If it does not fit, adjust the wording slightly.",
          },
          {
            question: "How long should a blog introduction be?",
            answer: (
              <p>
                Three to five sentences is ideal for most blog posts. That is
                enough to name the problem, provide brief context, and set
                expectations. Longer introductions risk losing readers before
                they reach the main content.
              </p>
            ),
            answerText:
              "Three to five sentences is ideal for most blog posts. That is enough to name the problem, provide brief context, and set expectations. Longer introductions risk losing readers before they reach the main content.",
          },
          {
            question: "Do introductions affect SEO rankings?",
            answer: (
              <p>
                Indirectly, yes. Introductions affect bounce rate, dwell time,
                and pogo-sticking, all of which influence rankings. A strong
                introduction keeps readers on the page, which signals to Google
                that your content is valuable. A weak one causes people to
                leave, which hurts your rankings over time.
              </p>
            ),
            answerText:
              "Indirectly, yes. Introductions affect bounce rate, dwell time, and pogo-sticking, all of which influence rankings. A strong introduction keeps readers on the page, which signals to Google that your content is valuable. A weak one causes people to leave, which hurts your rankings over time.",
          },
          {
            question: "How do I make an introduction more engaging?",
            answer: (
              <p>
                Start with the reader&apos;s specific problem, not a general
                statement. Show that you understand their situation. Be direct
                and get to the point quickly. Avoid clichés, filler phrases, and
                overly broad openings. Write as if you are speaking to one
                person who has a specific question.
              </p>
            ),
            answerText:
              "Start with the reader's specific problem, not a general statement. Show that you understand their situation. Be direct and get to the point quickly. Avoid clichés, filler phrases, and overly broad openings. Write as if you are speaking to one person who has a specific question.",
          },
          {
            question: "Should I write the introduction first or last?",
            answer: (
              <p>
                Writing the introduction last is often more effective. Once you
                have written the full article, you know exactly what it covers
                and can write a focused introduction that accurately sets
                expectations. Writing it first often leads to vague,
                placeholder-style openings.
              </p>
            ),
            answerText:
              "Writing the introduction last is often more effective. Once you have written the full article, you know exactly what it covers and can write a focused introduction that accurately sets expectations. Writing it first often leads to vague, placeholder-style openings.",
          },
        ]}
      />
    </>
  );
}
