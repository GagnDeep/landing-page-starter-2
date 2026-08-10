export type EvidenceClass = "Confirmed" | "Unconfirmed";
export type Region = "North America" | "Europe" | "Asia" | "Global";

export interface SupplierRelationship {
  platformId: string;
  componentId: string;
  supplierId: string;
  evidenceClass: EvidenceClass;
  sourceUrl: string;
  date: string;
}

export interface Supplier {
  id: string;
  name: string;
  coreCompetency: string;
  description: string;
  region: Region;
}

export interface Platform {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
}

export interface ComponentCategory {
  id: string;
  name: string;
  description: string;
}

export interface Job {
  id: string;
  supplierId: string;
  title: string;
  location: string;
  url: string;
  postedDate: string;
}

export interface ContentDatabase {
  suppliers: Supplier[];
  platforms: Platform[];
  components: ComponentCategory[];
  relationships: SupplierRelationship[];
  jobs: Job[];
}
