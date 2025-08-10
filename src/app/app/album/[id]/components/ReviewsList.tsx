import ReviewCard from "@/components/ReviewCard";
import TypographyH1 from "@/components/typography/TypographyH1";
import { Review } from "@/types/Application";

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <section>
      <TypographyH1>Reviews ({reviews.length})</TypographyH1>
      <div className="flex flex-col gap-5 mt-5">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} showLike />
        ))}
      </div>
    </section>
  );
}
