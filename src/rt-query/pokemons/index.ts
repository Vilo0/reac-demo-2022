import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPokemon } from '../../features/pokemon/IPokemon';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    addPokemon: builder.mutation<string, string>({
      query(text) {
        return {
          url: `pokemon`,
          method: "POST",
          body: {
            text,
          },
        };
      },
      invalidatesTags: [{ type: "Pokemon", id: "LIST" }],
    }),
    updatePokemon: builder.mutation<IPokemon, IPokemon>({
      query(pokemon) {
        return {
          url: `pokemon/${pokemon.id}`,
          method: "PUT",
          body: pokemon,
        };
      },
      invalidatesTags: [{ type: "Pokemon", id: "LIST" }],
    }),
    deletePokemon: builder.mutation<IPokemon, IPokemon>({
      query(pokemon) {
        return {
          url: `pokemon/${pokemon.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Pokemon", id: "LIST" }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;