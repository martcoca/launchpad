# Launchpad

The public front door for the Martcoca organization: a static Next.js site presenting
what the organization builds, how it works, its all-in cost, and how to reach the person
behind it.

## Local checks

```sh
npm ci
npm run lint
npm run typecheck
npm run build
```

The static site is emitted to `out/`; it can be opened or served without a Next.js server.

## Routes

| Route | Surface | Data source |
|---|---|---|
| `/` | Home | `src/data/organization.ts`, `src/data/catalog.ts` |
| `/products` | Products | `src/data/catalog.ts` |
| `/solutions` | Solutions | `src/data/solutions.ts` |
| `/how-it-works` | How it works | `src/data/organization.ts` |
| `/about` | About & attribution | `src/data/profile.ts`, `src/data/organization.ts` |
| `/cost` | Cost | `src/data/cost.ts` |
| `/personal` | Personal | `src/data/personal.ts` |

Shared navigation (`src/components/Nav.tsx`, driven by `src/data/nav.ts`) appears on
every route, so `/about` — and therefore attribution and contact — is reachable in one
step from anywhere on the site.

## Content to replace

Every value below is a deliberately obvious placeholder (the `[bracketed]` shape used
throughout). None of it is invented copy — filling it in is Founder-owned content work,
not a structural change.

**`src/data/organization.ts`**

- `tagline` — `[One-sentence description of what Martcoca builds]`
- `description` — `[A short paragraph describing the organization's purpose, focus, and
  what makes its work distinctive]`
- `operatingModelSummary` — `[A short paragraph explaining how an agent-run organization
  operates, in terms a public reader can follow]`

**`src/data/profile.ts`**

- `[Your Name]`
- `[Your professional headline]`
- `[Add a short, first-person summary of your work and the problems you enjoy solving.]`
- `[Your location]`
- `[Your contact email]`
- `[LinkedIn]` and its example URL
- `[GitHub]` and its example URL

**`src/data/cost.ts`**

- `[all-in monthly cost]` — read the real figure from the accounts that hold it rather
  than estimating; an invented cost is the error this headline exists to avoid.

**`src/data/personal.ts`**

- `[Personal application name]` and `[What this application does and who it's for]` —
  replace with real personal applications, or remove the placeholder entry. Set
  `listed: false` on any application that should exist in the data model without being
  publicly displayed (at least one placeholder entry demonstrates this opt-out).

**`src/data/solutions.ts`**

- Empty by design until a product has shipped enough to derive an honest solution from.
  Add entries only once each one is evidenced by delivered capability — never
  aspirational.

**`src/data/catalog.ts`**

- Add further portfolio products here as they are delivered or intended; the `status`
  field (`Live | In progress | Planned`) already drives the Products surface's
  delivered/intended distinction.
