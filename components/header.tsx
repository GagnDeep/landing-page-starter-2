import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-heading font-bold text-foreground">
          Institute of Humanoids
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/matrix/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Matrix
          </Link>
          <Link
            href="/platforms/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Platforms
          </Link>
          <Link
            href="/components/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Components
          </Link>
          <Link
            href="/suppliers/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Suppliers
          </Link>
          <Link
            href="/jobs/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Jobs
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
