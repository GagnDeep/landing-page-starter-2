"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  className?: string;
  codeLines?: string[];
}

const defaultLines = [
  "const event = new CrownCaterersEvent({",
  "  guests: 750,",
  "  style: 'Royal Pangat',",
  "  menu: ['Truffle Dal', 'Soya Chaap'],",
  "});",
  "",
  "await event.executeFlawlessly();"
];

export function CodeWindowTyping({ className, codeLines = defaultLines }: CodeWindowTypingProps) {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("rounded-lg bg-[#1e1e1e] border border-border overflow-hidden opacity-0", className)}>
        <div className="h-8 bg-[#2d2d2d] border-b border-[#404040] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="p-6 font-mono text-sm text-[#d4d4d4]" />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className={cn("rounded-lg shadow-2xl bg-[#1e1e1e] border border-border/20 overflow-hidden", className)}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={shouldReduceMotion ? undefined : containerVariants}
    >
      <div className="h-10 bg-[#2d2d2d] border-b border-[#404040] flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="p-6 font-mono text-sm sm:text-base leading-relaxed text-[#d4d4d4] overflow-x-auto">
        {shouldReduceMotion ? (
          <pre>
            <code>{codeLines.join("\n")}</code>
          </pre>
        ) : (
          <pre>
            <code>
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.3 }}
                >
                  {line}
                </motion.div>
              ))}
            </code>
          </pre>
        )}
      </div>
    </motion.div>
  );
}
