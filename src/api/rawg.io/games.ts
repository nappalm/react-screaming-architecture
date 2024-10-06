import { axios } from '../axios';
import type { Games } from './games.types';

const ENDPOINT = '/games';

export async function getGames(page: number, pageSize: number) {
  const { data } = await axios.get<Games>(ENDPOINT, {
    params: {
      page,
      page_size: pageSize,
    },
  });

  return data;
}
