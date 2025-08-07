import { Genre } from "@/types/Application";
import criticChordClient from "./client";

export async function getGenres(): Promise<Genre[]> {
  const response = await criticChordClient.get("/genres/");
  return response.data;
}
