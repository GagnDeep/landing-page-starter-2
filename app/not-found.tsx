import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon } from "@hugeicons/core-free-icons"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="section-padding flex flex-1 flex-col items-center justify-center space-y-6 bg-background text-center">
        <HugeiconsIcon
          icon={Search01Icon}
          className="mx-auto size-16 text-muted-foreground"
        />
        <h1 className="text-display">404 - Not Found</h1>
        <p className="text-lead mx-auto max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
