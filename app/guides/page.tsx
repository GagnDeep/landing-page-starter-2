import Link from "next/link"
import { OCCUPATION_GUIDES } from "@/lib/guides-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  BookOpen01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "1099 Occupation Tax Guides | bro.tax",
  description:
    "Tailored tax deduction guides for software engineers, YouTubers, DoorDash drivers, crypto traders, OnlyFans creators, and consultants.",
}

export default function GuidesHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
          Industry-Specific Tax Blueprints
        </span>
        <h1 className="font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          1099 Tax Guides by Occupation
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Generic tax advice fails modern independent workers. Select your exact
          line of work for an itemized breakdown of qualified write-offs and IRS
          audit traps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {OCCUPATION_GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="ledger-card group block space-y-4 p-6 transition-colors hover:border-primary"
          >
            <div className="ledger-rail" />
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-primary uppercase">
                  Occupation Tax Blueprint
                </span>
                <h2 className="mt-0.5 font-mono text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {guide.role}
                </h2>
              </div>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
              />
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {guide.tagline}
            </p>

            <div className="space-y-1 rounded-md border border-border bg-muted/40 p-3 font-mono text-[11px] text-foreground/80">
              <div className="font-semibold text-foreground">
                Key Write-Offs:
              </div>
              <ul className="list-inside list-disc space-y-0.5 text-muted-foreground">
                {guide.topDeductions.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="truncate">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
