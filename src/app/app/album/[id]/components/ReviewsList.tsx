import { getAlbumReviews } from "@/api/reviews";
import ReviewCard from "@/components/ReviewCard";
import TypographyH1 from "@/components/typography/TypographyH1";
import { useAlbum } from "@/context/AlbumContext";
import { useQuery } from "@tanstack/react-query";

export default function ReviewsList() {
  const { album } = useAlbum();
  const { data } = useQuery({
    queryKey: ["reviewsList"],
    queryFn: () => getAlbumReviews(album.id),
  });

  return (
    data && (
      <section>
        <TypographyH1>Reviews ({data.length})</TypographyH1>
        <div className="flex flex-col gap-5 mt-5">
          {data &&
            data.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
        </div>
      </section>
    )
  );
}
