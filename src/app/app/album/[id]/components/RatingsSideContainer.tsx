import { useAlbum } from "@/context/AlbumContext";
import ReviewCard from "./RateAlbumCard";
import ReviewsList from "./ReviewsList";
import { useQuery } from "@tanstack/react-query";
import { getAlbumReviews } from "@/api/reviews";
import RateAlbumCard from "./RateAlbumCard";

export default function RatingsSideContainer() {
  const { album } = useAlbum();
  const { data } = useQuery({
    queryKey: ["reviewsList", album.id],
    queryFn: () => getAlbumReviews(album.id),
  });

  return (
    <div className="lg:col-span-2 flex flex-col gap-4">
      {data && (
        <>
          <RateAlbumCard reviews={data} />
          <ReviewsList reviews={data} />
        </>
      )}
    </div>
  );
}
