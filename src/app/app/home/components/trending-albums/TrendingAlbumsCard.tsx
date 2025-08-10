"use client";

import { TrendingUp } from "lucide-react";
import SectionCard from "../SectionCard";
import TrendingAlbumItem from "./TrendingAlbumItem";
import { useQuery } from "@tanstack/react-query";
import { getTrendingAlbums } from "@/api/albums";

export default function TrendingAlbumsCard() {
  const { data } = useQuery({
    queryKey: ["trendingAlbums"],
    queryFn: getTrendingAlbums,
  });

  return (
    <SectionCard
      title="Trending This Week"
      icon={<TrendingUp size={32} color={"var(--color-green-500)"} />}
    >
      {data && (
        <ul className="list-none">
          {data.map((album) => (
            <TrendingAlbumItem key={album.id} album={album} />
          ))}
        </ul>
      )}
    </SectionCard>
  );
}
