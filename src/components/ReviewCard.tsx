import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import { user } from "@/app/components/FeaturedReviews";
import ReadOnlyRating from "./ReadOnlyRating";
import { Heart } from "lucide-react";

export default function ReviewCard() {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <header className="flex justify-between items-center gap-3">
          <div className="flex gap-2">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user.picture} />
              <AvatarFallback className="bg-green-500 text-black">
                {user.username.at(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <p className="font-bold">@{user.username}</p>
              <p className="text-gray-400">2 days ago</p>
            </div>
          </div>
          <span className="flex items-center self-start gap-1">
            <ReadOnlyRating maxWidth={100} rating={4} />
            <span className="font-bold">4/5</span>
          </span>
        </header>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 text-justify">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          euismod lectus augue, in malesuada enim varius cursus. Nunc consequat
          rhoncus dolor, vitae porta augue hendrerit nec. Quisque eu sem
          lobortis, ultricies turpis ut, ornare mauris."
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 text-sm text-gray-400">
        <Heart
          className="hover:text-red-400 hover:cursor-pointer"
          fill=""
          size={18}
        />{" "}
        4
      </CardFooter>
    </Card>
  );
}
