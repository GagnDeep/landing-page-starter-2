import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { seo, hero, services, modalities, finalCta } from "@/content/features";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950 text-slate-50">
        <FloatingBlobs color="rgba(56, 189, 248, 0.15)" count={3} />
        <DotMatrixPattern opacity={0.15} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Services List (2, 3, 4, 5, 6 mapped from content) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            // Determine fallback image based on index/id for visual variety since we don't have distinct images for all 5 in the registry
            const imageSrc = service.id === "paralysis-neuro"
                ? images.services.paralysis.src
                : service.id === "chronic-pain"
                ? images.services.chronicPain.src
                : service.id === "sports-injury"
                ? images.blog.orthoRehab.src
                : service.id === "post-operative"
                ? images.clinic.equipment.src
                : images.hero.about.src;

            const imageAlt = service.id === "paralysis-neuro"
                ? images.services.paralysis.alt
                : service.id === "chronic-pain"
                ? images.services.chronicPain.alt
                : service.id === "sports-injury"
                ? images.blog.orthoRehab.alt
                : service.id === "post-operative"
                ? images.clinic.equipment.alt
                : images.hero.about.alt;

            return (
              <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`relative h-[500px] rounded-3xl overflow-hidden shadow-xl ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
                </div>

                <div className={`space-y-8 ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary mb-2">
                    <span className="font-mono text-sm font-bold tracking-widest">0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="pt-4 border-t border-border/50">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Core Modalities & Techniques</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.techniques.map((tech, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground font-medium text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Service Comparison / Modalities */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{modalities.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{modalities.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalities.items.map((modality, idx) => {
              const iconName = idx === 0 ? "activity" : idx === 1 ? "flash" : idx === 2 ? "heartbeat" : "shield";
              return (
                <div key={idx} className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col items-center text-center hover:border-primary/30 transition-colors">
                  <MicroIconSet icon={iconName} className="mb-6 w-16 h-16 bg-transparent border-none text-foreground" size={40} />
                  <h3 className="text-lg font-bold font-heading mb-3">{modality.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{modality.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
        <AnimatedGradientMesh speed={30} colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)", "rgba(0,0,0,0)"]} className="absolute inset-0" />
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">{finalCta.title}</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {finalCta.description}
          </p>
          <div className="pt-8">
             <Button size="lg" variant="secondary" asChild className="rounded-full h-14 px-10 text-lg shadow-2xl">
               <Link href={finalCta.cta.href}>{finalCta.cta.label}</Link>
             </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
