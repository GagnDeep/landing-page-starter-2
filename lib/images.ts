// Centralized image registry using Unsplash placeholders.
// All images must use Unsplash with appropriate parameters: ?auto=format&fit=crop&q=80

const UNSPLASH_BASE = "https://images.unsplash.com/photo-";
const PARAMS = "?auto=format&fit=crop&q=80";

export const IMAGES = {
  // Home Page
  hero: `${UNSPLASH_BASE}1594938298296-512c8ff46564${PARAMS}&w=2000`, // Tailor working
  nriFocus: `${UNSPLASH_BASE}1550614000-4b95d4ebf59c${PARAMS}&w=1200`, // Travel/bag
  featuredLook: `${UNSPLASH_BASE}1593030104619-33b8a8b1b2cd${PARAMS}&w=2000`, // Sharp suit

  // Craft Details
  detailLapel: `${UNSPLASH_BASE}1584347717467-ee1cb962fc62${PARAMS}&w=800`,
  detailButtonhole: `${UNSPLASH_BASE}1605518216938-7c31b7b14ad0${PARAMS}&w=800`,
  detailLining: `${UNSPLASH_BASE}1613233827608-20ab9b380d90${PARAMS}&w=800`,

  // Fabrics
  fabricItalian: `${UNSPLASH_BASE}1613233827608-20ab9b380d90${PARAMS}&w=800`, // Fabric texture
  fabricLinen: `${UNSPLASH_BASE}1584347717467-ee1cb962fc62${PARAMS}&w=800`,
  fabricTweed: `${UNSPLASH_BASE}1598155523122-3842334d6c1f${PARAMS}&w=800`,

  // Process
  processConsultation: `${UNSPLASH_BASE}1556906781-9a4115c7e127${PARAMS}&w=1000`,
  processMeasurement: `${UNSPLASH_BASE}1594938298296-512c8ff46564${PARAMS}&w=1000`,
  processBaste: `${UNSPLASH_BASE}1605518216938-7c31b7b14ad0${PARAMS}&w=1000`,
  processFinal: `${UNSPLASH_BASE}1593030104619-33b8a8b1b2cd${PARAMS}&w=1000`,

  storefront: `${UNSPLASH_BASE}1534440615967-876a5baf2a47${PARAMS}&w=1200`, // Elegant storefront

  // About Page
  historicAtelier: `${UNSPLASH_BASE}1534440615967-876a5baf2a47${PARAMS}&w=1200&sat=-100`, // BW filter
  masterTailor: `${UNSPLASH_BASE}1556906781-9a4115c7e127${PARAMS}&w=1200`,

  // Features / Services
  fabricSwatches: `${UNSPLASH_BASE}1613233827608-20ab9b380d90${PARAMS}&w=1600`,
  serviceBespoke: `${UNSPLASH_BASE}1594938298296-512c8ff46564${PARAMS}&w=1000`,
  serviceMtm: `${UNSPLASH_BASE}1593030104619-33b8a8b1b2cd${PARAMS}&w=1000`,
  serviceAlterations: `${UNSPLASH_BASE}1605518216938-7c31b7b14ad0${PARAMS}&w=1000`,
  serviceNri: `${UNSPLASH_BASE}1550614000-4b95d4ebf59c${PARAMS}&w=1000`,

  // Blog
  blogLapel: `${UNSPLASH_BASE}1584347717467-ee1cb962fc62${PARAMS}&w=800`,
  blogLinen: `${UNSPLASH_BASE}1613233827608-20ab9b380d90${PARAMS}&w=800`,
  blogButtonhole: `${UNSPLASH_BASE}1605518216938-7c31b7b14ad0${PARAMS}&w=800`,

  // Careers
  tailorsWorking: `${UNSPLASH_BASE}1556906781-9a4115c7e127${PARAMS}&w=1200`,

  // Contact
  mapIllustration: `${UNSPLASH_BASE}1524661135-423995f22d0b${PARAMS}&w=800`, // Map-like texture
} as const;

export type ImageKey = keyof typeof IMAGES;
