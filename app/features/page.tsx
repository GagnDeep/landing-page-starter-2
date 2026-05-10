import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

import { featuresContent } from "@/content/features"
import { Images } from "@/lib/images"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { MicroIconSet } from "@/components/visuals/MicroIconSet"
import { CTAGlow } from "@/components/visuals/CTAGlow"
import { AnimatedDrivingPath } from "@/components/visuals/AnimatedDrivingPath"

export const metadata: Metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
}

export default function FeaturesPage() {
  const content = featuresContent

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* PageHeader */}
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
        <div className="absolute bottom-0 w-full translate-y-1/2 opacity-50">
           <AnimatedDrivingPath />
        </div>
      </section>

      {/* Overview & Core Types */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{content.serviceOverview.title}</h2>
          <p className="text-lg text-muted-foreground">{content.serviceOverview.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="border-accent shadow-md relative overflow-hidden group">
             <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <CardHeader>
               <MicroIconSet icon="car" size="lg" className="mb-4 text-accent bg-accent/10" />
               <CardTitle className="font-heading text-2xl">{content.automaticTrainingDetail.title}</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground leading-relaxed">
                 {content.automaticTrainingDetail.description}
               </p>
             </CardContent>
          </Card>

          <Card className="border-border shadow-sm group">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <CardHeader>
               <MicroIconSet icon="wheel" size="lg" className="mb-4" />
               <CardTitle className="font-heading text-2xl">{content.manualTrainingDetail.title}</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground leading-relaxed">
                 {content.manualTrainingDetail.description}
               </p>
             </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Modules Grid */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { ...content.realTrafficCurriculum, icon: "traffic" as const },
               { ...content.highwayTraining, icon: "road" as const },
               { ...content.nightDriving, icon: "car" as const },
               { ...content.refresherCourses, icon: "wheel" as const },
               { ...content.licenseAssistance, icon: "traffic" as const },
               { ...content.mockTests, icon: "road" as const },
             ].map((feature, idx) => (
               <Card key={idx} className="bg-card border-border hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <MicroIconSet icon={feature.icon} size="md" className="mb-2" />
                    <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Practical Features Split */}
      <section className="py-24 px-4 container mx-auto space-y-24">
        {/* Theory & Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <Image src={Images.maintenanceClass.src} alt={Images.maintenanceClass.alt} fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">{content.theoreticalClasses.title}</h3>
              <p className="text-lg text-muted-foreground mt-2">{content.theoreticalClasses.description}</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">{content.vehicleMaintenanceBasics.title}</h3>
              <p className="text-lg text-muted-foreground mt-2">{content.vehicleMaintenanceBasics.description}</p>
            </div>
          </div>
        </div>

        {/* Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
           <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border bg-muted flex items-center justify-center p-8">
               <div className="w-full space-y-6">
                  <div className="bg-background p-4 rounded-lg shadow-sm border border-border flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">1</div>
                     <div><h4 className="font-bold">{content.customizedSchedules.title}</h4><p className="text-sm text-muted-foreground">{content.customizedSchedules.description}</p></div>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm border border-border flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">2</div>
                     <div><h4 className="font-bold">{content.doorstepPickup.title}</h4><p className="text-sm text-muted-foreground">{content.doorstepPickup.description}</p></div>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm border border-border flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">3</div>
                     <div><h4 className="font-bold">{content.progressTracking.title}</h4><p className="text-sm text-muted-foreground">{content.progressTracking.description}</p></div>
                  </div>
               </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Flexible & Accommodating</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We know learning to drive needs to fit into your daily life. Our logistics are designed around your convenience and comfort.
            </p>
             <div className="pt-4 border-t border-border mt-6">
                <h4 className="font-bold text-lg mb-2">{content.femaleInstructorOption.title}</h4>
                <p className="text-muted-foreground">{content.femaleInstructorOption.description}</p>
             </div>
          </div>
        </div>
      </section>

      {/* PreFooter CTA */}
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
