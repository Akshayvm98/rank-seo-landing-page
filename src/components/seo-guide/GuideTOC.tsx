"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function GuideTOC() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll("main h2[id], main h3[id]")
    ) as HTMLElement[];

    const items = els.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);

    if (items.length === 0) {
      // Auto-generate IDs for h2s without them
      const allH2s = Array.from(document.querySelectorAll("main h2"));
      const generated: TOCItem[] = [];
      allH2s.forEach((el, i) => {
        if (!el.id) {
          el.id = `section-${i}`;
        }
        generated.push({
          id: el.id,
          text: el.textContent || "",
          level: 2,
        });
      });
      setHeadings(generated);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    const targets = document.querySelectorAll("main h2, main h3[id]");
    targets.forEach((t) => {
      if (t.id) observer.observe(t);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-1" aria-label="Table of contents">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
        On this page
      </p>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`block rounded-md py-1 text-[13px] leading-[1.5] transition-colors duration-150 ${
            h.level === 3 ? "pl-4" : "pl-2"
          } ${
            activeId === h.id
              ? "font-medium text-accent"
              : "text-muted-light hover:text-foreground"
          }`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}
