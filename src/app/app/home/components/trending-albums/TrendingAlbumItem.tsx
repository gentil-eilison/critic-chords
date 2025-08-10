import { Album } from "@/types/Application";
import { Star } from "lucide-react";
import Image from "next/image";

interface TrendingAlbumItemProps {
  album: Album;
}

export default function TrendingAlbumItem({ album }: TrendingAlbumItemProps) {
  return (
    <li className="flex justify-between mt-6 hover:bg-gray-800 p-2 rounded transition-all">
      <div className="flex gap-3">
        <Image
          className="rounded"
          width={50}
          height={50}
          src={album.cover_art}
          alt={album.title}
        />
        <div>
          <p>{album.title}</p>
          <p className="text-gray-300">{album.artist}</p>
        </div>
      </div>
      <div>
        <p className="text-green-500 flex items-center gap-2">
          <Star
            fill={"var(--color-green-500)"}
            size={16}
            color={"var(--color-green-500)"}
          />
          {album.overall_rating}
        </p>
      </div>
    </li>
  );
}
