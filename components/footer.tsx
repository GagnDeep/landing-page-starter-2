import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-24 border-t py-12">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Handpano. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
