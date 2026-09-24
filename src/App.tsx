import { SearchBox } from "./SearchBox";

export function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: 20 }}>Knowledge-source picker</h1>
      <p style={{ color: "#555", maxWidth: 480 }}>
        Search the reference sources available to this workflow. See the README for
        the reported issue.
      </p>
      <SearchBox />
    </main>
  );
}
