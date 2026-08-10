import Link from "next/link"
import { statesData } from "@/content/states"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export function StateDirectory() {
  if (!statesData || statesData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card p-12 text-center">
        <h3 className="mb-2 font-heading text-xl font-medium">
          No States Available
        </h3>
        <p className="max-w-sm text-muted-foreground">
          We are currently gathering regulatory data. Please check back soon for
          our comprehensive state directory.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {statesData.map((state) => (
        <Link
          key={state.slug}
          href={`/states/${state.slug}`}
          className="group flex min-h-[88px] flex-col items-start justify-between rounded-xl border bg-background p-4 shadow-sm transition-all outline-none hover:border-primary/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="line-clamp-1 w-full font-heading text-lg font-medium break-words">
            {state.name}
          </span>
          <div className="mt-2 flex w-full items-center justify-between text-sm text-muted-foreground">
            <span className="truncate">View regulations</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="size-4 shrink-0 -translate-x-2 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
