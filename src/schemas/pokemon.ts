import { z } from 'zod'

export const NamedAPIResourceSchema = z.object({
  name: z.string(),
  url: z.string(),
})

export const NamedAPIResourceListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(NamedAPIResourceSchema),
})

export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  sprites: z.object({
    front_default: z.string().nullable(),
    front_shiny: z.string().nullable(),
    back_default: z.string().nullable(),
    back_shiny: z.string().nullable(),
    front_female: z.string().nullable(),
    back_female: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
    other: z.object({
      'official-artwork': z.object({
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      home: z.object({
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
      dream_world: z.object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
      }),
    }),
  }),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({ name: z.string() }),
    }),
  ),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      stat: z.object({ name: z.string() }),
    }),
  ),
  abilities: z.array(
    z.object({
      is_hidden: z.boolean(),
      ability: z.object({ name: z.string() }),
    }),
  ),
})

export type NamedAPIResource = z.infer<typeof NamedAPIResourceSchema>
export type NamedAPIResourceList = z.infer<typeof NamedAPIResourceListSchema>
export type Pokemon = z.infer<typeof PokemonSchema>
