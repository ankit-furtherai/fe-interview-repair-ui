// Saved team defaults for this workflow, and the current user's permission to
// change them. Stand-ins for a backend: state lives in memory, so a save holds
// for the rest of the session and resets on reload.

export type TeamDefaults = {
  sourceIds: string[];
  updatedBy: string;
  updatedAt: string;
};

export type CurrentUser = {
  name: string;
  canEditDefaults: boolean;
};

let defaults: TeamDefaults = {
  sourceIds: ["react", "postgres", "kafka"],
  updatedBy: "Priya",
  updatedAt: "2026-10-01T09:00:00.000Z",
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Add `?editor` to the URL to act as a user who may edit team defaults.
// Without it you are a viewer, who may change the selection for a run but
// not save it as the default.
export function getCurrentUser(): CurrentUser {
  const editor =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("editor");
  return editor
    ? { name: "Priya", canEditDefaults: true }
    : { name: "Sam", canEditDefaults: false };
}

export function getTeamDefaults(): Promise<TeamDefaults> {
  return delay(200).then(() => ({ ...defaults, sourceIds: [...defaults.sourceIds] }));
}

export function saveTeamDefaults(sourceIds: string[]): Promise<TeamDefaults> {
  return delay(300).then(() => {
    const user = getCurrentUser();
    if (!user.canEditDefaults) {
      throw new Error("You don't have permission to change the team defaults.");
    }
    defaults = {
      sourceIds: [...sourceIds],
      updatedBy: user.name,
      updatedAt: new Date().toISOString(),
    };
    return { ...defaults, sourceIds: [...defaults.sourceIds] };
  });
}
