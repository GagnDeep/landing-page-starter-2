import Link from "next/link";
import { Button } from "@/components/ui/button";
import { globalHeader } from "@/content/home";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="font-heading text-xl font-bold tracking-tight text-primary">
            {globalHeader.logoText}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {globalHeader.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex rounded-full">
            <Link href={globalHeader.cta.href}>{globalHeader.cta.label}</Link>
          </Button>
          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </header>
  );
}
