import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            <Link
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground",
                index === items.length - 1 ? "font-medium text-foreground" : ""
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
