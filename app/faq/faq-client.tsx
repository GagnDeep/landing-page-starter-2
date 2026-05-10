"use client"

import * as React from "react"
import { faqContent } from "@/content/faq"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { DotMatrixGrid } from "@/components/visuals/dot-matrix-grid"

export default function FaqClient() {
  const { faqHero, faqCategories, faqSections, stillHaveQuestionsCta } = faqContent

  // Track active section for sidebar highlighting
  const [activeSection, setActiveSection] = React.useState(faqCategories[0].id)

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = faqCategories.map(cat => document.getElementById(cat.id))
      const scrollPosition = window.scrollY + 200 // Offset for sticky header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(faqCategories[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [faqCategories])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      {/* 1: faq-hero */}
      <section className="relative min-h-[40svh] flex flex-col items-center justify-center bg-background px-6 pt-32 pb-16 border-b border-border/50 text-center overflow-hidden">
         <DotMatrixGrid className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen" rows={15} cols={40} spacing={40} />
         <div className="relative z-10 container mx-auto max-w-3xl">
           <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground">
             {faqHero.heading}
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide leading-relaxed">
             {faqHero.subheading}
           </p>
         </div>
      </section>

      <section className="py-24 px-6 bg-background relative">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">

          {/* 2: faq-categories-sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-2">
               <h3 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-6">Categories</h3>
               <nav className="flex flex-col gap-2">
                 {faqCategories.map((category) => (
                   <button
                     key={category.id}
                     onClick={() => scrollToSection(category.id)}
                     className={`text-left px-4 py-3 text-sm font-medium transition-colors border-l-2 ${
                       activeSection === category.id
                         ? "border-primary text-primary bg-muted/30"
                         : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/10"
                     }`}
                   >
                     {category.label}
                   </button>
                 ))}
               </nav>
            </div>
          </div>

          {/* 3: faq-content-accordions */}
          <div className="lg:w-3/4 space-y-24">
             {faqCategories.map((category) => {
               const sectionFaqs = faqSections[category.id as keyof typeof faqSections] || []

               if (sectionFaqs.length === 0) return null

               return (
                 <div key={category.id} id={category.id} className="scroll-mt-32">
                   <h2 className="font-heading text-3xl mb-8 border-b border-border pb-4">{category.label}</h2>
                   <Accordion type="single" collapsible className="w-full">
                     {sectionFaqs.map((faq: { question: string; answer: string }, index: number) => (
                       <AccordionItem key={index} value={`item-${category.id}-${index}`} className="border-border/50">
                         <AccordionTrigger className="text-left font-medium text-lg hover:text-primary hover:no-underline py-6">
                           {faq.question}
                         </AccordionTrigger>
                         <AccordionContent className="text-muted-foreground font-light leading-relaxed text-base pt-2 pb-8">
                           {faq.answer}
                         </AccordionContent>
                       </AccordionItem>
                     ))}
                   </Accordion>
                 </div>
               )
             })}
          </div>
        </div>
      </section>

      {/* 4: still-have-questions-cta */}
      <section className="py-32 px-6 bg-card text-center border-t border-border/50 relative overflow-hidden">
         <AnimatedGradientMesh opacity={0.1} />
         <div className="container mx-auto max-w-2xl relative z-10">
           <h2 className="font-heading text-4xl md:text-5xl mb-6">{stillHaveQuestionsCta.heading}</h2>
           <p className="text-lg text-muted-foreground mb-12 font-light">{stillHaveQuestionsCta.subheading}</p>
           <Button asChild size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase border border-primary/20">
             <Link href={stillHaveQuestionsCta.cta.href}>
               {stillHaveQuestionsCta.cta.label}
             </Link>
           </Button>
         </div>
      </section>
    </>
  )
}
