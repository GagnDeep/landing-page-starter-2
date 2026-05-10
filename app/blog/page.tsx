"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { blogContent } from "@/content/blog";
import { ImageRegistry } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <FloatingBlobs color="var(--primary)" size={400} blur={120} delay={0} className="-top-20 -left-20 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-heading font-medium text-foreground tracking-tight">
              {blogContent.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
              {blogContent.hero.subheadline}
            </motion.p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6, duration: 1 }}
             className="flex flex-wrap justify-center gap-3 pt-12"
          >
             {blogContent.categories.map((cat, idx) => (
               <button key={idx} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-primary/20'}`}>
                 {cat}
               </button>
             ))}
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-foreground text-background text-center px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {blogContent.callToAction.heading}
          </h2>
          <p className="text-lg text-white/80">
            {blogContent.callToAction.subheading}
          </p>
          <Button size="lg" asChild className="rounded-full text-lg px-10 bg-background text-foreground hover:bg-muted">
            <Link href="/contact">{blogContent.callToAction.buttonText}</Link>
          </Button>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
           <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted/20 rounded-3xl overflow-hidden border border-border"
           >
              <div className="relative w-full h-[400px] lg:h-full">
                <Image src={ImageRegistry.JournalHero.src} alt={ImageRegistry.JournalHero.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-8 lg:p-12 space-y-6">
                <span className="text-sm font-bold tracking-widest uppercase text-primary">{blogContent.featuredPost.category}</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-medium text-foreground leading-tight">
                  {blogContent.featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg">{blogContent.featuredPost.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <span className="text-sm text-muted-foreground/80">{blogContent.featuredPost.date}</span>
                  <Link href={`/blog/${blogContent.featuredPost.id}`} className="text-primary font-medium hover:underline">
                    {blogContent.featuredPost.readMoreText} &rarr;
                  </Link>
                </div>
              </div>
           </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-foreground text-background text-center px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {blogContent.callToAction.heading}
          </h2>
          <p className="text-lg text-white/80">
            {blogContent.callToAction.subheading}
          </p>
          <Button size="lg" asChild className="rounded-full text-lg px-10 bg-background text-foreground hover:bg-muted">
            <Link href="/contact">{blogContent.callToAction.buttonText}</Link>
          </Button>
        </motion.div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
           <motion.h3
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-2xl font-heading font-medium mb-10"
           >
             {blogContent.recentPosts.heading}
           </motion.h3>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {blogContent.recentPosts.posts.map((post, idx) => {
                const images = [ImageRegistry.AboutGallery1, ImageRegistry.AboutGallery2, ImageRegistry.AboutGallery3];
                const postImage = images[idx % images.length];

                return (
                 <motion.div
                   key={idx}
                   initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: idx * 0.1 }}
                   className="group flex flex-col space-y-4"
                 >
                   <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-2">
                     <Image src={postImage.src} alt={postImage.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                   </div>
                   <span className="text-xs font-bold tracking-widest uppercase text-primary">{post.category}</span>
                   <h4 className="text-xl font-heading font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                     <Link href={`/blog/${post.id}`}>{post.title}</Link>
                   </h4>
                   <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                   <span className="text-sm text-muted-foreground/60 pt-2">{post.date}</span>
                 </motion.div>
                );
             })}
           </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-foreground text-background text-center px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {blogContent.callToAction.heading}
          </h2>
          <p className="text-lg text-white/80">
            {blogContent.callToAction.subheading}
          </p>
          <Button size="lg" asChild className="rounded-full text-lg px-10 bg-background text-foreground hover:bg-muted">
            <Link href="/contact">{blogContent.callToAction.buttonText}</Link>
          </Button>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
           <motion.div
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl mx-auto text-center space-y-6"
           >
             <motion.h3 variants={fadeUp} className="text-3xl font-heading font-medium text-foreground">{blogContent.newsletter.heading}</motion.h3>
             <motion.p variants={fadeUp} className="text-muted-foreground">{blogContent.newsletter.subheading}</motion.p>
             <motion.form variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-4 max-w-md mx-auto" action="/" method="POST" onSubmit={(e) => e.preventDefault()}>
               <Input type="email" placeholder={blogContent.newsletter.placeholder} className="rounded-full bg-background border-border h-12 px-6" required />
               <Button type="submit" className="rounded-full h-12 px-8">{blogContent.newsletter.buttonText}</Button>
             </motion.form>
           </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-foreground text-background text-center px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {blogContent.callToAction.heading}
          </h2>
          <p className="text-lg text-white/80">
            {blogContent.callToAction.subheading}
          </p>
          <Button size="lg" asChild className="rounded-full text-lg px-10 bg-background text-foreground hover:bg-muted">
            <Link href="/contact">{blogContent.callToAction.buttonText}</Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
