import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { buildBreadcrumbJsonLd } from "@/lib/site"

interface BreadcrumbItem {
  name: string
  url: string
}

export function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[]
  className?: string
}) {
  const allItems = [{ name: "Home", url: "/" }, ...items]

  return (
    <nav aria-label="Breadcrumb" className={cn("py-4", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd(allItems)),
        }}
      />
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          return (
            <li key={item.url} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.url}
                    className="transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
