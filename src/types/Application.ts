export type Album = {
  id: number;
  title: string;
  release_year: number;
  duration: number;
  tracks: number;
  label: string;
  artist: string;
  cover_art: string;
  genre: string;
  about: string;
  reviews_count: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Artist = {
  id: number;
  name: string;
};

export type Review = {
  id: number;
  rating: number;
  commentary: string;
  user: string;
  days_since: number;
};

export type User = {
  id: number;
  username: string;
};

export type UserStats = {
  reviews_liked: number;
  reviews_written: number;
  albums_rated: number;
};
