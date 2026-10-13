# Part 3 — Selection with team defaults

Users pick sources for a workflow, and the workflow has saved team defaults.
A user can change the selection for this run only, or save it as the new
default. Some users aren't allowed to edit the team defaults.

There is no design. You decide the UX.

`src/teamDefaults.ts` stands in for the backend: it holds the saved defaults
and the current user's permission. Add `?editor` to the URL to act as a user
who may edit the defaults.

Done when:

- the user can add and remove sources
- a run-only change leaves the saved default alone
- going back to the default reads as unchanged
- a user without permission can't save a default, and can see why
