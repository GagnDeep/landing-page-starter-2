import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  // Extract strokeWidth string values that conflict with HugeiconsIcon props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { strokeWidth, ...rest } = props;
  return (
    <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...rest} />
  )
}

export { Spinner }