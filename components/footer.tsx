import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:h-24 md:flex-row md:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
