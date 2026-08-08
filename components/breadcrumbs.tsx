import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export function Breadcrumbs({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  if (!items || items.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex font-mono text-xs text-muted-foreground"
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center space-x-2">
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            <Link
              href={item.url}
              className={cn(
                "transition-colors hover:text-foreground",
                index === items.length - 1 && "font-medium text-foreground"
              )}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
