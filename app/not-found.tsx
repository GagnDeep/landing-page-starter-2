import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Record Not Found",
  description: "The requested record could not be located in the registry.",
  path: "/404",
})

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-1 items-center justify-center py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            ERR-404
          </div>
          <h1 className="mb-6 font-heading text-4xl font-semibold">
            Record Not Found
          </h1>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            The requested filing or vendor profile could not be located in the
            current registry database.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-border px-6 py-3 font-mono text-sm transition-colors hover:bg-muted"
          >
            Return to Registry Root
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
