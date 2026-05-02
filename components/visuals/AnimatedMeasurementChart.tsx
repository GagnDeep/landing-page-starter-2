"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function AnimatedMeasurementChart({ className }: { className?: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const measurements = [
    { label: "Collar", value: 40 },
    { label: "Chest", value: 104 },
    { label: "Waist", value: 86 },
    { label: "Sleeve", value: 65 },
    { label: "Inseam", value: 81 },
  ];

  return (
    <div className={cn("p-6 border border-border bg-card/50 backdrop-blur-sm rounded-lg font-sans", className)}>
      <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-semibold">Master Profile</h4>
      <div className="space-y-4">
        {measurements.map((m, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-foreground">{m.label}</span>
              <span className="text-primary font-mono">{m.value}cm</span>
            </div>
            <div className="h-1 bg-secondary/20 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full bg-primary transition-all duration-1000 ease-out",
                  active ? "w-full" : "w-0"
                )}
                style={{ width: active ? `${(m.value / 120) * 100}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
