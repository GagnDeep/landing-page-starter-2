import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Scissor01Icon, RulerIcon, TapeMeasureIcon } from "@hugeicons/core-free-icons";

export function MicroIconSet({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-6 text-primary", className)}>
      <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
        <HugeiconsIcon icon={Scissor01Icon} className="size-6 motion-safe:hover:scale-110 transition-transform" />
      </div>
      <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
        <HugeiconsIcon icon={RulerIcon} className="size-6 motion-safe:hover:scale-110 transition-transform" />
      </div>
      <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
        <HugeiconsIcon icon={TapeMeasureIcon} className="size-6 motion-safe:hover:scale-110 transition-transform" />
      </div>
    </div>
  );
}
