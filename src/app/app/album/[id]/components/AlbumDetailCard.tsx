import FallbackImage from "@/components/FallbackImage";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { User } from "lucide-react";
import ReadOnlyRating from "@/components/ReadOnlyRating";
import { useAlbum } from "@/context/AlbumContext";

export default function AlbumDetailCard() {
  const { album } = useAlbum();

  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="flex flex-col gap-3">
        <FallbackImage
          className="rounded mx-auto"
          width={400}
          height={400}
          src={album.cover_art}
          alt="Cover"
        />
        <p className="font-bold text-2xl">{album.title}</p>
        <p className="text-gray-300 flex items-center gap-2">
          <User size={16} />
          {album.artist}
        </p>
        <span className="flex items-center gap-3">
          <ReadOnlyRating maxWidth={120} rating={4} />
          <span className="font-bold">4.2</span>
          <span className="text-gray-400">({album.reviews_count} reviews)</span>
        </span>
        <div className="text-sm">
          <p className="text-gray-400 flex justify-between items-center">
            Release year:{" "}
            <span className="text-white">{album.release_year}</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Genre: <span className="text-white">{album.genre}</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Duration: <span className="text-white">{album.duration} min</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Tracks: <span className="text-white">{album.tracks}</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Label: <span className="text-white">{album.label}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start text-sm">
        <p className="font-bold">About</p>
        <p className="text-justify text-gray-300">{album.about}</p>
      </CardFooter>
    </Card>
  );
}
