# Pokéapp

A Pokémon browser built with React 19, Redux Toolkit, and the public [PokéAPI](https://pokeapi.co). Paginate through the full Pokédex, explore stats and sprites, and enjoy a fully accessible UI.

**Live:** https://jorgedelafuente.github.io/pokeapp/

![Build](https://github.com/jorgedelafuente/pokeapp/actions/workflows/deploy.yml/badge.svg)

---

## Features

- **Paginated Pokédex** — 12 cards per page, bookmarkable via `?page=N` URL param (no router needed)
- **Rich Pokémon cards** — official artwork, type tags, base stats, abilities (with hidden badge), height & weight
- **Sprite gallery modal** — every available sprite variant (shiny, home, dream world, gender variants) in one overlay
- **Fast jump pagination** — first / ±10 / prev / next / ±10 / last controls in both header and footer
- **Runtime API validation** — all PokéAPI responses validated with Zod before hitting the UI

---

## Tech stack

| Layer                 | Library                                   |
| --------------------- | ----------------------------------------- |
| UI                    | React 19                                  |
| State / data fetching | Redux Toolkit + RTK Query                 |
| Schema / types        | Zod 4                                     |
| Build                 | Vite 8 + SWC                              |
| Unit tests            | Vitest + Testing Library + MSW + jest-axe |
| E2E tests             | Playwright                                |
| Linting / formatting  | ESLint 10 + Prettier                      |

---

## Getting started

**Prerequisites:** Node ≥ 24, pnpm ≥ 11

```bash
# Install dependencies
pnpm install

# Start the dev server at http://localhost:5173
pnpm dev
```

---

## Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Start Vite dev server                         |
| `pnpm build`        | Type-check + production build → `dist/`       |
| `pnpm preview`      | Serve the production build locally            |
| `pnpm test`         | Vitest in watch mode                          |
| `pnpm test:ui`      | Vitest with browser UI dashboard              |
| `pnpm test:e2e`     | Playwright E2E tests (auto-starts dev server) |
| `pnpm lint`         | ESLint                                        |
| `pnpm lint:fix`     | ESLint with auto-fix                          |
| `pnpm format`       | Prettier (write)                              |
| `pnpm format:check` | Prettier (check only)                         |

---

## Project structure

```
src/
├── components/          # Presentational components (no data fetching)
│   ├── layout/          # Header, Footer, Layout wrapper
│   ├── pagination/      # Pagination controls
│   ├── pokemon-card/    # Card with stats, types, abilities
│   ├── pokemon-modal/   # Sprite gallery modal
│   └── shared/          # Generic Card and Modal primitives
├── hooks/               # usePageParam — URL-synced page state
├── schemas/             # Zod schemas; TypeScript types derived via z.infer<>
├── services/            # RTK Query API slice + image base URL
├── store/               # Redux store, typed dispatch/selector hooks
├── views/               # Data-fetching containers (PokelistContainer)
└── test/                # Vitest setup, MSW server + handlers, fixtures
e2e/                     # Playwright tests
```

---

## Architecture notes

**RTK Query as the sole state layer.** There are no custom Redux slices — the entire Redux store is the RTK Query cache. Components get `{ data, isLoading, isError }` directly from query hooks; per-Pokémon requests are automatically deduplicated and cached.

**Zod at the API boundary.** RTK Query's `transformResponse` runs each raw response through a Zod schema before it reaches any component. TypeScript types are derived from those schemas — no separately maintained interfaces.

**URL-driven pagination, no router.** A custom `usePageParam` hook reads and writes `?page=N` via the native History API. Pages are bookmarkable with zero router dependency.

**Native `<dialog>` modal.** The `Modal` component uses the HTML `<dialog>` element with `showModal()`, rendered via a React portal. Includes Escape key handling, backdrop-click-to-close, and body scroll lock.

**Accessibility-first tests.** Every component test asserts `toHaveNoViolations()` from jest-axe — covering loading states, error states, and all modal interaction paths.

---

## Deployment

The app deploys automatically to **GitHub Pages** on every push to `master` via `.github/workflows/deploy.yml`. Vite is configured with `base: '/pokeapp/'` to match the sub-path.

A `vercel.json` is also present for optional Vercel hosting.

---

## Data source

All Pokémon data is fetched from [PokéAPI v2](https://pokeapi.co/api/v2) — a free, open REST API with no authentication required.

Sprites are loaded from `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{id}.png`.
