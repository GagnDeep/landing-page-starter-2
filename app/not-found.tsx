import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <h1 className="font-heading text-6xl font-semibold tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
