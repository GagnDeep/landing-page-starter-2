"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  codeString: string;
  typingSpeed?: number;
}

export function TypingCodeWindow({ codeString, typingSpeed = 30, className, ...props }: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const indexRef = useRef(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (shouldReduceMotion) {
      timeoutId = setTimeout(() => setDisplayedText(codeString), 0);
      return () => clearTimeout(timeoutId);
    }

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (indexRef.current >= codeString.length) {
          clearInterval(interval);
          return prev;
        }
        const nextChar = codeString.charAt(indexRef.current);
        indexRef.current++;
        return prev + nextChar;
      });
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [codeString, typingSpeed, shouldReduceMotion]);

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border/50 bg-slate-950 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center px-4 py-3 border-b border-white/10 bg-slate-900/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-2 h-4 ml-1 bg-primary align-middle"
          />
        </pre>
      </div>
    </div>
  );
}
