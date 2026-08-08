import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Section className="bg-muted/30">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              AI-Powered Wire Harness RFQ Generation
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Transform your schematic into a manufacturer-ready request for
              quote in seconds. Stop manually counting pins and calculating wire
              lengths.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Upload Schematic</Button>
              <Button size="lg" variant="outline">
                View Sample RFQ
              </Button>
            </div>
            <div className="mt-8 font-mono text-xs text-muted-foreground">
              (Press{" "}
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5">
                d
              </kbd>{" "}
              to toggle dark mode)
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
