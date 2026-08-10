import { ContentDatabase, EvidenceClass } from "./schemas";

export const db: ContentDatabase = {
  suppliers: [
    {
      id: "boston-dynamics",
      name: "Boston Dynamics",
      coreCompetency: "Actuation and Dynamics",
      description: "Pioneers in highly dynamic robotics and specialized hydraulic actuation systems.",
      region: "North America",
    },
    {
      id: "ouster",
      name: "Ouster",
      coreCompetency: "LiDAR and Perception",
      description: "Leading provider of high-resolution digital LiDAR sensors for autonomous systems.",
      region: "North America",
    },
    {
      id: "maxon",
      name: "Maxon",
      coreCompetency: "Precision Motors",
      description: "Manufacturer of high-precision brushed and brushless DC motors and drives.",
      region: "Europe",
    }
  ],
  platforms: [
    {
      id: "atlas",
      name: "Atlas",
      manufacturer: "Boston Dynamics",
      description: "A highly mobile, bipedal humanoid robot designed to push the limits of whole-body mobility.",
    },
    {
      id: "digit",
      name: "Digit",
      manufacturer: "Agility Robotics",
      description: "A bipedal robot designed for logistics and material handling.",
    },
    {
      id: "optimus",
      name: "Optimus",
      manufacturer: "Tesla",
      description: "A general-purpose bipedal humanoid robot capable of performing tasks that are unsafe, repetitive or boring.",
    }
  ],
  components: [
    {
      id: "actuators",
      name: "Actuators",
      description: "The mechanical muscles of the robot, responsible for joint movement and force generation.",
    },
    {
      id: "sensors",
      name: "Sensors",
      description: "The perceptual inputs, including LiDAR, cameras, and force-torque sensors.",
    },
    {
      id: "hands",
      name: "Hands & End Effectors",
      description: "The manipulators that allow humanoids to interact with objects and tools designed for humans.",
    }
  ],
  relationships: [
    {
      platformId: "atlas",
      componentId: "actuators",
      supplierId: "boston-dynamics",
      evidenceClass: "Confirmed" as EvidenceClass,
      sourceUrl: "{{VERIFY: Source URL for Atlas actuators}}",
      date: "{{VERIFY: Date for Atlas actuators}}",
    },
    {
      platformId: "digit",
      componentId: "sensors",
      supplierId: "ouster",
      evidenceClass: "Confirmed" as EvidenceClass,
      sourceUrl: "{{VERIFY: Source URL for Digit sensors}}",
      date: "{{VERIFY: Date for Digit sensors}}",
    },
    {
      platformId: "optimus",
      componentId: "actuators",
      supplierId: "maxon",
      evidenceClass: "Unconfirmed" as EvidenceClass,
      sourceUrl: "{{VERIFY: Source URL for Optimus actuators}}",
      date: "{{VERIFY: Date for Optimus actuators}}",
    }
  ],
  jobs: [
    {
      id: "job-1",
      supplierId: "boston-dynamics",
      title: "Senior Actuator Engineer",
      location: "Waltham, MA",
      url: "{{VERIFY: Boston Dynamics Job URL}}",
      postedDate: "{{VERIFY: Boston Dynamics Job Date}}",
    }
  ]
};

export function getSuppliers() { return db.suppliers; }
export function getSupplierById(id: string) { return db.suppliers.find((s) => s.id === id); }
export function getPlatforms() { return db.platforms; }
export function getPlatformById(id: string) { return db.platforms.find((p) => p.id === id); }
export function getComponents() { return db.components; }
export function getComponentById(id: string) { return db.components.find((c) => c.id === id); }
export function getRelationships() { return db.relationships; }
export function getJobs() { return db.jobs; }
