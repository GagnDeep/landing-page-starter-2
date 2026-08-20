import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calculator01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight"
        >
          <span className="rounded bg-primary px-2 py-0.5 text-primary-foreground">
            bro
          </span>
          <span className="text-foreground">.tax</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden font-mono font-medium sm:inline-flex"
          >
            <Link href="/calculator">
              <HugeiconsIcon
                icon={Calculator01Icon}
                className="mr-1.5 size-4"
              />
              Estimate Tax ($0)
            </Link>
          </Button>

          {/* Mobile Navigation Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-9 md:hidden"
                aria-label="Open menu"
              >
                <HugeiconsIcon icon={Menu01Icon} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader className="text-left">
                <SheetTitle className="font-mono text-xl font-bold">
                  <span className="rounded bg-primary px-2 py-0.5 text-primary-foreground">
                    bro
                  </span>
                  .tax
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full font-mono font-medium">
                    <Link href="/calculator">
                      <HugeiconsIcon
                        icon={Calculator01Icon}
                        className="mr-2 size-4"
                      />
                      Estimate Tax ($0)
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
