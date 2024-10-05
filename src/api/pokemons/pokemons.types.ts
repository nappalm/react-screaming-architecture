export type PokemonsPaginationParams = {
  limit: number;
  offset: number;
};

export type Pokemons = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
};
