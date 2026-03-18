"use client";

import { useState, useCallback, useId } from "react";
import { Icon, Icons } from "@/components/ui/Icon";

export function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: React.ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  const toggle = useCallback(
    (i: number) => setOpenIndex((prev) => (prev === i ? null : i)),
    [],
  );

  return (
    <div className="space-y-0 divide-y divide-border-light/80">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const triggerId = `${baseId}-trigger-${i}`;

        return (
          <div key={i}>
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold leading-snug text-foreground transition-colors hover:text-accent"
            >
              <span>{faq.question}</span>
              <span
                className={`shrink-0 text-muted-light transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "rotate-180" : ""}`}
              >
                <Icon icon={Icons.chevronDown} size="sm" strokeWidth={2} />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-[grid-template-rows] duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-[14px] leading-[1.75] text-muted">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
