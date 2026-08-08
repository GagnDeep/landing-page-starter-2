import Link from "next/link"

import { buildMetadata } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = buildMetadata({
  title: "404 - Page Not Found",
  noIndex: true,
})

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex flex-1 items-center justify-center px-4 py-12">
        <div className="flex max-w-md flex-col items-center gap-6 text-center">
          <div className="font-mono text-9xl font-bold text-muted">404</div>
          <h1 className="text-3xl font-bold tracking-tight">Order Not Found</h1>
          <p className="text-muted-foreground">
            The ticket you&apos;re looking for seems to have fallen off the
            rail. The page may have been moved or no longer exists.
          </p>
          <Button asChild className="mt-4">
            <Link href="/">Return to Line Check</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
