// Move this to appropriate component folder later on

import PrimaryButton from "@/components/PrimaryButton";
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader 
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Album = {
    id: number;
    title: string;
    artistId: number;
    coverImage: string | StaticImport;
}

type Artist = {
    id: number;
    firstName: string;
    lastName: string;
}

type Review = {
    id: number;
    rating: number;
    commentary: string;
    userId: number;
    albumId: number;
}

type User = {
    id: number;
    username: string;
}

interface ReviewCardProps {
    album: Album;
    artist: Artist;
    review: Review;
    user: User;
}

export default function ReviewCard(
    { album, artist, review, user }: ReviewCardProps
) {
    return (
        <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500 transition-colors">
            <CardHeader className="flex">
                <figure>
                    <Image
                        className="rounded" 
                        src={album.coverImage} 
                        alt="Album cover" 
                        width={50} 
                        height={50} 
                    />
                </figure>
                <div>
                    <p>{ album.title }</p>
                    <p>{ artist.firstName } { artist.lastName }</p>
                </div>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-1">{ review.rating }/5 <Star fill={"var(--color-green-500)"} size={16} color={"var(--color-green-500)"} /></p>
                <p className="text-gray-300 line-clamp-3">"{ review.commentary }"</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <span className="text-gray-400">@{ user.username }</span>
                <PrimaryButton>Read More</PrimaryButton>
            </CardFooter>
        </Card>
    );
}