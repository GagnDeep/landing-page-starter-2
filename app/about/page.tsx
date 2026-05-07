import Image from "next/image";
import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
  RevealText,
  HoverScaleCard,
} from "@/components/visuals";

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  const c = aboutContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        {/* 1. Hero */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn direction="right">
                  <h1 className="font-heading text-5xl md:text-7xl font-medium mb-6 leading-tight">
                    <RevealText text={c.hero.title} />
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    {c.hero.subtitle}
                  </p>
                </FadeIn>
              </div>
              <div className="relative h-[60vh] overflow-hidden">
                <ParallaxImage src={images.hero.about} alt="Sangam Kitchen" priority />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Timeline */}
        <section className="py-32 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <FadeIn direction="up" className="text-center mb-24">
              <h2 className="font-heading text-4xl md:text-5xl font-medium">{c.timeline.title}</h2>
            </FadeIn>

            <div className="relative border-l-2 border-primary/20 pl-8 md:pl-16 space-y-24 ml-4 md:ml-0">
              {c.timeline.events.map((event, i) => (
                <FadeIn key={i} direction="up" className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="font-heading text-3xl font-bold text-primary">{event.year}</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-medium mb-4">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Values Grid */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="mb-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-medium">{c.values.title}</h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {c.values.items.map((value, i) => (
                <StaggerItem key={i}>
                  <div className="border-t border-primary/30 pt-6">
                    <h3 className="font-heading text-2xl font-medium mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 4. Team */}
        <section className="py-32 bg-secondary/10">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="mb-20 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-medium">{c.team.title}</h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {c.team.members.map((member, i) => {
                const teamImages = [images.team.headChef, images.team.internationalChef, images.team.eventDirector];
                return (
                  <StaggerItem key={i}>
                    <HoverScaleCard className="group">
                      <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden bg-muted">
                        <Image
                          src={teamImages[i]}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-heading text-2xl font-medium mb-2">{member.name}</h3>
                      <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                    </HoverScaleCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
