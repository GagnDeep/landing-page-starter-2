"use client";

import { faqContent } from "@/content/faq";
import { IMAGE_REGISTRY } from "@/lib/images";
import {
  FadeInScroll,
  KenBurnsImage,
  CTAGlow
} from "@/components/visuals";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
        aria-expanded={isOpen}
      >
        <h3 className={cn("text-xl font-heading transition-colors pr-8", isOpen ? "text-primary" : "text-foreground group-hover:text-primary")}>
          {question}
        </h3>
        <div className="flex-shrink-0 w-6 h-6 relative text-muted-foreground group-hover:text-primary transition-colors">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn("w-3 h-[1px] bg-current transition-transform duration-300", isOpen && "rotate-180")} />
            <div className={cn("h-3 w-[1px] bg-current transition-transform duration-300 absolute", isOpen && "rotate-90 opacity-0")} />
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground pb-8 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQCategory({ title, questions }: { title: string; questions: { q: string; a: string }[] }) {
  return (
    <div className="mb-24 scroll-mt-32" id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
      <FadeInScroll>
        <h2 className="text-3xl font-heading text-foreground mb-8 pb-4 border-b border-border">{title}</h2>
        <div className="flex flex-col">
          {questions.map((item, i) => (
            <FAQAccordion key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </FadeInScroll>
    </div>
  );
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background">

      {/* 1 & 2. Hero & Search */}
      <section className="w-full pt-48 pb-24 border-b border-border/40">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <FadeInScroll>
            <h1 className="text-5xl md:text-7xl font-heading text-primary mb-6 tracking-tight">
              {faqContent.hero.heading}
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              {faqContent.hero.subheading}
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder={faqContent.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-border/60 py-4 px-6 pr-12 rounded-sm outline-none focus:border-primary transition-colors text-foreground"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </FadeInScroll>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative">

          {/* 3. Category Navigation (Sticky) */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-2">
              {faqContent.categories.navigation.map((cat, i) => {
                const id = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <a
                    key={i}
                    href={`#${id}`}
                    onClick={(e) => handleScroll(e, id)}
                    className="block py-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat}
                  </a>
                );
              })}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4 max-w-3xl">
            {/* If there's a search query, we would normally filter here. For UI purposes, we'll just show all if empty, or filter. */}

            {faqContent.booking.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) && (
              <FAQCategory title={faqContent.booking.heading} questions={faqContent.booking.questions} />
            )}

            {faqContent.atHome.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) && (
              <FAQCategory title={faqContent.atHome.heading} questions={faqContent.atHome.questions} />
            )}

            {/* 12. Visual Break */}
            {searchQuery === "" && (
              <FadeInScroll className="my-24 aspect-[21/9] w-full relative overflow-hidden">
                <KenBurnsImage src={IMAGE_REGISTRY.mobileSetup.src} alt={faqContent.visualBreak.accessibilityLabel} />
              </FadeInScroll>
            )}

            {faqContent.services.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) && (
              <FAQCategory title={faqContent.services.heading} questions={faqContent.services.questions} />
            )}

            {faqContent.policies.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) && (
              <FAQCategory title={faqContent.policies.heading} questions={faqContent.policies.questions} />
            )}

            {searchQuery !== "" &&
              !faqContent.booking.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) &&
              !faqContent.atHome.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) &&
              !faqContent.services.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) &&
              !faqContent.policies.questions.some(q => q.q.toLowerCase().includes(searchQuery.toLowerCase())) && (
                <div className="text-center py-12 text-muted-foreground">
                  No questions found matching your search.
                </div>
            )}
          </div>

        </div>
      </section>

      {/* 19. Still Need Help? */}
      <section className="w-full py-32 bg-secondary/10 text-center border-t border-border/40">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeInScroll>
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
              {faqContent.contactCta.heading}
            </h2>
            <p className="text-muted-foreground mb-12">
              {faqContent.contactCta.description}
            </p>
            <Link href="/contact">
              <CTAGlow>{faqContent.contactCta.buttonText}</CTAGlow>
            </Link>
          </FadeInScroll>
        </div>
      </section>

    </main>
  );
}
