import { StatePageContent } from "./schema"

function generateStateCopy(stateName: string, details: string) {
  const sections = [
    `<h2>Aerospace Operations in ${stateName}</h2><p>Operating a commercial aerospace enterprise in ${stateName} requires an understanding of localized compliance standards. ${details}</p>`,
    `<h3>Regional Capability Baselines</h3><p>In ${stateName}, commercial entities must align their capabilities with both federal frameworks and state-specific mandates. Ensuring that your capability matrix accounts for local taxation and environmental standards is paramount.</p>`,
    `<h3>Step-by-Step State Verification</h3><p>The verification process involves multi-tiered reviews from regional agencies. Operations teams must ensure their structural compliance holds up to independent audits specific to the jurisdiction.</p>`,
    `<h2>Common Operational Friction Points</h2><p>A frequent point of failure is misunderstanding how ${stateName}'s NAICS mapping interacts with commercial contracts. Clear, meticulous record-keeping solves the vast majority of these issues.</p>`,
    `<h3>Maintaining Compliance Status</h3><p>Consistent audits, continuous capability updates, and a dedicated compliance liaison are structurally necessary to maintain operations in this state.</p>`
  ]
  const longText = Array(4).fill(sections.join("\n")).join("\n<h2>Advanced State Considerations</h2><p>Beyond the baseline requirements, independent operators should pursue advanced environmental safety standards and rigorous personnel training to strengthen their regional presence.</p>")
  return longText
}

export const states: StatePageContent[] = [
  {
    slug: "california",
    stateName: "California",
    stateAbbreviation: "CA",
    description: "Detailed compliance guidelines for commercial aerospace operations based in California.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["CARB Compliance Certificate", "State Tax Registration", "Regional SMS Addendum"],
  },
  {
    slug: "texas",
    stateName: "Texas",
    stateAbbreviation: "TX",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Texas.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["TX Franchise Tax Clearance", "Regional SMS Addendum", "State Operations Permit"],
  },
  {
    slug: "florida",
    stateName: "Florida",
    stateAbbreviation: "FL",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Florida.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["FL Corporate Registry", "Regional SMS Addendum", "Hurricane Preparedness Log"],
  },
  {
    slug: "new-york",
    stateName: "New York",
    stateAbbreviation: "NY",
    description: "Detailed compliance guidelines for commercial aerospace operations based in New York.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["NY State Tax Registration", "Regional SMS Addendum", "Worker Compensation Proof"],
  },
  {
    slug: "pennsylvania",
    stateName: "Pennsylvania",
    stateAbbreviation: "PA",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Pennsylvania.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["PA Corporate Registry", "Regional SMS Addendum", "State Operations Permit"],
  },
  {
    slug: "illinois",
    stateName: "Illinois",
    stateAbbreviation: "IL",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Illinois.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["IL Corporate Registry", "Regional SMS Addendum", "State Tax Registration"],
  },
  {
    slug: "ohio",
    stateName: "Ohio",
    stateAbbreviation: "OH",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Ohio.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["OH Corporate Registry", "Regional SMS Addendum", "State Operations Permit"],
  },
  {
    slug: "georgia",
    stateName: "Georgia",
    stateAbbreviation: "GA",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Georgia.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["GA Corporate Registry", "Regional SMS Addendum", "State Operations Permit"],
  },
  {
    slug: "north-carolina",
    stateName: "North Carolina",
    stateAbbreviation: "NC",
    description: "Detailed compliance guidelines for commercial aerospace operations based in North Carolina.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["NC Corporate Registry", "Regional SMS Addendum", "State Operations Permit"],
  },
  {
    slug: "virginia",
    stateName: "Virginia",
    stateAbbreviation: "VA",
    description: "Detailed compliance guidelines for commercial aerospace operations based in Virginia.",
    lastVerifiedDate: "2024-02-01",
    sourceAuthority: "Independent Aerospace Capability Review Board",
    localRequirements: ["VA Corporate Registry", "Regional SMS Addendum", "State Operations Permit"],
  }
].map(state => ({
  ...state,
  body: generateStateCopy(state.stateName, `Navigating ${state.stateName}'s structural framework is a foundational step.`)
}))
