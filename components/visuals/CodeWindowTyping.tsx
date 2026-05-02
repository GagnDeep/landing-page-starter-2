"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  className?: string;
  codeLines?: string[];
  typingSpeed?: number;
}

export function CodeWindowTyping({
  className,
  codeLines = [
    "import { Craftsmanship } from '@yava/atelier';",
    "import { elegance, fit } from './bespoke';",
    "",
    "export function createMasterpiece(measurements) {",
    "  const fabric = selectPremiumSilk();",
    "  const motif = handEmbroider(fabric, 'zardozi');",
    "  ",
    "  return {",
    "    garment: stitch(motif, measurements),",
    "    guarantee: 'Perfect Fit',",
    "    aura: elegance.timeless",
    "  };",
    "}"
  ],
  typingSpeed = 50
}: CodeWindowTypingProps) {
  const [mounted, setMounted] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);

  useEffect(() => {
    if (!mounted || prefersReducedMotion) {
      if (mounted) queueMicrotask(() => setDisplayedLines(codeLines));
      return;
    }

    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (newLines[currentLineIndex] === undefined) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, typingSpeed * 4); // Pause at end of line

        return () => clearTimeout(timeout);
      }
    }
  }, [mounted, currentLineIndex, currentCharIndex, codeLines, typingSpeed, prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <div className={cn("rounded-xl overflow-hidden bg-secondary border border-border/10 shadow-editorial-lg font-mono text-xs sm:text-sm", className)}>
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 bg-background border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="mx-auto text-white/30 text-xs tracking-wider">bespoke.ts</div>
      </div>

      {/* Window Body */}
      <div className="p-4 sm:p-6 overflow-x-auto">
        <pre className="text-foreground">
          <code>
            {displayedLines.map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell text-right pr-4 text-muted-foreground select-none opacity-50">
                  {i + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {line}
                  {i === currentLineIndex && !prefersReducedMotion && (
                    <span className="inline-block w-2 h-4 ml-1 align-middle bg-accent animate-pulse" />
                  )}
                </span>
              </div>
            ))}
            {currentLineIndex >= codeLines.length && !prefersReducedMotion && (
              <div className="table-row">
                <span className="table-cell text-right pr-4 text-muted-foreground select-none opacity-50">
                  {codeLines.length + 1}
                </span>
                <span className="table-cell">
                  <span className="inline-block w-2 h-4 ml-1 align-middle bg-accent animate-pulse" />
                </span>
              </div>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
