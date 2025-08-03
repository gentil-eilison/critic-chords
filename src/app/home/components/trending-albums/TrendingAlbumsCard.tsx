import { TrendingUp } from "lucide-react";
import SectionCard from "../SectionCard";
import TrendingAlbumItem from "./TrendingAlbumItem";
import { album } from "@/app/components/FeaturedReviews";


export default function TrendingAlbumsCard() {
    return (
        <SectionCard 
            title="Trending This Week"
            icon={
                <TrendingUp size={32} color={"var(--color-green-500)"} />
            }
        >
            <ul className="list-none">
                <TrendingAlbumItem album={album} artist="Angra" />
                <TrendingAlbumItem album={album} artist="Disturbed" />
                <TrendingAlbumItem album={album} artist="Linkin Park" />
                <TrendingAlbumItem album={album} artist="Avenged Sevenfold" />
                <TrendingAlbumItem album={album} artist="Edu Falaschi" />
            </ul>
        </SectionCard>
    );
}