export type Source = { id: string; label: string };

const ORIGINAL: Source[] = [
  { id: "react", label: "React" },
  { id: "react-router", label: "React Router" },
  { id: "redux", label: "Redux" },
  { id: "realtime", label: "Realtime channels" },
  { id: "read-replicas", label: "Read replicas" },
  { id: "recoil", label: "Recoil" },
  { id: "postgres", label: "Postgres" },
  { id: "playwright", label: "Playwright" },
  { id: "prometheus", label: "Prometheus" },
  { id: "kafka", label: "Kafka" },
  { id: "kubernetes", label: "Kubernetes" },
  { id: "typescript", label: "TypeScript" },
];

const CARRIERS = [
  "Northwind Mutual", "Harbor Point", "Granite State", "Bluewater Assurance", "Summit Ridge",
  "Cedar Lane", "Ironbridge", "Lakeshore Fidelity", "Meridian Casualty", "Oakhollow",
  "Pinecrest", "Redstone", "Silverline", "Tidewater", "Westbrook",
  "Amberfield", "Brightwater", "Copperleaf", "Driftwood", "Evergreen Standard",
  "Foxglove", "Glenmoor", "Hollowell", "Juniper Bay", "Kingsmill",
];
const DOC_TYPES = [
  "Underwriting guidelines", "Policy wording", "Claims handbook", "Endorsement library", "Rate manual",
  "Appetite guide", "Submission checklist", "Loss run template", "Binder form", "Renewal playbook",
  "Coverage FAQ", "Exclusions summary", "Broker agreement", "Quote letter", "Declarations page",
  "Inspection report", "Audit worksheet", "Reinsurance treaty", "Cancellation notice", "Agency bulletin",
];
const REGIONS = [
  "Texas", "California", "New York", "Florida", "Illinois",
  "Ohio", "Georgia", "Washington", "Colorado", "Massachusetts",
];

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// Every carrier × document type × region, trimmed so the whole catalog is
// exactly 5,000 sources. Deterministic, so ids are stable across reloads.
const GENERATED: Source[] = [];
for (const carrier of CARRIERS) {
  for (const doc of DOC_TYPES) {
    for (const region of REGIONS) {
      GENERATED.push({
        id: `${slug(carrier)}-${slug(doc)}-${slug(region)}`,
        label: `${carrier} — ${doc} (${region})`,
      });
    }
  }
}

// The reference folders / knowledge sources a workflow can search.
export const CATALOG: Source[] = [
  ...ORIGINAL,
  ...GENERATED.slice(0, 5000 - ORIGINAL.length),
];
