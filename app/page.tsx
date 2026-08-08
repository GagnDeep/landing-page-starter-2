import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Book01Icon,
  Globe02Icon,
  TeacherIcon,
  Certificate01Icon,
  LibraryIcon,
  MicroscopeIcon,
} from "@hugeicons/core-free-icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <>
      <Section className="relative overflow-hidden border-b border-border/40 bg-background py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-muted/20" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Elevating Education Since 2024
          </Badge>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Redefining the standard of{" "}
            <span className="text-primary/80">academic excellence.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            The Institute of RIA provides a world-class environment for
            scholars, thought leaders, and innovators to shape the future of
            their industries.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base shadow-sm"
            >
              Explore Programs
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-background/50 px-8 py-6 text-base backdrop-blur-sm"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/10 py-20 md:py-32">
        <div className="mb-16 md:text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Our Core Pillars
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A foundation built on rigorous academics, global perspective, and
            distinguished leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="border-border/50 bg-background/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <HugeiconsIcon icon={Book01Icon} className="size-6" />
              </div>
              <CardTitle className="text-xl">Rigorous Curriculum</CardTitle>
              <CardDescription className="mt-2 text-base">
                Designed for the modern world.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                Our programs are built to challenge and inspire, preparing
                students for leadership through a multidisciplinary approach
                that blends theory with practical application.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <HugeiconsIcon icon={TeacherIcon} className="size-6" />
              </div>
              <CardTitle className="text-xl">Distinguished Faculty</CardTitle>
              <CardDescription className="mt-2 text-base">
                Learn from industry leaders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                Our educators bring decades of real-world experience into the
                classroom, providing unparalleled insights and mentorship to
                guide the next generation of innovators.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-background/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <HugeiconsIcon icon={Globe02Icon} className="size-6" />
              </div>
              <CardTitle className="text-xl">Global Network</CardTitle>
              <CardDescription className="mt-2 text-base">
                Connect with alumni across the globe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                Join an elite community of professionals who are shaping the
                future of their industries. Our worldwide network offers
                lifelong support, collaboration, and opportunity.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        id="programs"
        className="border-t border-border/40 py-20 md:py-32"
      >
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover specialized pathways designed to foster intellectual
              growth and professional excellence across diverse disciplines.
            </p>
          </div>
          <Button
            variant="ghost"
            className="mt-6 hidden md:mt-0 md:inline-flex"
          >
            View All Programs{" "}
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
          </Button>
        </div>

        <Tabs defaultValue="undergraduate" className="w-full">
          <TabsList className="mb-8 h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
            <TabsTrigger
              value="undergraduate"
              className="rounded-full border border-border/50 bg-muted/50 px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Undergraduate
            </TabsTrigger>
            <TabsTrigger
              value="graduate"
              className="rounded-full border border-border/50 bg-muted/50 px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Graduate
            </TabsTrigger>
            <TabsTrigger
              value="executive"
              className="rounded-full border border-border/50 bg-muted/50 px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Executive Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="undergraduate" className="mt-0 outline-none">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="flex flex-col border-border/50 shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>B.A. in Global Economics</CardTitle>
                  <CardDescription>4-Year Degree Program</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    A comprehensive study of international markets, economic
                    policy, and global financial systems. Prepare for leadership
                    roles in multinational organizations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Program Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-border/50 shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>B.S. in Data Sciences</CardTitle>
                  <CardDescription>4-Year Degree Program</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Master the analytical tools and computational methods
                    driving innovation today. Learn machine learning,
                    statistics, and large-scale data analysis.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Program Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="graduate" className="mt-0 outline-none">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="flex flex-col border-border/50 shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>Master of Public Policy</CardTitle>
                  <CardDescription>2-Year Degree Program</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Advanced training in policy analysis, program evaluation,
                    and public management to address complex societal
                    challenges.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Program Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="executive" className="mt-0 outline-none">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="flex flex-col border-border/50 shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>Executive Leadership Cert.</CardTitle>
                  <CardDescription>6-Month Intensive</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">
                    Designed for seasoned professionals looking to refine their
                    strategic vision and organizational leadership capabilities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Program Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-primary-foreground/30 text-primary-foreground"
            >
              Research & Innovation
            </Badge>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Pushing the boundaries of human knowledge.
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Our research centers are at the forefront of discovery, tackling
              the world&apos;s most pressing challenges through
              cross-disciplinary collaboration and cutting-edge resources.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={Certificate01Icon}
                  className="size-6 text-primary-foreground/90"
                />
                <span className="text-lg font-medium">
                  Over 50+ Patented Innovations
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={MicroscopeIcon}
                  className="size-6 text-primary-foreground/90"
                />
                <span className="text-lg font-medium">
                  State-of-the-Art Laboratories
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon
                  icon={LibraryIcon}
                  className="size-6 text-primary-foreground/90"
                />
                <span className="text-lg font-medium">
                  Comprehensive Digital Archives
                </span>
              </li>
            </ul>
            <Button variant="secondary" size="lg" className="rounded-full px-8">
              Explore Research Centers
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Note: In a real implementation this would use next/image with a configured registry.
                 Since the brief dictates "never hardcode a colour inside a component" and "never hardcode raw image URLs",
                 and there is no image registry present, we use styled semantic blocks with icons as visual placeholders. */}
            <div className="flex aspect-square items-center justify-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 text-center">
              <div>
                <h3 className="mb-2 font-heading text-4xl font-bold">15+</h3>
                <p className="text-sm font-medium text-primary-foreground/80">
                  Research Institutes
                </p>
              </div>
            </div>
            <div className="flex aspect-square translate-y-8 items-center justify-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 text-center">
              <div>
                <h3 className="mb-2 font-heading text-4xl font-bold">$40M</h3>
                <p className="text-sm font-medium text-primary-foreground/80">
                  Annual Funding
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
