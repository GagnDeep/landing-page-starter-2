import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";
import { FadeIn, RevealCover, StaggerContainer, StaggerItem, MagneticButton, ParallaxImage } from "@/components/visuals";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const { hero, story, founders, philosophy, behindScenes, cta } = aboutContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-20">
      {/* 1. Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-muted">
        <div className="container px-6 text-center">
          <RevealCover duration={1.2}>
            <h1 className="text-5xl md:text-7xl font-heading mb-6">{hero.headline}</h1>
          </RevealCover>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">{hero.subheadline}</p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl mb-12 text-primary">{story.heading}</h2>
          </FadeIn>
          <StaggerContainer className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            {story.paragraphs.map((p, i) => (
              <StaggerItem key={i} direction="up">
                <p>{p}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. The Founders */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative h-[60vh] w-full grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={images.about.founders} alt="The Founders" fill className="object-cover" />
              </div>
            </FadeIn>
            <div>
              <FadeIn direction="up">
                <h2 className="font-heading text-4xl mb-6">{founders.heading}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{founders.bio}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Philosophy */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl md:text-5xl mb-16 text-center">{philosophy.heading}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophy.pillars.map((pillar, i) => (
              <FadeIn key={pillar.number} delay={i * 0.2} direction="up" className="border-t border-border pt-8">
                <span className="font-heading text-5xl text-primary/20 block mb-6">{pillar.number}</span>
                <h3 className="font-heading text-2xl mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Behind the Scenes */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="up">
                <h2 className="font-heading text-5xl mb-6">{behindScenes.heading}</h2>
                <p className="text-xl text-zinc-400 font-light leading-relaxed">{behindScenes.body}</p>
              </FadeIn>
            </div>
            <FadeIn direction="left" distance={100} duration={1}>
              <div className="relative h-[60vh] w-full">
                <Image src={images.about.craftsmanship} alt="Craftsmanship" fill className="object-cover opacity-80" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="py-32 md:py-48 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="font-heading text-6xl md:text-8xl mb-12 max-w-4xl mx-auto leading-tight">
              {cta.heading}
            </h2>
            <MagneticButton intensity={0.4}>
              <Button size="lg" className="rounded-none bg-background text-foreground hover:bg-background/90 h-16 px-12 text-xl font-medium">
                {cta.cta}
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
