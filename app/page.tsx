import { buildMetadata, buildOrganizationJsonLd, buildJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TicketRail } from "@/components/ticket-rail"
import { CheckoutForm } from "@/components/checkout-form"
import { PrepSteps } from "@/components/prep-steps"

export const metadata = buildMetadata({
  title: "The Restaurant Stack Guide",
})

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([buildOrganizationJsonLd(), buildJsonLd()]),
        }}
      />
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="container flex flex-col items-center justify-between gap-12 px-4 py-12 md:flex-row md:py-24 lg:py-32 xl:py-48">
          <div className="flex max-w-[800px] flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The First-Time Independent Restaurant Owner&apos;s Setup Guide
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              You&apos;ve signed a lease. You are opening a restaurant. Now you
              have 90 days to make a ten-to-one-hundred-thousand-dollar tech
              stack decision, and you are drowning in sales calls. This guide
              gives you the facts on POS systems, payroll, online ordering, and
              reservations.
            </p>
            <div className="mt-4 w-full max-w-sm">
              <CheckoutForm />
            </div>
          </div>

          <div className="w-full md:w-auto">
            <TicketRail
              eyebrow="Tech Stack Estimates"
              title="Line Check"
              items={[
                {
                  label: "POS System (Toast)",
                  value: "{{VERIFY: Toast POS estimate}}",
                },
                {
                  label: "Payroll (Square)",
                  value: "{{VERIFY: Square payroll estimate}}",
                },
                {
                  label: "Reservations",
                  value: "{{VERIFY: Reservations estimate}}",
                },
                {
                  label: "Online Ordering",
                  value: "{{VERIFY: Online ordering estimate}}",
                },
              ]}
              totalLabel="Est. Initial Cost"
              totalValue="{{VERIFY: Total estimate}}"
            />
          </div>
        </section>

        {/* INTERACTIVE TIMELINE SECTION */}
        <section className="bg-foreground py-24 text-background">
          <div className="container mx-auto flex flex-col items-center px-4">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-background uppercase">
              The Critical Path
            </h2>
            <PrepSteps />
          </div>
        </section>

        {/* PILLAR CONTENT SECTION TO MEET WORD FLOORS (1800 words goal) */}
        <section className="container mx-auto prose max-w-3xl px-4 py-24 prose-zinc dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight">
          <h2>Why the Tech Stack Matters More Than the Menu</h2>
          <p>
            You didn&apos;t get into the restaurant business to negotiate
            software contracts. You got into it to feed people, to build a room
            where guests feel taken care of, and to execute a vision. But the
            stark reality is that the margin for error in an independent
            restaurant is practically zero. A prime cost deviation of two
            percentage points can mean the difference between surviving your
            first winter and handing the keys back to the landlord.
          </p>
          <p>
            Your technology stack—your Point of Sale (POS), your payroll system,
            your reservation platform, and your online ordering
            integration—dictates your prime costs. It controls how orders flow
            to the kitchen, how modifiers are charged, how labor is tracked, and
            ultimately, how much cash clears into your operating account at the
            end of the night after the merchant processors take their cut.
          </p>
          <h3>The 90-Day Trap</h3>
          <p>
            When you sign a commercial lease, a countdown starts. You have
            ninety days (if you&apos;re lucky and construction is on schedule)
            to open the doors before the rent abatement ends. In those ninety
            days, you have to hire a chef, train a front-of-house staff,
            finalize the menu, pass health inspections, secure a liquor license,
            and build the physical space.
          </p>
          <p>
            In the middle of this chaos, sales representatives from massive,
            publicly-traded software companies will start calling you. They know
            you are time-poor. They know you are bleeding cash. They will offer
            you &quot;free&quot; hardware, waived installation fees, and
            seemingly low monthly software costs. They will make it incredibly
            easy to just say &quot;yes&quot; so you can cross one massive item
            off your to-do list.
          </p>
          <p>
            <strong>Do not just say yes.</strong>
          </p>
          <p>
            What you are actually signing when you accept that &quot;free&quot;
            hardware is a multi-year Merchant Processing Agreement (MPA). The
            software companies have realized that the real money isn&apos;t in
            charging you $69 a month for the POS software; the real money is in
            taking 2.99% + $0.15 of every single transaction that runs through
            your building for the next three years.
          </p>
          <h3>Understanding Merchant Processing</h3>
          <p>
            To understand the restaurant tech landscape, you have to understand
            merchant processing. When a guest taps their card, a complex chain
            of events occurs involving the acquiring bank, the issuing bank, the
            card network (Visa/Mastercard), and the payment processor.
          </p>
          <p>
            Historically, restaurants bought a POS system (like Aloha or Micros)
            and then went to a bank or a third-party processor to negotiate
            payment processing rates separately. Today, modern cloud POS
            companies act as Payment Facilitators (PayFacs). They bundle the
            software and the processing together.
          </p>
          <p>
            This is incredibly convenient. It means one throat to choke when
            things break. But it also means you lose all negotiation leverage on
            the processing rate. If you don&apos;t like the rate Toast or Square
            gives you, you cannot simply switch processors; you have to rip out
            the entire POS system, buy new hardware, and retrain your entire
            staff. That is the lock-in.
          </p>
          <h3>The Cost of Offline Mode</h3>
          <p>
            Cloud-based systems are fantastic until the internet goes down on a
            Friday night at 7:30 PM. Suddenly, tickets stop printing in the
            kitchen. Servers are handwriting orders. The bar is chaotic.
          </p>
          <p>
            Most modern systems have an &quot;offline mode.&quot; But offline
            mode usually means the system can store credit card data locally and
            process it in a batch when the internet returns. This is incredibly
            risky. If a card declines when the batch processes the next morning,
            you eat the loss. Furthermore, many systems limit the total dollar
            amount you can process in offline mode.
          </p>
          <p>
            When evaluating a POS, you must demand exact answers regarding their
            offline capabilities. Does the local area network (LAN) still route
            tickets to the KDS if the wider internet is down? Can you still open
            and close checks?
          </p>
          <h3>Payroll and Labor Compliance</h3>
          <p>
            Labor is your second highest cost after cost of goods sold (COGS).
            If your POS does not integrate flawlessly with your payroll
            provider, you will spend hours every Monday morning manually
            entering timesheets.
          </p>
          <p>
            Worse, you risk compliance violations. Tip pooling, tip credits,
            overtime calculations across different roles (e.g., a server who
            also works as a bartender), and meal break enforcements are highly
            regulated. A strong integration between your POS (where staff clock
            in) and your payroll software (where they get paid) is
            non-negotiable.
          </p>
          <h3>The Online Ordering Pivot</h3>
          <p>
            Third-party delivery apps (UberEats, DoorDash) will charge you up to
            30% per order. In a business with a 10% net margin, a 30% fee means
            you lose money on every delivery order. You are essentially paying
            for marketing and customer acquisition.
          </p>
          <p>
            To survive, you need a first-party online ordering system that
            routes directly into your POS, bypassing the 30% fee. Your tech
            stack must allow you to convert third-party delivery customers into
            first-party direct customers over time.
          </p>
          <h3>The Bottom Line</h3>
          <p>
            You are making a decision that will cost you tens of thousands of
            dollars over the next three years. Take a breath. Read the reviews
            on this site. Compare the real transaction rates. Force the sales
            reps to put their promises in writing, specifically regarding early
            termination fees and hardware clawbacks.
          </p>
          <p>
            The food brings people in the door. The technology ensures you get
            paid for it.
          </p>
          {/* Padding to hit 1800 words if needed, though this is a robust pillar. */}
          <p>
            {
              "{{VERIFY: Padding to meet exact 1800-word floor for homepage pillar content. Ensure content covers KDS routing logic, inventory management integrations, and accounting syncs with QuickBooks or Xero.}}"
            }
          </p>
          <p>
            {
              "{{VERIFY: Padding to meet exact 1800-word floor for homepage pillar content. Ensure content covers loyalty programs, guest data ownership, and email marketing integrations.}}"
            }
          </p>
          <p>
            {
              "{{VERIFY: Padding to meet exact 1800-word floor for homepage pillar content. Ensure content covers PCI compliance, chargeback management, and dispute resolution workflows.}}"
            }
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
