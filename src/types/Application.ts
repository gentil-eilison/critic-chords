import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Album = {
    id: number;
    title: string;
    artistId: number;
    coverImage: string | StaticImport;
    avgRating: number;
}

export type Artist = {
    id: number;
    firstName: string;
    lastName: string;
}

export type Review = {
    id: number;
    rating: number;
    commentary: string;
    userId: number;
    albumId: number;
}

export type User = {
    id: number;
    username: string;
}