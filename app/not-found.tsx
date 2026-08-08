import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-wider uppercase">
            404 - Not Found
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 - Not Found",
          }),
        }}
      />
    </div>
  )
}
