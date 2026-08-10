import { buildMetadata } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist on The Caterer's Business Toolkit. It might have been moved or deleted. Please navigate back to the home page.",
  noIndex: true,
  path: "/404",
})

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="container flex flex-col items-center px-4 text-center md:px-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground">
            The page you are looking for does not exist. It might have been
            moved or deleted.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
