import Image from "next/image";
import Link from "next/link";
import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import { ElegantReveal } from "@/components/visuals/ElegantReveal";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export const metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center py-20 text-center">
        <AnimatedGradientMesh />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <ElegantReveal>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl max-w-4xl mx-auto">
              {featuresContent.hero.headline}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {featuresContent.hero.subheadline}
            </p>
          </ElegantReveal>
        </div>
      </section>

      {/* 2. Service Breakdown */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <h2 className="mb-16 text-center font-serif text-3xl font-bold md:text-4xl">
              {featuresContent.servicesBreakdown.title}
            </h2>
          </ElegantReveal>
          <div className="grid gap-12 lg:grid-cols-2">
            {featuresContent.servicesBreakdown.services.map((service, index) => {
              const imageKey = Object.keys(images.services)[index % 4] as keyof typeof images.services;
              const image = images.services[imageKey];
              return (
                <ElegantReveal key={index}>
                  <div className="group flex flex-col sm:flex-row gap-6 overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="relative h-48 w-full sm:w-48 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-3 font-serif text-2xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ElegantReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The "Alteration-Free" Guarantee Explained */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ElegantReveal>
              <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">
                {featuresContent.guarantee.title}
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                {featuresContent.guarantee.body}
              </p>
            </ElegantReveal>
          </div>
        </div>
      </section>

      {/* 4. Fabric & Embellishment Handling */}
      <section className="py-24 relative">
        <DotMatrixGrid />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ElegantReveal>
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  {featuresContent.fabricHandling.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuresContent.fabricHandling.body}
                </p>
              </div>
            </ElegantReveal>
            <ElegantReveal>
               <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                 <Image
                    src={images.fabric.src}
                    alt={images.fabric.alt}
                    fill
                    className="object-cover"
                 />
               </div>
            </ElegantReveal>
          </div>
        </div>
      </section>

      {/* 5. Express/Priority Services */}
      <section className="bg-muted/30 py-24">
         <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
           <ElegantReveal>
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                {featuresContent.priorityServices.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {featuresContent.priorityServices.body}
              </p>
           </ElegantReveal>
         </div>
      </section>

      {/* 6. Consultation Process */}
      <section className="bg-card py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <h2 className="mb-16 text-center font-serif text-3xl font-bold md:text-4xl">
              {featuresContent.consultationProcess.title}
            </h2>
          </ElegantReveal>
          <div className="mx-auto max-w-4xl">
            {featuresContent.consultationProcess.steps.map((step, index) => (
              <ElegantReveal key={index}>
                <div className="relative mb-8 flex items-center gap-6 rounded-lg border border-border p-6 shadow-sm bg-background">
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-bold text-primary">
                     {index + 1}
                   </div>
                   <p className="text-lg text-foreground font-medium">{step}</p>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quality Assurance */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <ElegantReveal>
            <svg className="mx-auto mb-8 h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5" />
            </svg>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
              {featuresContent.qualityAssurance.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuresContent.qualityAssurance.body}
            </p>
          </ElegantReveal>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <ElegantReveal>
            <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">
              {featuresContent.cta.headline}
            </h2>
            <CTAGlow>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-background px-10 text-lg font-bold text-foreground shadow transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {featuresContent.cta.buttonText}
              </Link>
            </CTAGlow>
          </ElegantReveal>
        </div>
      </section>
    </div>
  );
}
