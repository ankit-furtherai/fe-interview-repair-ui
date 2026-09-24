import { renderHook, waitFor } from "@testing-library/react";
import { useSearch } from "./useSearch";

// A starting test so the harness is wired up. Extend this to cover the reported bug.
describe("useSearch", () => {
  it("returns matches for a stable query", async () => {
    const { result } = renderHook(() => useSearch("redux"));
    await waitFor(() => expect(result.current.status).toBe("idle"));
    expect(result.current.results.map((r) => r.id)).toEqual(["redux"]);
  });

  // TODO: add a test that fails on the current code and passes after your fix.
});
