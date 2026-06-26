import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  NamedAPIResourceList,
  NamedAPIResourceListSchema,
  Pokemon,
  PokemonSchema,
} from "../schemas/pokemon";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPokemon: builder.query<NamedAPIResourceList, null>({
      query: () => "/pokemon",
      transformResponse: (raw: unknown) =>
        NamedAPIResourceListSchema.parse(raw),
    }),
    getPokemonById: builder.query<Pokemon, number>({
      query: (id: number) => `/pokemon/${id}`,
      transformResponse: (raw: unknown) => PokemonSchema.parse(raw),
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonByIdQuery } = apiSlice;
