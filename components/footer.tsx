import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
