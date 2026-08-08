import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "404 - Not Found | Washington DC Review",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-24">
        <div className="space-y-6 px-4 text-center">
          <h1 className="font-heading text-6xl font-bold">404</h1>
          <p className="text-2xl font-medium">Page not found</p>
          <p className="mx-auto max-w-md text-muted-foreground">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
