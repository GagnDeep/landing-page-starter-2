import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { buildBreadcrumbJsonLd } from "@/lib/site"

type BreadcrumbsProps = {
  items: { name: string; url: string }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = buildBreadcrumbJsonLd(items)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={item.url} className="flex items-center gap-2">
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className="hover:text-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
