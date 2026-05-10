import { contactContent } from "@/content/contact"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
}

export default function ContactPage() {
  const { contactHero, theInquiryForm, directContactInfo, whatToExpect } = contactContent

  return (
    <>
      <section className="relative min-h-[50svh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-16 text-center">
         <AnimatedGradientMesh opacity={0.2} />
         <div className="relative z-10 container mx-auto max-w-3xl">
           <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground">
             {contactHero.heading}
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide leading-relaxed">
             {contactHero.subheading}
           </p>
         </div>
      </section>

      <section className="py-24 px-6 bg-background relative z-10">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-card p-10 md:p-16 border border-border shadow-sm">
             <form className="space-y-8" action="javascript:void(0)">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <Label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.name.label}</Label>
                     <Input id="name" placeholder={theInquiryForm.formFields.name.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12" required />
                  </div>
                  <div className="space-y-3">
                     <Label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.email.label}</Label>
                     <Input id="email" type="email" placeholder={theInquiryForm.formFields.email.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12" required />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.phone.label}</Label>
                     <Input id="phone" type="tel" placeholder={theInquiryForm.formFields.phone.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12" />
                  </div>
                  <div className="space-y-3">
                     <Label htmlFor="date" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.date.label}</Label>
                     <Input id="date" placeholder={theInquiryForm.formFields.date.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <Label htmlFor="location" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.location.label}</Label>
                     <Input id="location" placeholder={theInquiryForm.formFields.location.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12" />
                  </div>
                  <div className="space-y-3">
                     <Label htmlFor="guestCount" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.guestCount.label}</Label>
                     <Input id="guestCount" placeholder={theInquiryForm.formFields.guestCount.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none h-12" />
                  </div>
               </div>

               <div className="space-y-3">
                  <Label htmlFor="vision" className="text-xs tracking-widest uppercase text-muted-foreground">{theInquiryForm.formFields.vision.label}</Label>
                  <Textarea id="vision" placeholder={theInquiryForm.formFields.vision.placeholder} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none min-h-[150px] resize-none" required />
               </div>

               <Button type="submit" size="lg" className="w-full rounded-none h-14 tracking-widest uppercase mt-8">
                  {theInquiryForm.submitButton}
               </Button>
             </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-16">
             <div className="space-y-8">
                <h2 className="font-heading text-3xl border-b border-border pb-4">{directContactInfo.heading}</h2>

                {directContactInfo.studios.map((studio, i) => (
                   <div key={i} className="space-y-2">
                     <h3 className="text-xs tracking-widest uppercase text-primary font-medium">{studio.city} Studio</h3>
                     <p className="whitespace-pre-line text-muted-foreground font-light leading-relaxed">{studio.address}</p>
                   </div>
                ))}

                <div className="space-y-4 pt-4">
                   <a href={`mailto:${directContactInfo.email}`} className="block text-lg font-light hover:text-primary transition-colors">
                     {directContactInfo.email}
                   </a>
                   <a href={`tel:${directContactInfo.phone.replace(/\s+/g, '')}`} className="block text-lg font-light hover:text-primary transition-colors">
                     {directContactInfo.phone}
                   </a>
                </div>
             </div>

             <div className="space-y-4 p-8 bg-muted/30 border-l border-primary/20">
                <h3 className="font-heading text-2xl">{whatToExpect.heading}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {whatToExpect.description}
                </p>
             </div>
          </div>

        </div>
      </section>
    </>
  )
}
