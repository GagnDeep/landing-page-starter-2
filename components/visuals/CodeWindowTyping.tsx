"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
}

/**
 * CodeWindowTyping
 * A receipt-like or terminal-like window that types out orders or features.
 * Evokes the digital-first convenience of the bakery.
 */
export function CodeWindowTyping({ lines, className, typingSpeed = 50 }: CodeWindowTypingProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplayedLines(lines);
      return;
    }

    if (currentLineIndex < lines.length) {
      if (currentCharIndex < lines[currentLineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, typingSpeed * 10); // pause at end of line
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed]);

  const activeLineText = currentLineIndex < lines.length
    ? lines[currentLineIndex].substring(0, currentCharIndex)
    : "";

  return (
    <div className={cn("rounded-lg border bg-card p-4 font-mono text-sm shadow-sm", className)} aria-label="Animated text window">
      <div className="mb-4 flex items-center gap-2 border-b pb-2 opacity-50">
        <div className="h-2.5 w-2.5 rounded-full bg-destructive" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="ml-2 text-xs">system.log - A-One Bakery</span>
      </div>
      <div className="flex flex-col gap-1 text-card-foreground/80">
        {displayedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="flex items-center">
            <span>{activeLineText}</span>
            <span className="ml-1 h-4 w-2 animate-pulse bg-primary" />
          </div>
        )}
      </div>
    </div>
  );
}
