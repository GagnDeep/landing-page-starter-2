import Link from "next/link"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Not Found",
})

export default function NotFound() {
  return (
    <main className="flex h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 font-mono text-display text-primary">404</h1>
      <h2 className="mb-6 text-h2">Page Not Found</h2>
      <p className="mb-8 max-w-md text-lead text-muted-foreground">
        The component or platform you are looking for cannot be found in our
        current index.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Return to Matrix
      </Link>
    </main>
  )
}
