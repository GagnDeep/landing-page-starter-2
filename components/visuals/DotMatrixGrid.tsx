"use client";

import { useEffect, useState } from "react";

export function DotMatrixGrid() {
  const [dots, setDots] = useState<number[]>([]);

  useEffect(() => {
    // Generate static grid for client
    setDots(Array.from({ length: 100 }));
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden opacity-20 mask-image-[radial-gradient(ellipse_at_center,black,transparent_80%)]">
      <div className="grid h-full w-full grid-cols-[repeat(10,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] gap-4 p-8">
        {dots.map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-foreground transition-opacity duration-1000 motion-reduce:transition-none"
            style={{
              opacity: Math.random() > 0.7 ? 0.8 : 0.2,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
