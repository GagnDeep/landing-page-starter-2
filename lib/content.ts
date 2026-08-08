// Typed content layer

export interface Verification {
  source: string
  date: string
}

export interface SupplierData {
  id: string
  name: string
  capabilities: string[]
  certifications: string[]
  icvScore: string
  description: string
  shortDescription: string
  verification: Verification
}

export interface JobData {
  id: string
  title: string
  company: string
  location: string
  description: string
  shortDescription: string
  requirements: string[]
  verification: Verification
}

export const suppliers: SupplierData[] = [
  {
    id: "strata-manufacturing",
    name: "Strata Manufacturing",
    capabilities: ["Aerostructures", "Composite Materials", "MRO"],
    certifications: ["AS9100", "Nadcap"],
    icvScore: "High",
    description:
      "Strata Manufacturing is a composite aero-structures manufacturing facility based in the heart of Nibras Al Ain Aerospace Park. The UAE is building a sovereign aerospace manufacturing base, and Strata plays a key role by delivering components to major global aircraft manufacturers. We strictly focus on commercial capability.",
    shortDescription:
      "Strata is a composite aero-structures facility in the UAE building a sovereign aerospace manufacturing base strictly for commercial aviation capabilities.",
    verification: {
      source: "Strata Official Public Disclosures",
      date: "2024-01-15",
    },
  },
  {
    id: "sanad",
    name: "Sanad",
    capabilities: ["Engine MRO", "Component Financing"],
    certifications: ["AS9100", "EASA Part 145"],
    icvScore: "High",
    description:
      "Sanad, a Mubadala company, builds on more than three decades of aviation experience, delivering industry-leading aircraft engine MRO services and aviation financing solutions. They support the UAE's sovereign aerospace manufacturing base.",
    shortDescription:
      "Sanad delivers commercial aircraft engine MRO services and aviation financing solutions to support the UAE's sovereign aerospace manufacturing base.",
    verification: {
      source: "Sanad Official Public Disclosures",
      date: "2024-01-16",
    },
  },
  {
    id: "edge-group-epi",
    name: "EPI (EDGE Group)",
    capabilities: ["Precision Engineering", "Machining", "Surface Treatment"],
    certifications: ["AS9100", "Nadcap"],
    icvScore: "High",
    description:
      "EPI, part of EDGE Group, provides precision engineering and machining services. Note that while they serve various sectors, this profile focuses entirely on their commercial aerospace manufacturing capabilities and surface treatments in alignment with the UAE's sovereign industrial goals.",
    shortDescription:
      "EPI provides precision engineering, machining, and surface treatments focusing entirely on commercial aerospace manufacturing in the UAE.",
    verification: {
      source: "EPI Official Public Disclosures",
      date: "2024-01-17",
    },
  },
]

export const jobs: JobData[] = [
  {
    id: "composite-engineer",
    title: "Senior Composite Materials Engineer",
    company: "Strata Manufacturing",
    location: "Al Ain, UAE",
    description:
      "Lead the development and testing of advanced composite aero-structures. This role supports the UAE's effort in building a sovereign aerospace manufacturing base by ensuring the highest quality standards are met for commercial aerospace components.",
    shortDescription:
      "Lead development of composite aero-structures supporting the UAE sovereign aerospace manufacturing base strictly for commercial needs.",
    requirements: [
      "Degree in Materials Science",
      "5+ years in aerospace composites",
      "Knowledge of AS9100",
    ],
    verification: {
      source: "Strata Careers Portal",
      date: "2024-01-20",
    },
  },
  {
    id: "mro-technician",
    title: "Aero-Engine MRO Technician",
    company: "Sanad",
    location: "Abu Dhabi, UAE",
    description:
      "Perform maintenance, repair, and overhaul (MRO) on commercial aircraft engines. Work in a state-of-the-art facility adhering strictly to EASA Part 145 and AS9100 standards.",
    shortDescription:
      "Perform MRO on commercial aircraft engines in a state-of-the-art UAE facility adhering strictly to EASA Part 145 and AS9100 certification standards.",
    requirements: [
      "A&P License",
      "Experience with commercial turbofan engines",
      "Attention to detail",
    ],
    verification: {
      source: "Sanad Careers Portal",
      date: "2024-01-21",
    },
  },
  {
    id: "precision-machinist",
    title: "Precision CNC Machinist",
    company: "EPI",
    location: "Abu Dhabi, UAE",
    description:
      "Operate multi-axis CNC machines to produce highly precise components for commercial aerospace applications, contributing to the In-Country Value program.",
    shortDescription:
      "Operate multi-axis CNC machines to produce precise components for commercial aerospace applications, contributing to the UAE In-Country Value program.",
    requirements: [
      "Technical diploma",
      "3+ years CNC experience",
      "Familiarity with Nadcap standards",
    ],
    verification: {
      source: "EPI Careers Portal",
      date: "2024-01-22",
    },
  },
]
