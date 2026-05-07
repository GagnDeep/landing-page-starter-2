import { careersContent } from "@/content/careers";
import { images } from "@/lib/images";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { FadeIn, RevealText, ParallaxImage, StaggerContainer, StaggerItem, MagneticButton } from "@/components/visuals";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: careersContent.meta.title,
  description: careersContent.meta.description,
};

export default function CareersPage() {
  const c = careersContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-24 pb-24 bg-background">
        {/* 1. Hero */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="font-heading text-5xl md:text-7xl font-medium mb-6 leading-tight">
                <RevealText text={c.hero.title} />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground italic font-heading">
                {c.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <ParallaxImage src={images.hero.careers} alt="Sangam Caterer Culinary Team" priority />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Culture */}
        <section className="py-32 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-medium">{c.culture.title}</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {c.culture.blurbs.map((blurb, i) => (
                <StaggerItem key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <span className="font-heading text-2xl font-bold text-primary">0{i+1}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-medium mb-4">{blurb.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{blurb.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 3. Open Roles */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <FadeIn direction="up" className="mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-center">{c.openRoles.title}</h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {c.openRoles.roles.map((role, i) => (
                  <AccordionItem key={i} value={`role-${i}`} className="border-border">
                    <AccordionTrigger className="hover:no-underline py-8">
                      <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-8 w-full pr-4">
                        <span className="font-heading text-2xl font-medium hover:text-primary transition-colors">{role.title}</span>
                        <div className="flex gap-4 text-sm font-medium tracking-widest uppercase text-muted-foreground md:ml-auto">
                          <span>{role.location}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{role.type}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <div className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
                        <p>Join our dynamic team and contribute to delivering world-class culinary experiences. We are looking for individuals who share our passion for excellence, attention to detail, and a commitment to authentic hospitality.</p>
                      </div>
                      <MagneticButton className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm font-bold uppercase tracking-widest">
                        {c.openRoles.applyCta}
                      </MagneticButton>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-24 text-center border-t border-border pt-16">
              <p className="text-lg text-muted-foreground mb-4">{c.openRoles.generalInquiryText}</p>
              <a href={`mailto:${c.openRoles.generalInquiryEmail}`} className="font-heading text-3xl font-medium hover:text-primary transition-colors">
                {c.openRoles.generalInquiryEmail}
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
