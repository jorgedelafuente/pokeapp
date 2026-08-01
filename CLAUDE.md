# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package manager

Always use **pnpm**. Never use npm or yarn.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # tsc type-check + vite build
pnpm preview      # preview production build
pnpm test         # vitest (watch mode)
pnpm test:ui      # vitest with browser UI
pnpm test:e2e     # playwright e2e tests (auto-starts dev server)
```

Unit tests use Vitest + jsdom + Testing Library. Config is in `vite.config.ts`. Setup file is `src/test/setup.ts`.

E2E tests live in `e2e/`. Config is in `playwright.config.ts`.

## API Reference

This app uses [PokéAPI](https://pokeapi.co/api/v2). The full API documentation is at **https://pokeapi.co/docs/v2** — fetch it with a tool when you need endpoint details, available fields, or response shapes.

## Architecture

**Stack:** React 19 + Redux Toolkit (RTK Query) + TypeScript + Vite + CSS Modules

**Data flow:**

- `src/services/apiSlice.ts` — single RTK Query `createApi` instance, base URL `https://pokeapi.co/api/v2`. Exports typed React hooks (`useGetPokemonQuery`, `useGetPokemonByIdQuery`).
- `src/store/store.ts` — Redux store with only the `apiSlice` reducer. Also exports `RootState` and `AppDispatch` types, and a `createStore` factory (used for testing).
- `src/store/hooks.ts` — typed wrappers (`useAppDispatch`, `useAppSelector`) that should be preferred over raw `useDispatch`/`useSelector`.
- `src/hooks/` — custom React hooks shared across the app (e.g. `usePageParam.ts`).
- Components call RTK Query hooks directly; there is no separate state slice outside of RTK Query's cache.

**Views vs components:**

- `src/views/` — page-level containers that own data fetching (currently only `pokelist/container/PokelistContainer.tsx`).
- `src/components/` — presentational, no data fetching.

**Schemas:** `src/schemas/` holds Zod schemas. Types should be derived from schemas with `z.infer<>` rather than maintained separately.

**Images:** Pokemon sprites are fetched from `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{id}.png` where `id` is zero-padded to 3 digits. The base URL is exported from `src/services/index.ts`.
