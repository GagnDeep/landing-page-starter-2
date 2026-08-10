import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata = buildMetadata({
  title: "Methodology",
  description:
    "Our strict compliance rules and verification methodology for the matrix.",
  path: "/methodology/",
})

export default function MethodologyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16 lg:py-24">
      <Breadcrumbs items={[{ label: "Methodology", href: "/methodology/" }]} />
      <h1 className="mb-8 text-display">Methodology & Compliance</h1>
      <Prose>
        <p>
          The value of the Institute of Humanoids matrix is its rigid adherence
          to verifiable truth. We do not aggregate rumors, and we do not publish
          confidential information.
        </p>
        <h2>The Compliance Rule</h2>
        <p>
          A supplier relationship is fact <strong>only</strong> when publicly
          documented and dated by a filing, press release, or confirmed physical
          teardown. Every relationship shown on this site must have a verifiable
          source and date.
        </p>
        <ul>
          <li>
            <strong>Confirmed:</strong> Backed by primary documentation (e.g.,
            an SEC filing, official press release from the supplier or
            integrator).
          </li>
          <li>
            <strong>Unconfirmed:</strong> Links inferred from secondary
            observation but lacking explicit documentation wear an Unconfirmed
            badge, or do not ship.
          </li>
        </ul>
        <h2>Leaked Bills of Materials</h2>
        <p>
          We explicitly do not utilize or publish leaked or confidential
          sourcing documents. If a component cannot be verified through public
          channels, it remains excluded from the index.
        </p>
      </Prose>
    </main>
  )
}
