import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PokeAPI } from "pokeapi-types";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPokemon: builder.query<PokeAPI.NamedAPIResourceList, null>({
      query: () => "/pokemon",
    }),
    getPokemonById: builder.query({
      query: (id: number) => `/pokemon/${id}`,
    }),
    getPokemonByPage: builder.query<PokeAPI.NamedAPIResourceList, null>({
      query: () => "/pokemon?offset=20&limit=20",
    }),
  }),
});

export const {
  useGetPokemonQuery,
  useGetPokemonByIdQuery,
  useGetPokemonByPageQuery,
} = apiSlice;
