import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"

export interface BreadcrumbItem {
  name: string
  url: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-y-2 text-sm text-muted-foreground"
    >
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-sm p-1 transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center space-x-2 break-all">
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="h-4 w-4 shrink-0"
            />
            {index === items.length - 1 ? (
              <span
                className="line-clamp-1 py-1 font-medium text-foreground"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="line-clamp-1 inline-flex min-h-[44px] items-center rounded-sm p-1 transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
