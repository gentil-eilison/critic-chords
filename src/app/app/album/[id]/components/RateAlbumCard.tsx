"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReviewForm from "./ReviewForm";
import { Review } from "@/types/Application";
import ContainerCard from "@/components/ContainerCard";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import ReviewSubmitted from "./ReviewSubmitted";

interface RateAlbumCardProps {
  reviews: Review[];
}

export default function RateAlbumCard({ reviews }: RateAlbumCardProps) {
  const { user } = useUser();
  const [hasRated, setHasRated] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.email) {
      const userReviewIdx = reviews.findIndex(
        (review) => review.user === user.email
      );

      if (userReviewIdx !== -1) {
        setHasRated(true);
      }
    }
  }, [user]);

  return hasRated ? (
    <ReviewSubmitted />
  ) : (
    <ContainerCard variant="gray">
      <CardHeader>
        <CardTitle>Rate This Album</CardTitle>
      </CardHeader>
      <CardContent>
        <ReviewForm setHasRated={setHasRated} />
      </CardContent>
    </ContainerCard>
  );
}
