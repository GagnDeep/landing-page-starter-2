"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
}

/**
 * CodeWindowTyping
 * Simulates an elegant terminal or receipt printing effect.
 * Useful for displaying 'The Oasis Standard' guarantees or recipe ingredients.
 */
export function CodeWindowTyping({ lines, className, typingSpeed = 30 }: CodeWindowTypingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedLines(lines);
      setCurrentLineIndex(lines.length);
      return;
    }

    if (!isInView) return;

    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (newLines[currentLineIndex] === undefined) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] += currentLine[currentCharIndex];
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, typingSpeed + (Math.random() * 20)); // slight random jitter for realism

        return () => clearTimeout(timeout);
      } else {
        const lineTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 400); // pause at end of line
        return () => clearTimeout(lineTimeout);
      }
    }
  }, [isInView, currentLineIndex, currentCharIndex, lines, typingSpeed, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "rounded-md border border-border/50 bg-background/80 p-6 shadow-sm backdrop-blur-md font-mono text-sm leading-relaxed",
        className
      )}
    >
      {/* Fake window controls */}
      <div className="mb-4 flex gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-border/80" />
      </div>

      <div className="flex flex-col text-muted-foreground">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="mr-4 w-4 select-none opacity-40 text-right">{i + 1}</span>
            <span>{line}</span>
          </div>
        ))}
        {/* Blinking Cursor */}
        {isInView && currentLineIndex < lines.length && (
          <motion.div
            className="flex mt-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          >
            <span className="mr-4 w-4 opacity-0">{displayedLines.length + 1}</span>
            <span className="inline-block h-4 w-2 bg-accent/70" />
          </motion.div>
        )}
      </div>
    </div>
  );
}