"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  questions: { q: string; a: string }[];
}

export function FaqAccordion({ questions }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {questions.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border border-border/50 rounded-2xl bg-card overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-foreground pr-8">{faq.q}</span>
              <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0", isOpen && "rotate-180")} />
            </button>
            <div
              className={cn("px-6 overflow-hidden transition-all duration-200 ease-in-out", isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0")}
              aria-hidden={!isOpen}
            >
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
