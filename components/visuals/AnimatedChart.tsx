"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DataPoint {
  label: string;
  value: number; // 0 to 100
}

interface AnimatedChartProps {
  className?: string;
  data: DataPoint[];
  title?: string;
}

export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  className,
  data,
  title
}) => {
  const [mounted, setMounted] = useState(false);

  // Defer animation until after hydration to prevent mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("p-6 bg-card rounded-xl border border-border shadow-sm", className)}>
      {title && (
        <h4 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
          {title}
        </h4>
      )}

      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">{item.label}</span>
              <span className="text-muted-foreground">{item.value}%</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full bg-primary rounded-full transition-all duration-1000 ease-out",
                  "motion-reduce:transition-none",
                  mounted ? "opacity-100" : "opacity-0"
                )}
                style={{
                  width: mounted ? `${item.value}%` : '0%',
                  transitionDelay: `${i * 150}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
