import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-6 md:py-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built for professionals. The Caterer&apos;s Business Toolkit.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="underline-offset-4 hover:underline">
            Terms
          </Link>
          <Link href="#" className="underline-offset-4 hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
