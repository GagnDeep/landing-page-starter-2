import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { AvatarStack } from "@/components/visuals/AvatarStack";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { ElegantReveal } from "@/components/visuals/ElegantReveal";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { HowItWorksDiagram } from "@/components/visuals/HowItWorksDiagram";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center py-20">
        <AnimatedGradientMesh />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ElegantReveal>
              <div className="flex flex-col items-start gap-6">
                <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                  {homeContent.hero.headline}
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                  {homeContent.hero.subheadline}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <CTAGlow>
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      {homeContent.hero.ctaPrimary}
                    </Link>
                  </CTAGlow>
                  <Link
                    href="/features"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {homeContent.hero.ctaSecondary}
                  </Link>
                </div>
              </div>
            </ElegantReveal>
            <div className="flex justify-center lg:justify-end">
              <AnimatedHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Introduction / Philosophy */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                {homeContent.philosophy.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {homeContent.philosophy.body}
              </p>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 3. The "Why Us" / Value Prop Grid */}
      <section className="relative py-24">
        <DotMatrixGrid />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <ElegantReveal>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
              {homeContent.whyUs.title}
            </h2>
          </ElegantReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.whyUs.cards.map((card, index) => (
              <ElegantReveal key={index}>
                <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="mb-3 font-serif text-xl font-bold">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Services Teaser */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <ElegantReveal>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                {homeContent.servicesTeaser.title}
              </h2>
            </ElegantReveal>
            <ElegantReveal>
              <Link
                href="/features"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {homeContent.servicesTeaser.cta} &rarr;
              </Link>
            </ElegantReveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.servicesTeaser.categories.map((category, index) => {
              const imageKey = Object.keys(images.services)[index % 4] as keyof typeof images.services;
              const image = images.services[imageKey];
              return (
                <ElegantReveal key={index}>
                  <div className="group overflow-hidden rounded-lg bg-card shadow-sm">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-serif text-xl font-bold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </ElegantReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. The Process (Step-by-step) */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-16 font-serif text-3xl font-bold md:text-4xl">
                {homeContent.process.title}
              </h2>
            </div>
            <div className="mb-16 flex justify-center">
              <HowItWorksDiagram />
            </div>
          </ElegantReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
             {homeContent.process.steps.map((step, index) => (
               <ElegantReveal key={index}>
                 <div className="flex flex-col items-center text-center">
                    <span className="mb-4 text-sm font-bold text-primary">{step.number}</span>
                    <h3 className="mb-3 font-serif text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                 </div>
               </ElegantReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Signature Lookbook Carousel (Static representation for now) */}
      <section className="overflow-hidden bg-card py-24">
         <div className="container mx-auto px-4 md:px-8 mb-12">
            <ElegantReveal>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                {homeContent.carousel.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {homeContent.carousel.subtitle}
              </p>
            </ElegantReveal>
         </div>
         <div className="flex gap-4 overflow-x-auto pb-8 pl-4 md:pl-8 no-scrollbar snap-x">
            {images.carousel.map((img, index) => (
              <div key={index} className="relative h-[400px] w-[300px] shrink-0 snap-center overflow-hidden rounded-lg md:h-[500px] md:w-[400px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
         </div>
      </section>

      {/* 7. Founder's Message / Owner Spotlight */}
      <section className="relative py-24 overflow-hidden">
        <FloatingBlobs />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <ElegantReveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images.founder.src}
                  alt={images.founder.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </ElegantReveal>
            <ElegantReveal>
              <div className="flex flex-col gap-6">
                <blockquote className="font-serif text-2xl italic leading-relaxed md:text-3xl">
                  {homeContent.founder.quote}
                </blockquote>
                <div>
                  <div className="font-bold">{homeContent.founder.name}</div>
                  <div className="text-primary">{homeContent.founder.title}</div>
                </div>
              </div>
            </ElegantReveal>
          </div>
        </div>
      </section>

      {/* 8. Testimonial Spotlight */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mx-auto max-w-4xl text-center">
              <svg className="mx-auto mb-8 h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h2 className="mb-8 font-serif text-3xl font-medium leading-relaxed md:text-4xl">
                {homeContent.featuredTestimonial.quote}
              </h2>
              <div className="font-sans font-bold tracking-wide">
                {homeContent.featuredTestimonial.author} &mdash; <span className="font-normal opacity-80">{homeContent.featuredTestimonial.location}</span>
              </div>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 9. Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                {homeContent.testimonialsGrid.title}
              </h2>
              <AvatarStack images={[images.carousel[0].src, images.carousel[1].src, images.carousel[2].src]} />
            </div>
          </ElegantReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {homeContent.testimonialsGrid.reviews.map((review, index) => (
              <ElegantReveal key={index}>
                <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-8 shadow-sm">
                  <div className="mb-6 flex text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`h-5 w-5 ${i < Math.floor(Number(review.rating)) ? 'fill-current' : 'text-muted fill-current'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-6 flex-1 text-lg text-foreground">
                    {review.quote}
                  </blockquote>
                  <div className="font-bold text-muted-foreground">
                    {review.author}
                  </div>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Fabric & Material Quality */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <ElegantReveal>
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  {homeContent.fabricQuality.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {homeContent.fabricQuality.body}
                </p>
              </div>
            </ElegantReveal>
            <ElegantReveal>
               <div className="relative aspect-video overflow-hidden rounded-lg shadow-sm">
                 <Image
                    src={images.fabric.src}
                    alt={images.fabric.alt}
                    fill
                    className="object-cover"
                 />
               </div>
            </ElegantReveal>
          </div>
        </div>
      </section>

      {/* 11. Local Presence */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                {homeContent.localPresence.title}
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                {homeContent.localPresence.body}
              </p>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {homeContent.localPresence.cta}
              </Link>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 12. Before & After (Conceptual representation) */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
                {homeContent.beforeAndAfter.title}
              </h2>
              <p className="text-muted-foreground">
                {homeContent.beforeAndAfter.description}
              </p>
            </div>
            <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-lg bg-muted flex items-center justify-center border border-border">
              {/* Placeholder for actual interactive slider */}
              <div className="text-muted-foreground text-sm uppercase tracking-widest">[ Interactive Slider Component ]</div>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 13. Pricing Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ElegantReveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
              {homeContent.pricingPhilosophy.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              {homeContent.pricingPhilosophy.body}
            </p>
            <Link
              href="/pricing"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {homeContent.pricingPhilosophy.cta} &rarr;
            </Link>
          </ElegantReveal>
        </div>
      </section>

      {/* 14. Urgency/Availability Banner */}
      <section className="bg-secondary py-6 text-center text-secondary-foreground">
        <div className="container mx-auto px-4 text-sm font-medium tracking-wide">
          {homeContent.availability.bannerText}
        </div>
      </section>

      {/* 15. FAQ Snippet */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                {homeContent.faqSnippet.title}
              </h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {homeContent.faqSnippet.questions.map((faq, index) => (
                <div key={index} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-2 font-bold">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {homeContent.faqSnippet.cta} &rarr;
              </Link>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 16. Newsletter */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold">
                {homeContent.newsletter.title}
              </h2>
              <p className="mb-8 text-muted-foreground">
                {homeContent.newsletter.description}
              </p>
              <form className="flex flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={homeContent.newsletter.placeholder}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shrink-0"
                >
                  {homeContent.newsletter.cta}
                </button>
              </form>
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 17. Behind the Scenes / Atelier */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
                {homeContent.atelier.title}
              </h2>
              <p className="text-muted-foreground">
                {homeContent.atelier.description}
              </p>
            </div>
            <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-lg shadow-md">
              <Image
                src={images.atelier.src}
                alt={images.atelier.alt}
                fill
                className="object-cover"
              />
            </div>
          </ElegantReveal>
        </div>
      </section>

      {/* 18. Secondary CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ElegantReveal>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              {homeContent.secondaryCta.headline}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90 md:text-xl">
              {homeContent.secondaryCta.subheadline}
            </p>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-background px-10 font-bold text-foreground shadow transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {homeContent.secondaryCta.cta}
            </Link>
          </ElegantReveal>
        </div>
      </section>

      {/* 19. Social Proof Feed */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <ElegantReveal>
              <h2 className="font-serif text-3xl font-bold md:text-4xl mb-2">
                {homeContent.socialProof.title}
              </h2>
              <a href="#" className="font-medium text-primary hover:underline">
                {homeContent.socialProof.handle}
              </a>
            </ElegantReveal>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
             {[images.services.bridal.src, images.services.evening.src, images.services.everyday.src, images.services.uniform.src].map((src, index) => (
               <ElegantReveal key={index}>
                  <div className="relative aspect-square overflow-hidden rounded-md group">
                    <Image
                      src={src}
                      alt={`Instagram post ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                       <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                       </svg>
                    </div>
                  </div>
               </ElegantReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 20. Footer is handled globally in layout.tsx */}

      {/* Logo Marquee before footer */}
      <section className="border-t border-border">
         <LogoMarquee items={["Precision", "Craftsmanship", "Elegance", "Reliability", "Bespoke", "Patiala", "Quality"]} />
      </section>

    </div>
  );
}
