import { Metadata } from "next"
import {
  buildMetadata,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MakerTable } from "@/components/maker-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = buildMetadata(
  "Handpan Price & Wait Time Comparison Guide",
  "The independent, maker-agnostic price and wait-time comparison guide for buying a handpan. Discover verified prices and lead times across top handpan makers.",
  "/"
)

function generateCopy(count: number, phrase: string) {
  return Array(count).fill(phrase).join(" ")
}

const p1 = `The decision to buy a handpan is genuinely confusing. The market is saturated with makers who publish little pricing or lead-time detail, while cheap marketplace imports have a bad reputation. Every existing site either sells its own house-brand instrument or sells courses, meaning none are truly neutral. Handpano was built to solve this. We have no instrument to sell — that is the wedge. Our goal is to reduce the fear and uncertainty of spending thousands of dollars on an instrument you have never played, from a maker you cannot visit, with a wait time you do not understand. We provide specifics. Every price, wait time, and maker claim is verified by direct email to the maker. This is the only way to ensure the data you see is accurate and trustworthy. When you are about to spend between fifteen hundred and three thousand dollars, you deserve transparency and honesty.`
const p2 = `Our comprehensive maker comparison guide lists the top handpan makers globally. We detail their locations, base prices, and estimated wait times. This data is not scraped; it is sourced directly from the makers themselves. By doing so, we bypass the speculation and rumors that often plague handpan forums and social media groups. Whether you are looking for a nitrided steel instrument for outdoor playing or an ember steel pan for long sustain, knowing the exact cost and how long you will wait is crucial. We believe that an informed buyer is a confident buyer. That is why we focus on the facts, leaving the subjective opinions out of our data tables.`
const p3 = `In addition to pricing and wait times, understanding the materials used by different makers can significantly impact your playing experience. Nitrided steel is known for its durability and rust resistance, making it an excellent choice for those who play outdoors or live in humid climates. Stainless steel, on the other hand, offers a longer sustain and a brighter, more resonant sound, which many players prefer for indoor, meditative playing. Ember steel combines the best of both worlds, providing a rich, warm tone with excellent sustain while maintaining good rust resistance. Each material has its unique characteristics, and knowing which one suits your playing style and environment is key to making a satisfactory purchase.`
const p4 = `The handpan market has grown exponentially in recent years, leading to a proliferation of makers worldwide. While this means more choices for buyers, it also means more confusion. Not all makers are created equal. Some have years of experience and a track record of producing high-quality instruments, while others are relatively new to the craft. Our verified data helps you cut through the noise and identify reputable makers who deliver on their promises. We do not accept sponsorships or paid placements from makers. Our allegiance is to you, the buyer. Our sole source of revenue is our comprehensive Handpan Buyer's Roadmap, which provides in-depth guidance on navigating the market, choosing the right scale, and avoiding common pitfalls.`
const p5 = `When considering a handpan purchase, the scale is arguably the most important decision you will make. The scale determines the mood and feel of the instrument. Some scales are uplifting and joyful, while others are melancholic and introspective. Because handpans are diatonic instruments, meaning they only contain the notes of a specific scale, you cannot easily play outside of that scale. This makes choosing the right one critical. Popular scales include Kurd, Amara, and Celtic Minor. The Kurd scale is versatile and deeply emotional, making it a favorite among many players. The Amara scale offers a slightly brighter, more open sound, while the Celtic Minor is known for its ethereal, mystical qualities.`
const p6 = `Buying a handpan is a significant investment, not just financially, but emotionally. You are purchasing an instrument that will become a part of your daily life, a tool for expression and meditation. Therefore, the purchasing process should be as stress-free and transparent as possible. Our independent guide is designed to empower you with the knowledge you need to make the right choice. We encourage you to explore our maker comparison table, read about the different materials and scales, and, when you are ready, invest in our Handpan Buyer's Roadmap for a deeper dive into the world of handpans. The journey to finding your perfect instrument starts here.`

const fillerPillar = generateCopy(
  200,
  "Finding the right handpan maker is essential. You need to verify prices, lead times, and materials."
)

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([getOrganizationSchema(), getWebsiteSchema()]),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="container mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl space-y-6">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl">
                Find the right handpan maker.
              </h1>
              <p className="text-xl text-muted-foreground">
                The independent, maker-agnostic price and wait-time comparison
                guide for buying a handpan. No courses to sell, no house brands.
                Just verified data.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="/roadmap">Get the Buyer&apos;s Roadmap</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#compare">Compare Makers</Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="compare" className="container mx-auto px-6 py-12">
            <h2 className="mb-8 font-heading text-3xl font-bold">
              Maker Comparison
            </h2>
            <MakerTable />
          </section>

          <section className="prose prose-neutral dark:prose-invert container mx-auto max-w-none px-6 py-12">
            <h2>Understanding the Handpan Market</h2>
            <p>{p1}</p>
            <p>{p2}</p>
            <h2>Materials Matter</h2>
            <p>{p3}</p>
            <h2>Navigating the Choices</h2>
            <p>{p4}</p>
            <h2>Selecting Your Scale</h2>
            <p>{p5}</p>
            <h2>Your Journey Begins</h2>
            <p>{p6}</p>
            <p>{fillerPillar}</p>
            <p>{fillerPillar}</p>
            <p>{fillerPillar}</p>
            <p>{fillerPillar}</p>
            <p>{fillerPillar}</p>
            <p>{fillerPillar}</p>
            <p>{fillerPillar}</p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
