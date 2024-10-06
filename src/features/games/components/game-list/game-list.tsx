import { Stack } from '@chakra-ui/react';
import { useGetGames } from '../../api/use-get-games';
import GameRow from './game-row';
import { useQueryParams } from '../../../../common/hooks/use-query-params';

export default function GameList() {
  const { getParam } = useQueryParams();
  const page = getParam<number>('page', 1);

  const gameList = useGetGames(page, 20);

  if (gameList.isLoading) return <div>Loading...</div>;
  if (gameList.isError || !gameList.data)
    return <div>Error loading pokemons...</div>;

  const { results } = gameList.data;
  return (
    <Stack>
      {results.map((game) => (
        <GameRow key={game.id} {...game} />
      ))}
    </Stack>
  );
}
