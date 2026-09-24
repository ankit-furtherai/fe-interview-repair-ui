import { useEffect, useState } from "react";
import { searchSources, type Source } from "./api";

export type SearchStatus = "idle" | "loading" | "error";

// Fetches suggestions for the current query and exposes them for rendering.
export function useSearch(query: string): {
  results: Source[];
  status: SearchStatus;
} {
  const [results, setResults] = useState<Source[]>([]);
  const [status, setStatus] = useState<SearchStatus>("idle");

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    searchSources(query)
      .then((sources) => {
        setResults(sources);
        setStatus("idle");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [query]);

  return { results, status };
}
