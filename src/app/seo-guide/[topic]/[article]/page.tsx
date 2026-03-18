import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GuideLayout } from "@/components/seo-guide/GuideLayout";
import { GuideRelated } from "@/components/seo-guide/GuideRelated";
import {
  getArticleBySlug,
  getTopicBySlug,
  buildGuideMetadata,
  getPageHref,
  getAllArticleParams,
} from "@/lib/guide";

interface PageProps {
  params: Promise<{ topic: string; article: string }>;
}

export async function generateStaticParams() {
  return getAllArticleParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic, article: articleSlug } = await params;
  const page = getArticleBySlug(topic, articleSlug);
  if (!page) return {};
  return buildGuideMetadata(page);
}

export default async function ArticlePage({ params }: PageProps) {
  const { topic, article: articleSlug } = await params;

  // Validate topic exists
  const topicPage = getTopicBySlug(topic);
  if (!topicPage) notFound();

  // Validate article exists and belongs to this topic
  const page = getArticleBySlug(topic, articleSlug);
  if (!page) notFound();

  const pathname = getPageHref(page);

  // Dynamically import the article's content component
  // Articles provide a default export from: src/components/seo-guide/articles/[topic]/[slug].tsx
  let ArticleContent: React.ComponentType;
  try {
    const mod = await import(
      `@/components/seo-guide/articles/${topic}/${articleSlug}`
    );
    ArticleContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <GuideLayout pathname={pathname}>
      <ArticleContent />
      <GuideRelated pathname={pathname} />
    </GuideLayout>
  );
}
