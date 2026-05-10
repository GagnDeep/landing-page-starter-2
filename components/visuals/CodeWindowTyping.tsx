"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CodeWindowTypingProps {
  className?: string;
  lines: string[];
}

export function CodeWindowTyping({ className, lines }: CodeWindowTypingProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isMounted) return;

    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [lines.length, prefersReducedMotion, isMounted]);

  if (!isMounted) return null;

  return (
    <div className={cn("w-full max-w-lg rounded-xl border border-border bg-card shadow-sm overflow-hidden", className)}>
      <div className="flex items-center px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        </div>
        <div className="text-xs text-muted-foreground ml-4 font-mono">timeline.js</div>
      </div>
      <div className="p-4 bg-card font-mono text-sm overflow-hidden h-[120px] relative">
        {prefersReducedMotion ? (
          <div className="text-foreground/80 whitespace-pre-wrap">{lines.join("\n")}</div>
        ) : (
          <div className="absolute inset-0 p-4">
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                className="whitespace-nowrap overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: idx === currentLineIndex ? "100%" : idx < currentLineIndex ? "100%" : 0,
                  opacity: idx <= currentLineIndex ? 1 : 0
                }}
                transition={{
                  width: { duration: 1.5, ease: "linear" as const },
                  opacity: { duration: 0.2 }
                }}
              >
                <span className="text-primary/70 mr-3">{idx + 1}</span>
                <span className="text-foreground/80">{line}</span>
              </motion.div>
            ))}
            <motion.div
              className="w-2 h-4 bg-foreground/50 inline-block align-middle ml-1 mt-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" as const }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
