"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  steps: string[];
  className?: string;
  typingSpeed?: number;
}

export function CodeWindowTyping({ steps, className, typingSpeed = 50 }: CodeWindowTypingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentStepIndex >= steps.length) return;

    const currentString = steps[currentStepIndex];

    if (isTyping) {
      if (displayedText.length < currentString.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentString.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentStepIndex((prev) => prev + 1);
            setDisplayedText("");
            setIsTyping(true);
          }, 2000); // Wait 2s before clearing and typing next
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isTyping, currentStepIndex, steps, typingSpeed]);

  const completedSteps = steps.slice(0, currentStepIndex);

  return (
    <div className={cn("w-full max-w-lg rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm shadow-lg", className)}>
      <div className="flex items-center px-4 py-3 bg-muted/50 border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-destructive/50" />
          <div className="w-3 h-3 rounded-full bg-accent/50" />
          <div className="w-3 h-3 rounded-full bg-primary/50" />
        </div>
        <div className="mx-auto text-xs font-mono text-muted-foreground">process.log</div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-foreground/80 h-48 overflow-y-auto">
        {completedSteps.map((step, idx) => (
          <div key={idx} className="mb-2 text-muted-foreground">
            <span className="text-primary mr-2">&gt;</span> {step}
          </div>
        ))}
        {currentStepIndex < steps.length && (
          <div className="mb-2">
            <span className="text-primary mr-2">&gt;</span>
            <span>{displayedText}</span>
            <span className="animate-pulse inline-block w-2 h-4 bg-primary ml-1 align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
