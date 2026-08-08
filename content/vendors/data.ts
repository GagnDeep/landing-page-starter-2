import { Vendor } from "@/lib/content"

export const vendors: Vendor[] = [
  {
    id: "toast",
    name: "Toast",
    slug: "toast",
    category: "pos",
    monthlyCost: {
      value: "{{VERIFY: $XXX/mo}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    transactionFee: {
      value: "{{VERIFY: 2.99% + 15c}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    contractTerm: {
      value: "{{VERIFY: 2 years}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    payoutBounty: {
      value: "{{VERIFY: $500}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
  },
  {
    id: "square",
    name: "Square",
    slug: "square",
    category: "pos",
    monthlyCost: {
      value: "{{VERIFY: $0/mo}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    transactionFee: {
      value: "{{VERIFY: 2.6% + 10c}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    contractTerm: {
      value: "{{VERIFY: Month to month}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    payoutBounty: {
      value: "{{VERIFY: $300}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
  },
  {
    id: "touchbistro",
    name: "TouchBistro",
    slug: "touchbistro",
    category: "pos",
    monthlyCost: {
      value: "{{VERIFY: $69/mo}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    transactionFee: {
      value: "{{VERIFY: Variable}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    contractTerm: {
      value: "{{VERIFY: 1 year}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
    payoutBounty: {
      value: "{{VERIFY: $400}}",
      verification: {
        source: "{{VERIFY: Source URL}}",
        verificationDate: "2024-08-08",
      },
    },
  },
]
