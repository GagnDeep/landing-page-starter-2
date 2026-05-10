"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Brain02Icon, Activity02Icon, Shield02Icon, FavouriteIcon, FlashIcon } from "@hugeicons/core-free-icons";

type IconName = "brain" | "activity" | "shield" | "heartbeat" | "flash";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<any>>;

interface Props extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  icon: IconName;
  size?: number;
  className?: string;
}

const iconMap = {
  brain: Brain02Icon,
  activity: Activity02Icon,
  shield: Shield02Icon,
  heartbeat: FavouriteIcon,
  flash: FlashIcon,
};

export function MicroIconSet({ icon, size = 24, className, ...props }: Props) {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary border border-primary/20",
        className
      )}
      {...props}
    >
      <HugeiconsIcon icon={IconComponent} style={{ width: size, height: size }} strokeWidth={1.5} />
    </motion.div>
  );
}
