import { CATALOG, type Source } from "./catalog";

export type { Source } from "./catalog";

// Deterministic, query-dependent latency. Shorter queries resolve SLOWER.
// This is a stand-in for a real backend where a broad query scans more and a
// narrow query hits a cache — the important property for the exercise is that
// latency does not monotonically track keystroke order.
export function searchLatencyMs(query: string): number {
  return Math.max(150, 700 - query.trim().length * 120);
}

export function searchSources(
  query: string,
  signal?: AbortSignal,
): Promise<Source[]> {
  const q = query.trim().toLowerCase();
  return new Promise<Source[]>((resolve, reject) => {
    const timer = setTimeout(() => {
      if (q === "") {
        resolve([]);
        return;
      }
      resolve(CATALOG.filter((s) => s.label.toLowerCase().includes(q)));
    }, searchLatencyMs(query));

    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
