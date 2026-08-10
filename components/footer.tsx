import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built for operators. &copy; {new Date().getFullYear()}{" "}
          {siteConfig.name}.
        </p>
      </div>
    </footer>
  )
}
