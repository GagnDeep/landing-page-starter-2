import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  CallIcon,
  Clock01Icon,
  Calendar01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { PRACTICE_LOCATION } from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Location, Directions & Parking | Dr. Ameena Patel, MD Chicago",
  description:
    "Find our Chicago practice address (450 N Michigan Ave, Suite 1200), office hours, parking garage details, transit directions, and wheelchair accessibility information.",
}

export default function LocationPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Practice Location &amp; Directions
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Chicago Clinic &amp; Practice Address
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Conveniently located on North Michigan Avenue in downtown Chicago with
          covered garage parking and full wheelchair accessibility.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left: NAP & Access Info */}
        <div className="space-y-6 lg:col-span-6">
          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Clinic Contact &amp; Hours
            </h3>

            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={Location01Icon}
                  className="size-5 shrink-0 text-primary"
                />
                <div>
                  <strong className="block text-foreground">
                    Physical Address
                  </strong>
                  <span>
                    {PRACTICE_LOCATION.address.street},{" "}
                    {PRACTICE_LOCATION.address.suite}
                  </span>
                  <br />
                  <span>
                    {PRACTICE_LOCATION.address.city},{" "}
                    {PRACTICE_LOCATION.address.state}{" "}
                    {PRACTICE_LOCATION.address.zip}
                  </span>
                  <div className="pt-1 font-mono text-[11px] text-accent">
                    [NEEDS CONFIRMATION: Primary Address]
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border pt-3">
                <HugeiconsIcon
                  icon={CallIcon}
                  className="size-5 shrink-0 text-primary"
                />
                <div>
                  <strong className="block text-foreground">
                    Phone &amp; HIPAA Fax
                  </strong>
                  <span>Phone: {PRACTICE_LOCATION.phone}</span>
                  <br />
                  <span>Fax: {PRACTICE_LOCATION.fax}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-border pt-3">
                <HugeiconsIcon
                  icon={Clock01Icon}
                  className="size-5 shrink-0 text-primary"
                />
                <div>
                  <strong className="block text-foreground">
                    Consultation Hours
                  </strong>
                  {PRACTICE_LOCATION.hours.map((h, i) => (
                    <div key={i}>
                      <span>
                        {h.days}: {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Parking &amp; Building Accessibility
            </h3>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div>
                <strong className="block text-foreground">
                  Garage Parking:
                </strong>
                <p>{PRACTICE_LOCATION.parkingAndAccess.parking}</p>
              </div>
              <div>
                <strong className="block text-foreground">
                  Public Transit:
                </strong>
                <p>{PRACTICE_LOCATION.parkingAndAccess.transit}</p>
              </div>
              <div>
                <strong className="block text-foreground">
                  ADA Wheelchair Accessibility:
                </strong>
                <p>{PRACTICE_LOCATION.parkingAndAccess.accessibility}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: Map Graphic Container */}
        <div className="space-y-6 lg:col-span-6">
          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Interactive Map &amp; Directions
            </h3>
            <div className="relative flex aspect-16/10 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-muted p-6 text-center">
              <div className="space-y-2">
                <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={Location01Icon} className="size-5" />
                </div>
                <h4 className="font-serif text-sm font-bold text-foreground">
                  450 N Michigan Ave, Suite 1200
                </h4>
                <p className="text-xs text-muted-foreground">
                  Chicago, IL 60611
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=450+N+Michigan+Ave+Chicago+IL"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary/80"
                  >
                    <span>Open in Google Maps</span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="size-3"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-[11px] font-medium text-accent">
              [NEEDS CONFIRMATION: Exact Map Marker]
            </div>
          </Card>

          <Button
            asChild
            size="lg"
            className="w-full rounded-lg bg-accent font-medium text-accent-foreground"
          >
            <Link
              href="/booking"
              className="flex items-center justify-center gap-2"
            >
              <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
              <span>Schedule Chicago Consultation</span>
            </Link>
          </Button>
        </div>
      </div>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
