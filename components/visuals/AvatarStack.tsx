import { cn } from "@/lib/utils";

export function AvatarStack({ className }: { className?: string }) {
  // Using pure CSS initials/colors instead of images for the stack to stay out of image registry dependencies
  const avatars = [
    { initials: "KS", bg: "bg-primary/20 text-primary" },
    { initials: "AP", bg: "bg-secondary/20 text-secondary-foreground" },
    { initials: "MR", bg: "bg-accent text-accent-foreground" },
  ];

  return (
    <div className={cn("flex -space-x-3", className)}>
      {avatars.map((a, i) => (
        <div
          key={i}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-xs font-serif border-2 border-background ring-1 ring-border/50",
            a.bg
          )}
        >
          {a.initials}
        </div>
      ))}
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs bg-muted border-2 border-background z-10">
        +2k
      </div>
    </div>
  );
}
