export type Source = { id: string; label: string };

// The reference folders / knowledge sources a workflow can search.
export const CATALOG: Source[] = [
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
