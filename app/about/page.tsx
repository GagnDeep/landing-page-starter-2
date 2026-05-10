import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import { aboutContent } from "@/content/about"
import { Images } from "@/lib/images"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { MicroIconSet } from "@/components/visuals/MicroIconSet"
import { CTAGlow } from "@/components/visuals/CTAGlow"
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
}

export default function AboutPage() {
  const content = aboutContent

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 3. PageHeader */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-border bg-muted/30">
        <AnimatedGradientMesh />
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground drop-shadow-sm">
            {content.pageHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            {content.pageHeader.subtitle}
          </p>
        </div>
      </section>

      {/* 4 & 5. StorySection & FounderMessage */}
      <section className="py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{content.storySection.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.storySection.content}
            </p>
          </div>
          <div className="w-full">
            <CodeWindowTyping
              text={content.founderMessage.quote}
              author={content.founderMessage.author}
              className="bg-accent/5 border-accent/20 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 6. KadarKhanProfile */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <Image src={Images.instructorPortrait.src} alt="Background" fill className="object-cover blur-sm" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-primary-foreground/20">
               <Image
                src={Images.instructorPortrait.src}
                alt={Images.instructorPortrait.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
                {content.kadarKhanProfile.title}
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-background">{content.kadarKhanProfile.name}</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                {content.kadarKhanProfile.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GovtRegistrationBanner */}
      <section className="py-12 bg-accent text-accent-foreground border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">{content.govtRegistrationBanner.title}</h2>
          <p className="text-accent-foreground/80 font-medium max-w-2xl mx-auto">{content.govtRegistrationBanner.description}</p>
        </div>
      </section>

      {/* 8. CoreValuesGrid */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{content.coreValuesGrid.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.coreValuesGrid.values.map((value, index) => (
            <Card key={index} className="bg-card border-border shadow-sm text-center pt-6">
              <CardHeader className="pb-4">
                <MicroIconSet icon={index === 0 ? "car" : index === 1 ? "wheel" : index === 2 ? "road" : "traffic"} size="md" className="mx-auto mb-4" />
                <CardTitle className="font-heading text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 9, 10, 11, 12 - Facility, Fleet, Methodology, RealTraffic combined via Alternating blocks */}
      <SectionDivider />

      <section className="py-24 px-4 container mx-auto space-y-24">
        {/* Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <Image src={Images.officeFront.src} alt={Images.officeFront.alt} fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">{content.facilityShowcase.title}</h3>
            <p className="text-lg text-muted-foreground">{content.facilityShowcase.description}</p>

            <div className="pt-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold">{content.fleetDetails.title}</h3>
              <p className="text-lg text-muted-foreground mt-2">{content.fleetDetails.description}</p>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
           <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <Image src={Images.drivingTheory.src} alt={Images.drivingTheory.alt} fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">{content.teachingMethodology.title}</h3>
            <p className="text-lg text-muted-foreground">{content.teachingMethodology.description}</p>

            <div className="pt-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent">{content.realTrafficFocus.title}</h3>
              <p className="text-lg text-muted-foreground mt-2">{content.realTrafficFocus.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 & 14 Community & Milestones */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{content.communityImpact.title}</h2>
          <p className="text-xl text-muted-foreground">{content.communityImpact.description}</p>

          <div className="pt-12 text-left relative border-l-2 border-primary/20 ml-4 md:mx-auto max-w-xl">
             <h3 className="font-heading text-2xl font-bold mb-8 pl-8">{content.milestonesTimeline.title}</h3>
             {content.milestonesTimeline.milestones.map((ms, idx) => (
                <div key={idx} className="relative pl-8 mb-8 last:mb-0">
                  <div className="absolute w-4 h-4 rounded-full bg-accent -left-[9px] top-1.5 border-4 border-background"></div>
                  <div className="font-bold text-primary">{ms.year}</div>
                  <div className="text-muted-foreground">{ms.event}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 16. Student Stats */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          {content.studentSuccessStats.stats.map((stat, idx) => (
            <div key={idx} className="py-4 md:py-0 flex flex-col items-center justify-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-heading text-primary">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 19. PreFooter CTA */}
      <section className="py-32 px-4 container mx-auto text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/5 rounded-3xl -m-4 md:-m-8"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{content.preFooterCta.title}</h2>
          <p className="text-xl text-muted-foreground">
            {content.preFooterCta.description}
          </p>
          <CTAGlow>
            <Button size="lg" className="h-14 px-10 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold" asChild>
              <Link href={content.preFooterCta.cta.href}>{content.preFooterCta.cta.label}</Link>
            </Button>
          </CTAGlow>
        </div>
      </section>

    </div>
  )
}
