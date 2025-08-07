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
};

export type Genre = {
  id: number;
  name: string;
};

export type Artist = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Review = {
  id: number;
  rating: number;
  commentary: string;
  userId: number;
  albumId: number;
};

export type User = {
  id: number;
  username: string;
};
