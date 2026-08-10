import { buildMetadata } from "@/lib/site"
import { Matrix } from "@/components/matrix"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HugeiconsIcon } from "@hugeicons/react"
import { RobotIcon, Database01Icon } from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Bill of Materials Matrix",
  description:
    "The complete, verified bill of materials matrix for humanoid robotics platforms.",
  path: "/matrix/",
})

export default function MatrixPage() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs items={[{ label: "Matrix", href: "/matrix/" }]} />
      <div className="mb-12">
        <h1 className="mb-4 text-display">The Matrix</h1>
        <p className="max-w-3xl text-lead text-muted-foreground">
          The verified bill of materials index. We map the hardware supply
          chain—actuators, sensors, and components—to the humanoid platforms
          that integrate them. Every relationship shown here is supported by
          public documentation.
        </p>
      </div>
      <section className="mb-16 rounded-xl border border-border bg-card p-4 shadow-sm lg:p-8">
        <Matrix />
      </section>

      <section className="rounded-xl border border-border bg-muted/10 p-8">
        <div className="mb-6 flex items-center gap-4">
          <HugeiconsIcon
            icon={Database01Icon}
            className="size-8 text-primary"
          />
          <h2 className="text-h2">Data Methodology</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Data Collection</h3>
            <p className="text-sm text-muted-foreground">
              Our dataset is built entirely from verified, public information.
              We index press releases, supplier partner announcements, and SEC
              filings to ensure that the relationships mapped in the matrix
              reflect reality, not speculation.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Matrix data collection process details}}"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Sourcing Strategy</h3>
            <p className="text-sm text-muted-foreground">
              We actively monitor the procurement strategies of leading humanoid
              integrators to provide a real-time view into how the hardware
              landscape is evolving and which tier-2 suppliers are capturing
              market share.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Matrix sourcing strategy metrics}}"}
            </p>
            <HugeiconsIcon icon={RobotIcon} className="hidden" />
          </div>
        </div>
      </section>
    </main>
  )
}
