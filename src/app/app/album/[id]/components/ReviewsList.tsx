import ReviewCard from "@/components/ReviewCard";
import TypographyH1 from "@/components/typography/TypographyH1";

export default function ReviewsList() {
  return (
    <section>
      <TypographyH1>Reviews (3)</TypographyH1>
      <div className="flex flex-col gap-5 mt-5">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
}
