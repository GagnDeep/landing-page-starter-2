"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").MotionProps>;

export interface CodeWindowTypingProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  codeString: string;
}

export function CodeWindowTyping({ codeString, className, ...props }: CodeWindowTypingProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (prefersReducedMotion) {
      setDisplayText(codeString);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(codeString.slice(0, i));
      i++;
      if (i > codeString.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [codeString, prefersReducedMotion, mounted]);

  if (!mounted) {
    return (
      <div className={cn("bg-card border border-border rounded-lg p-4 font-mono text-sm shadow-md", className)} {...props}>
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-destructive/50" />
          <div className="w-3 h-3 rounded-full bg-accent/50" />
          <div className="w-3 h-3 rounded-full bg-primary/50" />
        </div>
        <pre className="text-muted-foreground whitespace-pre-wrap">{codeString}</pre>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("bg-card border border-border rounded-lg p-4 shadow-lg overflow-hidden", className)}
      {...props as import("framer-motion").HTMLMotionProps<"div">}
    >
      <div className="flex gap-2 mb-4 border-b border-border/50 pb-2">
        <div className="w-3 h-3 rounded-full bg-destructive/80" />
        <div className="w-3 h-3 rounded-full bg-accent/80" />
        <div className="w-3 h-3 rounded-full bg-primary/80" />
      </div>
      <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
        {displayText}
        {!prefersReducedMotion && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-primary align-middle ml-1"
          />
        )}
      </pre>
    </motion.div>
  );
}
