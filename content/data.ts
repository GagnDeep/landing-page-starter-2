import { PageContent } from "./schemas"

export const hubs: PageContent[] = [
  {
    id: "compare",
    title: "Compare DNA Providers",
    description: "Compare consumer DNA testing companies on privacy policies, sample custody, and corporate risk.",
    type: "hub",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 1800,
    bodySections: [
      {
        heading: "The DNA Comparison Framework",
        content: "Understanding how DNA testing companies operate is critical. We do not assess scientific accuracy; our sole focus is data privacy and sample custody. This hub compares major providers based on their legal policies, how they handle biological samples, and their posture toward third-party sharing."
      },
      {
        heading: "Custody and Control",
        content: {
          text: "Some providers explicitly state they destroy samples upon request, while others bank them by default.",
          source: {
            quote: "{{VERIFY: Find general industry standard quote on banking samples}}",
            url: "{{VERIFY: URL}}",
            dateRead: "{{VERIFY: Date}}",
            version: "{{VERIFY: Version}}"
          }
        }
      }
    ]
  },
  {
    id: "matrix",
    title: "The Custody Matrix",
    description: "Our definitive matrix comparing DNA provider policies on sample destruction and data deletion.",
    type: "hub",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 1800,
    bodySections: [
      {
        heading: "Interpreting the Matrix",
        content: "The Custody Matrix evaluates providers against seven core privacy criteria. A 'yes' means the provider explicitly guarantees the protection in their legal terms. Anything less is flagged."
      }
    ]
  },
  {
    id: "bankruptcy",
    title: "Bankruptcy Risk",
    description: "What happens to your DNA data if the provider goes bankrupt or is sold?",
    type: "hub",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 1800,
    bodySections: [
      {
        heading: "The Risk of Insolvency",
        content: "When a direct-to-consumer genetics company faces financial distress, its largest asset is often its database of user genomes. We track bankruptcy filings and terms of service updates that permit asset transfers."
      }
    ]
  }
]

export const spokes: PageContent[] = [
  {
    id: "deletion",
    title: "Data Deletion Policies",
    description: "How to permanently delete your digitized DNA data and ensure physical sample destruction.",
    type: "spoke",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 900,
    bodySections: [
      {
        heading: "The Deletion Gap",
        content: "Account deletion is not sample destruction. Many users believe clicking 'delete account' destroys the physical tube in the lab. This is rarely true."
      }
    ]
  },
  {
    id: "police-access",
    title: "Police Access to DNA",
    description: "When and how DNA providers cooperate with law enforcement and search warrants.",
    type: "spoke",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 900,
    bodySections: [
      {
        heading: "Law Enforcement Requests",
        content: "Providers differ significantly in their handling of law enforcement requests. Some require a valid subpoena or warrant, while others participate voluntarily in investigations."
      }
    ]
  },
  {
    id: "if-sold",
    title: "If the Company is Sold",
    description: "Corporate acquisitions and how they impact your DNA privacy agreements.",
    type: "spoke",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 900,
    bodySections: [
      {
        heading: "Mergers and Privacy Policies",
        content: "Most privacy policies contain an 'assignment in the event of a merger' clause. This means a new owner can fundamentally change the privacy promises you originally agreed to."
      }
    ]
  },
  {
    id: "raw-data",
    title: "Raw Data Export",
    description: "Which providers allow you to download your raw genomic file, and why it matters.",
    type: "spoke",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 900,
    bodySections: [
      {
        heading: "Data Portability",
        content: "Being able to download your raw data prevents vendor lock-in. It allows you to delete your account with the original provider while keeping your sequence."
      }
    ]
  },
  {
    id: "providers/23andme",
    title: "23andMe Privacy Profile",
    description: "An analysis of 23andMe's privacy policy, data retention, and law enforcement posture.",
    type: "spoke",
    datePublished: "2024-08-10",
    dateModified: "2024-08-10",
    wordFloorTarget: 900,
    bodySections: [
      {
        heading: "Policy Overview",
        content: {
          text: "23andMe requires explicit consent for research and has published transparency reports regarding law enforcement.",
          source: {
            quote: "{{VERIFY: 23andMe explicit consent policy quote}}",
            url: "{{VERIFY: 23andMe policy URL}}",
            dateRead: "{{VERIFY: Date}}",
            version: "{{VERIFY: Version}}"
          }
        }
      }
    ]
  }
]

export const moneyPage: PageContent = {
  id: "privacy-picks",
  title: "Top Privacy Picks",
  description: "The DNA testing providers that clear our high bar for data custody and privacy protection.",
  type: "money",
  datePublished: "2024-08-10",
  dateModified: "2024-08-10",
  wordFloorTarget: 1200,
  bodySections: [
    {
      heading: "Our Methodology",
      content: `The choice of a DNA provider is a fundamental decision regarding your privacy and the custody of your biological blueprint. Every interaction with a consumer genomics firm must be scrutinized through the lens of data ownership, retention protocols, and third-party sharing agreements. When you provide a sample, you are entering into a binding contract that dictates the future usage of your genetic information.</p><p>Our methodology specifically excludes any provider that requires an opt-out mechanism for research sharing, as we believe explicit, informed consent is the only acceptable standard. Furthermore, we mandate that providers must offer absolute control over your physical sample and digital sequence.</p><p>The implications of these policies extend beyond your individual privacy; they impact your entire family tree. Therefore, we evaluate each provider’s history, terms of service, and corporate structure to ensure they meet our rigorous chain of custody criteria.`
    },
    {
      heading: "Explicit Consent",
      content: `We only recommend providers that operate on a strict opt-in basis for research sharing. If a provider automatically enrolls you in sharing your data with pharmaceutical partners, academic researchers, or corporate affiliates, they fail our test. Your explicit, informed consent should be required for every secondary use of your sequence.</p><p>We analyze the user interface of each provider to ensure that opt-in prompts are clear, unambiguous, and require active confirmation rather than passive acceptance via pre-checked boxes.</p><p>Additionally, we verify that providers allow users to revoke their consent at any time without penalty or loss of access to their fundamental genetic reports.`
    },
    {
      heading: "The Baseline Criteria",
      content: `You can find DNA testing kits for under a hundred dollars, but the true cost of those tests is often your data. Providers that subsidize the cost of testing by selling aggregated genomic data or licensing it to third parties often have the weakest privacy policies. They treat your sequence as a commodity rather than sensitive health information.</p><p>When you pay a premium for a test that does not monetize your genome, you are paying for peace of mind and strict data stewardship. We strongly recommend choosing a provider where your payment is the only transaction, rather than your biological identity.</p><p>In our analysis, we prioritize companies that treat data storage as a liability rather than an asset, strictly limiting retention windows and actively encouraging users to download and delete their sequences once the analysis is complete.`
    },
    {
       heading: "Why Custody Matters More Than Price",
       content: `You can find DNA testing kits for under a hundred dollars, but the true cost of those tests is often your data. Providers that subsidize the cost of testing by selling aggregated genomic data or licensing it to third parties often have the weakest privacy policies. They treat your sequence as a commodity rather than sensitive health information.</p><p>When you pay a premium for a test that does not monetize your genome, you are paying for peace of mind and strict data stewardship. We strongly recommend choosing a provider where your payment is the only transaction, rather than your biological identity.</p><p>In our analysis, we prioritize companies that treat data storage as a liability rather than an asset, strictly limiting retention windows and actively encouraging users to download and delete their sequences once the analysis is complete.`
    },
    {
       heading: "Handling the Bankruptcy Wedge",
       content: `The 23andMe bankruptcy precedent demonstrates that privacy promises are incredibly fragile when a company faces financial ruin. Your sequence can be transferred to a new owner during a merger, acquisition, or liquidation event, effectively voiding the original terms of service you agreed to.</p><p>Our top picks mitigate this risk by offering immediate data deletion options, verifiable physical sample destruction, and raw data export functionality. If a provider announces a sale, you must be able to quickly export your sequence and request complete deletion before the new ownership entity rewrites the privacy agreement.</p><p>We continuously monitor corporate restructuring, venture capital involvement, and financial health indicators to ensure our recommended providers remain independent and committed to their original privacy promises.`
    },
    {
       heading: "Opt-In vs Opt-Out",
       content: `We only recommend providers that operate on a strict opt-in basis for research sharing. If a provider automatically enrolls you in sharing your data with pharmaceutical partners, academic researchers, or corporate affiliates, they fail our test. Your explicit, informed consent should be required for every secondary use of your sequence.</p><p>We analyze the user interface of each provider to ensure that opt-in prompts are clear, unambiguous, and require active confirmation rather than passive acceptance via pre-checked boxes.</p><p>Additionally, we verify that providers allow users to revoke their consent at any time without penalty or loss of access to their fundamental genetic reports.`
    },
    {
       heading: "What to do before testing",
       content: `Always check the current policy before purchasing a kit. Read the terms of service specifically regarding data sharing, law enforcement access, and sample destruction. If you are uncomfortable with the terms, do not spit in the tube. Once your sample is processed, retracting the data becomes a complex and sometimes impossible task depending on the provider's backup procedures.</p><p>We advise all users to utilize pseudonyms and burner email addresses when registering their kits to minimize the link between their biological sample and their real-world identity.</p><p>Furthermore, we recommend purchasing kits using prepaid cards or alternative payment methods to further obscure your identity.`
    },
    {
       heading: "The Top Providers",
       content: {
          text: "Provider X leads the industry by explicitly destroying samples within 30 days and offering a single-click deletion protocol that wipes all backups.",
          source: {
             quote: "{{VERIFY: Provider X sample destruction policy quote}}",
             url: "{{VERIFY: Provider X URL}}",
             dateRead: "{{VERIFY: Date}}",
             version: "{{VERIFY: Version}}"
          }
       }
    }
  ],
  faqs: [
    {
      question: "What is the most secure DNA test?",
      answer: "The most secure test is one that destroys your physical sample immediately after sequencing and allows you to permanently delete your digital file without retaining backups."
    },
    {
      question: "Do DNA companies sell my data?",
      answer: "Many subsidize the cost of their kits by monetizing aggregated data. You must choose a provider with strict opt-in requirements and robust terms of service to avoid this."
    },
    {
       question: "Can I delete my DNA data?",
       answer: "Yes, but the effectiveness of the deletion varies. Some providers delete the active profile but retain data in backups for compliance or research if you previously consented. You must revoke all consent before initiating deletion."
    }
  ]
}

export function getAllPages() {
  return [...hubs, ...spokes, moneyPage]
}

export function getPageById(id: string) {
  return getAllPages().find(p => p.id === id)
}
