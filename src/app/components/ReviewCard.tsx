// Move this to appropriate component folder later on

import PrimaryButton from "@/components/PrimaryButton";
import { 
    CardContent, 
    CardFooter, 
    CardHeader 
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import HomeCard from "./HomeCard";
import { Album, Artist, Review, User } from "@/types/Application";

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
        <HomeCard>
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
        </HomeCard>
    );
}