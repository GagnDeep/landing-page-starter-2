"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("flex w-full items-center justify-center py-12 opacity-50", className)}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="mx-4 flex space-x-1">
         <span className="w-1.5 h-1.5 rounded-full bg-accent/60 motion-safe:animate-ping" style={{ animationDuration: '3s' }}></span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-border to-transparent"></div>
    </div>
  );
}
