import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { buildMetadata, buildWebSiteJsonLd } from "@/lib/site"

export const metadata = buildMetadata({
  title: "AI Stock-Picking Tools vs S&P 500",
  description:
    "Independent tracking of what AI stock-picking tools claim and how those claims perform against a buy-and-hold S&P 500 benchmark.",
})

export default function Page() {
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
          <div className="mb-12 flex flex-col gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              AI & Investing
            </h1>
            <p className="max-w-2xl text-[17px] leading-[1.7] text-foreground">
              We independently track the performance claims of AI stock-picking
              tools against a buy-and-hold S&P 500 benchmark. We do not provide
              investment advice, we do not recommend buying any security, and
              our methodology is fully public.
            </p>
          </div>
          <div className="border border-border p-8 text-center text-sm text-muted-foreground">
            <p className="font-mono">LEADERBOARD NO DATA YET</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
