# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package manager

Always use **pnpm**. Never use npm or yarn.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # tsc type-check + vite build
pnpm preview      # preview production build
```

Vitest is installed but has no test script or config yet.

## Architecture

**Stack:** React 18 + Redux Toolkit (RTK Query) + TypeScript + Vite + CSS Modules

**Data flow:**
- `src/services/apiSlice.ts` — single RTK Query `createApi` instance, base URL `https://pokeapi.co/api/v2`. Exports typed React hooks (`useGetPokemonQuery`, `useGetPokemonByIdQuery`).
- `src/store/store.ts` — Redux store with only the `apiSlice` reducer. Also exports `RootState` and `AppDispatch` types, and a `createStore` factory (used for testing).
- `src/store/hooks.ts` — typed wrappers (`useAppDispatch`, `useAppSelector`) that should be preferred over raw `useDispatch`/`useSelector`.
- Components call RTK Query hooks directly; there is no separate state slice outside of RTK Query's cache.

**Views vs components:**
- `src/views/` — page-level containers that own data fetching (currently only `pokelist/container/PokelistContainer.tsx`).
- `src/components/` — presentational, no data fetching.

**Schemas:** `src/schemas/` holds Zod schemas. Types should be derived from schemas with `z.infer<>` rather than maintained separately. `pokeapi-types` is still a devDependency but is being replaced by Zod schemas.

**Images:** Pokemon sprites are fetched from `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/{id}.png` where `id` is zero-padded to 3 digits. The base URL is exported from `src/services/index.ts`.
