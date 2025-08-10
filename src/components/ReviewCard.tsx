import { Avatar, AvatarFallback } from "./ui/avatar";
import { CardContent, CardFooter, CardHeader } from "./ui/card";

import ReadOnlyRating from "./ReadOnlyRating";
import { Heart } from "lucide-react";
import { Review } from "@/types/Application";
import ContainerCard from "./ContainerCard";
import { useUser } from "@auth0/nextjs-auth0";

interface ReviewCardProps {
  review: Review;
  showLike?: boolean;
}

export default function ReviewCard({ review, showLike }: ReviewCardProps) {
  const { user } = useUser();

  return (
    <ContainerCard variant="gray">
      <CardHeader>
        <header className="flex justify-between items-center gap-3">
          <div className="flex gap-2">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-green-500 text-black">
                {review.user.at(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <p className="font-bold">@{review.user}</p>
              <p className="text-gray-400">
                {review.days_since === 0
                  ? "Today"
                  : `${review.days_since} days ago`}
              </p>
            </div>
          </div>
          <span className="flex items-center self-start gap-1">
            <ReadOnlyRating maxWidth={100} rating={review.rating} />
            <span className="font-bold">{review.rating}/5</span>
          </span>
        </header>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-justify">
          {review.commentary !== ""
            ? `"${review.commentary}"`
            : "No commentary"}
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 text-sm text-gray-400">
        {(user && review.user === user.email) || !showLike ? (
          <></>
        ) : (
          <>
            <Heart
              className="hover:text-red-400 hover:cursor-pointer"
              fill=""
              size={18}
            />{" "}
            0
          </>
        )}
      </CardFooter>
    </ContainerCard>
  );
}
