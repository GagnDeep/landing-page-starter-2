"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold">
          Handpano
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="/roadmap" className="text-sm font-medium hover:underline">
            Roadmap
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Toggle Theme
          </Button>
        </nav>
      </div>
    </header>
  )
}
