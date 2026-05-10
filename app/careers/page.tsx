import { careersContent } from "@/content/careers"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: careersContent.meta.title,
  description: careersContent.meta.description,
}

export default function CareersPage() {
  const { careersHero, cultureOverview, openPositionsList, benefitsGrid, generalApplicationCta } = careersContent

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50svh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-16 text-center">
         <AnimatedGradientMesh opacity={0.15} />
         <div className="relative z-10 container mx-auto max-w-3xl">
           <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground">
             {careersHero.heading}
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide leading-relaxed">
             {careersHero.subheading}
           </p>
         </div>
      </section>

      {/* Culture */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-sm tracking-widest uppercase text-primary mb-8">{cultureOverview.heading}</h2>
          <div className="space-y-8 text-xl md:text-2xl font-light text-foreground/90 leading-relaxed">
             {cultureOverview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
             ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <h2 className="font-heading text-4xl md:text-5xl">{openPositionsList.heading}</h2>
           </div>

           <div className="space-y-4">
              {openPositionsList.positions.map((position) => (
                 <Link href={`mailto:${generalApplicationCta.email}?subject=Application: ${position.title}`} key={position.id} className="block group">
                    <Card className="border-border bg-card hover:border-primary/50 transition-colors rounded-none">
                       <CardContent className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="space-y-2">
                             <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors">{position.title}</h3>
                             <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-light">
                                <span>{position.department}</span>
                                <span className="hidden md:inline text-border">•</span>
                                <span>{position.location}</span>
                                <span className="hidden md:inline text-border">•</span>
                                <span>{position.type}</span>
                             </div>
                          </div>
                          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                             <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                          </div>
                       </CardContent>
                    </Card>
                 </Link>
              ))}
           </div>

           <div className="mt-12 p-8 border border-border/50 bg-muted/10 text-center">
              <p className="text-muted-foreground font-light">{openPositionsList.noPositionsText}</p>
           </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-card border-y border-border">
         <div className="container mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl mb-16 text-center">{benefitsGrid.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               {benefitsGrid.benefits.map((benefit, i) => (
                  <div key={i} className="space-y-4">
                     <h3 className="font-heading text-xl">{benefit.title}</h3>
                     <p className="text-muted-foreground font-light leading-relaxed">{benefit.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* General App CTA */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative text-center overflow-hidden">
         <AnimatedGradientMesh opacity={0.2} />
         <div className="container mx-auto max-w-2xl relative z-10">
           <h2 className="font-heading text-4xl md:text-5xl mb-6">{generalApplicationCta.heading}</h2>
           <p className="text-lg text-primary-foreground/80 mb-12 font-light">{generalApplicationCta.description}</p>
           <Button asChild variant="secondary" size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase bg-background text-foreground hover:bg-background/90">
             <Link href={`mailto:${generalApplicationCta.email}`}>
               {generalApplicationCta.ctaLabel}
             </Link>
           </Button>
         </div>
      </section>
    </>
  )
}
