import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export interface BreadcrumbItem {
  name: string
  url: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 font-mono text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center space-x-2">
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            {index === items.length - 1 ? (
              <span className="text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
