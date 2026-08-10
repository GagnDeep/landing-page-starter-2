import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-6 py-24 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold">
          404 - Page Not Found
        </h1>
        <p className="mb-8 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  )
}
