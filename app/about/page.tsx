import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";
import { ElegantReveal } from "@/components/visuals/ElegantReveal";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export const metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* 1. Hero Story */}
      <section className="relative flex min-h-[60vh] items-center py-20">
        <AnimatedGradientMesh />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ElegantReveal>
              <div className="flex flex-col items-start gap-6">
                <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                  {aboutContent.hero.headline}
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                  {aboutContent.hero.subheadline}
                </p>
              </div>
            </ElegantReveal>
            <ElegantReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images.about.hero.src}
                  alt={images.about.hero.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </ElegantReveal>
          </div>
        </div>
      </section>

      {/* 2. Our Mission & Vision */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-12 font-serif text-3xl font-bold md:text-4xl">
                {aboutContent.missionVision.title}
              </h2>
              <div className="grid gap-12 md:grid-cols-2 text-left">
                <div className="space-y-4 rounded-lg border border-border p-8 shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-primary">Mission</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {aboutContent.missionVision.mission}
                  </p>
                </div>
                <div className="space-y-4 rounded-lg border border-border bg-primary/5 p-8 shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-primary">Vision</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {aboutContent.missionVision.vision}
                  </p>
                </div>
              </div>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 3. The Founder's Journey */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ElegantReveal>
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-background shadow-xl max-w-md mx-auto lg:mx-0">
                <Image
                  src={images.founder.src}
                  alt={images.founder.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </ElegantReveal>
            <ElegantReveal>
              <div className="flex flex-col items-start gap-6">
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  {aboutContent.founderJourney.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutContent.founderJourney.body}
                </p>
              </div>
            </ElegantReveal>
          </div>
        </div>
      </section>

      {/* 4. The Team */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                {aboutContent.team.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {aboutContent.team.description}
              </p>
            </div>
          </ElegantReveal>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
             <ElegantReveal>
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images.about.team.src}
                  alt={images.about.team.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </ElegantReveal>
            <div className="flex flex-col gap-8">
              {aboutContent.team.members.map((member, index) => (
                <ElegantReveal key={index}>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-serif text-xl font-bold">{member.role}</h3>
                    <p className="mt-2 text-muted-foreground">{member.description}</p>
                  </div>
                </ElegantReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <h2 className="mb-16 text-center font-serif text-3xl font-bold md:text-4xl">
              {aboutContent.values.title}
            </h2>
          </ElegantReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.list.map((value, index) => (
              <ElegantReveal key={index}>
                <div className="flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-sm text-center">
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="mb-4 font-serif text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline / History */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ElegantReveal>
            <h2 className="mb-16 text-center font-serif text-3xl font-bold md:text-4xl">
              {aboutContent.timeline.title}
            </h2>
            <div className="relative border-l-2 border-primary/30 ml-4 md:mx-auto md:ml-auto">
              {aboutContent.timeline.events.map((event, index) => (
                <div key={index} className="mb-10 pl-8 relative">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-card" />
                  <div className="font-serif text-2xl font-bold text-primary mb-2">
                    {event.year}
                  </div>
                  <p className="text-lg text-foreground">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 7. The Patiala Connection */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <ElegantReveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
              {aboutContent.localConnection.title}
            </h2>
            <p className="text-lg leading-relaxed opacity-90 md:text-xl">
              {aboutContent.localConnection.body}
            </p>
          </ElegantReveal>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <ElegantReveal>
            <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">
              {aboutContent.cta.headline}
            </h2>
            <CTAGlow>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {aboutContent.cta.buttonText}
              </Link>
            </CTAGlow>
          </ElegantReveal>
        </div>
      </section>
    </div>
  );
}
