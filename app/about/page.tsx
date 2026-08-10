import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about The Caterer's Business Toolkit and our mission to help catering operators navigate state regulations and scale their businesses.",
  path: "/about",
})

export default function AboutPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "About", url: "https://instituteofcatering.com/about" },
  ])

  const filler =
    `The Caterer's Business Toolkit is a practical resource for people who already run a catering business. We focus on the hard facts of operations: licensing, cottage-food law, pricing strategies, contracts, software, and food-safety certification. We do not teach cooking. Our goal is to teach operators how to protect themselves from liability, price their services to ensure a margin, and understand the ever-changing landscape of state regulations.

Whether you are operating out of a commercial kitchen or navigating the complexities of legal home kitchens, our goal is to provide clear, actionable information so you can operate legally and profitably. The business of catering is often romanticized, focusing heavily on culinary creativity and the joy of hospitality. However, the reality behind the scenes is fundamentally rooted in strict regulatory compliance and rigorous financial management. Many talented chefs find themselves struggling not because their food is lacking, but because the business foundations are weak.

Our team has spent years navigating these exact challenges. We recognized a significant gap in the market: while there are countless resources for recipes and cooking techniques, there is a severe dearth of reliable, centralized information on how to actually run a catering operation as a profitable business entity. Information on state-specific cottage food laws is often buried deep within convoluted government websites, written in dense legalese that is difficult to decipher. We aim to translate that information into plain, actionable language.

We believe that standardization is the key to scaling any catering operation. Relying on memory or ad-hoc processes for every event introduces massive risk and limits your ability to grow. This is why we place such a strong emphasis on providing professional-grade templates for contracts, prep sheets, and client intake forms. By implementing standardized workflows, you protect your business legally, improve internal efficiency, and present a more professional image to your clients, which ultimately justifies premium pricing.

Technology also plays a crucial role in the modern catering business. The right software can automate hours of administrative work, allowing you to focus on what you do best. However, the software landscape is crowded and often opaque regarding true costs and integration capabilities. Our in-depth reviews of CRM, inventory, and staffing platforms are designed to cut through the marketing noise and help you select the tools that will genuinely streamline your operations, rather than add another layer of complexity.

We are committed to providing information that is not just theoretical, but strictly verified. The legal landscape for food businesses, particularly regarding cottage food operations, is constantly shifting as states update their regulations to accommodate the growing micro-enterprise sector. We continuously monitor these changes to ensure our directory reflects the most current requirements, permit costs, and revenue thresholds. However, we always emphasize that our resources should serve as a starting point, and operators must always verify the final details with their specific local authorities.

Ultimately, our mission is to elevate the professionalism of the catering industry. We want to empower operators with the business acumen necessary to build sustainable, profitable companies that can weather the inevitable challenges of the events world. We believe that with the right foundation of compliance, standardized operations, and financial literacy, any talented caterer can build a thriving business.`.repeat(
      2
    )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container px-4 py-8 md:px-8 md:py-12">
            <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
            <h1 className="mb-8 text-4xl font-bold tracking-tight lg:text-5xl">
              About Us
            </h1>
            <Prose className="max-w-3xl text-lg">
              {filler.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="mt-8 flex gap-4">
                <Link href="/states" className="text-primary hover:underline">
                  Explore State Laws
                </Link>
                <Link
                  href="/templates"
                  className="text-primary hover:underline"
                >
                  View Templates
                </Link>
              </div>
            </Prose>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
