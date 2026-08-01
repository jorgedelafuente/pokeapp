import { http, HttpResponse } from 'msw'
import type { Pokemon } from '@/schemas/pokemon'

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  sprites: {
    front_default: null,
    front_shiny: null,
    back_default: null,
    back_shiny: null,
    front_female: null,
    back_female: null,
    front_shiny_female: null,
    back_shiny_female: null,
    other: {
      'official-artwork': { front_default: null, front_shiny: null },
      home: {
        front_default: null,
        front_shiny: null,
        front_female: null,
        front_shiny_female: null,
      },
      dream_world: { front_default: null, front_female: null },
    },
  },
  types: [{ slot: 1, type: { name: 'grass' } }],
  stats: [{ base_stat: 45, stat: { name: 'hp' } }],
  abilities: [{ is_hidden: false, ability: { name: 'overgrow' } }],
}

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/:id', () => HttpResponse.json(bulbasaur)),
]
