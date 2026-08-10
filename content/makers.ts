import { Maker } from "./schema"

export const makers: Maker[] = [
  {
    slug: "ayasa",
    name: "Ayasa",
    location: "Netherlands",
    materials: ["Nitrided Steel", "Ember Steel"],
    basePrice: {
      value: "{{VERIFY: confirm by direct email to the maker}}",
      source: "direct_email",
      verificationDate: "{{VERIFY: confirm by direct email to the maker}}"
    },
    waitTime: {
      value: "{{VERIFY: confirm by direct email to the maker}}",
      source: "direct_email",
      verificationDate: "{{VERIFY: confirm by direct email to the maker}}"
    }
  },
  {
    slug: "yishama",
    name: "Yishama",
    location: "Israel",
    materials: ["Stainless Steel"],
    basePrice: {
      value: "{{VERIFY: confirm by direct email to the maker}}",
      source: "direct_email",
      verificationDate: "{{VERIFY: confirm by direct email to the maker}}"
    },
    waitTime: {
      value: "{{VERIFY: confirm by direct email to the maker}}",
      source: "direct_email",
      verificationDate: "{{VERIFY: confirm by direct email to the maker}}"
    }
  },
  {
    slug: "symphonic-steel",
    name: "Symphonic Steel",
    location: "USA",
    materials: ["Nitrided Steel", "Stainless Steel"],
    basePrice: {
      value: "{{VERIFY: confirm by direct email to the maker}}",
      source: "direct_email",
      verificationDate: "{{VERIFY: confirm by direct email to the maker}}"
    },
    waitTime: {
      value: "{{VERIFY: confirm by direct email to the maker}}",
      source: "direct_email",
      verificationDate: "{{VERIFY: confirm by direct email to the maker}}"
    }
  }
]
