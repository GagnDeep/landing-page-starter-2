"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CodeWindowTypingProps {
  className?: string;
  lines: string[];
  typingSpeed?: number;
}

export const CodeWindowTyping: React.FC<CodeWindowTypingProps> = ({
  className,
  lines,
  typingSpeed = 50,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed + (Math.random() * 30)); // Add slight randomness for human feel
      return () => clearTimeout(timeout);
    } else {
      // Line finished, move to next after a pause
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + '\n');
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed]);

  return (
    <div className={cn("bg-card text-card-foreground rounded-xl border border-border shadow-lg overflow-hidden flex flex-col font-mono text-sm", className)}>
      {/* Window Header */}
      <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
        </div>
        <div className="ml-4 text-muted-foreground text-xs uppercase tracking-widest font-sans">
          Event_Itinerary.log
        </div>
      </div>

      {/* Window Body */}
      <div className="p-6 whitespace-pre-wrap flex-1 min-h-[200px]">
        <span className="text-foreground">{displayedText}</span>
        {currentLineIndex < lines.length && (
          <span className="inline-block w-2 h-4 ml-1 bg-primary motion-safe:animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
};
