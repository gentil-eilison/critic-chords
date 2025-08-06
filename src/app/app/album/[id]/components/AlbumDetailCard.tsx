import FallbackImage from "@/components/FallbackImage";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { album } from "@/app/components/FeaturedReviews";
import { User } from "lucide-react";
import ReadOnlyRating from "@/components/ReadOnlyRating";

export default function AlbumDetailCard() {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="flex flex-col gap-3">
        <FallbackImage
          className="rounded mx-auto"
          src={album.coverImage}
          alt="Cover"
        />
        <p className="font-bold text-2xl">{album.title}</p>
        <p className="text-gray-300 flex items-center gap-2">
          <User size={16} />
          ANGRA
        </p>
        <span className="flex items-center gap-3">
          <ReadOnlyRating maxWidth={120} rating={4} />
          <span className="font-bold">4.2</span>
          <span className="text-gray-400">(23 reviews)</span>
        </span>
        <div className="text-sm">
          <p className="text-gray-400 flex justify-between items-center">
            Release year: <span className="text-white">2004</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Genre: <span className="text-white">Power Metal</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Duration: <span className="text-white">64 min</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Tracks: <span className="text-white">13</span>
          </p>
          <p className="text-gray-400 flex justify-between items-center">
            Label: <span className="text-white">Angra</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start text-sm">
        <p className="font-bold">About</p>
        <p className="text-justify text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          euismod lectus augue, in malesuada enim varius cursus. Nunc consequat
          rhoncus dolor, vitae porta augue hendrerit nec. Quisque eu sem
          lobortis, ultricies turpis ut, ornare mauris.
        </p>
      </CardFooter>
    </Card>
  );
}
