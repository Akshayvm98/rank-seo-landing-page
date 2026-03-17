"use client";

import { useState } from "react";
import { GuideSidebar } from "./GuideSidebar";

export function GuideMobileNav({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="mb-4 flex w-full items-center justify-between rounded-xl border border-border-light bg-white px-4 py-3 text-[14px] font-medium text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors hover:bg-border-light/40"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          Explore Guide
        </span>
        <svg
          className={`h-4 w-4 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="mb-6 rounded-xl border border-border-light bg-white p-4 shadow-lg shadow-black/[0.04]">
          <GuideSidebar currentPath={currentPath} />
        </div>
      )}
    </div>
  );
}
