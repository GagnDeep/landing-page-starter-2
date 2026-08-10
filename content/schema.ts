// Typed content layer

export interface VerifiedFact {
  value: string;
  source: string;
  verifiedAt: string; // YYYY-MM-DD
}

export interface ReviewEntry {
  slug: string;
  title: string;
  vendorName: string;
  bestFor: string;
  monthlyFee: VerifiedFact;
  processingRate: VerifiedFact;
  contractLength: VerifiedFact;
  summary: string;
  sections: { heading: string; body: string }[];
}

export interface HubEntry {
  slug: string;
  title: string;
  description: string;
  spokes: string[]; // Slugs of child items
  contentSections: { heading: string; body: string }[];
}

export interface SpokeEntry {
  slug: string;
  parentHub: string;
  title: string;
  description: string;
  contentSections: { heading: string; body: string }[];
}

export interface ComparisonData {
  title: string;
  description: string;
  items: ReviewEntry[];
}
