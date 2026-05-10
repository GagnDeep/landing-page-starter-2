"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: string[];
  typingSpeed?: number;
}

export function CodeWindowTyping({
  className,
  lines,
  typingSpeed = 50,
  ...props
}: CodeWindowTypingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(lines.join("\n"));
      return;
    }

    if (currentLineIndex >= lines.length || hasAnimatedRef.current) return;

    const currentLine = lines[currentLineIndex];
    let currentCharIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
      currentCharIndex++;

      if (currentCharIndex === currentLine.length) {
        clearInterval(intervalId);
        setDisplayedText((prev) => prev + "\n");
        setCurrentLineIndex((prev) => prev + 1);
        if (currentLineIndex === lines.length - 1) {
            hasAnimatedRef.current = true;
        }
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [currentLineIndex, lines, typingSpeed, shouldReduceMotion]);

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden bg-foreground text-background shadow-2xl border border-border/20",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-accent/80" />
        <div className="w-3 h-3 rounded-full bg-primary/80" />
      </div>
      <div className="p-4 sm:p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
        <pre className="whitespace-pre-wrap break-words">
          <code>
            {displayedText}
            {!hasAnimatedRef.current && !shouldReduceMotion && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" as const }}
                className="inline-block w-2 h-4 ml-1 bg-primary align-middle"
              />
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
