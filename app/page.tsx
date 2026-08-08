import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ZapIcon,
  DocumentAttachmentIcon,
  Brain01Icon,
  Database01Icon,
  Analytics01Icon,
  Upload01Icon,
  CpuIcon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="absolute inset-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          </div>

          <div className="relative z-10 mx-auto flex max-w-[64rem] flex-col items-center gap-8 text-center">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <HugeiconsIcon icon={ZapIcon} className="mr-2 size-4" />
              RFQ Generation 2.0 is Live
            </Badge>

            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              Turn Schematics into <br className="hidden md:block" />
              <span className="text-primary">Production-Ready RFQs</span>
            </h1>

            <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Stop manually counting pins, calculating wire lengths, and mapping
              BOMs. Our AI extracts complete harness specifications directly
              from your diagrams in seconds.
            </p>

            <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button
                size="lg"
                className="group h-12 px-8 text-base font-semibold"
              >
                <HugeiconsIcon
                  icon={DocumentAttachmentIcon}
                  className="mr-2 size-5"
                />
                Upload Schematic
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 size-4 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-medium"
              >
                View Sample RFQ
              </Button>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 text-sm text-muted-foreground">
              <p>Trusted by manufacturing engineers at</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
                {/* {{VERIFY: Replace with actual customer logos}} */}
                <div className="text-lg font-bold">Aerospace Corp</div>
                <div className="text-lg font-bold">AutoMotive Systems</div>
                <div className="text-lg font-bold">Industrial Tech</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Pass 3: Features Section */}
        <Section id="features" className="border-y border-border bg-muted/30">
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Intelligence built for wire harnesses
              </h2>
              <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-lg">
                We trained our models specifically on CAD diagrams, schematics,
                and pinout tables to provide the most accurate RFQ generation
                engine in the industry.
              </p>
            </div>

            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative overflow-hidden rounded-lg border border-border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <HugeiconsIcon
                      icon={Brain01Icon}
                      className="size-6 text-primary"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="font-bold text-foreground">
                      AI Schematic Parsing
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Upload PDFs or CAD exports. Our vision models extract
                      connectors, pins, and wire lengths automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative overflow-hidden rounded-lg border border-border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <HugeiconsIcon
                      icon={Database01Icon}
                      className="size-6 text-primary"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="font-bold text-foreground">
                      Automated BOM Matching
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We match extracted part numbers to our database of 2M+
                      components to identify lead times and alternates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative overflow-hidden rounded-lg border border-border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <HugeiconsIcon
                      icon={Analytics01Icon}
                      className="size-6 text-primary"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="font-bold text-foreground">
                      Instant RFQ Assembly
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generate a standardized, manufacturer-ready RFQ package in
                      seconds, complete with cut lists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Pass 4: How it Works Section */}
        <Section id="how-it-works" className="bg-background py-16 md:py-24">
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                From schematic to quote in three steps
              </h2>
              <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-lg">
                Our workflow is designed to minimize manual data entry and
                maximize accuracy, putting hours back into your engineering
                process.
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-12 pt-8 md:gap-0">
              {/* Connecting Line for Desktop */}
              <div className="absolute top-[40px] left-[27px] hidden h-[calc(100%-80px)] w-0.5 bg-border md:block"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
                <div className="flex items-center gap-4 md:w-1/2 md:justify-end md:gap-6">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold text-foreground">
                      Upload your files
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Drag and drop your PDF schematics, DWG files, or
                      unstructured BOMs directly into our platform.
                    </p>
                  </div>
                  <div className="hidden size-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary/10 md:flex">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="absolute top-0 -left-[50px] flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background md:hidden">
                  <span className="font-bold text-primary">1</span>
                </div>

                <div className="flex w-full md:w-1/2">
                  <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-border bg-muted/30 p-8">
                    <HugeiconsIcon
                      icon={Upload01Icon}
                      className="size-16 text-muted-foreground/50"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-start gap-6 md:mt-16 md:flex-row-reverse md:items-center md:gap-12">
                <div className="flex items-center gap-4 md:w-1/2 md:justify-start md:gap-6">
                  <div className="md:text-left">
                    <h3 className="text-xl font-bold text-foreground">
                      AI Extraction
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Our specialized vision and NLP models instantly extract
                      connections, pinouts, and components.
                    </p>
                  </div>
                  <div className="hidden size-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary/10 md:order-first md:flex">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="absolute top-0 -left-[50px] flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background md:hidden">
                  <span className="font-bold text-primary">2</span>
                </div>

                <div className="flex w-full md:w-1/2">
                  <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-border bg-muted/30 p-8">
                    <HugeiconsIcon
                      icon={CpuIcon}
                      className="size-16 text-primary/50"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-start gap-6 md:mt-16 md:flex-row md:items-center md:gap-12">
                <div className="flex items-center gap-4 md:w-1/2 md:justify-end md:gap-6">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold text-foreground">
                      Review & Export
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Validate the generated BOM and cut list, then export a
                      complete RFQ package to your manufacturer.
                    </p>
                  </div>
                  <div className="hidden size-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary/10 md:flex">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="absolute top-0 -left-[50px] flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background md:hidden">
                  <span className="font-bold text-primary">3</span>
                </div>

                <div className="flex w-full md:w-1/2">
                  <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-primary/20 bg-primary/5 p-8">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      className="size-16 text-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
