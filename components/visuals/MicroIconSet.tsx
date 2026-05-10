"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MicroIconSetProps {
  icons: { icon: ReactNode; label: string }[];
}

export const MicroIconSet = ({ icons }: MicroIconSetProps) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? {} : containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-wrap gap-6"
    >
      {icons.map((item, index) => (
        <motion.div
          key={index}
          variants={prefersReducedMotion ? {} : itemVariants}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
            {item.icon}
          </div>
          <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
