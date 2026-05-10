import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/content/home';
import { getImage } from '@/lib/images';
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { AnimatedHeroIllustration } from '@/components/visuals/AnimatedHeroIllustration';
import { LogoMarquee } from '@/components/visuals/LogoMarquee';
import { MicroIconSet } from '@/components/visuals/MicroIconSet';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { globalContent } from '@/content/global';

export const metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
};

export default function HomePage() {
  const heroImage = getImage('hero-main');
  const founderImage = getImage('founder-portrait');

  // SVG Logos for the partners/featured-in marquee
  const partnerLogos = globalContent.partnerLogos.map((logo, index) => (
    <div key={`logo${index}`} className="text-xl font-heading font-semibold opacity-70">
      {logo}
    </div>
  ));

  return (
    <div className="flex flex-col w-full">
      {/* 1. Global Notice Bar */}
      {homeContent.noticeBar && (
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs font-medium tracking-wide">
          <span>{homeContent.noticeBar.message}</span>
          {homeContent.noticeBar.linkText && (
            <Link href={homeContent.noticeBar.linkHref || '#'} className="ml-2 underline hover:text-accent transition-colors">
              {homeContent.noticeBar.linkText}
            </Link>
          )}
        </div>
      )}

      {/* 2. Main Navigation (Handled in layout.tsx) */}

      {/* 3. Hero Section (The Grand Entrance) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background">
        <AnimatedGradientMesh variant="primary" />
        <DotMatrixGrid opacity={0.3} />
        <div className="container mx-auto px-4 md:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left pt-12 lg:pt-0">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] text-foreground tracking-tight text-balance">
              {homeContent.hero.headline.split('. ').map((part, i, arr) => (
                <span key={i} className="block">
                  {part}{i < arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {homeContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href={homeContent.hero.ctaPrimary.href}
                className="w-full sm:w-auto px-8 py-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-md text-sm font-medium transition-all shadow-md"
              >
                {homeContent.hero.ctaPrimary.label}
              </Link>
              {homeContent.hero.ctaSecondary && (
                <Link
                  href={homeContent.hero.ctaSecondary.href}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground border border-border hover:border-foreground rounded-md text-sm font-medium transition-all"
                >
                  {homeContent.hero.ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
          <div className="flex-1 w-full relative max-w-lg lg:max-w-none">
            <AnimatedHeroIllustration className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* 4. Brand Essence (The Philosophy) */}
      <section className="py-24 md:py-32 bg-card relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground font-medium">
            {homeContent.brandEssence.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {homeContent.brandEssence.body}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <AnimatedGradientMesh variant="secondary" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* 5. Services Overview Intro */}
          <div className="max-w-2xl mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-medium mb-4">
              {homeContent.servicesIntro.headline}
            </h2>
            <p className="text-lg text-muted-foreground">
              {homeContent.servicesIntro.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* 6. Service Card 1, 7. Service Card 2, 8. Service Card 3 */}
            {homeContent.services.map((service, index) => {
              // Map index to a generic icon name from MicroIconSet
              const iconMap: ('users' | 'briefcase' | 'glass-water')[] = ['users', 'briefcase', 'glass-water'];
              return (
                <Link key={service.title} href={service.href} className="group block h-full">
                  <div className="h-full bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 flex flex-col">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                      <MicroIconSet name={iconMap[index]} size="lg" variant="glowing" />
                    </div>
                    <h3 className="font-heading text-2xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                      Explore Service
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. The "Full-Service" Promise & 10. Portfolio Teaser */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-medium">
                {homeContent.fullServicePromise.headline}
              </h2>
              <p className="text-lg text-background/80 leading-relaxed font-light">
                {homeContent.fullServicePromise.body}
              </p>
              <div className="pt-8 border-t border-background/20">
                <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
                  {homeContent.portfolioTeaser.headline}
                </p>
                <Link
                  href={homeContent.portfolioTeaser.cta.href}
                  className="inline-flex items-center gap-3 text-background hover:text-primary transition-colors font-medium"
                >
                  {homeContent.portfolioTeaser.cta.label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
              {/* Uses image registry for the emotional/portfolio anchor */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl translate-x-4 translate-y-4 -z-10" />
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Testimonial */}
      <section className="py-24 md:py-32 bg-card relative overflow-hidden">
        <DotMatrixGrid opacity={0.15} />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <svg className="w-12 h-12 mx-auto text-primary/40 mb-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground font-medium leading-normal md:leading-relaxed mb-12">
            "{homeContent.testimonial.quote}"
          </p>
          <div>
            <div className="font-medium text-foreground text-lg">{homeContent.testimonial.author}</div>
            <div className="text-muted-foreground text-sm">{homeContent.testimonial.role}</div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          {/* 12. Process Intro */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-medium mb-4">
              {homeContent.processIntro.headline}
            </h2>
            <p className="text-lg text-muted-foreground">
              {homeContent.processIntro.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-border -z-10" />

            {/* 13. Step 1, 14. Step 2, 15. Step 3 */}
            {homeContent.processSteps.map((step, index) => (
              <div key={index} className="relative bg-background pt-4 text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center font-heading text-xl font-bold mx-auto md:mx-0 mb-8 z-10 shadow-sm">
                  {index + 1}
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Meet Kavita */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative shrink-0 border-4 border-background shadow-lg">
              <Image
                src={founderImage.src}
                alt={founderImage.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                {homeContent.founderTeaser.headline}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {homeContent.founderTeaser.body}
              </p>
              <div className="pt-2">
                <Link
                  href={homeContent.founderTeaser.cta.href}
                  className="inline-flex items-center text-primary font-medium hover:text-foreground transition-colors"
                >
                  {homeContent.founderTeaser.cta.label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. Partners Marquee */}
      <section className="py-16 bg-background border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            {homeContent.partnersIntro}
          </p>
        </div>
        <LogoMarquee logos={partnerLogos} speed="slow" />
      </section>

      {/* 18. Secondary CTA & 19. Newsletter Signup */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <AnimatedGradientMesh variant="dark" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
            {/* CTA */}
            <div className="space-y-8 text-center md:text-left">
              <h2 className="font-heading text-4xl md:text-5xl font-medium max-w-md mx-auto md:mx-0">
                {homeContent.secondaryCta.headline}
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                {homeContent.secondaryCta.subheadline}
              </p>
              <Link
                href={homeContent.secondaryCta.button.href}
                className="inline-block px-8 py-4 bg-background text-foreground hover:bg-muted rounded-md text-sm font-medium transition-all shadow-lg"
              >
                {homeContent.secondaryCta.button.label}
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-primary-foreground/20 max-w-md mx-auto w-full text-center">
              <h3 className="font-heading text-2xl font-medium mb-2">
                {homeContent.newsletter.headline}
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-8">
                {homeContent.newsletter.subheadline}
              </p>
              <form className="space-y-4" action="/api/newsletter" method="POST">
                <input
                  type="email"
                  placeholder={homeContent.newsletter.placeholder}
                  className="w-full px-4 py-3 bg-background/5 border border-primary-foreground/30 rounded-md text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary-foreground text-primary rounded-md text-sm font-bold hover:bg-background transition-colors"
                >
                  {homeContent.newsletter.buttonLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 20. Global Footer (Handled in layout.tsx) */}
    </div>
  );
}
