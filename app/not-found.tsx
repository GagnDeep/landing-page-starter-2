import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Page Not Found | The Caterer's Business Toolkit",
  description:
    "The page you are looking for does not exist or has been moved. Check our home page to find practical resources for your catering business including state laws.",
  alternates: {
    canonical: "https://instituteofcatering.com/404/",
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  )
}
