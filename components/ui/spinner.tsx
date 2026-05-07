import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  // Extract strokeWidth from props to avoid type mismatch
  const { strokeWidth, ...rest } = props;
  const parsedStrokeWidth = typeof strokeWidth === 'string' ? parseFloat(strokeWidth) : strokeWidth;

  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      strokeWidth={parsedStrokeWidth !== undefined && !isNaN(parsedStrokeWidth) ? parsedStrokeWidth : 2}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...rest}
    />
  )
}

export { Spinner }
