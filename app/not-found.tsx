import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { JsonLdWebSite } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "Page Not Found | The Underwriting Desk",
  description:
    "The page you are looking for does not exist on The Underwriting Desk, a trade publication for working P&C insurance underwriters.",
  path: "/404",
})

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdWebSite />
      <Header />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="mb-6 font-heading text-6xl font-semibold text-primary">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-medium text-foreground">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Return to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
