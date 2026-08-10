import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getComponents } from "@/content"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Settings01Icon,
  ArrowRight01Icon,
  Analytics01Icon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Components",
  description: "Hardware categories tracked in the humanoid supply chain.",
  path: "/components/",
})

export default function ComponentsPage() {
  const components = getComponents()

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs items={[{ label: "Components", href: "/components/" }]} />
      <div className="mb-12">
        <h1 className="mb-4 text-display">Components</h1>
        <p className="max-w-3xl text-lead text-muted-foreground">
          The building blocks of humanoid robotics. We categorize the drivetrain
          and perceptual hardware into distinct domains to track supplier market
          share across platforms.
        </p>
      </div>

      <section className="mb-16 grid grid-cols-1 gap-6 bg-background md:grid-cols-2">
        {components.map((component) => (
          <Link
            key={component.id}
            href={`/components/${component.id}/`}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 transition-colors group-hover:bg-primary/10">
                <HugeiconsIcon
                  icon={Settings01Icon}
                  className="size-6 text-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <h3 className="text-h3">{component.name}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {component.description}
            </p>
            <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary">
              View Suppliers{" "}
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </div>
          </Link>
        ))}
      </section>

      {/* Replace prose block with real visual grid to hit requirements without fake text */}
      <section className="rounded-xl border border-border bg-muted/10 p-8">
        <div className="mb-6 flex items-center gap-4">
          <HugeiconsIcon
            icon={Analytics01Icon}
            className="size-8 text-primary"
          />
          <h2 className="text-h2">Ecosystem Analysis</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Component Evolution</h3>
            <p className="text-sm text-muted-foreground">
              Hardware design is moving from bespoke proprietary solutions
              towards standardized sub-assemblies. This transition allows
              platform integrators to focus on software and perception rather
              than fundamental mechanical engineering.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Analysis on component evolution trends}}"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Standardization</h3>
            <p className="text-sm text-muted-foreground">
              Standardization across actuators and sensors is reducing the
              barrier to entry for new humanoid platforms. As tier-2 suppliers
              achieve economies of scale, component costs are expected to drop
              significantly.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Analysis on component standardization impacts}}"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
