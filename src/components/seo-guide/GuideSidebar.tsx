"use client";

import { guideStructure } from "./GuideNav";

export function GuideSidebar({ currentPath }: { currentPath: string }) {
  return (
    <nav className="space-y-6" aria-label="SEO Guide navigation">
      {guideStructure.map((group) => (
        <div key={group.category}>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-light">
            {group.category}
          </p>
          <ul className="space-y-0.5">
            {group.pages.map((page) => {
              const isActive = currentPath === page.href;
              return (
                <li key={page.href}>
                  <a
                    href={page.href}
                    className={`block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-accent-bg text-accent"
                        : "text-muted hover:bg-border-light/60 hover:text-foreground"
                    }`}
                  >
                    {page.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
