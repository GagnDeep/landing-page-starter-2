import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import { FadeIn, RevealCover, StaggerContainer, StaggerItem, MagneticButton, ParallaxImage } from "@/components/visuals";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  const { hero, delivery, quality, customization, corporate, cta } = featuresContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-20">
      {/* 1. Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-primary text-primary-foreground">
        <div className="container px-6 text-center z-10">
          <RevealCover duration={1} coverColor="bg-background">
            <h1 className="text-6xl md:text-8xl font-heading mb-6">{hero.headline}</h1>
          </RevealCover>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto">{hero.subheadline}</p>
          </FadeIn>
        </div>
      </section>

      {/* 2. 24/7 Delivery Deep Dive */}
      <section className="py-24 md:py-32 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="up">
                <h2 className="font-heading text-5xl md:text-6xl mb-8">{delivery.heading}</h2>
                <p className="text-xl text-zinc-400 leading-relaxed">{delivery.body}</p>
              </FadeIn>
            </div>
            <FadeIn direction="left" distance={50}>
              <div className="relative h-[50vh] w-full">
                <Image src={images.features.delivery} alt="Delivery" fill className="object-cover opacity-70" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Artisanal Quality */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[60vh]">
              <ParallaxImage src={images.features.ingredients} alt="Quality" offset={40} className="w-full h-full" />
            </div>
            <div className="order-1 md:order-2">
              <FadeIn direction="up">
                <h2 className="font-heading text-5xl md:text-6xl mb-8">{quality.heading}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">{quality.body}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customization Engine */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-5xl md:text-6xl mb-8">{customization.heading}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16">{customization.body}</p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-8">
            {customization.steps.map((step, i) => (
              <StaggerItem key={i} direction="up" className="flex items-center">
                <div className="bg-muted px-6 py-4 rounded-full border border-border flex items-center gap-4">
                  <span className="font-heading text-primary text-xl">{i + 1}</span>
                  <span className="font-medium">{step}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Corporate Gifting */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-background p-12 md:p-20 shadow-sm text-center max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="font-heading text-4xl md:text-5xl mb-6">{corporate.heading}</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">{corporate.body}</p>
              <Button variant="outline" size="lg" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background h-14 px-8">
                {corporate.cta}
              </Button>
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
