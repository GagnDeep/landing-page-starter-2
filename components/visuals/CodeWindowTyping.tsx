"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface CodeWindowTypingProps {
  codeString: string;
  className?: string;
}

export const CodeWindowTyping = ({ codeString, className = "" }: CodeWindowTypingProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(codeString);
      return;
    }

    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(codeString.slice(0, i));
      i++;
      if (i > codeString.length) {
        clearInterval(intervalId);
      }
    }, 30); // typing speed

    return () => clearInterval(intervalId);
  }, [codeString, prefersReducedMotion]);

  return (
    <div className={`rounded-xl overflow-hidden border border-border bg-card shadow-lg ${className}`}>
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 bg-muted/50 border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-destructive/50" />
          <div className="w-3 h-3 rounded-full bg-accent/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>
      {/* Window Body */}
      <div className="p-6 font-mono text-sm text-foreground whitespace-pre-wrap h-full min-h-[150px]">
        {displayedText}
        {!prefersReducedMotion && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
          />
        )}
      </div>
    </div>
  );
};
