import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          AI & Investing
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/leaderboard/"
            className="text-muted-foreground hover:text-foreground"
          >
            Leaderboard
          </Link>
          <Link
            href="/methodology/"
            className="text-muted-foreground hover:text-foreground"
          >
            Methodology
          </Link>
        </nav>
      </div>
    </header>
  )
}
