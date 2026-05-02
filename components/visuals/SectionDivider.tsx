import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("w-full flex items-center justify-center py-12 opacity-30", className)} aria-hidden="true">
      <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary"></div>
      <div className="w-2 h-2 rotate-45 border border-primary mx-4"></div>
      <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary"></div>
    </div>
  );
}
