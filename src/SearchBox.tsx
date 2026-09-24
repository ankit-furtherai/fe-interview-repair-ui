import { useState } from "react";
import { useSearch } from "./useSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const { results, status } = useSearch(query);

  return (
    <div style={{ maxWidth: 420 }}>
      <label htmlFor="source-search" style={{ display: "block", marginBottom: 6 }}>
        Add a reference source
      </label>
      <input
        id="source-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search sources…"
        autoComplete="off"
        style={{ width: "100%", padding: 8, fontSize: 16, boxSizing: "border-box" }}
      />

      <div aria-live="polite" style={{ marginTop: 8, minHeight: 20 }}>
        {status === "loading" && <span>Searching…</span>}
        {status === "error" && <span style={{ color: "crimson" }}>Something went wrong.</span>}
        {status === "idle" && query.trim() !== "" && results.length === 0 && (
          <span>No matches.</span>
        )}
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {results.map((s) => (
          <li key={s.id} style={{ padding: "6px 8px", borderBottom: "1px solid #eee" }}>
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
