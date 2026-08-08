import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border font-mono text-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight transition-colors hover:text-accent"
        >
          Institute of RIA
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
