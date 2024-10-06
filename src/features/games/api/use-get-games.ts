import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../../api';

const QUERY_KEY = 'games';
export function useGetGames(page: number, pageSize: number) {
  return useQuery({
    queryKey: [QUERY_KEY, page, pageSize],
    queryFn: () => getGames(page, pageSize),
  });
}
