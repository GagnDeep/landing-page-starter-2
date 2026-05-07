import { Metadata } from "next"
import { contactContent } from "@/content/contact"
import { siteImages } from "@/lib/images"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import Image from "next/image"

export const metadata: Metadata = {
  title: contactContent.seo.title,
  description: contactContent.seo.description,
}

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)]">

        {/* Left Side: Hero Image & Intro */}
        <div className="relative flex flex-col justify-between p-12 md:p-24 bg-muted overflow-hidden">
             <div className="absolute inset-0 z-0">
                <Image
                    src={siteImages.contact.hero}
                    alt="Contact Bawa Caterers"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 text-white mt-auto">
                <RevealText
                    as="h1"
                    text={contactContent.hero.headline}
                    className="font-heading text-5xl md:text-7xl mb-8 leading-tight"
                />
                <FadeIn delay={0.8}>
                    <p className="font-sans text-xl md:text-2xl text-white/80 font-light max-w-md">
                        {contactContent.hero.subheadline}
                    </p>
                </FadeIn>
            </div>
        </div>

        {/* Right Side: Form & Info */}
        <div className="flex flex-col justify-center px-6 py-16 md:p-24 lg:p-32">
            <SlideUp>
                <div className="mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                        {contactContent.form.heading}
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {contactContent.expectations.text}
                    </p>
                </div>

                {/* Form (Semantic, no logic) */}
                <form className="flex flex-col gap-8 mb-24" action="#">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.name}</label>
                            <input type="text" id="name" name="name" className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans rounded-none" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.email}</label>
                            <input type="email" id="email" name="email" className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans rounded-none" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.phone}</label>
                            <input type="tel" id="phone" name="phone" className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans rounded-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="date" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.eventDate}</label>
                            <input type="text" id="date" name="date" className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans rounded-none" />
                        </div>
                    </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="guests" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.guestCount}</label>
                            <input type="text" id="guests" name="guests" className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans rounded-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="venue" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.venue}</label>
                            <input type="text" id="venue" name="venue" className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans rounded-none" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-muted-foreground">{contactContent.form.fields.message}</label>
                        <textarea id="message" name="message" rows={4} className="bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors text-foreground font-sans resize-none rounded-none" required></textarea>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="bg-primary text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors w-full sm:w-auto">
                            {contactContent.form.submitButton}
                        </button>
                    </div>
                </form>

                {/* Direct Contact Info */}
                <div className="pt-16 border-t border-border">
                     <h2 className="font-heading text-2xl text-foreground mb-8">
                        {contactContent.directContact.heading}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div>
                             <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-3">{contactContent.directContact.address.label}</h3>
                             <p className="font-sans text-sm text-foreground/80 leading-relaxed max-w-[200px]">
                                {contactContent.directContact.address.value}
                             </p>
                        </div>
                        <div className="flex flex-col gap-8">
                             <div>
                                <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-3">{contactContent.directContact.phone.label}</h3>
                                <a href={`tel:${contactContent.directContact.phone.value}`} className="font-sans text-sm text-foreground hover:text-primary transition-colors">
                                    {contactContent.directContact.phone.value}
                                </a>
                            </div>
                            <div>
                                <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-3">{contactContent.directContact.email.label}</h3>
                                <a href={`mailto:${contactContent.directContact.email.value}`} className="font-sans text-sm text-foreground hover:text-primary transition-colors">
                                    {contactContent.directContact.email.value}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </div>

      </div>
    </div>
  )
}
