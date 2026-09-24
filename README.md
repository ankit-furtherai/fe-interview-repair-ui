# Knowledge-source picker

A small React + TypeScript app. A user searches the reference sources available
to a workflow and picks from the suggestions that come back.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Vitest
```

You can use any AI tools you normally use. We care about how you read, change,
and validate the code — not about writing everything from scratch.

## The reported issue

> "When I type a source name quickly, the dropdown sometimes ends up showing
> results that don't match what's in the box. If I stop and wait, it corrects
> itself. It's intermittent — sometimes the list is just wrong."

## Your task

1. **Reproduce** the issue reliably and describe, in user terms, what triggers it.
2. **Diagnose** the root cause. Be ready to point at the exact code responsible
   and explain *why* it produces the symptom.
3. **Fix** it using your normal tools.
4. **Prove it.** Add a check that fails on the current code and passes after your
   fix. `src/useSearch.test.ts` is wired up as a starting point.

Keep the working search behavior intact. We'll talk through your diagnosis, the
fix, and what regression you'd worry about — so narrate as you go.
