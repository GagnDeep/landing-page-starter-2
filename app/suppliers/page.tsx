import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getSuppliers } from "@/content"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Building04Icon,
  ArrowRight01Icon,
  AnalyticsUpIcon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Suppliers",
  description: "Directory of hardware suppliers for humanoid robotics.",
  path: "/suppliers/",
})

export default function SuppliersPage() {
  const suppliers = getSuppliers()

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs items={[{ label: "Suppliers", href: "/suppliers/" }]} />
      <div className="mb-12">
        <h1 className="mb-4 text-display">Suppliers</h1>
        <p className="max-w-3xl text-lead text-muted-foreground">
          The tier-2 and tier-3 manufacturers providing the foundational
          hardware for the humanoid industry.
        </p>
      </div>

      <section className="mb-16 grid grid-cols-1 gap-6 bg-background md:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((supplier) => (
          <Link
            key={supplier.id}
            href={`/suppliers/${supplier.id}/`}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 transition-colors group-hover:bg-primary/10">
                <HugeiconsIcon
                  icon={Building04Icon}
                  className="size-6 text-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <div>
                <h3 className="text-h3">{supplier.name}</h3>
                <p className="font-mono text-xs text-muted-foreground uppercase">
                  {supplier.coreCompetency}
                </p>
              </div>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              {supplier.description}
            </p>
            <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary">
              View Profile{" "}
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-muted/10 p-8">
        <div className="mb-6 flex items-center gap-4">
          <HugeiconsIcon
            icon={AnalyticsUpIcon}
            className="size-8 text-primary"
          />
          <h2 className="text-h2">Market Intelligence</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Supplier Qualifications</h3>
            <p className="text-sm text-muted-foreground">
              Suppliers listed in our index are subject to strict public
              documentation requirements. We track their history of delivering
              reliable, high-performance components to established integrators.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Supplier evaluation criteria data}}"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Market Consolidation</h3>
            <p className="text-sm text-muted-foreground">
              The supply chain is experiencing rapid consolidation as key
              manufacturers acquire specialized component builders to offer
              complete drivetrain solutions.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Market consolidation trends data}}"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
