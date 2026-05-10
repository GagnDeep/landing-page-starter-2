"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  VegetarianFoodIcon,
  Leaf01Icon,
  FireIcon,
  Pot01Icon,
  Restaurant01Icon,
  ChefHatIcon,
  StarIcon
} from "@hugeicons/core-free-icons";

type IconName = "veg" | "leaf" | "fire" | "pot" | "restaurant" | "chef" | "star";

interface MicroIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  color?: string;
  size?: number;
}

const iconMap = {
  veg: VegetarianFoodIcon,
  leaf: Leaf01Icon,
  fire: FireIcon,
  pot: Pot01Icon,
  restaurant: Restaurant01Icon,
  chef: ChefHatIcon,
  star: StarIcon,
};

export function MicroIcon({
  icon,
  color = "var(--primary)",
  size = 24,
  className,
  ...props
}: MicroIconProps & import("framer-motion").HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center rounded-full p-2 bg-muted/30", className)}
      whileHover={
        prefersReducedMotion
          ? {}
          : { scale: 1.1, backgroundColor: "var(--muted)" }
      }
      transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
      {...props}
    >
      <HugeiconsIcon icon={IconComponent} size={size} color={color} strokeWidth={1.5} />
    </motion.div>
  );
}
