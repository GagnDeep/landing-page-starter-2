import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "full" | "partial" | "icon";
}

export function LuxuryDivider({ width = "partial", className, ...props }: LuxuryDividerProps) {
  return (
    <div className={cn("flex items-center justify-center my-8 opacity-70", className)} {...props}>
      {width !== "icon" && (
        <div className={cn(
          "h-px bg-gradient-to-r from-transparent via-border to-transparent",
          width === "full" ? "w-full" : "w-1/3 max-w-[200px]"
        )} />
      )}
      <div className="mx-4 text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="currentColor" fillOpacity="0.8"/>
        </svg>
      </div>
      {width !== "icon" && (
        <div className={cn(
          "h-px bg-gradient-to-r from-border via-border to-transparent",
          width === "full" ? "w-full" : "w-1/3 max-w-[200px]"
        )} />
      )}
    </div>
  );
}
