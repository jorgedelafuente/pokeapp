import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { z } from 'zod'
import {
  NamedAPIResourceList,
  NamedAPIResourceListSchema,
  Pokemon,
  PokemonSchema,
} from '@/schemas/pokemon'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<NamedAPIResourceList, { limit: number; offset: number }>({
      query: ({ limit, offset }) => `/pokemon?limit=${limit}&offset=${offset}`,
      transformResponse: (raw: unknown) => {
        const result = NamedAPIResourceListSchema.safeParse(raw)
        if (!result.success) {
          console.error(z.flattenError(result.error))
          throw result.error
        }
        return result.data
      },
    }),
    getPokemonById: builder.query<Pokemon, number>({
      query: (id: number) => `/pokemon/${id}`,
      transformResponse: (raw: unknown) => {
        const result = PokemonSchema.safeParse(raw)
        if (!result.success) {
          console.error(z.flattenError(result.error))
          throw result.error
        }
        return result.data
      },
    }),
  }),
})

export const { useGetPokemonQuery, useGetPokemonByIdQuery } = apiSlice
