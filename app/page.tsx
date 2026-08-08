import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container, Section } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Section className="border-b bg-muted/50">
          <Container className="mx-auto flex max-w-[68ch] flex-col items-center gap-6 text-center">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs tracking-tight uppercase"
            >
              Design Foundation
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Institutional AI Intelligence
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We&apos;ve established a high-tech, institutional OKLCH palette
              spanning deep navys, sharp whites, and strategic accent colors,
              ensuring WCAG AA contrast across both themes.
            </p>
            <div className="mt-4 flex gap-4">
              <Button size="lg">Primary Action</Button>
              <Button size="lg" variant="outline">
                Secondary Action
              </Button>
            </div>
            <div className="mt-8 font-mono text-xs text-muted-foreground">
              (Press{" "}
              <kbd className="mx-1 rounded border bg-background px-1">d</kbd> to
              toggle dark mode)
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Token Verification</CardTitle>
                  <CardDescription>
                    Validating the design system.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card uses <code>bg-card</code> and{" "}
                    <code>text-card-foreground</code>. The border is styled with{" "}
                    <code>border-border</code>.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-transparent bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">
                    Primary Palette
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Checking accent colors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/90">
                    This card uses <code>bg-primary</code> to verify the
                    institutional blue in light mode and deep navy in dark mode.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent bg-accent/20">
                <CardHeader>
                  <CardTitle>Accent Colors</CardTitle>
                  <CardDescription>
                    Subtle highlights and backgrounds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card uses <code>bg-accent</code> with opacity to verify
                    subtle backgrounds against the main{" "}
                    <code>bg-background</code>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
