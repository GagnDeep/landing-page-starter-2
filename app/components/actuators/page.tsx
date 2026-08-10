import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getSuppliers, getRelationships, getPlatforms } from "@/content"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Settings01Icon,
  ArrowRight01Icon,
  Building04Icon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Actuators",
  description: "Suppliers and integration data for humanoid actuators.",
  path: "/components/actuators/",
})

export default function ActuatorsPage() {
  const suppliers = getSuppliers()
  const platforms = getPlatforms()
  const relationships = getRelationships().filter(
    (r) => r.componentId === "actuators"
  )

  // Get suppliers providing actuators
  const actuatorSuppliers = suppliers.filter((s) =>
    relationships.some((r) => r.supplierId === s.id)
  )

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs
        items={[
          { label: "Components", href: "/components/" },
          { label: "Actuators", href: "/components/actuators/" },
        ]}
      />

      <div className="mb-12">
        <div className="mb-4 flex items-center gap-4">
          <div className="rounded-md bg-primary/10 p-3">
            <HugeiconsIcon
              icon={Settings01Icon}
              className="size-8 text-primary"
            />
          </div>
          <h1 className="text-display">Actuators</h1>
        </div>
        <p className="max-w-3xl text-lead text-muted-foreground">
          The mechanical muscles of a humanoid robot. Actuators convert
          electrical energy into the kinetic motion required to walk, balance,
          and manipulate objects.
        </p>
      </div>

      {/* Grid instead of prose */}
      <section className="mb-16 grid grid-cols-1 gap-6 bg-background md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
          <h2 className="border-b border-border pb-2 text-h3">
            Technical Overview
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="mt-1 size-4 shrink-0 text-primary"
              />
              <span>
                The humanoid ecosystem relies heavily on specialized drive
                systems—most notably harmonic drives and high-torque frameless
                motors.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="mt-1 size-4 shrink-0 text-primary"
              />
              <span>
                Designers must balance power-to-weight ratios within the
                physical constraints of a bipedal form factor.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
          <h2 className="border-b border-border pb-2 text-h3">
            Market Landscape
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="mt-1 size-4 shrink-0 text-primary"
              />
              <span>
                The actuator supply chain is highly specialized, with a few key
                tier-2 manufacturers dominating the market.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="mt-1 size-4 shrink-0 text-primary"
              />
              <span>{"{{VERIFY: Actuator market landscape overview}}"}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Table instead of prose */}
      <section className="mb-16 rounded-xl border border-border bg-muted/10 p-6">
        <h2 className="mb-6 text-h2">Confirmed Actuator Suppliers</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50 text-xs uppercase">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-foreground"
                >
                  Supplier
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-semibold text-foreground"
                >
                  Integrated Platforms
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {actuatorSuppliers.length === 0 ? (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-8 text-center text-muted-foreground"
                  >
                    {"{{VERIFY: Actuator Supplier List}}"}
                    <HugeiconsIcon icon={Building04Icon} className="hidden" />
                  </td>
                </tr>
              ) : (
                actuatorSuppliers.map((supplier) => {
                  const suppRels = relationships.filter(
                    (r) => r.supplierId === supplier.id
                  )
                  const suppPlatforms = suppRels
                    .map(
                      (r) => platforms.find((p) => p.id === r.platformId)?.name
                    )
                    .filter(Boolean)
                    .join(", ")
                  return (
                    <tr
                      key={supplier.id}
                      className="transition-colors hover:bg-muted/20"
                    >
                      <td className="px-6 py-4 font-medium">
                        <Link
                          href={`/suppliers/${supplier.id}/`}
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <HugeiconsIcon
                            icon={Building04Icon}
                            className="size-4"
                          />
                          {supplier.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {suppPlatforms || "None tracked"}
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sibling Links for Hub & Spoke */}
      <section className="border-t border-border bg-background pt-8">
        <h2 className="mb-4 text-h3">Related Components</h2>
        <div className="flex gap-4">
          <Link
            href="/components/"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-4 rotate-180"
            />
            Back to Components Hub
          </Link>
        </div>
      </section>
    </main>
  )
}
