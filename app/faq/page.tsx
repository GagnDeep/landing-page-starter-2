import Link from "next/link";
import { faqContent } from "@/content/faq";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: faqContent.metadata.title,
  description: faqContent.metadata.description,
  openGraph: {
    title: faqContent.metadata.title,
    description: faqContent.metadata.description,
  }
};

export default function FAQPage() {
  const {
    hero,
    searchPlaceholder,
    categories,
    unansweredBlock,
    questionForm,
    finalCta
  } = faqContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 bg-primary text-primary-foreground">
        <AnimatedGradientMesh className="opacity-50 mix-blend-screen" />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
          <div className="mt-8 w-full max-w-md relative text-foreground">
            <HugeiconsIcon icon={Search01Icon} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full h-14 pl-12 pr-4 rounded-full bg-background border-none shadow-lg text-base"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories & Accordions */}
      <section className="py-24 bg-background relative -mt-10">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="flex flex-col gap-16 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm relative z-10">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <RevealText as="h2" className="font-heading text-2xl md:text-3xl font-bold mb-8 text-primary border-b border-border pb-4">
                  {category.title}
                </RevealText>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${category.id}-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Block & Form */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <RevealText as="h2" className="font-heading text-3xl font-bold">
                  {unansweredBlock.headline}
                </RevealText>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {unansweredBlock.body}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a href={`tel:${unansweredBlock.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <HugeiconsIcon icon={Call02Icon} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{faqContent.questionForm.fields.submit.replace("Message", "Us").replace("Send", "Call")}</div>
                    <div className="text-lg font-bold text-foreground">{unansweredBlock.phone}</div>
                  </div>
                </a>
                <a href={`mailto:${unansweredBlock.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <HugeiconsIcon icon={Mail01Icon} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{faqContent.questionForm.fields.submit.replace("Message", "Us").replace("Send", "Email")}</div>
                    <div className="text-lg font-bold text-foreground">{unansweredBlock.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-heading text-2xl font-bold mb-6">{questionForm.headline}</h3>
              <form className="space-y-4" action="#">
                <div className="space-y-2">
                  <Label htmlFor="name">{questionForm.fields.name}</Label>
                  <Input id="name" placeholder="John Doe" className="h-12 bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{questionForm.fields.email}</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="question">{questionForm.fields.question}</Label>
                  <textarea
                    id="question"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How do I apply for my license?"
                  />
                </div>
                <Button type="button" className="w-full h-12 text-base font-bold mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  {questionForm.fields.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-3xl space-y-8">
          <RevealText as="h2" className="font-heading text-4xl md:text-5xl font-bold">
            {finalCta.headline}
          </RevealText>
          <p className="text-xl text-primary-foreground/90">
            {finalCta.subheadline}
          </p>
          <div className="pt-8">
            <CTAGlow>
              <Link
                href={finalCta.primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                {finalCta.primaryCta.label}
              </Link>
            </CTAGlow>
          </div>
        </div>
      </section>
    </div>
  );
}
