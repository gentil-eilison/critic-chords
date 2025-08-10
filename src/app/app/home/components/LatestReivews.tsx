"use client";

import { BookOpen } from "lucide-react";
import SectionCard from "./SectionCard";
import { useQuery } from "@tanstack/react-query";
import { getLatestReviews } from "@/api/reviews";
import ReviewCard from "@/components/ReviewCard";

export default function LatestReviews() {
  const { data } = useQuery({
    queryKey: ["latestReviews"],
    queryFn: getLatestReviews,
  });

  return (
    <SectionCard
      title="Latest Reviews"
      icon={<BookOpen size={30} color={"var(--color-green-500)"} />}
    >
      <ul className="list-none flex flex-col gap-5">
        {data &&
          data.map((review) => <ReviewCard key={review.id} review={review} />)}
      </ul>
    </SectionCard>
  );
}
