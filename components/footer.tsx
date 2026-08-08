import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Handpano. The independent,
          maker-agnostic price and wait-time comparison guide.
        </p>
        <nav className="mt-4 flex justify-center gap-4">
          <Link href="/roadmap/" className="hover:text-foreground">
            Roadmap
          </Link>
        </nav>
      </div>
    </footer>
  )
}
