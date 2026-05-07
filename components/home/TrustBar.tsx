import { homeContent } from "@/content/home"
import { HugeiconsIcon } from "@hugeicons/react"
import { Award03Icon, Location01Icon, Calendar03Icon } from "@hugeicons/core-free-icons"

export function TrustBar() {
  const { trustBar } = homeContent

  return (
    <section className="bg-muted border-y border-border py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-sm font-medium text-muted-foreground">

          <div className="flex items-center gap-3">
            <HugeiconsIcon icon={Calendar03Icon} className="size-5 text-primary" strokeWidth={1.5} />
            <span>{trustBar.established}</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-border" />

          <div className="flex items-center gap-3">
            <HugeiconsIcon icon={Location01Icon} className="size-5 text-primary" strokeWidth={1.5} />
            <span>{trustBar.regions}</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-border" />

          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBar.badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <HugeiconsIcon icon={Award03Icon} className="size-5 text-primary" strokeWidth={1.5} />
                <span>{badge}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
