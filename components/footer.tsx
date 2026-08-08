import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-foreground">
              AI & Investing
            </h2>
            <p className="text-sm text-muted-foreground">
              Independent tracking of AI stock-picking tools vs the S&P 500.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground">Data</h3>
            <Link
              href="/leaderboard/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Leaderboard
            </Link>
            <Link
              href="/data/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Download Dataset
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground">About</h3>
            <Link
              href="/about/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/methodology/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Methodology
            </Link>
            <Link
              href="/editorial-policy/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Editorial Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <Link
              href="/disclosures/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Disclosures
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t pt-8 text-xs text-muted-foreground">
          <p>
            <strong>Informational only. Not investment advice.</strong> This
            site does not provide financial advice, and none of the content
            should be construed as a recommendation to buy or sell any security.
          </p>
          <p>
            <strong>Past performance does not indicate future results.</strong>{" "}
            Any historical returns, expected returns, or probability projections
            may not reflect actual future performance.
          </p>
          <p>
            We may earn a commission when you click through our affiliate links.
            Please read our{" "}
            <Link
              href="/disclosures/"
              className="underline hover:text-foreground"
            >
              full disclosures
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
