import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { buildMetadata, buildWebSiteJsonLd } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Leaderboard",
  description:
    "View the performance ranking of AI stock-picking tools independently tracked by AI & Investing and compared directly against a buy-and-hold S&P 500 benchmark.",
  path: "/leaderboard/",
})

export default function LeaderboardPage() {
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
            Leaderboard
          </h1>
          <div className="border border-border p-8 text-center text-sm text-muted-foreground">
            <p className="font-mono">NO DATA YET</p>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Past performance does not indicate future results.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
