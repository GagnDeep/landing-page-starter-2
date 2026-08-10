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
  wordFloorTarget: 1800,
  bodySections: [
    {
      heading: "Our Methodology",
      content: "We filter the market down to providers that offer absolute control over your physical sample and digital sequence. We exclude any provider that requires opt-out for research sharing."
    }
  ]
}

export function getAllPages() {
  return [...hubs, ...spokes, moneyPage]
}

export function getPageById(id: string) {
  return getAllPages().find(p => p.id === id)
}
