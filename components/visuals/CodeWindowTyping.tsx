"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Adapting the requested 'CodeWindowTyping' to fit the brand: A 'ChatBubbleTyping' or 'InstructorFeedback' terminal.
export function CodeWindowTyping({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [text, setText] = useState("");
  const fullText = "Instructor: Keep your eyes on the road ahead. Gently release the clutch. You're doing great!";

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(fullText);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className={cn("w-full max-w-md rounded-lg overflow-hidden border bg-card shadow-lg", className)}>
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 bg-muted/50 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        <div className="mx-auto text-xs text-muted-foreground font-medium font-mono">
          Live Feedback System
        </div>
      </div>

      {/* Window Body */}
      <div className="p-4 font-mono text-sm leading-relaxed text-foreground min-h-[100px]">
        <span>{text}</span>
        {/* Blinking Cursor */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block w-2 h-4 ml-1 bg-primary align-middle"
        />
      </div>
    </div>
  );
}
