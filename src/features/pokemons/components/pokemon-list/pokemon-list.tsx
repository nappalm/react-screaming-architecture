import { Stack } from '@chakra-ui/react';
import { useGetPokemons } from '../../api/use-get-pokemons';
import { useQueryParams } from '../../../__core/hooks/use-query-params';
import PokemonRow from './pokemon-row';

export default function PokemonList() {
  const { getParam } = useQueryParams();
  const offset = getParam<number>('offset', 0);
  const limit = getParam<number>('limit', 20);

  const pokemonList = useGetPokemons({ offset, limit });

  if (pokemonList.isLoading) return <div>Loading...</div>;
  if (pokemonList.isError || !pokemonList.data)
    return <div>Error loading pokemons...</div>;

  const { results } = pokemonList.data;
  return (
    <Stack>
      {results.map((pokemon) => (
        <PokemonRow {...pokemon} />
      ))}
    </Stack>
  );
}
