import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-muted/40 py-12">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p className="mb-4">The supply chain index for humanoid robotics.</p>
        <nav className="flex justify-center gap-4">
          <Link
            href="/methodology/"
            className="transition-colors hover:text-foreground"
          >
            Methodology
          </Link>
          <Link
            href="/jobs/post/"
            className="transition-colors hover:text-foreground"
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </footer>
  )
}
