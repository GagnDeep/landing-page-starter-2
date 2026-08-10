import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

interface BreadcrumbsProps {
  items: { name: string; url: string }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="text-small flex items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center gap-2">
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-3 text-muted-foreground"
            />
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="transition-colors hover:text-primary"
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
