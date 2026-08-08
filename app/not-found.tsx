import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "404 Not Found",
  description:
    "The page you are looking for could not be found. Please check the URL or navigate back to the AI & Investing homepage to find the content you need.",
})

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-background py-16 text-center">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          404
        </h1>
        <p className="mb-8 text-[17px] text-muted-foreground">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:underline"
        >
          Return to home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
