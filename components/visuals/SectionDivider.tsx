"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps extends React.ComponentProps<"svg"> {
  fillColor?: string;
  flipY?: boolean;
}

export function SectionDivider({
  className,
  fillColor = "var(--background)",
  flipY = false,
  ...props
}: SectionDividerProps) {
  const prefersReducedMotion = useReducedMotion();

  // A smooth SVG path transitioning
  const path1 = "M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";
  const path2 = "M0,48L80,53.3C160,59,320,69,480,85.3C640,101,800,123,960,112C1120,101,1280,59,1360,37.3L1440,16L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";

  return (
    <div className={cn("w-full overflow-hidden leading-[0]", className, flipY ? "rotate-180" : "")}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[100px]"
        {...props}
      >
        <motion.path
          d={path1}
          fill={fillColor}
          animate={
            prefersReducedMotion
              ? { d: path1 }
              : { d: [path1, path2, path1] }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut" as const,
          }}
        />
      </svg>
    </div>
  );
}
