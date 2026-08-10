import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
        Home
      </Link>
      {items.map((item) => (
        <div key={item.href} className="flex items-center gap-2">
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="size-3"
            strokeWidth={2}
          />
          <Link href={item.href} className="hover:text-foreground">
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  )
}
