import { featuresContent } from "@/content/features"
import { IMAGES } from "@/lib/images"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { HowItWorksDiagram } from "@/components/visuals/how-it-works-diagram"
import { CodeWindowTyping } from "@/components/visuals/code-window-typing"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
}

export default function ServicesPage() {
  const {
    servicesHero,
    serviceDetail1Planning,
    serviceDetail2Design,
    serviceDetail3Concierge,
    serviceDetail4Production,
    theA2zeeDifference,
    servicesCta,
  } = featuresContent

  return (
    <>
      {/* 1: services-hero */}
      <section className="relative min-h-[70svh] flex items-center justify-center overflow-hidden bg-background pt-24 border-b border-border/50">
        <AnimatedGradientMesh opacity={0.6} />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground drop-shadow-sm">
            {servicesHero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
            {servicesHero.subheading}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24 max-w-7xl">
         {/* 2: service-detail-1-planning */}
         <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden bg-muted">
               <Image src={IMAGES.journalArticle2.src} alt={IMAGES.journalArticle2.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="space-y-8">
               <div className="inline-block px-3 py-1 border border-primary/30 text-primary text-xs tracking-widest uppercase mb-4">Phase 01</div>
               <h2 className="font-heading text-4xl md:text-5xl">{serviceDetail1Planning.heading}</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">{serviceDetail1Planning.description}</p>
               <ul className="space-y-4 pt-4">
                  {serviceDetail1Planning.bullets.map((bullet, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-foreground">{bullet}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         {/* 3: service-detail-2-design */}
         <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
               <div className="inline-block px-3 py-1 border border-primary/30 text-primary text-xs tracking-widest uppercase mb-4">Phase 02</div>
               <h2 className="font-heading text-4xl md:text-5xl">{serviceDetail2Design.heading}</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">{serviceDetail2Design.description}</p>
               <ul className="space-y-4 pt-4">
                  {serviceDetail2Design.bullets.map((bullet, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-foreground">{bullet}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] lg:h-[700px] overflow-hidden bg-muted">
               <Image src={IMAGES.detailTableSetting.src} alt={IMAGES.detailTableSetting.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
         </section>

         {/* 4: service-detail-3-concierge */}
         <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden bg-muted flex items-center justify-center p-8">
               {/* Abstract representation of global coordination */}
               <HowItWorksDiagram className="w-full h-full opacity-80" />
            </div>
            <div className="space-y-8">
               <div className="inline-block px-3 py-1 border border-primary/30 text-primary text-xs tracking-widest uppercase mb-4">Phase 03</div>
               <h2 className="font-heading text-4xl md:text-5xl">{serviceDetail3Concierge.heading}</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">{serviceDetail3Concierge.description}</p>
               <ul className="space-y-4 pt-4">
                  {serviceDetail3Concierge.bullets.map((bullet, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-foreground">{bullet}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         {/* 5: service-detail-4-production */}
         <section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
               <div className="inline-block px-3 py-1 border border-primary/30 text-primary text-xs tracking-widest uppercase mb-4">Phase 04</div>
               <h2 className="font-heading text-4xl md:text-5xl">{serviceDetail4Production.heading}</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">{serviceDetail4Production.description}</p>
               <ul className="space-y-4 pt-4">
                  {serviceDetail4Production.bullets.map((bullet, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="text-foreground">{bullet}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] lg:h-[700px] overflow-hidden flex items-center justify-center bg-card border border-border">
               <div className="w-full max-w-md p-4">
                 <CodeWindowTyping
                   lines={[
                     "SYSTEM CHECK: MAIN STAGE",
                     "POWER DISTRIBUTION: LOAD BALANCED",
                     "AUDIO ARRAYS: CALIBRATED",
                     "LIGHTING DMX: SYNCED",
                     "STRUCTURAL LOAD TESTS: PASSED",
                     "PRODUCTION READY."
                   ]}
                 />
               </div>
            </div>
         </section>
      </div>

      {/* 6: the-a2zee-difference */}
      <section className="py-32 px-6 bg-muted/20">
         <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-24">
               <h2 className="font-heading text-4xl md:text-5xl">{theA2zeeDifference.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {theA2zeeDifference.points.map((point, i) => (
                  <div key={i} className="bg-card p-10 border border-border shadow-sm hover:shadow-md transition-shadow">
                     <h3 className="font-heading text-2xl mb-4 text-primary">{point.title}</h3>
                     <p className="text-muted-foreground font-light leading-relaxed">{point.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7: services-cta */}
      <section className="py-32 px-6 bg-background relative text-center border-t border-border">
         <div className="container mx-auto max-w-2xl relative z-10">
           <h2 className="font-heading text-4xl md:text-5xl mb-6">{servicesCta.heading}</h2>
           <p className="text-lg text-muted-foreground mb-12 font-light">{servicesCta.subheading}</p>
           <Button asChild size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase">
             <Link href={servicesCta.cta.href}>
               {servicesCta.cta.label}
             </Link>
           </Button>
         </div>
      </section>
    </>
  )
}
