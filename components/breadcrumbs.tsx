import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export function Breadcrumbs({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground"
    >
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      {items.map((item) => (
        <div key={item.url} className="flex items-center space-x-2">
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
          <Link href={item.url} className="hover:text-foreground">
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  )
}
