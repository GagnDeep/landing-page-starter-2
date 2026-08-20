import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { PRESS_KIT_DATA } from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Press Kit & Speaking Inquiries | Dr. Ameena Patel, MD",
  description:
    "Official media press kit, downloadable physician biography, keynote speaking topics, and interview request details for Dr. Ameena Patel, MD, FACP.",
}

export default function PressPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Media &amp; Speaking Press Kit
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Press Kit &amp; Medical Expert Commentary
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Dr. Ameena Patel, MD, FACP is a credible, quotable medical expert for
          print, digital, broadcast journalism, and medical conference keynotes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Physician Media Bio */}
        <div className="space-y-6 lg:col-span-7">
          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Approved Journalist Short Bio
            </h3>
            <p className="rounded-lg bg-secondary/50 p-4 text-xs leading-relaxed text-muted-foreground italic">
              &quot;{PRESS_KIT_DATA.shortBio}&quot;
            </p>
          </Card>

          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Full Media Biography
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {PRESS_KIT_DATA.fullBio}
            </p>
          </Card>

          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Keynote &amp; Conference Speaking Topics
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {PRESS_KIT_DATA.speakingTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    className="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right: Media Inquiries Card & Photos */}
        <div className="space-y-6 lg:col-span-5">
          <Card className="space-y-4 border-border bg-card p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="font-serif text-lg font-bold text-foreground">
                Media &amp; Press Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-0 pb-0 text-xs text-muted-foreground">
              <p className="leading-relaxed">
                {PRESS_KIT_DATA.mediaInquiryInstructions}
              </p>
              <div className="space-y-1 rounded-lg bg-secondary/60 p-3 font-mono text-[11px]">
                <p>
                  <strong>Press Email:</strong> press@doctorameena.com
                </p>
                <p>
                  <strong>Urgent Deadline Phone:</strong> (312) 555-0198
                </p>
              </div>
              <div className="text-[11px] text-accent">
                [NEEDS CONFIRMATION: Media Contact Email]
              </div>
            </CardContent>
          </Card>

          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Recent Media Appearances &amp; Publications
            </h3>
            <div className="space-y-3">
              {PRESS_KIT_DATA.mediaAppearances.map((app, i) => (
                <div
                  key={i}
                  className="space-y-1 rounded-lg border border-border p-3 text-xs"
                >
                  <span className="block font-serif font-bold text-foreground">
                    {app.outlet}
                  </span>
                  <p className="text-muted-foreground">{app.topic}</p>
                  <span className="font-mono text-[10px] text-accent">
                    {app.date}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
