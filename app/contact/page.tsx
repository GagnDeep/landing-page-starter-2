import Link from "next/link";
import { contactContent } from "@/content/contact";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm } from "@/app/actions/contact";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Mail01Icon, Location01Icon, InstagramIcon, Facebook01Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
};

export default function ContactPage() {
  const {
    hero,
    contactGrid,
    officeHours,
    contactForm,
    mapSection,
    faqSnippet,
    socials
  } = contactContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <AnimatedGradientMesh />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Primary Contact Grid & Operating Hours */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a href={contactGrid.phone.link} className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm hover:border-primary transition-colors group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <HugeiconsIcon icon={Call02Icon} size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">{contactGrid.phone.label}</h3>
              <p className="text-xl font-bold text-foreground mb-4">{contactGrid.phone.value}</p>
              <p className="text-sm text-muted-foreground">{contactGrid.phone.description}</p>
            </a>

            <a href={contactGrid.email.link} className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm hover:border-accent transition-colors group">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <HugeiconsIcon icon={Mail01Icon} size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">{contactGrid.email.label}</h3>
              <p className="text-xl font-bold text-foreground mb-4">{contactGrid.email.value}</p>
              <p className="text-sm text-muted-foreground">{contactGrid.email.description}</p>
            </a>

            <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-6">
                <HugeiconsIcon icon={Location01Icon} size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">{contactGrid.address.label}</h3>
              <p className="text-lg font-bold text-foreground mb-4 max-w-[200px] leading-tight">{contactGrid.address.value}</p>
              <p className="text-sm text-muted-foreground">{contactGrid.address.description}</p>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-muted/30 p-8 rounded-3xl border border-border text-center">
            <RevealText as="h3" className="font-heading text-2xl font-bold mb-6">
              {officeHours.headline}
            </RevealText>
            <div className="space-y-4">
              {officeHours.days.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & What to Expect */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl">
              <h2 className="font-heading text-3xl font-bold mb-8">{contactForm.headline}</h2>
              <form className="space-y-6" action={submitContactForm}>
                <div className="space-y-2">
                  <Label htmlFor="name">{contactForm.fields.name}</Label>
                  <Input id="name" name="name" placeholder="E.g. Rahul Sharma" className="h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{contactForm.fields.phone}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">{contactForm.fields.service.label}</Label>
                  <Select name="service" required>
                    <SelectTrigger id="service" className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactForm.fields.service.options.map((opt, i) => (
                        <SelectItem key={i} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{contactForm.fields.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your driving experience..."
                    className="min-h-[120px] resize-y"
                  />
                </div>
                <Button type="submit" className="w-full h-14 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  {contactForm.fields.submit}
                </Button>
              </form>
            </div>

            {/* Right Column */}
            <div className="space-y-16 flex flex-col justify-center">
              <div className="space-y-6 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <RevealText as="h3" className="font-heading text-2xl font-bold text-primary">
                  {contactForm.whatToExpect.headline}
                </RevealText>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {contactForm.whatToExpect.body}
                </p>
              </div>

              <div className="space-y-6">
                <RevealText as="h3" className="font-heading text-2xl font-bold">
                  {faqSnippet.headline}
                </RevealText>
                <div className="space-y-6">
                  {faqSnippet.questions.map((faq, i) => (
                    <div key={i} className="border-b border-border pb-4">
                      <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-foreground">{socials.headline}</h4>
                <div className="flex gap-4">
                  {socials.platforms.map((platform, i) => (
                    <Link key={i} href={platform.url} className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <HugeiconsIcon icon={platform.name === 'Instagram' ? InstagramIcon : Facebook01Icon} size={24} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl space-y-8">
          <RevealText as="h2" className="font-heading text-3xl font-bold">
            {mapSection.headline}
          </RevealText>
          <p className="text-muted-foreground">
            {mapSection.directionsNote}
          </p>
          <div className="w-full aspect-[21/9] md:aspect-[21/7] bg-muted rounded-3xl overflow-hidden border border-border relative flex items-center justify-center">
            {/* Placeholder for iframe map */}
            <div className="absolute inset-0 bg-primary/5 opacity-50" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 flex flex-col items-center text-muted-foreground">
              <HugeiconsIcon icon={Location01Icon} size={48} className="mb-4 text-primary" />
              <p className="font-medium">Interactive Map Embed Placeholder</p>
              <p className="text-sm">Sector 47, Chandigarh</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
