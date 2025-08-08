import { Review, UserStats } from "@/types/Application";
import criticChordClient from "./client";

export interface CreateReviewData {
  rating: number;
  user: string;
  commentary: string;
}

export async function createReview(
  albumId: number,
  reviewData: CreateReviewData
): Promise<Review> {
  const response = await criticChordClient.post(
    `/albums/${albumId}/reviews/`,
    reviewData
  );
  return response.data;
}

export async function getAlbumReviews(albumId: number): Promise<Review[]> {
  const response = await criticChordClient.get(`/albums/${albumId}/reviews/`);
  return response.data;
}

export async function getUserStats(email: string): Promise<UserStats> {
  const response = await criticChordClient.get(`/reviews/${email}/stats/`);
  return response.data;
}
