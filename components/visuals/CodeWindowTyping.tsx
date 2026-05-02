"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CodeWindowTyping({
  className,
}: {
  className?: string;
}) {
  const [text, setText] = useState("");
  const fullText = "const bespoke = {\n  craft: 'handmade',\n  quality: 'premium',\n  style: 'timeless'\n};";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setText(fullText);
      return;
    }

    const interval = setInterval(() => {
      currentText += fullText[currentIndex];
      setText(currentText);
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("rounded-lg bg-foreground text-background p-4 font-mono text-sm shadow-xl", className)}>
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre>
        <code>{text}</code>
        <span className="motion-safe:animate-pulse">_</span>
      </pre>
    </div>
  );
}
