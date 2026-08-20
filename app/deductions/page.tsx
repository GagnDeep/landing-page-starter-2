import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CodeIcon,
  Car01Icon,
  Camera01Icon,
  LaptopIcon,
  DeliveryTruckIcon,
  Home01Icon,
  Briefcase01Icon,
  PencilEdit01Icon,
  DumbbellIcon,
  VideoIcon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { DEDUCTIONS_DATA } from "@/lib/deductions-data"

export const metadata = {
  title: "1099 Freelance Tax Write-Off Library (2024 & 2025) | bro.tax",
  description:
    "Comprehensive Schedule C tax write-off guides for developers, creators, drivers, designers, hosts, and consultants. Find legal IRS deductions tailored to your role.",
}

const ICON_MAP: Record<string, typeof CodeIcon> = {
  "freelance-developer": CodeIcon,
  "uber-lyft-driver": Car01Icon,
  "onlyfans-creator": Camera01Icon,
  "youtube-creator": VideoIcon,
  "freelance-designer": LaptopIcon,
  "doordash-driver": DeliveryTruckIcon,
  "airbnb-host": Home01Icon,
  consultant: Briefcase01Icon,
  photographer: Camera01Icon,
  copywriter: PencilEdit01Icon,
  "fitness-trainer": DumbbellIcon,
  "streamer-gaming": VideoIcon,
}

export default function DeductionsPage() {
  const guides = Object.values(DEDUCTIONS_DATA)

  return (
    <div className="container space-y-10 px-4 py-8 sm:px-8 md:py-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <Badge
          variant="outline"
          className="border-primary/50 font-mono text-xs text-primary"
        >
          Schedule C Write-Off Library • 12 Specialized Roles
        </Badge>
        <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Freelancer & Creator Tax Write-Off Guides
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          The IRS allows self-employed individuals to deduct ordinary and
          necessary business expenses on Schedule C. Select your role below to
          see itemized write-offs, standard mileage rates, line numbers, and
          audit watchouts.
        </p>
      </div>

      {/* Grid of 12 Guides */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => {
          const Icon = ICON_MAP[guide.slug] || CodeIcon
          return (
            <Card
              key={guide.slug}
              className="flex flex-col justify-between border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HugeiconsIcon icon={Icon} className="size-5" />
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {guide.category}
                  </Badge>
                </div>
                <CardTitle className="font-mono text-xl font-bold text-foreground">
                  {guide.shortTitle}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs text-muted-foreground">
                  {guide.heroDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <div className="flex items-center justify-between rounded-md bg-muted p-3 font-mono text-xs">
                  <span className="text-muted-foreground">
                    Est. Annual Tax Savings:
                  </span>
                  <span className="font-bold text-primary tabular-nums">
                    +${guide.avgSavings.toLocaleString()}
                  </span>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full font-mono text-xs"
                >
                  <Link href={`/deductions/${guide.slug}`}>
                    View Write-Offs
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="ml-2 size-4"
                    />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
