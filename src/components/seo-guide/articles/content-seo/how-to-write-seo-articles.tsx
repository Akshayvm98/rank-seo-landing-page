import {
  ArticleHero,
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  Callout,
  FaqSection,
} from "@/components/seo-guide/ArticleBlocks";

export default function HowToWriteSeoArticles() {
  return (
    <>
      <ArticleHero
        title="How to write SEO articles that actually rank"
        subtitle="Good writing alone is not enough. SEO content needs structure, intent, and clarity to perform."
        readingTime={9}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Why most SEO content fails */}
      {/* ------------------------------------------------------------------ */}
      <Section id="why-most-content-fails" title="Why most SEO content fails">
        <Paragraph>
          Most SEO articles do not fail because the writing is bad. They fail
          because they are built without a plan.
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>No structure.</strong> The article is a wall of text with
              no clear sections. Readers skim, find nothing useful, and leave.
              Google notices.
            </span>,
            <span key="2">
              <strong>Wrong intent.</strong> The article answers a different
              question than what the searcher asked. A guide when they wanted a
              comparison. A definition when they wanted a tutorial.
            </span>,
            <span key="3">
              <strong>Too vague.</strong> The content stays surface-level and
              never gives the reader something specific they can use. It reads
              like a summary of other summaries.
            </span>,
            <span key="4">
              <strong>Keyword stuffing.</strong> The keyword appears in every
              other sentence. It feels forced, reads poorly, and Google sees
              through it.
            </span>,
          ]}
        />
        <Paragraph>
          The fix is not writing more or writing better prose. It is writing
          with structure, intent, and purpose from the start.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* What makes a good SEO article */}
      {/* ------------------------------------------------------------------ */}
      <Section id="what-makes-good-article" title="What makes a good SEO article">
        <Paragraph>
          A good SEO article does four things well:
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Matches{" "}
              <a
                href="/seo-guide/keyword-research/search-intent"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                search intent
              </a>
              .</strong>{" "}
              It gives the reader exactly what they came looking for — not
              more, not less, and in the right format.
            </span>,
            <span key="2">
              <strong>Has clear structure.</strong> Headings guide the reader.
              Sections build on each other. You can skim it and still
              understand the main points.
            </span>,
            <span key="3">
              <strong>Covers the topic well.</strong> It answers the primary
              question and the follow-up questions. There is no need to click
              back and search again.
            </span>,
            <span key="4">
              <strong>Is easy to read.</strong> Short paragraphs. Simple
              language. No jargon unless it is necessary. Every sentence earns
              its place.
            </span>,
          ]}
        />
        <Callout>
          Think of it this way: a good SEO article is the best answer to the
          question the searcher is asking. Structure and clarity are how you
          deliver that answer.
        </Callout>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Step-by-step process */}
      {/* ------------------------------------------------------------------ */}
      <Section id="writing-process" title="Step-by-step writing process">
        <Paragraph>
          Here is a practical process you can follow every time you write an
          SEO article.
        </Paragraph>
        <NumberedList
          items={[
            {
              title: "Understand the keyword and intent",
              text: "Search the keyword in Google. Look at the top results. What format are they? What questions do they answer? This tells you what Google thinks the searcher wants.",
            },
            {
              title: "Create an outline with H2 and H3 headings",
              text: "Before writing a single paragraph, map out your headings. Each H2 is a major section. Each H3 is a sub-point. This is your article's skeleton.",
            },
            {
              title: "Write clearly and simply",
              text: "Use short sentences. One idea per paragraph. Explain things as if the reader is smart but unfamiliar with the topic. Avoid filler words.",
            },
            {
              title: "Include keywords naturally",
              text: "Use the main keyword in your title, first paragraph, and a few headings. Use related terms throughout. If it reads naturally, you have done it right.",
            },
            {
              title: "Optimize the structure",
              text: "Add a clear introduction. Use bullet points and numbered lists where helpful. Break up long sections. Add internal links to related content.",
            },
          ]}
        />
        <Paragraph>
          This process works whether you are writing a 500-word answer or a
          3,000-word guide. The structure scales — the principles stay the
          same.
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Article structure visual */}
      {/* ------------------------------------------------------------------ */}
      <Section id="example-structure" title="Example: what good structure looks like">
        <Paragraph>
          Here is how a well-structured SEO article breaks down visually.
        </Paragraph>

        {/* Structure hierarchy visual */}
        <div className="mt-6 reveal">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-light mb-4">
              Article structure
            </p>

            <div className="space-y-2">
              {/* Title */}
              <div className="rounded-xl border-2 border-accent/30 bg-accent-bg px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-bold text-accent">
                    H1
                  </span>
                  <span className="text-[14px] font-bold text-foreground">
                    How to Choose Running Shoes
                  </span>
                </div>
              </div>

              {/* Intro */}
              <div className="ml-4 rounded-lg border border-black/[0.04] bg-border-light/15 px-4 py-2.5">
                <p className="text-[12px] text-muted italic">
                  Introduction — hook + what the article covers (2–3 short
                  paragraphs)
                </p>
              </div>

              {/* Sections */}
              {[
                {
                  tag: "H2",
                  title: "Why the right shoes matter",
                  children: [],
                },
                {
                  tag: "H2",
                  title: "Types of running shoes",
                  children: [
                    "Road running shoes",
                    "Trail running shoes",
                    "Racing flats",
                  ],
                },
                {
                  tag: "H2",
                  title: "How to find your fit",
                  children: [
                    "Measure your feet",
                    "Understand your gait",
                    "Try before you buy",
                  ],
                },
                {
                  tag: "H2",
                  title: "Common mistakes to avoid",
                  children: [],
                },
              ].map((section) => (
                <div key={section.title} className="space-y-1.5">
                  <div className="rounded-lg border border-black/[0.06] bg-white px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-600">
                        {section.tag}
                      </span>
                      <span className="text-[13px] font-semibold text-foreground">
                        {section.title}
                      </span>
                    </div>
                  </div>
                  {section.children.map((child) => (
                    <div
                      key={child}
                      className="ml-6 rounded-lg border border-black/[0.03] bg-border-light/10 px-4 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-violet-50 px-1.5 py-0.5 text-[10px] font-bold text-violet-600">
                          H3
                        </span>
                        <span className="text-[12px] text-muted">
                          {child}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-accent-bg/30 border border-accent-muted/20 px-4 py-3">
              <p className="text-[12px] font-semibold text-accent">
                Why this works
              </p>
              <p className="mt-0.5 text-[12px] text-muted">
                Clear hierarchy. Each section answers a specific sub-question.
                Readers can skim headings to find what they need. Google uses
                headings to understand your content.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Good vs bad — Visual 2 */}
      {/* ------------------------------------------------------------------ */}
      <Section id="good-vs-bad" title="Good vs bad article structure">
        <Paragraph>
          The same content can perform completely differently depending on how
          it is structured.
        </Paragraph>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Bad */}
          <div className="rounded-2xl border border-red-100/60 bg-red-50/20 p-5">
            <span className="inline-block rounded-lg bg-red-50 px-2.5 py-1 text-[12px] font-bold text-red-600">
              Weak structure
            </span>
            <div className="mt-4 space-y-2">
              <div className="rounded-lg bg-white/60 border border-red-100/40 px-3 py-2">
                <div className="h-2 w-3/4 rounded bg-red-100" />
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-4/5 rounded bg-black/[0.06]" />
                </div>
              </div>
              <div className="rounded-lg bg-white/60 border border-red-100/40 px-3 py-2">
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-3/5 rounded bg-black/[0.06]" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-[1.6] text-muted">
              No headings. Long paragraphs. No visual breaks. Readers cannot
              scan or find what they need.
            </p>
          </div>

          {/* Good */}
          <div className="rounded-2xl border border-emerald-100/60 bg-emerald-50/20 p-5">
            <span className="inline-block rounded-lg bg-emerald-50 px-2.5 py-1 text-[12px] font-bold text-emerald-600">
              Strong structure
            </span>
            <div className="mt-4 space-y-2">
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <div className="h-2 w-1/2 rounded bg-emerald-200" />
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-4/5 rounded bg-black/[0.06]" />
                </div>
              </div>
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <div className="h-2 w-2/5 rounded bg-emerald-200" />
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-3/4 rounded bg-black/[0.06]" />
                </div>
              </div>
              <div className="ml-3 rounded-lg bg-white/60 border border-emerald-100/30 px-3 py-1.5">
                <div className="h-1.5 w-1/3 rounded bg-emerald-100" />
                <div className="mt-1.5 h-1.5 w-full rounded bg-black/[0.04]" />
              </div>
              <div className="rounded-lg bg-white/80 border border-emerald-100/40 px-3 py-2">
                <div className="h-2 w-1/3 rounded bg-emerald-200" />
                <div className="mt-2 space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-black/[0.06]" />
                  <div className="h-1.5 w-2/3 rounded bg-black/[0.06]" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-[1.6] text-muted">
              Clear headings. Short sections. Sub-points indented. Easy to
              scan, easy to read, easy to rank.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Writing tips */}
      {/* ------------------------------------------------------------------ */}
      <Section id="writing-tips" title="Writing tips that actually help">
        <BulletList
          items={[
            <span key="1">
              <strong>Keep paragraphs short.</strong> Two to three sentences
              max. A wall of text is the fastest way to lose a reader.
            </span>,
            <span key="2">
              <strong>Use simple language.</strong> Write like you are
              explaining to a friend. If a simpler word works, use it.
            </span>,
            <span key="3">
              <strong>Make headings specific.</strong> &ldquo;Tips&rdquo; is
              vague. &ldquo;5 writing tips that improve readability&rdquo;
              tells the reader exactly what they will get.
            </span>,
            <span key="4">
              <strong>Cut the filler.</strong> Remove every sentence that does
              not teach, explain, or move the reader forward. If it says
              nothing, delete it.
            </span>,
            <span key="5">
              <strong>Read it out loud.</strong> If it sounds awkward or
              robotic when spoken, rewrite it. Natural writing reads better and
              ranks better.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Common mistakes */}
      {/* ------------------------------------------------------------------ */}
      <Section id="common-mistakes" title="Common mistakes">
        <BulletList
          items={[
            <span key="1">
              <strong>Keyword stuffing.</strong> Repeating the exact keyword in
              every paragraph makes content unreadable. Google penalizes it.
              Use the keyword naturally and rely on related terms.
            </span>,
            <span key="2">
              <strong>Writing without checking intent.</strong> If you do not
              know what the searcher wants, you are guessing. Always check the
              SERP first. See the{" "}
              <a
                href="/seo-guide/keyword-research/search-intent"
                className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                search intent guide
              </a>
              .
            </span>,
            <span key="3">
              <strong>Long, unreadable paragraphs.</strong> Online reading is
              different from book reading. Break it up. Use white space.
            </span>,
            <span key="4">
              <strong>Copying competitors.</strong> Reading top results for
              inspiration is fine. Rewriting their content is not. Your article
              needs a unique angle or better depth to rank.
            </span>,
          ]}
        />
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* How RankSEO helps */}
      {/* ------------------------------------------------------------------ */}
      <Section id="how-rankseo-helps" title="How RankSEO helps you write better">
        <Paragraph>
          Following this process manually works. But when you are writing
          multiple articles per week, having a system helps you stay consistent.
        </Paragraph>
        <BulletList
          items={[
            <span key="generates-outlines"><a href="/features" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">Generates structured article outlines</a> based on keyword analysis</span>,
            "Aligns content suggestions with search intent automatically",
            "Suggests headings, structure, and related topics to cover",
            "Helps maintain your brand voice while optimizing for search",
          ]}
        />
        <Paragraph>
          The goal is not to replace your writing — it is to give you a
          stronger starting point. Better structure from the start means less
          rewriting later. For more on building a content strategy, see the{" "}
          <a
            href="/seo-guide/content-seo"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            content SEO guide
          </a>{" "}
          and learn how{" "}
          <a
            href="/seo-guide/keyword-research/keyword-clustering"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            keyword clustering
          </a>{" "}
          connects your articles into a cohesive content plan. For the full picture, start with the{" "}
          <a
            href="/seo-guide"
            className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
          >
            complete SEO guide
          </a>
          .
        </Paragraph>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection
        faqs={[
          {
            question: "What is the ideal length for an SEO article?",
            answer: (
              <p>
                There is no universal ideal length. The right length depends on the topic and what the top-ranking pages look like. A simple answer might need 800 words. A comprehensive guide might need 2,500. Focus on covering the topic completely without filler rather than hitting an arbitrary word count.
              </p>
            ),
            answerText:
              "There is no universal ideal length. The right length depends on the topic and what the top-ranking pages look like. A simple answer might need 800 words. A comprehensive guide might need 2,500. Focus on covering the topic completely without filler rather than hitting an arbitrary word count.",
          },
          {
            question: "How do I use keywords naturally in my content?",
            answer: (
              <p>
                Include your main keyword in the title, first paragraph, and a few headings. Use related terms and synonyms throughout the body. If a sentence sounds awkward when you read it aloud, you have forced the keyword. Write for the reader first, then check that the keyword appears in the key positions.
              </p>
            ),
            answerText:
              "Include your main keyword in the title, first paragraph, and a few headings. Use related terms and synonyms throughout the body. If a sentence sounds awkward when you read it aloud, you have forced the keyword. Write for the reader first, then check that the keyword appears in the key positions.",
          },
          {
            question: "How many headings should an SEO article have?",
            answer: (
              <p>
                Use as many headings as your content needs to stay organized and scannable. Most articles benefit from 4 to 8 H2 headings, with H3 sub-headings where sections need further breakdown. Every heading should describe what the section covers so readers can skim and find what they need.
              </p>
            ),
            answerText:
              "Use as many headings as your content needs to stay organized and scannable. Most articles benefit from 4 to 8 H2 headings, with H3 sub-headings where sections need further breakdown. Every heading should describe what the section covers so readers can skim and find what they need.",
          },
          {
            question: "Should I prioritize writing speed or quality for SEO?",
            answer: (
              <p>
                Quality wins every time. One well-researched, well-structured article that ranks on page 1 brings more traffic than ten rushed articles stuck on page 5. That said, having a repeatable process and understanding{" "}
                <a
                  href="/seo-guide/keyword-research/search-intent"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  search intent
                </a>{" "}
                before you write helps you produce quality content more efficiently.
              </p>
            ),
            answerText:
              "Quality wins every time. One well-researched, well-structured article that ranks on page 1 brings more traffic than ten rushed articles stuck on page 5. That said, having a repeatable process and understanding search intent before you write helps you produce quality content more efficiently.",
          },
          {
            question: "Can I use AI-generated content for SEO?",
            answer: (
              <p>
                AI can help with drafts and outlines, but content that ranks well still needs human expertise, unique insights, and genuine value. Google evaluates content quality regardless of how it was created. Use AI as a starting point, then add your own experience, edit thoroughly, and ensure the article actually answers the searcher&apos;s question better than existing results.
              </p>
            ),
            answerText:
              "AI can help with drafts and outlines, but content that ranks well still needs human expertise, unique insights, and genuine value. Google evaluates content quality regardless of how it was created. Use AI as a starting point, then add your own experience, edit thoroughly, and ensure the article actually answers the searcher's question better than existing results.",
          },
          {
            question: "How should I structure an SEO blog post?",
            answer: (
              <p>
                Start with a clear introduction that states what the article covers. Use H2 headings for major sections and H3 headings for sub-points. Include bullet points and numbered lists where helpful. Add internal links to related content and write a strong{" "}
                <a
                  href="/seo-guide/on-page-seo/title-tags"
                  className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  title tag
                </a>{" "}
                that includes your target keyword. End with a clear takeaway or next step for the reader.
              </p>
            ),
            answerText:
              "Start with a clear introduction that states what the article covers. Use H2 headings for major sections and H3 headings for sub-points. Include bullet points and numbered lists where helpful. Add internal links to related content and write a strong title tag that includes your target keyword. End with a clear takeaway or next step for the reader.",
          },
        ]}
      />

      {/* ------------------------------------------------------------------ */}
      {/* CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-light/10" />
            <div className="relative">
              <h2 className="mx-auto max-w-[440px] text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[1.875rem]">
                Write content that ranks without overthinking it
              </h2>
              <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-[1.65] text-white/60">
                Try RankSEO for $1 and generate SEO-optimized articles in your
                brand voice.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/pricing"
                  className="inline-flex h-11 items-center rounded-xl bg-white px-7 text-[14px] font-semibold text-foreground shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Start $1 Trial
                </a>
                <a
                  href="/features"
                  className="inline-flex h-11 items-center rounded-xl border border-white/15 px-5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  See Features
                </a>
              </div>
              <p className="mt-4 text-[12px] text-white/40">
                Full access during trial. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
