"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { SectionDivider } from "@/components/visuals/SectionDivider";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Header />

      <main className="flex-grow">
        {/* Section 3: Hero Video/Image Header (Animated) */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatedGradientMesh variant="primary" />
            <FloatingBlobs count={4} />
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
            <div className="mb-8 opacity-80 mix-blend-multiply dark:mix-blend-screen max-w-[200px] md:max-w-[300px]">
              <AnimatedHeroIllustration />
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
              {homeContent.hero.headline}
            </h1>
            <p className="text-lg md:text-2xl font-sans text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {homeContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <CTAGlow glowColor="accent">
                {homeContent.hero.ctaPrimary}
              </CTAGlow>
              <Link
                href="/features"
                className="text-sm font-sans tracking-widest uppercase hover:text-primary transition-colors underline-offset-8 underline"
              >
                {homeContent.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <SectionDivider variant="blob" position="bottom" />
          </div>
        </section>

        {/* Section 4: Brand Philosophy */}
        <section className="py-24 md:py-32 relative">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8 italic">
              &ldquo;{homeContent.philosophy.quote}&rdquo;
            </h2>
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-loose">
              {homeContent.philosophy.body}
            </p>
          </div>
        </section>

        {/* Section 5: Signature Services Highlights (Grid) */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold mb-4">{homeContent.servicesSummary.title}</h2>
              <div className="h-px w-24 bg-border mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {homeContent.servicesSummary.items.map((item, idx) => (
                <Link href={item.link} key={item.id} className="group flex flex-col items-center text-center p-8 border border-border rounded-3xl bg-background hover:bg-muted transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl opacity-50">0{idx + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: The Chrome Gel Nail Specialty */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={siteImages.nailsChrome.src}
                  alt={siteImages.nailsChrome.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="font-heading text-4xl md:text-5xl font-bold">{homeContent.specialties.nails.title}</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {homeContent.specialties.nails.body}
                </p>
                <Link href="/features#nails" className="inline-block mt-4 text-primary font-medium tracking-wide uppercase text-sm border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors">
                  {homeContent.specialties.nails.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Curly Hair Advanced Care */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6 lg:pr-12">
                <h2 className="font-heading text-4xl md:text-5xl font-bold">{homeContent.specialties.hair.title}</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {homeContent.specialties.hair.body}
                </p>
                <Link href="/features#hair" className="inline-block mt-4 text-primary font-medium tracking-wide uppercase text-sm border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors">
                  {homeContent.specialties.hair.cta}
                </Link>
              </div>
              <div className="w-full lg:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
                <Image
                  src={siteImages.hairCurly.src}
                  alt={siteImages.hairCurly.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: The Bridal & NRI Experience (Parallax effect style) */}
        <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image
                src={siteImages.bridalPrep.src}
                alt={siteImages.bridalPrep.alt}
                fill
                className="object-cover object-center opacity-70 dark:opacity-40"
              />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <div className="bg-card/90 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-border shadow-2xl">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">{homeContent.specialties.bridal.title}</h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
                {homeContent.specialties.bridal.body}
              </p>
              <CTAGlow glowColor="primary">
                {homeContent.specialties.bridal.cta}
              </CTAGlow>
            </div>
          </div>
        </section>

        {/* Section 9: Featured Artists */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl font-bold mb-16">{homeContent.teamPreview.title}</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {homeContent.teamPreview.members.map((member, idx) => {
                const images = [siteImages.teamMember1, siteImages.teamMember2, siteImages.teamMember3];
                const img = images[idx % images.length];
                return (
                  <div key={idx} className="flex flex-col items-center group cursor-pointer">
                    <div className="relative w-40 h-52 rounded-t-full overflow-hidden mb-4 border border-border transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                      <Image src={img.src} alt={img.alt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <h4 className="font-heading font-bold text-lg">{member.name}</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 10: Client Testimonials */}
        <section className="py-24 bg-accent/10 border-y border-border overflow-hidden">
          <div className="container mx-auto px-6 mb-12 text-center">
            <h2 className="font-heading text-4xl font-bold">{homeContent.testimonials.title}</h2>
          </div>
          <div className="flex gap-8 px-6 animate-marquee">
            {[...homeContent.testimonials.reviews, ...homeContent.testimonials.reviews].map((review, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-background p-8 rounded-2xl border border-border shadow-sm shrink-0">
                <p className="font-sans text-lg text-foreground italic mb-6">&ldquo;{review.text}&rdquo;</p>
                <p className="font-heading font-bold text-primary">— {review.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11 & 12: Lookbook Gallery */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
              <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
                <Image src={siteImages.nailsBiab.src} alt={siteImages.nailsBiab.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative col-span-2 md:col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                <Image src={siteImages.hairBalayage.src} alt={siteImages.hairBalayage.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative col-span-2 md:col-span-1 row-span-2 rounded-2xl overflow-hidden group">
                <Image src={siteImages.bridalDetail.src} alt={siteImages.bridalDetail.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative col-span-2 md:col-span-1 row-span-1 rounded-2xl overflow-hidden group bg-primary flex items-center justify-center text-center p-6">
                <Link href={homeContent.lookbook.follow.href} className="text-primary-foreground hover:opacity-80 transition-opacity">
                  <h3 className="font-heading text-2xl font-bold mb-2">{homeContent.lookbook.follow.title}</h3>
                  <p className="text-sm font-sans">{homeContent.lookbook.follow.handle}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 13: Product Partners */}
        <section className="py-16 border-y border-border bg-muted/20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">{homeContent.partners.title}</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60">
              {homeContent.partners.brands.map((brand, idx) => (
                <span key={idx} className="font-heading text-2xl font-bold tracking-widest">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 14: Promotional Banner */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{homeContent.promotional.headline}</h2>
            <p className="font-sans text-background/80 mb-8">{homeContent.promotional.body}</p>
            <CTAGlow glowColor="accent" className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground border-transparent">
              {homeContent.promotional.cta}
            </CTAGlow>
          </div>
        </section>

        {/* Section 15: Visit Us Location */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="bg-card rounded-[3rem] overflow-hidden border border-border shadow-lg flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                <h2 className="font-heading text-4xl font-bold mb-6">{homeContent.location.title}</h2>
                <div className="space-y-4 text-muted-foreground mb-8 font-sans text-lg">
                  <p>{homeContent.location.address}</p>
                  <p>{homeContent.location.hours}</p>
                  <p className="text-destructive font-medium">{homeContent.location.closed}</p>
                </div>
                <Link href="/contact" className="inline-block text-primary font-medium tracking-wide uppercase text-sm border-b border-primary pb-1 self-start hover:text-foreground hover:border-foreground transition-colors">
                  {homeContent.location.cta}
                </Link>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[400px]">
                 <Image src={siteImages.interiorMain.src} alt={siteImages.interiorMain.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 16 & 18: Newsletter & FAQ Previews */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Newsletter */}
            <div className="bg-primary text-primary-foreground p-12 rounded-3xl flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold mb-4">{homeContent.newsletter.title}</h2>
              <p className="font-sans text-primary-foreground/80 mb-8">{homeContent.newsletter.description}</p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={homeContent.newsletter.placeholder}
                  className="flex-grow bg-background/10 border border-primary-foreground/30 rounded-full px-6 py-3 placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-background"
                />
                <button type="submit" className="bg-background text-foreground px-8 py-3 rounded-full font-medium hover:bg-foreground hover:text-background transition-colors whitespace-nowrap">
                  {homeContent.newsletter.cta}
                </button>
              </form>
            </div>

            {/* Quick Links / FAQ preview */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold mb-8">{homeContent.faqPreview.title}</h2>
              <div className="space-y-6 mb-8">
                {homeContent.faqPreview.questions.map((q, idx) => (
                  <div key={idx} className="border-b border-border pb-4">
                    <p className="font-heading font-bold text-lg mb-2">{q.q}</p>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">{q.a}</p>
                  </div>
                ))}
              </div>
              <Link href="/faq" className="text-primary text-sm font-medium uppercase tracking-wide hover:underline underline-offset-4">
                {homeContent.faqPreview.cta} &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Section 17: Latest from the Blog / Journal */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold mb-4">{homeContent.blogPreview.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                    <Image src={siteImages.bohoTexture.src} alt="Blog preview" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">The 2024 Nail Phenomenon</h3>
                  <p className="text-sm text-muted-foreground font-sans line-clamp-2">From subtle glazed donut finishes to highly reflective metallic tips, we explore why chrome gel nails continue to dominate.</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/blog" className="inline-block text-primary font-medium tracking-wide uppercase text-sm border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors">
                {homeContent.blogPreview.cta}
              </Link>
            </div>
          </div>
        </section>

        {/* Section 19: Pre-Footer Instagram Feed */}
        <section className="flex w-full h-40 md:h-64 overflow-hidden">
           {[siteImages.nailsChrome, siteImages.hairCurly, siteImages.bridalPrep, siteImages.aestheticsSkin, siteImages.interiorDetail].map((img, idx) => (
             <Link key={idx} href={homeContent.lookbook.follow.href} className="relative w-1/5 h-full group">
               <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" />
               <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors flex items-center justify-center">
                  <MicroIconSet icon="sparkle" animated={false} className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity stroke-primary-foreground" />
               </div>
             </Link>
           ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
