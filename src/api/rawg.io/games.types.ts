type ESRBRating = {
  id: number;
  slug: string;
  name: string;
};

type PlatformDetails = {
  id: number;
  slug: string;
  name: string;
};

type Platform = {
  platform: PlatformDetails;
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, unknown>;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: ESRBRating;
  platforms: Platform[];
};

export type Games = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
};
