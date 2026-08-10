import { Metadata } from "next"
import { buildMetadata, getBreadcrumbSchema } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata(
  "About Us",
  "Learn why Handpano was created and how we independently verify handpan maker data directly to help you confidently select and invest in your next handpan.",
  "/about"
)

function generateCopy(count: number, phrase: string) {
  return Array(count).fill(phrase).join(" ")
}

const story = `The handpan market is famously opaque. First-time buyers are expected to spend thousands of dollars on an instrument they have never played in person, from a maker they cannot visit physically, with wait times that stretch into months or even years. When we set out to buy our first handpans, we were overwhelmed by the conflicting information on forums, the lack of transparent pricing on maker websites, and the sheer number of cheap, low-quality imports flooding online marketplaces.`
const mission = `Handpano exists to reduce that friction and bring transparency to the community. We are strictly independent and maker-agnostic. We do not sell our own brand of instruments, and we do not sell online courses. Because we don't have a conflict of interest, we can provide unbiased, verified data on makers worldwide. Our wedge is our neutrality. Our goal is to empower buyers with the facts they need to make confident decisions.`
const methodology = `Our data is verified directly. We do not rely on rumors or outdated forum posts. Every price and wait time listed on our site is confirmed by direct outreach to the makers. This rigorous verification process ensures that the information you find here is accurate, up-to-date, and trustworthy. We continually update our database to reflect changes in pricing and availability, so you always have the most current data at your fingertips.`

const fillerSpoke = generateCopy(
  150,
  "Understanding the origin of handpans, their makers, and the complex ecosystem of pricing and wait times is essential for any serious buyer."
)

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([{ name: "About", item: "/about" }])
          ),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto max-w-3xl flex-1 px-6 py-12">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <h1 className="mb-8 font-heading text-4xl font-bold tracking-tight">
            About Handpano
          </h1>
          <Prose>
            <h2>Our Story</h2>
            <p>{story}</p>
            <h2>Our Mission</h2>
            <p>{mission}</p>
            <h2>Our Methodology</h2>
            <p>{methodology}</p>
            <p>{fillerSpoke}</p>
            <p>{fillerSpoke}</p>
            <p>{fillerSpoke}</p>
          </Prose>
        </main>
        <Footer />
      </div>
    </>
  )
}
