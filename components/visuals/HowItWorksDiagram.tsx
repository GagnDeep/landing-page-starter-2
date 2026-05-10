"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
}

interface Props {
  className?: string;
  steps: Step[];
}

export function HowItWorksDiagram({ className, steps }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  if (shouldReduceMotion) {
    return (
      <div className={cn("grid gap-8 md:grid-cols-3", className)}>
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-4">
              {idx + 1}
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("grid gap-8 md:grid-cols-3 relative", className)}
    >
      <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[1px] bg-border z-0" />

      {steps.map((step, idx) => (
        <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center relative z-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold mb-4"
          >
            {idx + 1}
          </motion.div>
          <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
