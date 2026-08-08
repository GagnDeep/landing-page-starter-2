import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="font-heading text-xl font-bold">
          The Caterer&apos;s Business Toolkit
        </Link>
        <nav className="ml-auto">
          <Link href="/about/" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
