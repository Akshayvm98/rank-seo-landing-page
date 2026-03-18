"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { getSearchablePages } from "@/lib/guide";
import { Icon, Icons } from "@/components/ui/Icon";

type SearchEntry = ReturnType<typeof getSearchablePages>[number];

const allPages = getSearchablePages();
const MAX_RESULTS = 8;
const DEBOUNCE_MS = 200;

export function GuideSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Debounce
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [query]);

  // Filter results
  const results = debouncedQuery.length < 2 ? [] : search(debouncedQuery);

  // Group results by topic
  const grouped = groupByTopic(results);

  // Flat list for keyboard nav
  const flatResults = results;

  // Show dropdown when we have results
  const showDropdown = open && debouncedQuery.length >= 2;

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Reset active index when results change
  useEffect(() => {
    setActiveIdx(-1);
  }, [debouncedQuery]);

  // Scroll active item into view
  useEffect(() => {
    if (activeIdx < 0 || !listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-search-item]");
    items[activeIdx]?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      setDebouncedQuery("");
      window.location.href = href;
    },
    [],
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i < flatResults.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i > 0 ? i - 1 : flatResults.length - 1));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      navigate(flatResults[activeIdx].href);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  return (
    <div ref={wrapperRef} className="relative mb-4">
      {/* Search input */}
      <div className="relative">
        <Icon
          icon={Icons.search}
          size="sm"
          strokeWidth={2.5}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-light"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search guide…"
          className="w-full rounded-lg border border-border-light bg-white py-2 pl-9 pr-3 text-[13px] text-foreground placeholder:text-muted-light outline-none transition-all duration-150 focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setDebouncedQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded text-muted-light hover:text-foreground transition-colors"
          >
            <Icon icon={Icons.x} size="sm" strokeWidth={2.5} />
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {showDropdown && (
        <div
          ref={listRef}
          className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-[320px] overflow-y-auto rounded-xl border border-border-light bg-white shadow-lg shadow-black/[0.08]"
        >
          {results.length === 0 ? (
            <p className="px-4 py-6 text-center text-[13px] text-muted">
              No results for &ldquo;{debouncedQuery}&rdquo;
            </p>
          ) : (
            <div className="py-1.5">
              {grouped.map((group) => (
                <div key={group.topic}>
                  <p className="px-3 pt-2.5 pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-light">
                    {group.topic}
                  </p>
                  {group.items.map((item) => {
                    const flatIdx = flatResults.indexOf(item);
                    const isActive = flatIdx === activeIdx;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        data-search-item
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(item.href);
                        }}
                        onMouseEnter={() => setActiveIdx(flatIdx)}
                        className={`mx-1.5 flex flex-col rounded-lg px-3 py-2 transition-colors duration-100 ${
                          isActive
                            ? "bg-accent-bg text-accent"
                            : "text-foreground hover:bg-border-light/50"
                        }`}
                      >
                        <span className="text-[13px] font-medium leading-snug">
                          {item.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Helpers                                                                   */
/* ----------------------------------------------------------------------- */

function search(q: string): SearchEntry[] {
  const lower = q.toLowerCase();
  const tokens = lower.split(/\s+/).filter(Boolean);

  const scored = allPages
    .map((page) => {
      const haystack = `${page.title} ${page.excerpt} ${page.slug} ${page.category}`.toLowerCase();
      let score = 0;
      for (const token of tokens) {
        if (!haystack.includes(token)) return { page, score: 0 };
        if (page.title.toLowerCase().includes(token)) score += 3;
        if (page.slug.includes(token)) score += 2;
        if (page.excerpt.toLowerCase().includes(token)) score += 1;
        if (page.category.toLowerCase().includes(token)) score += 1;
      }
      return { page, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);

  return scored.map((r) => r.page);
}

function groupByTopic(
  items: SearchEntry[],
): { topic: string; items: SearchEntry[] }[] {
  const groups: { topic: string; items: SearchEntry[] }[] = [];
  for (const item of items) {
    let group = groups.find((g) => g.topic === item.topicLabel);
    if (!group) {
      group = { topic: item.topicLabel, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
}
