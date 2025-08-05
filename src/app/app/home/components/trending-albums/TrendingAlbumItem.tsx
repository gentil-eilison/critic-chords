import { Album } from "@/types/Application";
import { Star } from "lucide-react";
import Image from "next/image";

interface TrendingAlbumItemProps {
    album: Album;
    artist: string;
}

export default function TrendingAlbumItem(
    { album, artist }: TrendingAlbumItemProps
) {
    return (
        <li className="flex justify-between mt-6 hover:bg-gray-800 p-2 rounded transition-all">
            <div className="flex gap-3">
                <Image
                    className="rounded" 
                    width={50} 
                    height={50} 
                    src={album.coverImage} 
                    alt={album.title} 
                />
                <div>
                    <p>{ album.title }</p>
                    <p className="text-gray-300">{ artist }</p>
                </div>
            </div>
            <div>
                <p className="text-green-500 flex items-center gap-2">
                    <Star 
                        fill={"var(--color-green-500)"} 
                        size={16} 
                        color={"var(--color-green-500)"} 
                    />
                    { album.avgRating }
                </p>
            </div>
        </li>
    );
}