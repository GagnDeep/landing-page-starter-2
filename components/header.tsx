import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight text-foreground"
        >
          Handpano
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/roadmap/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Buyer&apos;s Roadmap
          </Link>
        </nav>
      </div>
    </header>
  )
}
