"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { PaintBoardIcon, BirthdayCakeIcon, TruckDeliveryIcon } from "@hugeicons/core-free-icons";

interface OrderFlowDiagramProps {
  className?: string;
}

export function OrderFlowDiagram({ className }: OrderFlowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    { icon: PaintBoardIcon, label: "Design" },
    { icon: BirthdayCakeIcon, label: "Bake" },
    { icon: TruckDeliveryIcon, label: "Deliver" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      }
    },
  };

  return (
    <div ref={containerRef} className={cn("w-full py-12", className)}>
      <motion.div
        variants={shouldReduceMotion ? {} : containerVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate={isInView || shouldReduceMotion ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative"
      >
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-border -translate-y-1/2 z-0" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              variants={shouldReduceMotion ? {} : itemVariants}
              className="relative z-10 flex flex-col items-center gap-4 bg-background p-4 rounded-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                <HugeiconsIcon icon={Icon} className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <span className="font-heading text-lg font-semibold text-foreground">
                Step 0{index + 1}: {step.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
