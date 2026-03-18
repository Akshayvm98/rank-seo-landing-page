"use client";

import { useState } from "react";
import { getSidebarTopics } from "@/lib/guide";
import { GuideSearch } from "./GuideSearch";
import { ChevronRight } from "lucide-react";

const topics = getSidebarTopics();

/** How many articles to show before collapsing behind "Show more" */
const VISIBLE_LIMIT = 4;

export function GuideSidebar({ currentPath }: { currentPath: string }) {
  return (
    <nav className="space-y-1" aria-label="SEO Guide navigation">
      <GuideSearch />

      {/* Pillar link */}
      <a
        href="/seo-guide"
        className={`block rounded-lg px-3 py-2 text-[14px] font-semibold transition-colors duration-150 ${
          currentPath === "/seo-guide"
            ? "bg-accent-bg text-accent"
            : "text-foreground hover:bg-border-light/60"
        }`}
      >
        SEO Guide
      </a>

      <div className="mt-3 space-y-0.5">
        {topics.map((topic) => {
          const isInTopic =
            currentPath === topic.href ||
            topic.articles.some((a) => currentPath === a.href);

          return (
            <TopicGroup
              key={topic.href}
              topic={topic}
              currentPath={currentPath}
              defaultOpen={isInTopic}
            />
          );
        })}
      </div>
    </nav>
  );
}

/* ----------------------------------------------------------------------- */

function TopicGroup({
  topic,
  currentPath,
  defaultOpen,
}: {
  topic: (typeof topics)[number];
  currentPath: string;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [showAll, setShowAll] = useState(false);

  const isTopicActive = currentPath === topic.href;
  const hasArticles = topic.articles.length > 0;
  const needsTruncation = topic.articles.length > VISIBLE_LIMIT;
  const visibleArticles =
    showAll || !needsTruncation
      ? topic.articles
      : topic.articles.slice(0, VISIBLE_LIMIT);
  const hiddenCount = topic.articles.length - VISIBLE_LIMIT;

  return (
    <div>
      {/* Topic header — clickable to expand/collapse */}
      <div className="flex items-center">
        <a
          href={topic.href}
          className={`flex-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-150 ${
            isTopicActive
              ? "bg-accent-bg text-accent"
              : "text-muted hover:bg-border-light/60 hover:text-foreground"
          }`}
        >
          {topic.title}
        </a>

        {hasArticles && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-light hover:bg-border-light/60 hover:text-foreground transition-colors duration-150"
            aria-label={open ? "Collapse section" : "Expand section"}
          >
            <ChevronRight
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                open ? "rotate-90" : ""
              }`}
              strokeWidth={2.5}
            />
          </button>
        )}
      </div>

      {/* Nested articles */}
      {hasArticles && open && (
        <ul className="mt-0.5 ml-3 border-l border-border-light pl-2 space-y-0.5">
          {visibleArticles.map((article) => {
            const isActive = currentPath === article.href;
            return (
              <li key={article.href}>
                <a
                  href={article.href}
                  className={`block rounded-lg px-3 py-1.5 text-[13px] transition-colors duration-150 ${
                    isActive
                      ? "bg-accent-bg text-accent font-medium"
                      : "text-muted hover:bg-border-light/60 hover:text-foreground"
                  }`}
                >
                  {article.title}
                </a>
              </li>
            );
          })}

          {/* Show more / Show less toggle */}
          {needsTruncation && (
            <li>
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="block w-full rounded-lg px-3 py-1.5 text-left text-[13px] font-medium text-accent hover:bg-accent-bg/50 transition-colors duration-150"
              >
                {showAll ? "Show less" : `${hiddenCount} more…`}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
