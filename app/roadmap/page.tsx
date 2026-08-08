import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbLd } from "@/lib/json-ld"

export const metadata = buildMetadata(
  "Handpan Buyer's Roadmap | Handpano",
  "A comprehensive step-by-step guide to buying your first handpan without the stress. Learn about scales, makers, materials, and how to avoid red flags.",
  "/roadmap/"
)

export default function RoadmapPage() {
  const jsonLd = buildBreadcrumbLd([
    { name: "Buyer's Roadmap", item: "/roadmap/" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto max-w-7xl flex-1 px-4 py-12">
        <Breadcrumbs items={[{ name: "Buyer's Roadmap" }]} />
        <Prose className="mx-auto">
          <h1>Handpan Buyer&apos;s Roadmap</h1>
          <p className="lead text-xl font-medium text-muted-foreground">
            The decision is genuinely confusing: makers publish little pricing
            or lead-time detail, cheap marketplace imports have a bad
            reputation. This roadmap is your guide.
          </p>

          <h2>The Anxiety of the First Purchase</h2>
          <p>
            You are about to spend fifteen hundred to three thousand dollars on
            an instrument you have never played, from a maker you cannot visit,
            with a wait time you do not understand. Our goal is to reduce that
            fear with specifics. Buying a handpan is not like buying a guitar;
            you cannot walk into a local music shop, try twenty different
            models, and walk out with the one that speaks to you. It requires
            research, patience, and often, a leap of faith.
          </p>

          <h2>Step 1: Define Your Budget and Expectations</h2>
          <p>
            The first step is facing the financial reality of the instrument. A
            quality, hand-crafted handpan will generally cost between $1,500 and
            $3,000 USD for a standard setup (a central Ding and 7-8 tone fields
            on the top shell).
          </p>
          <p>
            If your budget is significantly lower (e.g., under $1,000), you must
            adjust your expectations. Instruments in this range are often
            mass-produced, utilizing thinner steel and rapid tuning processes
            that fail to stabilize the notes. These instruments frequently
            suffer from &quot;crosstalk&quot; (where striking one note
            unintentionally activates another dissonant note) and generally lack
            the rich, resonant bloom characteristic of a true handpan.
          </p>
          <p>
            Expect to wait. If a maker has instruments immediately available for
            purchase, verify why. While some reputable makers occasionally have
            stock, immediate availability can sometimes be a red flag for mass
            production. A wait time of three to six months is standard; wait
            times of a year or more are not uncommon for elite makers.
          </p>

          <h2>Step 2: Choose Your Material</h2>
          <p>The material dictates the &quot;voice&quot; of the instrument.</p>
          <ul>
            <li>
              <strong>Nitrided Steel:</strong> Best for rhythmic, fast playing.
              It has a ceramic, punchy attack and shorter sustain. It helps keep
              fast notes distinct.
            </li>
            <li>
              <strong>Stainless Steel:</strong> Best for melodic, slow, and
              meditative playing. It has a long sustain and a bright, resonant
              bloom. Playing too fast on stainless can sound messy as the notes
              overlap.
            </li>
            <li>
              <strong>Ember Steel:</strong> A middle ground. It offers some
              punch while retaining significant sustain and warmth.
            </li>
          </ul>
          <p>
            Consider how you want to play. Are you looking to create percussive
            grooves, or atmospheric soundscapes? Your answer should guide your
            material choice.
          </p>

          <h2>Step 3: Select a Scale</h2>
          <p>
            Because a handpan is diatonic (it only contains specific notes
            within a scale), your choice of scale determines the mood you will
            be able to express.
          </p>
          <p>
            For beginners, the <strong>D Kurd</strong> scale (a minor scale) is
            overwhelmingly recommended. It is intuitive, emotional, and very
            easy to improvise on without hitting &quot;wrong&quot; sounding
            notes. Other popular minor scales include C# minor (often called
            Amara or Celtic) and E minor.
          </p>
          <p>
            If you prefer a happier, more resolved sound, look into major scales
            like D Major or F Major. If you want something specific, explore
            exotic scales, but be aware they can be harder to integrate with
            other musicians later.
          </p>

          <h2>Step 4: Research Makers and Verify Claims</h2>
          <p>
            This is the most dangerous part of the journey. The internet is full
            of &quot;scam&quot; sites selling cheap factory pans at premium
            prices, or worse, taking money for instruments that never arrive.
          </p>
          <p>
            Use our independent directory to find verified makers. Look for
            makers who:
          </p>
          <ul>
            <li>Are transparent about their process and location.</li>
            <li>
              Have clear videos demonstrating the sound of their specific
              instruments (not generic stock audio).
            </li>
            <li>
              Have a track record in the handpan community (forums like
              Handpan.org or reputable Facebook groups).
            </li>
          </ul>
          <p>
            Do not rely on Amazon reviews or Trustpilot scores alone; these are
            easily manipulated. The community consensus is the only reliable
            metric.
          </p>

          <h2>Step 5: Contact and Commission</h2>
          <p>
            Once you have selected a maker and a scale, you will likely need to
            contact them directly. Some have simple online checkout systems for
            their waitlists, but many require an email.
          </p>
          <p>
            Be polite and clear about what you want. Ask about their current
            lead times, shipping costs (which can be substantial for
            international orders), and whether they require a deposit. Be wary
            of makers who demand full payment via non-refundable methods (like
            wire transfer) before they begin work, unless they have an
            unimpeachable reputation.
          </p>

          <h2>Step 6: Maintenance and Care</h2>
          <p>
            A handpan is a delicate sculpture of tuned tension. It requires
            care.
          </p>
          <p>
            Never play with rings or jewelry on your hands. Never use mallets
            unless they are specifically designed for handpans (and even then,
            use caution). Wipe the instrument down with a microfiber cloth after
            every session to remove oils from your hands, which can cause rust
            (especially on nitrided instruments). Oil the instrument regularly
            with a protective product (like Froglube or specialized handpan
            oils) depending on your climate and the material of your pan.
          </p>
          <p>
            Your handpan will eventually go out of tune. This is normal. Factor
            in the cost and logistics of a retune (usually every 2-3 years
            depending on how hard you play). Some makers offer a free first
            retune, but you must still pay for shipping.
          </p>
          <p>
            Follow these steps, exercise patience, and you will secure an
            instrument that resonates with you for a lifetime.
          </p>
        </Prose>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
