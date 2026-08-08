import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="font-heading text-lg font-semibold">
          AI and Investing
        </Link>
      </div>
    </header>
  )
}
