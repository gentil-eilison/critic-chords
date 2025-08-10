import { Album } from "@/types/Application";
import criticChordClient from "./client";

export async function getAlbums(): Promise<Album[]> {
  const response = await criticChordClient.get("/albums/");
  return response.data;
}

export async function getAlbum(id: number): Promise<Album> {
  const response = await criticChordClient.get(`/albums/${id}`);
  return response.data;
}

export async function getTrendingAlbums(): Promise<Album[]> {
  const response = await criticChordClient.get("/albums/trending/");
  return response.data;
}
