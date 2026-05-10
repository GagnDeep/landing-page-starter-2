import Image from "next/image";
import Link from "next/link";
import { careersContent } from "@/content/careers";
import { siteImages } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { submitApplicationForm } from "@/app/actions/careers";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, Location01Icon, TimeQuarterIcon } from "@hugeicons/core-free-icons";

export default function CareersPage() {
  const {
    hero,
    valueProposition,
    coreValues,
    instructorRequirements,
    benefits,
    openings,
    applicationProcess,
    applicationForm,
    hrContact
  } = careersContent;

  const images = siteImages.careers;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 bg-primary text-primary-foreground">
        <AnimatedGradientMesh className="opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <Image
            src={images.heroBackground.src}
            alt={images.heroBackground.alt}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
            {hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Value Prop & Core Values */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {valueProposition.headline}
            </RevealText>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {valueProposition.body}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.values.map((val, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl border border-border shadow-sm text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <span className="font-heading text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-muted-foreground">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm">
              <RevealText as="h2" className="font-heading text-3xl font-bold text-primary">
                {instructorRequirements.headline}
              </RevealText>
              <ul className="space-y-4">
                {instructorRequirements.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 bg-background p-8 md:p-12 rounded-3xl border border-border shadow-sm">
              <RevealText as="h2" className="font-heading text-3xl font-bold text-accent">
                {benefits.headline}
              </RevealText>
              <ul className="space-y-4">
                {benefits.list.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {openings.headline}
            </RevealText>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {openings.roles.map((role, i) => (
              <AccordionItem key={i} value={`role-${i}`} className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary transition-colors">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4 text-left gap-4">
                    <span className="font-heading font-bold text-xl">{role.title}</span>
                    <div className="flex items-center gap-4 text-sm font-normal text-muted-foreground">
                      <span className="flex items-center gap-1.5"><HugeiconsIcon icon={TimeQuarterIcon} size={16} /> {role.type}</span>
                      <span className="flex items-center gap-1.5"><HugeiconsIcon icon={Location01Icon} size={16} /> {role.location}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">{role.description}</p>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                    <Link href="#apply">Apply for this role</Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-16">
            {applicationProcess.headline}
          </RevealText>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center relative">
                {i < applicationProcess.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-primary-foreground/20" />
                )}
                <div className="w-16 h-16 rounded-full bg-background text-primary font-heading font-bold text-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-muted/20 scroll-mt-16 relative">
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">{applicationForm.headline}</h2>
            <form className="space-y-6" action={submitApplicationForm}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{applicationForm.fields.name}</Label>
                  <Input id="name" name="name" placeholder="John Doe" className="h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{applicationForm.fields.phone}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="h-12" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{applicationForm.fields.email}</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">{applicationForm.fields.experience}</Label>
                  <Input id="experience" name="experience" type="number" min="0" placeholder="e.g. 5" className="h-12" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">{applicationForm.fields.role}</Label>
                <Input id="role" name="role" placeholder="Senior Driving Instructor" className="h-12" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{applicationForm.fields.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your background and why you value road safety..."
                  className="min-h-[120px] resize-y"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-14 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                {applicationForm.submit}
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center text-muted-foreground">
            <p className="font-medium text-foreground mb-2">{hrContact.headline}</p>
            <p className="mb-2">{hrContact.body}</p>
            <a href={`mailto:${hrContact.email}`} className="text-primary font-bold hover:underline">{hrContact.email}</a>
          </div>
        </div>
      </section>

    </div>
  );
}
