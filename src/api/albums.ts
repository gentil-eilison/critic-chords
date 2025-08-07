import { Album } from "@/types/Application";
import criticChordClient from "./client";

export async function getAlbums(): Promise<Album[]> {
  const response = await criticChordClient.get("/albums/");
  return response.data;
}
