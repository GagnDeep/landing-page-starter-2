import Link from "next/link"
import { statesData } from "@/content/states"

export function StateDirectory() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {statesData.map((state) => (
        <Link
          key={state.slug}
          href={`/states/${state.slug}`}
          className="flex flex-col items-start justify-between rounded-lg border bg-card p-4 transition-colors hover:border-primary"
        >
          <span className="font-heading text-lg font-medium">{state.name}</span>
          <span className="mt-2 text-sm text-muted-foreground">
            View regulations &rarr;
          </span>
        </Link>
      ))}
    </div>
  )
}
