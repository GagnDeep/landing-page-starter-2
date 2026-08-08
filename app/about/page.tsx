import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { buildMetadata, buildWebSiteJsonLd } from "@/lib/site"

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn more about AI & Investing, our mission as an independent lab, and how we track the performance claims of AI stock-picking tools against the S&P 500.",
  path: "/about/",
})

export default function AboutPage() {
  const jsonLd = buildWebSiteJsonLd()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About Us
          </h1>
          <p className="text-[17px] leading-[1.7] text-foreground">
            We are an independent lab tracking AI stock-picking tools.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
