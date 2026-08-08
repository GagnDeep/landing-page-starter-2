import { buildMetadata } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "About",
  description:
    "About the independent plain-English reference layer for the EU digital battery passport, intended for compliance or product managers.",
})

export default function AboutPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "About", item: "https://batterydigitalpassport.com/about" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="container flex-1 py-12 md:py-16">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        <div className="mx-auto max-w-3xl">
          <Prose>
            <h1>About this Reference</h1>
            <p>
              The independent plain-English reference layer for the EU digital
              battery passport. The enterprise vendors here publish no pricing
              and route every enquiry to a sales call, leaving mid-market
              manufacturers nowhere free to get a straight answer.
            </p>
            <p>
              This reference is designed for a compliance or product manager at
              a mid-market battery, e-bike, power-tool or industrial equipment
              maker. Accuracy is the entire product. Later monetised by neutral
              vendor sponsorship; never by selling compliance software.
            </p>
            <h2>Scope</h2>
            <p>
              The Article 77 obligation under Regulation (EU) 2023/1542,
              mandatory from 18 February 2027 for EV, light-means-of-transport
              and industrial batteries above 2 kWh.
            </p>
            <h2>Verification</h2>
            <p>
              Any date, penalty, delegated-act reference or vendor claim not
              explicitly permitted is flagged for verification against EUR-Lex.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
