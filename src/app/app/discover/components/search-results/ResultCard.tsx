import FallbackImage from "@/components/FallbackImage";
import PrimaryButton from "@/components/PrimaryButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plus, Star, User } from "lucide-react";

import { album } from "@/app/components/FeaturedReviews";

export default function ResultCard() {
    return (
        <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-200 hover:scale-101">
            <CardContent className="flex flex-col gap-1">
                <FallbackImage className="rounded mx-auto" src={album.coverImage} alt="Cover" />
                <p className="font-bold">Temple of Shadows</p>
                <p className="flex items-center gap-2 text-gray-400"><User size={16} />ANGRA</p>
                <p className="text-gray-400 flex items-center gap-2"><Calendar size={16} />2004 • Power Metal</p>
                <p className="flex items-center gap-1">
                    <Star 
                        size={18}
                        color={"var(--color-green-500)"}
                        fill={"var(--color-green-500)"} 
                    />
                    4.2
                    <span className="text-gray-400">(22)</span>
                </p>
                <PrimaryButton extraClasses="font-bold w-full">
                    <Plus />
                    Write Review
                </PrimaryButton>
            </CardContent>
        </Card>
    );
}