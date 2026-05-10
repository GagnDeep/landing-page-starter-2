import { blogContent } from "@/content/blog"
import { IMAGES } from "@/lib/images"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Generate static params for known articles
export function generateStaticParams() {
  return blogContent.articleGrid.articles.map((article) => ({
    id: article.id,
  }))
}

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const article = blogContent.articleGrid.articles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  // Determine image based on ID for demo purposes
  const imgSrc = params.id === "1" ? IMAGES.journalArticle1.src : params.id === "2" ? IMAGES.journalArticle2.src : params.id === "3" ? IMAGES.journalArticle3.src : IMAGES.destUdaipur.src;

  return (
    <article className="bg-background min-h-svh pb-32">
      {/* Hero */}
      <div className="relative h-[60svh] w-full bg-muted">
        <Image src={imgSrc} alt={article.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto max-w-3xl -mt-32 relative z-10 px-6">
        <div className="bg-card p-10 md:p-16 border border-border shadow-sm text-center mb-16">
           <div className="flex items-center justify-center gap-4 mb-6">
             <span className="text-xs tracking-widest uppercase text-primary">{article.category}</span>
             <span className="w-1 h-1 rounded-full bg-border" />
             <span className="text-xs tracking-widest uppercase text-muted-foreground">{article.date}</span>
           </div>
           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
             {article.title}
           </h1>
           <div className="w-12 h-[1px] bg-border mx-auto" />
        </div>

        {/* Mock Article Content using typography plugin styles conceptually */}
        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none font-sans font-light text-foreground/90 leading-relaxed">
           <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium mb-8">
              {article.excerpt}
           </p>
           <p className="mb-6">
              When curating an event of this magnitude, the invisible architecture of logistics is just as critical as the breathtaking floral installations that greet the guests. In our experience, true luxury is defined by what the guest does not see: the friction, the frantic problem-solving, the coordination of complex timelines.
           </p>
           <p className="mb-12">
              For this particular celebration, our initial site visit revealed a stunning, yet operationally complex terrain. The challenge was not the aesthetic vision—which was clear and deeply rooted in the location&apos;s heritage—but rather the practical execution of safely transporting high-end culinary equipment, custom structural builds, and international talent to an untouched location.
           </p>

           <h2 className="font-heading text-3xl mt-16 mb-6">The Importance of Local Partnerships</h2>
           <p className="mb-6">
              You cannot parachute into a foreign destination and expect flawless execution without deep, respectful ties to the local infrastructure. We spent months vetting local artisans, understanding regional supply chains, and building a cohesive unit that blended our core team&apos;s rigorous standards with local expertise.
           </p>

           <blockquote className="border-l-2 border-primary pl-6 my-12 italic text-2xl font-heading text-foreground">
              &ldquo;The most beautiful design in the world falls flat if the guest experiences friction arriving at the venue.&rdquo;
           </blockquote>

           <p className="mb-6">
              The culmination of this effort was a multi-day experience that felt entirely effortless to the couple and their guests. It is this synthesis of hospitality and logistical mastery that defines the A2Zee Events approach.
           </p>
        </div>

        {/* 5: pagination-controls */}
        <div className="mt-24 pt-8 border-t border-border flex justify-between items-center">
           <Link href="/blog" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
             <span>←</span> Back to Journal
           </Link>
        </div>
      </div>
    </article>
  )
}
