"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Camera01Icon, VideoReplayIcon, Airplane01Icon, Image01Icon } from "@hugeicons/core-free-icons";

interface MicroIconSetProps {
  className?: string;
  activeIcon?: "photo" | "video" | "travel" | "album";
}

export function MicroIconSet({ className, activeIcon = "photo" }: MicroIconSetProps) {
  const prefersReducedMotion = useReducedMotion();

  const icons = [
    { id: "photo", icon: Camera01Icon },
    { id: "video", icon: VideoReplayIcon },
    { id: "travel", icon: Airplane01Icon },
    { id: "album", icon: Image01Icon },
  ];

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {icons.map((item) => {
        const isActive = item.id === activeIcon;
        return (
          <motion.div
            key={item.id}
            className={cn(
              "flex items-center justify-center rounded-full border transition-colors",
              isActive
                ? "bg-primary text-primary-foreground border-primary w-12 h-12"
                : "bg-background text-muted-foreground border-border w-10 h-10 opacity-60"
            )}
            animate={prefersReducedMotion ? {} : {
              scale: isActive ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          >
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <HugeiconsIcon icon={item.icon} strokeWidth={(isActive ? 2 : 1.5) as any} className={isActive ? "size-5" : "size-4"} />
          </motion.div>
        );
      })}
    </div>
  );
}
