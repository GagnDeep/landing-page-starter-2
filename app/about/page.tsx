import { aboutContent } from "@/content/about";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export const metadata = aboutContent.meta;

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24">
        <AnimatedGradientMesh className="opacity-40" />
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.historicAtelier} alt="Historic Atelier" fill className="object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6">{aboutContent.hero.title}</h1>
          <p className="text-xl text-muted-foreground font-serif">{aboutContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-heading mb-8">{aboutContent.founderStory.heading}</h2>
          <p className="text-lg leading-loose text-muted-foreground font-serif first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:mr-2 first-letter:float-left">
            {aboutContent.founderStory.text}
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Philosophy */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading text-center mb-16">{aboutContent.philosophy.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutContent.philosophy.pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-px bg-primary mb-6"></div>
                <h3 className="text-xl font-heading">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Generation */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-heading mb-6">{aboutContent.nextGeneration.heading}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{aboutContent.nextGeneration.text}</p>
             </div>
             <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image src={IMAGES.masterTailor} alt="Master Tailor" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-heading text-center mb-16">{aboutContent.timeline.heading}</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {aboutContent.timeline.events.map((event, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border bg-background shadow-sm">
                  <div className="text-primary font-mono text-sm mb-2">{event.year}</div>
                  <h3 className="font-heading text-lg mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading mb-6">{aboutContent.cta.heading}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">{aboutContent.cta.text}</p>
          <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm inline-block hover:bg-primary/90 transition-colors">
            {aboutContent.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
