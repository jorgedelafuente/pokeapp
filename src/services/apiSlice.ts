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
  }),
});

export const { useGetPokemonQuery, useGetPokemonByIdQuery } = apiSlice;
