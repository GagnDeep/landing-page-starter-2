import { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { AnimatedStatCounter } from "@/components/visuals/AnimatedStatCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartPulseIcon, ShieldCheckIcon, Clock24Icon, GraduationCapIcon } from "@/components/visuals/MicroIconSet";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
};

const iconMap = {
  "Patience First": HeartPulseIcon,
  "Uncompromising Safety": ShieldCheckIcon,
  "Ultimate Flexibility": Clock24Icon,
  "Lasting Excellence": GraduationCapIcon,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 3. Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <AnimatedGradientMesh className="w-full h-full opacity-30" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col space-y-6">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                {aboutContent.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] font-sans">
                {aboutContent.hero.subheading}
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.hero.about.src}
                alt={images.hero.about.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission Statement */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-6">{aboutContent.missionStatement.heading}</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-sans font-medium text-primary-foreground/90">
            "{aboutContent.missionStatement.body}"
          </p>
        </div>
      </section>

      {/* 5. The Founder's Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden">
               <Image
                src={images.instructor.jeetPortrait.src}
                alt={images.instructor.jeetPortrait.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {aboutContent.founderStory.heading}
              </h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground font-sans">
                <p className="leading-relaxed">
                  {aboutContent.founderStory.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Stats / Impact Counter */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {aboutContent.stats.map((stat, index) => {
               // Extract number for counter animation if possible, fallback to string render
               const numMatch = stat.value.match(/\d+/);
               const numValue = numMatch ? parseInt(numMatch[0]) : 0;
               const suffix = stat.value.replace(/\d+/g, '');

               return (
                <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
                  <div className="flex items-baseline font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {numValue > 0 ? <AnimatedStatCounter value={numValue} /> : stat.value.replace(suffix, '')}
                    <span className="text-primary ml-1">{suffix}</span>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm md:text-base font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* 6. Core Values Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {aboutContent.coreValues.heading}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aboutContent.coreValues.values.map((value, index) => {
              const Icon = iconMap[value.title as keyof typeof iconMap] || CheckCircle2;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors shadow-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-serif text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. History / Timeline */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            {aboutContent.historyTimeline.heading}
          </h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {aboutContent.historyTimeline.milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                {/* Content */}
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border-border shadow-sm p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-xl text-foreground">{milestone.title}</h3>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{milestone.year}</span>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonial Highlight */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-primary/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
            {aboutContent.testimonialHighlight.quote}
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="font-sans font-bold text-lg text-foreground">
              {aboutContent.testimonialHighlight.author}
            </div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
              {aboutContent.testimonialHighlight.context}
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Team */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {aboutContent.team.heading}
            </h2>
            <p className="text-muted-foreground font-sans md:text-lg">
              {aboutContent.team.description}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {aboutContent.team.members.map((member, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <Image
                    src={images.instructor.jeetPortrait.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-sans text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ (About the School) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {aboutContent.faq.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {aboutContent.faq.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="font-sans text-left font-medium text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 17. Call to Action */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-border">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 max-w-2xl mx-auto">
            {aboutContent.callToAction.heading}
          </h2>
          <CTAGlow>
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
              <Link href="/contact">
                {aboutContent.callToAction.ctaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  );
}