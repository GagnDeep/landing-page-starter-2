"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeroAuroraProps extends React.HTMLAttributes<HTMLDivElement> {
  color1?: string;
  color2?: string;
  color3?: string;
}

export function AnimatedHeroAurora({
  className,
  color1 = "var(--primary)",
  color2 = "var(--secondary)",
  color3 = "var(--accent)",
  ...props
}: AnimatedHeroAuroraProps) {
  const prefersReducedMotion = useReducedMotion();

  const animationVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: prefersReducedMotion ? 0 : 20,
        ease: "linear" as const,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <motion.div
        variants={animationVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-0 opacity-20 blur-[100px]"
        style={{
          background: `linear-gradient(120deg, ${color1}, ${color2}, ${color3})`,
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative z-10 w-full h-full">{props.children}</div>
    </div>
  );
}
