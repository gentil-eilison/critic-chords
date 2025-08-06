import ReviewCard from "./ReviewCard";
import ReviewsList from "./ReviewsList";

export default function RatingsSideContainer() {
  return (
    <div className="lg:col-span-2 flex flex-col gap-4">
      <ReviewCard />
      <ReviewsList />
    </div>
  );
}
