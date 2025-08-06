import AlbumDetailCard from "./components/AlbumDetailCard";
import RatingsSideContainer from "./components/RatingsSideContainer";

export default function AlbumDetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-10">
      <AlbumDetailCard />
      <RatingsSideContainer />
    </div>
  );
}
