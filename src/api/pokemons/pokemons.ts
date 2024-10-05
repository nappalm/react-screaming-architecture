import { axios } from '../axios';
import type { Pokemons, PokemonsPaginationParams } from './pokemons.types';

const ENDPOINT = '/pokemon';

export async function getPokemons(params: PokemonsPaginationParams) {
  const { data } = await axios.get<Pokemons>(ENDPOINT, {
    params,
  });

  return data;
}
