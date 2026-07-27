# Launchpad

A static personal portfolio and application catalog built with Next.js.

## Local checks

```sh
npm ci
npm run lint
npm run typecheck
npm run build
```

The static site is emitted to `out/`; it can be opened or served without a Next.js server.

## Content to replace

Update the single file `src/data/profile.ts` with your real profile content. It contains
these deliberately obvious placeholders:

- `[Your Name]`
- `[Your professional headline]`
- `[Add a short, first-person summary of your work and the problems you enjoy solving.]`
- `[Your location]`
- `[Your contact email]`
- `[LinkedIn]` and its example URL
- `[GitHub]` and its example URL
- `[all-in monthly cost]` in `src/data/cost.ts` — read the real figures from the accounts
  that hold them rather than estimating; an invented cost is the error this headline exists
  to avoid

Add portfolio applications in `src/data/catalog.ts`. Update the aggregate all-in monthly
cost and its included services in `src/data/cost.ts`.
