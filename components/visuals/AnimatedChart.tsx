import { cn } from "@/lib/utils";

export function AnimatedChart({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end gap-2 h-32", className)}>
      {[40, 70, 45, 90, 65, 80].map((height, i) => (
        <div
          key={i}
          className="w-8 bg-primary rounded-t-sm origin-bottom"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}
