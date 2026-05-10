import { Metadata } from "next";
import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartPulseIcon, Clock24Icon, ShieldCheckIcon, MapPinIcon, GraduationCapIcon, SteeringWheelIcon } from "@/components/visuals/MicroIconSet";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: featuresContent.metadata.title,
  description: featuresContent.metadata.description,
};

const iconMap = {
  "patient-instruction": HeartPulseIcon,
  "flexible-timings": Clock24Icon,
  "modern-fleet": ShieldCheckIcon,
  "doorstep-pickup": MapPinIcon,
  "rto-assistance": GraduationCapIcon,
  "mock-tests": SteeringWheelIcon,
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 3. Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-primary-foreground">
        <div className="absolute inset-0 z-0">
          {/* Subtle overlay instead of full bright mesh */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {featuresContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl font-sans text-primary-foreground/90 max-w-2xl mx-auto">
            {featuresContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 4-9. Detailed Features Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-12">
              {featuresContent.detailedFeatures.slice(0, 3).map((feature, index) => {
                const Icon = iconMap[feature.id as keyof typeof iconMap] || CheckCircle2;
                return (
                  <div key={index} className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground font-sans leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-12">
              {featuresContent.detailedFeatures.slice(3, 6).map((feature, index) => {
                const Icon = iconMap[feature.id as keyof typeof iconMap] || CheckCircle2;
                return (
                  <div key={index} className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0 text-foreground border border-border">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground font-sans leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 14. Curriculum Breakdown (Interactive Visual) */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {featuresContent.curriculum.heading}
                </h2>
                <div className="space-y-6">
                  {featuresContent.curriculum.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                       <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0 font-sans mt-1">
                          {index + 1}
                       </div>
                       <div>
                          <h4 className="font-serif text-xl font-bold text-foreground">{step.title}</h4>
                          <p className="text-muted-foreground font-sans text-sm mt-1">{step.description}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                {/* Fallback code window or image */}
                <Image
                  src={images.fleet.interior.src}
                  alt={images.fleet.interior.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 10. Feature Comparison Table */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {featuresContent.comparisonTable.heading}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary/50 text-foreground font-sans">
                  {featuresContent.comparisonTable.columns.map((col, index) => (
                    <th key={index} className="p-4 border-b border-border font-bold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-sans text-sm md:text-base">
                {featuresContent.comparisonTable.rows.map((row, index) => (
                  <tr key={index} className="even:bg-muted/30 hover:bg-muted/50 transition-colors">
                    <td className="p-4 border-b border-border font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="p-4 border-b border-border text-primary font-bold">
                      {row.capital}
                    </td>
                    <td className="p-4 border-b border-border text-muted-foreground">
                      {row.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 13. Safety Protocol & 11. Video Walkthrough Text */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                 <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                    {featuresContent.safetyProtocol.heading}
                 </h2>
                 <ul className="space-y-4 font-sans">
                    {featuresContent.safetyProtocol.points.map((point, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 shrink-0 text-primary-foreground/80 mt-0.5" />
                          <span className="text-lg">{point}</span>
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="flex flex-col justify-center bg-black/20 p-8 rounded-2xl border border-white/10">
                 <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                    {featuresContent.videoWalkthrough.heading}
                 </h2>
                 <p className="text-primary-foreground/80 font-sans mb-8">
                    {featuresContent.videoWalkthrough.description}
                 </p>
                 <Button variant="secondary" className="w-fit">
                    {featuresContent.videoWalkthrough.playButtonLabel}
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* 12. Student Success Stories (Reviews) */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
            {featuresContent.successStories.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuresContent.successStories.reviews.map((review, index) => (
              <Card key={index} className="bg-background border-border text-left shadow-sm">
                <CardContent className="pt-6">
                  <svg className="w-8 h-8 mb-4 text-primary/40" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-foreground font-sans font-medium text-lg italic mb-6">
                    &quot;{review.quote}&quot;
                  </p>
                  <div className="font-serif font-bold text-primary">
                    — {review.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {featuresContent.faq.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {featuresContent.faq.questions.map((faq, index) => (
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

      {/* 18. Bottom CTA */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-border">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8 max-w-2xl mx-auto">
            {featuresContent.callToAction.heading}
          </h2>
          <CTAGlow>
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
              <Link href="/pricing">
                {featuresContent.callToAction.ctaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  );
}