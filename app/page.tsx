import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Section className="py-24 md:py-32">
          <div className="mx-auto flex max-w-[68ch] flex-col items-center gap-4 text-center">
            <Badge variant="secondary" className="mb-4">
              New Version Available
            </Badge>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Build your catering empire.
            </h1>
            <p className="mt-4 text-lg leading-[1.65] text-muted-foreground md:text-xl">
              Everything you need to manage menus, track costs, and delight
              clients, all in one professional toolkit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Start your free trial
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View features
              </Button>
            </div>
            <div className="mt-8 font-mono text-xs font-medium tracking-[0.08em] text-muted-foreground/70 uppercase">
              Press{" "}
              <kbd className="rounded border border-border bg-muted/50 px-1 text-muted-foreground">
                d
              </kbd>{" "}
              to toggle theme
            </div>
          </div>
        </Section>

        <Section className="border-y border-border bg-muted/30">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Menu Engineering</CardTitle>
                <CardDescription>
                  Design menus that maximize profit.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-[1.65] text-muted-foreground">
                  Analyze ingredient costs in real-time, adjust margins
                  instantly, and generate beautiful PDFs for your clients.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Event Logistics</CardTitle>
                <CardDescription>Never forget a detail again.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-[1.65] text-muted-foreground">
                  Automatically generate pack lists, staff schedules, and
                  run-of-show documents from your approved proposals.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-primary shadow-sm">
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <Badge>Popular</Badge>
                </div>
                <CardTitle>Client Portal</CardTitle>
                <CardDescription>White-labeled experience.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-[1.65] text-muted-foreground">
                  Give your clients a seamless way to review proposals, sign
                  contracts, and pay invoices under your own brand.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full">
                  Get started
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight">
              Ready to scale your business?
            </h2>
            <p className="mb-8 max-w-[68ch] text-muted-foreground">
              Join thousands of professional caterers who have streamlined their
              operations.
            </p>
            <Button size="lg">Create your account</Button>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
