import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getPlatforms } from "@/content"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  RobotIcon,
  ArrowRight01Icon,
  HierarchySquareIcon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Platforms",
  description:
    "Humanoid robotics platforms and their underlying hardware architectures.",
  path: "/platforms/",
})

export default function PlatformsPage() {
  const platforms = getPlatforms()

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs items={[{ label: "Platforms", href: "/platforms/" }]} />
      <div className="mb-12">
        <h1 className="mb-4 text-display">Platforms</h1>
        <p className="max-w-3xl text-lead text-muted-foreground">
          The integrators. These are the final humanoid platforms that assemble
          specialized hardware from tier-2 and tier-3 suppliers into cohesive
          bipedal systems.
        </p>
      </div>

      <section className="mb-16 grid grid-cols-1 gap-6 bg-background md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => (
          <Link
            key={platform.id}
            href={`/platforms/${platform.id}/`}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-3 transition-colors group-hover:bg-primary/10">
                <HugeiconsIcon
                  icon={RobotIcon}
                  className="size-6 text-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <div>
                <h3 className="text-h3">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {platform.manufacturer}
                </p>
              </div>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              {platform.description}
            </p>
            <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-primary">
              View BOM{" "}
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </div>
          </Link>
        ))}
        {platforms.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-border py-12 text-center text-muted-foreground">
            {"{{VERIFY: Platform directory data}}"}
            <HugeiconsIcon icon={RobotIcon} className="hidden" />
          </div>
        )}
      </section>

      <section className="rounded-xl border border-border bg-muted/10 p-8">
        <div className="mb-6 flex items-center gap-4">
          <HugeiconsIcon
            icon={HierarchySquareIcon}
            className="size-8 text-primary"
          />
          <h2 className="text-h2">Platform Architecture</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Integration Challenges</h3>
            <p className="text-sm text-muted-foreground">
              Combining disparate hardware components into a single, functional
              bipedal robot presents immense software and mechanical challenges.
              The platforms listed above represent the cutting edge of these
              integration efforts.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Integration challenges data}}"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Future Roadmaps</h3>
            <p className="text-sm text-muted-foreground">
              As platforms mature, we expect to see a shift towards highly
              integrated, proprietary sensor suites, while base actuation
              mechanisms remain heavily reliant on external tier-2 supply
              chains.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Platform roadmap analysis}}"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
