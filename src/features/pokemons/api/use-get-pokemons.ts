import { useQuery } from '@tanstack/react-query';
import { getPokemons, PokemonsPaginationParams } from '../../../api';

const QUERY_KEY = 'pokemons';
export function useGetPokemons(params: PokemonsPaginationParams) {
  return useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => getPokemons(params),
  });
}
