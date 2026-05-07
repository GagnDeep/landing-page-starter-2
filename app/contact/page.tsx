"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/content/contact";
import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { FadeIn } from "@/components/visuals/fade-in";
import { RevealText } from "@/components/visuals/reveal-text";
import { DecorativeLine } from "@/components/visuals/decorative-line";

export default function ContactPage() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! (Simulated)");
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Shared Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" className="font-heading text-2xl font-semibold tracking-tight text-primary">
            Verma&apos;s
          </Link>
          <div className="hidden md:flex gap-8 font-sans text-sm font-medium">
            {homeContent.navigation.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="default" className="font-sans font-medium rounded-none">
            {homeContent.navigation.cta}
          </Button>
        </div>
      </nav>

      {/* 1. Contact Hero */}
      <section className="py-24 px-4 md:px-8 bg-muted/20 text-center border-b border-border">
        <FadeIn className="max-w-3xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">
            <RevealText text={contactContent.hero.heading} />
          </h1>
          <p className="font-sans text-xl text-muted-foreground font-light">
            {contactContent.hero.subheading}
          </p>
        </FadeIn>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Info & Map */}
          <div className="space-y-16">
            {/* 2. Primary Contact & 9. WhatsApp */}
            <FadeIn>
              <h2 className="font-heading text-3xl mb-6">{contactContent.primaryContact.heading}</h2>
              <div className="space-y-4 font-sans">
                <div>
                  <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1">Phone</span>
                  <a href={`tel:${contactContent.primaryContact.phone}`} className="text-xl font-medium hover:text-primary transition-colors">{contactContent.primaryContact.phone}</a>
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1">Email</span>
                  <a href={`mailto:${contactContent.primaryContact.email}`} className="text-xl font-medium hover:text-primary transition-colors">{contactContent.primaryContact.email}</a>
                </div>
                <div className="pt-4">
                  <Button className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 w-full sm:w-auto">
                    {contactContent.primaryContact.whatsappCta}
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* 3. Location, 11. Image, 4. Hours, 12. Parking */}
            <FadeIn>
              <div className="bg-muted/30 p-8 border border-border">
                <h2 className="font-heading text-3xl mb-6">{contactContent.location.heading}</h2>
                <div className="relative aspect-video w-full mb-6 overflow-hidden shadow-sm">
                  <Image src={imageRegistry.storefront.src} alt={imageRegistry.storefront.alt} fill className="object-cover" />
                </div>
                <p className="font-sans text-lg mb-4">{contactContent.location.address}</p>
                <Button variant="link" className="p-0 text-primary mb-8">{contactContent.location.directionsCta} →</Button>

                <h3 className="font-heading text-xl mb-4">{contactContent.hours.heading}</h3>
                <ul className="space-y-2 font-sans text-sm text-muted-foreground mb-8">
                  {contactContent.hours.schedule.map((slot, i) => (
                    <li key={i} className="flex justify-between border-b border-border/50 pb-2">
                      <span>{slot.days}</span>
                      <span className="text-foreground">{slot.time}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading text-xl mb-2">{contactContent.parkingInfo.heading}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{contactContent.parkingInfo.text}</p>
              </div>
            </FadeIn>

            {/* 10. Social Links */}
            <FadeIn>
               <h3 className="font-heading text-xl mb-2">{contactContent.socialMedia.heading}</h3>
               <p className="font-sans text-sm text-muted-foreground mb-4">{contactContent.socialMedia.text}</p>
               <div className="flex gap-4">
                 {contactContent.socialMedia.links.map((link, i) => (
                   <span key={i} className="font-sans text-sm font-medium hover:text-primary cursor-pointer border-b border-transparent hover:border-primary transition-all">{link}</span>
                 ))}
               </div>
            </FadeIn>
          </div>

          {/* Right Column: Forms & Routes */}
          <div className="space-y-16">

            {/* 5, 6. General Form */}
            <FadeIn className="bg-card shadow-lg border border-border p-8 md:p-12">
               <h2 className="font-heading text-3xl mb-2">{contactContent.forms.general.heading}</h2>
               <p className="font-sans text-sm text-muted-foreground mb-8">{contactContent.responseTime.text}</p>

               <form onSubmit={handleFormSubmit} className="space-y-6 font-sans">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{contactContent.forms.general.fields.name}</label>
                   <input required type="text" id="name" className="w-full h-12 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary rounded-none" />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{contactContent.forms.general.fields.email}</label>
                   <input required type="email" id="email" className="w-full h-12 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary rounded-none" />
                 </div>
                 <div>
                   <label htmlFor="department" className="block text-sm font-medium text-foreground mb-2">{contactContent.forms.general.fields.department}</label>
                   <select id="department" className="w-full h-12 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary rounded-none">
                     <option>Customer Support</option>
                     <option>Wholesale Inquiry</option>
                     <option>General Feedback</option>
                   </select>
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{contactContent.forms.general.fields.message}</label>
                   <textarea required id="message" rows={5} className="w-full p-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary rounded-none resize-none"></textarea>
                 </div>
                 <Button type="submit" className="w-full h-12 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground text-base">
                   {contactContent.forms.general.submit}
                 </Button>
               </form>
            </FadeIn>

            {/* 7. Catering Form (Visual teaser) */}
            <FadeIn className="bg-primary/5 p-8 border border-primary/20">
               <h3 className="font-heading text-2xl mb-2">{contactContent.forms.catering.heading}</h3>
               <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">{contactContent.forms.catering.text}</p>
               <Button variant="outline" className="w-full h-12 rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                 {contactContent.forms.catering.submit}
               </Button>
            </FadeIn>

            {/* Routing / Other Info (14, 15, 16, 17) */}
            <FadeIn>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                 <div>
                   <h4 className="font-sans font-bold tracking-widest text-xs uppercase mb-2">{contactContent.careersLink.heading}</h4>
                   <p className="font-sans text-xs text-muted-foreground mb-2">{contactContent.careersLink.text}</p>
                   <Button variant="link" className="p-0 text-primary h-auto text-xs">{contactContent.careersLink.cta} →</Button>
                 </div>
                 <div>
                   <h4 className="font-sans font-bold tracking-widest text-xs uppercase mb-2">{contactContent.faqTeaser.heading}</h4>
                   <p className="font-sans text-xs text-muted-foreground mb-2">{contactContent.faqTeaser.text}</p>
                   <Button variant="link" className="p-0 text-primary h-auto text-xs">{contactContent.faqTeaser.cta} →</Button>
                 </div>
                 <div className="sm:col-span-2">
                   <h4 className="font-sans font-bold tracking-widest text-xs uppercase mb-2">{contactContent.feedbackRoute.heading}</h4>
                   <p className="font-sans text-sm text-muted-foreground">{contactContent.feedbackRoute.text}</p>
                 </div>
               </div>
            </FadeIn>

          </div>
        </div>
      </div>

      {/* 20. Visual Divider */}
      <div className="py-12 flex justify-center">
        <DecorativeLine width="w-24" />
      </div>

      {/* 21. Standard Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="border-t border-background/20 pt-8 text-center font-sans text-xs text-background/50">
            {homeContent.footer.copyright}
          </div>
        </div>
      </footer>
    </main>
  );
}
