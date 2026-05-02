"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MicroIconProps {
  className?: string;
}

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);
  return prefersReducedMotion;
}

export function ThreadIcon({ className }: MicroIconProps) {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-6 h-6", className)}>
      <path d="M12 4v16m-4-12h8m-8 8h8" className={cn(!reduceMotion && "animate-[dash_3s_ease-in-out_infinite] [stroke-dasharray:10] [stroke-dashoffset:10]")} />
      <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
    </svg>
  );
}

export function ScissorsIcon({ className }: MicroIconProps) {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-6 h-6", className)}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" className={cn(!reduceMotion && "origin-center transition-transform duration-500 hover:rotate-12")} />
      <line x1="14.47" y1="14.48" x2="20" y2="20" className={cn(!reduceMotion && "origin-center transition-transform duration-500 hover:-rotate-12")} />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

export function TapeIcon({ className }: MicroIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-6 h-6", className)}>
      <rect x="2" y="8" width="20" height="8" rx="2" />
      <line x1="6" y1="8" x2="6" y2="12" />
      <line x1="10" y1="8" x2="10" y2="10" />
      <line x1="14" y1="8" x2="14" y2="12" />
      <line x1="18" y1="8" x2="18" y2="10" />
    </svg>
  );
}

export function StarSparkleIcon({ className }: MicroIconProps) {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-6 h-6", className)}>
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        className={cn(!reduceMotion && "animate-pulse origin-center transition-transform duration-1000 hover:rotate-90 hover:scale-110")}
      />
    </svg>
  );
}

export function DeliveryIcon({ className }: MicroIconProps) {
    const reduceMotion = useReducedMotion();
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-6 h-6", className)}>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8L12 3L17 8" className={cn(!reduceMotion && "animate-bounce origin-bottom")} style={{animationDuration: '2s'}} />
        <line x1="12" y1="8" x2="12" y2="20" />
      </svg>
    );
  }
