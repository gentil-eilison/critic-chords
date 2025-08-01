import ReviewCard from "./ReviewCard";
import coverImage from "../../../public/ps5.webp";
import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";

const album = {
    id: 1,
    title: "Temple of Shadows",
    artistId: 1,
    coverImage: coverImage
}

const artist = {
    id: 1,
    firstName: "Angra",
    lastName: "",
}

const review = {
    id: 1,
    rating: 4,
    commentary: "Balblalbalblablallblablbalb",
    userId: 1,
    albumId: 1,
}

const user = {
    id: 1,
    username: "alysonjf"
}

export default function FeaturedReviews() {
    return (
        <section className="flex flex-col bg-gray-900/50 p-8">
            <TypographyH1 extraClasses="text-center">
                Featured&nbsp;<span className="text-green-500">Reviews</span>
            </TypographyH1>
            <TypographyH2 extraClasses="text-gray-300 text-center">
                See what the community is talking about
            </TypographyH2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <ReviewCard 
                    album={album} 
                    artist={artist} 
                    review={review} 
                    user={user}
                />
                <ReviewCard 
                    album={album} 
                    artist={artist} 
                    review={review} 
                    user={user}
                />
                <ReviewCard 
                    album={album} 
                    artist={artist} 
                    review={review} 
                    user={user}
                />
            </div>
        </section>
    );
}