import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"

export default function Page() {
  return (
    <>
      <Section className="border-b border-border/40 bg-muted/50 text-center">
        <Badge variant="outline" className="mb-4">
          Est. 2024
        </Badge>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Institute of RIA
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          The foundation of your journey. We are establishing the design
          language and core layout.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Explore Programs</Button>
          <Button variant="outline" size="lg">
            Contact Admissions
          </Button>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Academic Excellence</CardTitle>
              <CardDescription>
                Rigorous curriculum designed for the modern world.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our programs are built to challenge and inspire, preparing
                students for leadership.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Distinguished Faculty</CardTitle>
              <CardDescription>
                Learn from industry leaders and renowned scholars.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our educators bring decades of real-world experience into the
                classroom.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Network</CardTitle>
              <CardDescription>
                Connect with alumni across the globe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join a community of professionals who are shaping the future of
                their industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
