// ---------------------------------------------------------------------------
// Shared readability analysis utilities
// Reusable across readability checker, content structure analyzer, etc.
// ---------------------------------------------------------------------------

/** Split text into sentences using common sentence-ending punctuation */
export function splitIntoSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && /[a-zA-Z]/.test(s));
}

/** Split text into paragraphs by double newlines or significant whitespace */
export function splitIntoParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && /[a-zA-Z]/.test(p));
}

/** Count words in a string */
function wordCount(text: string): number {
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

// ---------------------------------------------------------------------------
// Sentence metrics
// ---------------------------------------------------------------------------

export interface SentenceMetrics {
  totalSentences: number;
  averageWordsPerSentence: number;
  longSentences: number; // 25+ words
  longSentencePercent: number;
  veryLongSentences: number; // 35+ words
}

export function computeSentenceMetrics(sentences: string[]): SentenceMetrics {
  if (sentences.length === 0) {
    return {
      totalSentences: 0,
      averageWordsPerSentence: 0,
      longSentences: 0,
      longSentencePercent: 0,
      veryLongSentences: 0,
    };
  }

  const lengths = sentences.map(wordCount);
  const total = lengths.reduce((a, b) => a + b, 0);
  const longSentences = lengths.filter((l) => l >= 25).length;
  const veryLongSentences = lengths.filter((l) => l >= 35).length;

  return {
    totalSentences: sentences.length,
    averageWordsPerSentence: Math.round((total / sentences.length) * 10) / 10,
    longSentences,
    longSentencePercent: Math.round((longSentences / sentences.length) * 100),
    veryLongSentences,
  };
}

// ---------------------------------------------------------------------------
// Paragraph metrics
// ---------------------------------------------------------------------------

export interface ParagraphMetrics {
  totalParagraphs: number;
  averageSentencesPerParagraph: number;
  denseParagraphs: number; // 6+ sentences
  denseParagraphPercent: number;
}

export function computeParagraphMetrics(paragraphs: string[]): ParagraphMetrics {
  if (paragraphs.length === 0) {
    return {
      totalParagraphs: 0,
      averageSentencesPerParagraph: 0,
      denseParagraphs: 0,
      denseParagraphPercent: 0,
    };
  }

  const sentenceCounts = paragraphs.map((p) => splitIntoSentences(p).length);
  const total = sentenceCounts.reduce((a, b) => a + b, 0);
  const denseParagraphs = sentenceCounts.filter((c) => c >= 6).length;

  return {
    totalParagraphs: paragraphs.length,
    averageSentencesPerParagraph: Math.round((total / paragraphs.length) * 10) / 10,
    denseParagraphs,
    denseParagraphPercent: Math.round((denseParagraphs / paragraphs.length) * 100),
  };
}

// ---------------------------------------------------------------------------
// Readability score
// ---------------------------------------------------------------------------

export type ReadabilityLevel = "hard to read" | "needs improvement" | "fairly readable" | "easy to read";

export interface ReadabilityResult {
  totalWords: number;
  sentenceMetrics: SentenceMetrics;
  paragraphMetrics: ParagraphMetrics;
  headingCount: number;
  readingTimeMinutes: number;
  level: ReadabilityLevel;
  insights: string[];
  recommendations: string[];
}

export function scoreReadability(
  visibleText: string,
  headingCount: number,
  paragraphCountFromHtml: number,
): ReadabilityResult {
  const totalWords = wordCount(visibleText);
  const sentences = splitIntoSentences(visibleText);
  const paragraphs = splitIntoParagraphs(visibleText);

  const sentenceMetrics = computeSentenceMetrics(sentences);
  // Use HTML paragraph count if available and higher (more accurate)
  const effectiveParagraphs = Math.max(paragraphs.length, paragraphCountFromHtml);

  const paragraphMetrics = computeParagraphMetrics(paragraphs);
  // Override totalParagraphs with the better count
  paragraphMetrics.totalParagraphs = effectiveParagraphs;

  const readingTimeMinutes = Math.max(1, Math.round(totalWords / 238));

  // Score calculation using weighted points
  let points = 0;

  // Sentence length scoring (0-30 points)
  const avgWps = sentenceMetrics.averageWordsPerSentence;
  if (avgWps <= 14) points += 30;
  else if (avgWps <= 20) points += 25;
  else if (avgWps <= 28) points += 12;
  else points += 0;

  // Long sentence ratio (0-20 points)
  if (sentenceMetrics.longSentencePercent <= 10) points += 20;
  else if (sentenceMetrics.longSentencePercent <= 25) points += 14;
  else if (sentenceMetrics.longSentencePercent <= 40) points += 6;
  else points += 0;

  // Paragraph density (0-20 points)
  if (paragraphMetrics.denseParagraphPercent <= 10) points += 20;
  else if (paragraphMetrics.denseParagraphPercent <= 25) points += 14;
  else if (paragraphMetrics.denseParagraphPercent <= 50) points += 6;
  else points += 0;

  // Heading structure (0-15 points)
  if (totalWords > 300) {
    const headingsPerKWords = (headingCount / totalWords) * 1000;
    if (headingsPerKWords >= 3) points += 15;
    else if (headingsPerKWords >= 1.5) points += 10;
    else if (headingCount > 0) points += 5;
    else points += 0;
  } else {
    // Short content: headings less critical
    points += headingCount > 0 ? 15 : 8;
  }

  // Content exists (0-15 points)
  if (totalWords >= 300) points += 15;
  else if (totalWords >= 100) points += 10;
  else if (totalWords > 0) points += 5;

  // Determine level
  let level: ReadabilityLevel;
  if (points >= 80) level = "easy to read";
  else if (points >= 60) level = "fairly readable";
  else if (points >= 35) level = "needs improvement";
  else level = "hard to read";

  // Generate insights
  const insights: string[] = [];

  if (avgWps <= 14) {
    insights.push("Sentences are short and easy to follow.");
  } else if (avgWps <= 20) {
    insights.push("Average sentence length is good for most readers.");
  } else if (avgWps <= 28) {
    insights.push("Sentences are on the long side. Some readers may find them difficult to follow.");
  } else {
    insights.push("Sentences are very long on average, making the content harder to read.");
  }

  if (sentenceMetrics.longSentencePercent > 30) {
    insights.push(`${sentenceMetrics.longSentencePercent}% of sentences are long (25+ words). This hurts scannability.`);
  }

  if (paragraphMetrics.denseParagraphPercent > 20) {
    insights.push("Several paragraphs are dense (6+ sentences). Shorter paragraphs are easier to scan.");
  } else if (paragraphMetrics.totalParagraphs > 0) {
    insights.push("Paragraph length is good for readability.");
  }

  if (headingCount === 0 && totalWords > 300) {
    insights.push("No headings found. Content without headings is hard to scan.");
  } else if (headingCount > 0 && totalWords > 500) {
    const ratio = totalWords / headingCount;
    if (ratio > 500) {
      insights.push("Very few headings relative to content length. More headings would improve scannability.");
    } else {
      insights.push("Heading distribution supports good content structure.");
    }
  }

  if (insights.length === 0) {
    insights.push("Content is generally well-structured for readability.");
  }

  // Generate recommendations
  const recommendations: string[] = [];

  if (avgWps > 20) {
    recommendations.push("Shorten long sentences. Aim for 15 to 20 words per sentence on average.");
  }
  if (sentenceMetrics.longSentencePercent > 25) {
    recommendations.push("Break long sentences into shorter ones. Keep 25+ word sentences to under 25% of total.");
  }
  if (paragraphMetrics.denseParagraphPercent > 15) {
    recommendations.push("Break dense paragraphs into smaller chunks. Aim for 2 to 4 sentences per paragraph.");
  }
  if (headingCount === 0 && totalWords > 300) {
    recommendations.push("Add headings (H2, H3) to break the content into scannable sections.");
  } else if (headingCount > 0 && totalWords > 500 && totalWords / headingCount > 400) {
    recommendations.push("Add more headings to improve content structure. One heading per 200 to 300 words is ideal.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Readability looks good. Focus on content quality and maintaining this standard.");
  }

  return {
    totalWords,
    sentenceMetrics,
    paragraphMetrics,
    headingCount,
    readingTimeMinutes,
    level,
    insights,
    recommendations,
  };
}
