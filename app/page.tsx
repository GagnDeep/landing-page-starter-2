import { homeContent } from "@/content/home";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { AnimatedNeedleThread } from "@/components/visuals/AnimatedNeedleThread";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { AnimatedMeasurementChart } from "@/components/visuals/AnimatedMeasurementChart";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { AvatarStack } from "@/components/visuals/AvatarStack";
import { SectionDivider } from "@/components/visuals/SectionDivider";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* 1. Hero / Atelier Entrance */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        <AnimatedGradientMesh className="opacity-60" />
        <DotMatrixGrid className="opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <span className="text-primary tracking-widest uppercase text-xs font-bold mb-6 block">Established 2004</span>
          <h1 className="text-5xl md:text-7xl font-heading text-foreground max-w-4xl leading-tight mb-8">
            {homeContent.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-sans">
            {homeContent.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAGlow>
              <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm inline-flex items-center gap-2 hover:bg-primary/90 transition-colors">
                {homeContent.hero.ctaPrimary}
              </Link>
            </CTAGlow>
            <Link href="/about" className="px-8 py-4 bg-transparent border border-border text-foreground font-medium rounded-sm hover:bg-secondary/10 transition-colors">
              {homeContent.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* 2. The Legacy Statement */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-8">{homeContent.legacy.heading}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif">
            {homeContent.legacy.text}
          </p>
        </div>
      </section>

      {/* 3. The Master's Touch */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden group">
               <Image
                 src={IMAGES.hero}
                 alt="Master Tailor at work"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                 <AnimatedNeedleThread />
               </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">{homeContent.videoTeaser.heading}</h2>
              <p className="text-lg text-muted-foreground mb-8">{homeContent.videoTeaser.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Pillars */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-heading text-center mb-16">{homeContent.services.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.services.items.map((service, idx) => (
              <div key={idx} className="p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-colors bg-card">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
                  {idx === 0 ? "B" : idx === 1 ? "M" : "N"}
                </div>
                <h3 className="text-xl font-heading mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. NRI Experience */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-primary">{homeContent.nriFocus.heading}</h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                {homeContent.nriFocus.text}
              </p>
              <AvatarStack className="mb-8" />
              <Link href="/features" className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4">
                Explore Remote Service <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden order-1 lg:order-2">
               <Image src={IMAGES.nriFocus} alt="NRI Client Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7. Featured Look & Details */}
      <section className="py-0">
        <div className="relative h-[60vh] md:h-[80vh] w-full">
           <Image src={IMAGES.featuredLook} alt="Bespoke Suit" fill className="object-cover" style={{ objectPosition: 'center 20%' }} />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-full p-12 text-center">
             <h2 className="text-3xl font-heading text-foreground">{homeContent.craftDetails.heading}</h2>
           </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 -mt-16 relative z-10 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-lg shadow-xl shadow-background/50">
               <div className="relative aspect-square w-full mb-6 rounded overflow-hidden">
                 <Image src={IMAGES.detailLapel} alt="Lapel" fill className="object-cover" />
               </div>
               <h3 className="font-heading text-lg mb-2">{homeContent.craftDetails.items[0].title}</h3>
               <p className="text-sm text-muted-foreground">{homeContent.craftDetails.items[0].description}</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg shadow-xl shadow-background/50 md:-translate-y-8">
               <div className="relative aspect-square w-full mb-6 rounded overflow-hidden">
                 <Image src={IMAGES.detailButtonhole} alt="Buttonhole" fill className="object-cover" />
               </div>
               <h3 className="font-heading text-lg mb-2">{homeContent.craftDetails.items[1].title}</h3>
               <p className="text-sm text-muted-foreground">{homeContent.craftDetails.items[1].description}</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg shadow-xl shadow-background/50">
               <div className="relative aspect-square w-full mb-6 rounded overflow-hidden">
                 <Image src={IMAGES.detailLining} alt="Lining" fill className="object-cover" />
               </div>
               <h3 className="font-heading text-lg mb-2">{homeContent.craftDetails.items[2].title}</h3>
               <p className="text-sm text-muted-foreground">{homeContent.craftDetails.items[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonial 1 */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <svg className="w-12 h-12 mx-auto text-primary/40 mb-8" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-2xl md:text-3xl font-heading text-foreground mb-8 leading-relaxed">
            "{homeContent.testimonialGenerational.quote}"
          </p>
          <div className="text-sm uppercase tracking-widest font-semibold text-primary">
            {homeContent.testimonialGenerational.author}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            {homeContent.testimonialGenerational.yearsClient}
          </div>
        </div>
      </section>

      {/* 10-13. The Process (Simplified visual representation) */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-24">{homeContent.process.heading}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              {homeContent.process.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="text-primary font-mono text-2xl pt-1 border-t-2 border-primary w-12 flex-shrink-0">{step.step}</div>
                  <div>
                    <h3 className="text-xl font-heading mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sticky top-32">
              <AnimatedMeasurementChart />
            </div>
          </div>
        </div>
      </section>

      {/* 14. Metrics */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {homeContent.metrics.items.map((metric, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-6xl font-heading text-primary mb-4">{metric.value}</div>
                <div className="text-sm uppercase tracking-widest opacity-80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. Location & Final CTA */}
      <section className="py-32 relative">
        <DotMatrixGrid className="opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-heading mb-8">{homeContent.finalCta.heading}</h2>
          <p className="text-xl text-muted-foreground mb-12">
            {homeContent.finalCta.text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <CTAGlow>
              <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm w-full sm:w-auto inline-flex items-center justify-center hover:bg-primary/90 transition-colors">
                {homeContent.finalCta.ctaPrimary}
              </Link>
             </CTAGlow>
             <Link href="/pricing" className="px-8 py-4 border border-border text-foreground font-medium rounded-sm hover:bg-secondary/10 transition-colors">
                {homeContent.finalCta.ctaSecondary}
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
