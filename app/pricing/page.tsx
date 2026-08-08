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
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: "Pricing | The Caterer's Business Toolkit",
  description: "Simple, transparent pricing for caterers.",
}

export default function PricingPage() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Section className="border-b border-border bg-muted/30 py-24 md:py-32">
          <div className="mx-auto flex max-w-[68ch] flex-col items-center gap-4 text-center">
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg leading-[1.65] text-muted-foreground">
              Everything you need to run your catering business, with plans that
              scale as you grow. No hidden fees.
            </p>
          </div>
        </Section>

        <Section className="-mt-10 py-20 md:py-32">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Starter Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>
                  Perfect for independent caterers
                </CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                  $49
                  <span className="ml-1 text-xl font-medium text-muted-foreground">
                    /mo
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Up to 10 events per month
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Basic menu engineering
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Standard PDF proposals
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Email support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Start 14-day trial
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="relative flex flex-col border-primary shadow-sm">
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>
                  For growing catering companies
                </CardDescription>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                  $149
                  <span className="ml-1 text-xl font-medium text-muted-foreground">
                    /mo
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Unlimited events
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Advanced cost & margin tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      White-labeled Client Portal
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Staff scheduling & pack lists
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="size-5 text-primary"
                    />
                    <span className="text-sm text-foreground">
                      Priority 24/7 support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start 14-day trial</Button>
              </CardFooter>
            </Card>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
