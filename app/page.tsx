import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MakerTable, MakerData } from "@/components/maker-table"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { buildOrganizationLd, buildWebSiteLd } from "@/lib/json-ld"
import { makers } from "@/content/makers"

export const metadata = buildMetadata(
  "Handpano | The Independent Handpan Buyer's Guide",
  "The independent, maker-agnostic price and wait-time comparison guide for buying a handpan. Start your journey with verified metrics and no brand bias.",
  "/"
)

export default function Home() {
  const makerData: MakerData[] = makers.map((m) => ({
    name: m.name,
    location: m.location,
    price: m.basePrice,
    wait: m.waitTime,
  }))

  const jsonLd = [buildOrganizationLd(), buildWebSiteLd()]

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent/30 selection:text-foreground">
      <Header />
      <main className="flex-1">
        {/* Tone Field Hero Section */}
        <section className="relative overflow-hidden bg-background py-32 sm:py-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-background to-background"></div>
          <div className="relative container mx-auto max-w-7xl px-6 text-center">
            <h1 className="mx-auto max-w-4xl font-heading text-5xl leading-[1.1] font-medium tracking-tight text-foreground sm:text-7xl">
              Compare handpan makers, prices, and waits.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-[1.8] text-muted-foreground/90">
              The independent, maker-agnostic price and wait-time comparison
              guide for buying a handpan. We don&apos;t sell instruments. We
              verify the facts.
            </p>
          </div>
        </section>

        {/* The Signature Component Section */}
        <section className="container mx-auto max-w-6xl px-6 py-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-medium tracking-tight">
              Verified Maker Directory
            </h2>
            <p className="mt-5 text-[17.5px] leading-[1.7] text-muted-foreground">
              Every price, wait time, and maker claim listed here is
              independently verified by direct email to the maker.
            </p>
          </div>
          <MakerTable makers={makerData} />
        </section>

        {/* Article Section */}
        <section className="container mx-auto max-w-7xl px-6 py-32">
          <Prose className="mx-auto">
            <h2>Why Handpano Exists</h2>
            <p>
              Buying your first handpan is intimidating. Makers publish little
              pricing or lead-time detail, cheap marketplace imports have a bad
              reputation, and every existing site either sells its own
              house-brand instrument or sells courses, so none is neutral.
            </p>
            <p>
              Handpano has no instrument to sell — that is the wedge. We exist
              solely to help you navigate the confusing landscape of makers,
              scales, and prices with confidence.
            </p>
            <h2>The Reality of Handpan Purchasing</h2>
            <p>
              The handpan market is opaque by design. High-end makers often rely
              on their reputation and waitlists, meaning they rarely publish
              updated pricing or wait times. Conversely, mass-produced
              instruments flood online marketplaces, often with questionable
              tuning and thin metal that lacks resonance. This leaves the
              first-time buyer in a precarious position: trying to spend between
              fifteen hundred and three thousand dollars on an instrument they
              have never played, from a maker they cannot visit, with a wait
              time they do not understand.
            </p>
            <p>
              This is where Handpano comes in. We contact makers directly. We
              verify their base prices. We verify their current wait times. We
              confirm their location and shipping policies. And we present this
              data in a clean, unbiased format. We don&apos;t take commissions
              on sales, and we don&apos;t have our own brand of instruments to
              push.
            </p>

            <h3>Understanding Handpan Materials</h3>
            <p>
              The material of a handpan fundamentally defines its sound profile.
              While early instruments were often made from standard steel, the
              modern handpan is typically crafted from one of three distinct
              materials:
            </p>
            <ul>
              <li>
                <strong>Nitrided Steel:</strong> Known for its warm, percussive
                sound with a distinct &quot;ceramic&quot; attack. Nitriding
                hardens the steel and provides rust resistance. It typically
                offers a shorter, more controlled sustain, which is favored by
                fast, rhythmic players because the notes don&apos;t muddy
                together.
              </li>
              <li>
                <strong>Stainless Steel:</strong> Offers a brighter, more open
                sound with a significantly longer sustain. The resonance can be
                ethereal and atmospheric, often described as a &quot;hall
                reverb&quot; effect. It is highly rust-resistant without needing
                a surface treatment. It requires a more delicate touch, as
                playing too fast can cause the long-sustaining notes to clash.
              </li>
              <li>
                <strong>Ember Steel:</strong> A proprietary blend that aims to
                bridge the gap between nitrided and stainless. It offers some of
                the percussive attack of nitrided steel while retaining much of
                the bloom and sustain of stainless. It is increasingly popular
                among high-end makers for its balanced profile.
              </li>
            </ul>

            <h3>The Importance of Scales</h3>
            <p>
              Unlike a piano or guitar, a handpan is tuned to a single scale. It
              cannot play every note. This makes choosing your first scale a
              critical decision. You are locking yourself into a specific
              emotional landscape.
            </p>
            <p>
              Most beginners are steered towards minor scales like D Kurd or C#
              minor, as they offer a balanced, slightly melancholic but highly
              intuitive layout. Major scales provide a more uplifting, resolved
              sound, while exotic scales (like Hijaz or Pygmy) offer specific
              cultural or mystical flavors.
            </p>
            <p>
              We recommend listening to high-quality recordings of various
              scales. Use headphones. Pay attention to how the scale makes you
              feel. A scale that feels inspiring on day one is the scale you are
              most likely to practice.
            </p>

            <h3>How Handpans Are Priced</h3>
            <p>
              A quality handpan is essentially a custom-built, hand-tuned
              sculpture. The price reflects not just the material, but the
              hundreds of thousands of hammer strikes and the delicate,
              time-consuming process of tuning and fine-tuning.
            </p>
            <p>
              Base prices generally cover an instrument with a central note (the
              Ding) and seven to eight notes in the tone circle. Adding notes on
              the bottom shell, opting for complex tuning techniques like
              &quot;mutants&quot; (where multiple notes are squeezed onto the
              top shell), or selecting premium materials will increase the cost.
            </p>
            <p>
              Beware of prices that seem too good to be true. Instruments priced
              under one thousand dollars are frequently mass-produced from thin
              steel, resulting in poor tuning stability, weak resonance, and
              undesirable overtones. While they might look like a handpan, they
              often sound like a steel drum or a toy.
            </p>

            <h3>The Wait Time Factor</h3>
            <p>
              Because each instrument is hand-crafted, demand often outstrips
              supply for reputable makers. Wait times can range from a few weeks
              to several years. Some of the most famous makers operate on a
              lottery system, meaning you cannot simply buy an instrument even
              if you have the funds; you must be selected for the privilege of
              purchasing.
            </p>
            <p>
              Our directory aims to clarify these wait times so you can plan
              accordingly. If you want an instrument immediately, you may need
              to look for secondhand markets or specific makers who hold stock,
              but patience is often rewarded with an instrument that truly
              resonates with your intent.
            </p>

            <h3>How We Verify Data</h3>
            <p>
              The core value of Handpano is our verification process. We do not
              scrape websites for outdated pricing. We do not accept anecdotal
              evidence from forums.
            </p>
            <p>
              Every piece of data in our directory is verified by direct email
              outreach to the maker. We confirm their base price, their current
              lead time, and any specific claims they make about their materials
              or process. If a maker does not respond to our outreach, they are
              not listed as verified. It is a slow, manual process, but it is
              the only way to provide data you can actually trust when making a
              significant investment.
            </p>

            <h3>Continuing Your Journey</h3>
            <p>
              We encourage you to explore the verified makers in our directory.
              Compare their materials, listen to their sound samples (if
              available on their respective sites), and consider how their
              offerings align with your budget and patience.
            </p>
            <p>
              If you feel you need more comprehensive guidance, our Handpan
              Buyer&apos;s Roadmap is designed to walk you step-by-step through
              the entire purchasing process, from selecting a scale to spotting
              red flags in online sales. It is our only product, and purchasing
              it is the sole way Handpano sustains its independent verification
              work.
            </p>
            <p>
              Ultimately, the right handpan is the one that invites you to play.
              It should feel resonant, tactile, and inspiring. Take your time,
              do your research, and trust your ears.
            </p>
          </Prose>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
