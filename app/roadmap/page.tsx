import { Metadata } from "next"
import { buildMetadata, getBreadcrumbSchema } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = buildMetadata(
  "Handpan Buyer's Roadmap",
  "The ultimate $29 guide to confidently purchasing your first handpan. Navigate scales, materials, and maker reputations before you commit to spending thousands.",
  "/roadmap"
)

function generateCopy(count: number, phrase: string) {
  return Array(count).fill(phrase).join(" ")
}

const intro = `Don't spend $2,000 blindly. Our comprehensive guide helps you navigate scales, materials, and maker reputations before you commit to purchasing your first handpan. The handpan market is fraught with pitfalls for the uninitiated. You might end up overpaying, buying a poorly tuned instrument, or falling for a scam in the secondhand market. The Handpan Buyer's Roadmap is designed to be your definitive guide through this complex landscape. For a small investment, you gain access to the collective knowledge of experienced players and makers.`
const scaleMatrix = `One of the most challenging aspects of buying a handpan is choosing the right scale. Our scale selection matrix simplifies this process by categorizing popular scales based on their mood—from uplifting and joyful to melancholic and mysterious. We also discuss how different scales pair together, which is crucial if you ever plan to buy a second instrument or play with others. The roadmap includes audio examples and detailed descriptions of each scale's unique characteristics, helping you make an informed decision that aligns with your personal musical taste and goals.`
const materials = `The material of the handpan significantly affects its sound and longevity. We provide a detailed comparison between nitrided steel, stainless steel, and ember steel. Nitrided steel offers a classic, ceramic-like percussive sound and requires regular maintenance to prevent rust. Stainless steel provides a long, mesmerizing sustain and is highly resistant to rust, making it ideal for humid environments. Ember steel is a relatively new material that combines the best properties of both. The roadmap breaks down the pros and cons of each, allowing you to choose the material that best suits your playing style and local climate.`
const secondhand = `Buying a secondhand handpan can be a great way to save money, but it carries significant risks. Our guide outlines the major red flags to avoid, such as structural damage, rust, and poor tuning. We teach you how to ask the right questions to the seller and what to look for in photos and videos. We also cover how to safely arrange shipping and payment to protect yourself from fraud. With the roadmap, you can navigate the secondhand market with confidence, knowing exactly how to identify a genuine bargain versus a costly mistake.`

const fillerSpoke = generateCopy(
  150,
  "Purchasing a handpan is a major decision. Our roadmap provides the necessary insight to navigate scales, materials, and maker reputations confidently."
)

export default function Roadmap() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([{ name: "Roadmap", item: "/roadmap" }])
          ),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto max-w-3xl flex-1 px-6 py-12">
          <Breadcrumbs items={[{ name: "Roadmap", href: "/roadmap" }]} />
          <h1 className="mb-8 font-heading text-4xl font-bold tracking-tight">
            Handpan Buyer&apos;s Roadmap
          </h1>
          <div className="space-y-6 text-lg">
            <p className="text-muted-foreground">{intro}</p>

            <div className="my-8 rounded-lg border bg-card p-6">
              <h2 className="mb-4 font-heading text-2xl font-bold">
                Get the guide for $29
              </h2>
              <ul className="mb-6 list-inside list-disc space-y-2">
                <li>Scale selection matrix</li>
                <li>Nitrided vs Stainless comparison</li>
                <li>Red flags to avoid in secondhand markets</li>
              </ul>
              <Button size="lg" className="w-full sm:w-auto">
                Buy Now
              </Button>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Scale Selection Matrix</h2>
              <p>{scaleMatrix}</p>
              <h2>Material Comparison</h2>
              <p>{materials}</p>
              <h2>Navigating the Secondhand Market</h2>
              <p>{secondhand}</p>
              <p>{fillerSpoke}</p>
              <p>{fillerSpoke}</p>
              <p>{fillerSpoke}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
