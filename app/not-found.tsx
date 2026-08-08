import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex flex-1 items-center justify-center py-24">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold">
            404 - Not Found
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <Link href="/" className="font-medium text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
