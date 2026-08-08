import { buildMetadata } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata = buildMetadata({
  title: "About The Guide",
  description: "Why we built the Restaurant Stack Guide and how we make money.",
})

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto max-w-3xl flex-1 px-4 py-12">
        <Breadcrumbs segments={[{ title: "About", href: "/about" }]} />
        <Prose className="mt-8">
          <h1>About The Restaurant Stack Guide</h1>
          <p>
            Opening a restaurant is terrifying enough without having to decipher
            the opaque pricing structures and multi-year lock-ins of the
            technology vendors trying to sell to you in the final ninety days
            before service.
          </p>
          <p>
            We are not a culinary school, and we are not a food blog. This is a
            pre-opening buying guide designed specifically for the first-time
            independent restaurant owner. We strip away the marketing speak and
            present the stark reality of what point-of-sale, payroll,
            online-ordering, and reservation systems actually cost.
          </p>
          <h2>How We Make Money</h2>
          <p>
            This site is monetised by vendor referral bounties. Companies like
            Toast, Square, and TouchBistro operate cash-bounty referral
            programmes, and the per-conversion payouts in this category are
            significant. This means that if you use our links to sign up for a
            service, we may receive a commission at no extra cost to you.
          </p>
          <p>
            However, we maintain our independence. The comparison data, prices,
            processing rates, and contract terms presented here are rigorous,
            verified, and explicitly detailed. We highlight the good and the
            bad, knowing that the wrong POS system can bleed a thin-margin
            business dry.
          </p>
        </Prose>
      </main>
      <Footer />
    </div>
  )
}
