import FallbackImage from "@/components/FallbackImage";
import PrimaryButton from "@/components/PrimaryButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plus, Star, User } from "lucide-react";

import Link from "next/link";
import { Album } from "@/types/Application";
import ContainerCard from "@/components/ContainerCard";

interface ResultCardProps {
  album: Album;
}

export default function ResultCard({ album }: ResultCardProps) {
  return (
    <ContainerCard
      variant="gray"
      extraClasses="hover:border-gray-700 transition-all duration-200 hover:scale-101"
    >
      <CardContent className="flex flex-col gap-1">
        <FallbackImage
          className="rounded mx-auto"
          width={400}
          height={400}
          src={album.cover_art}
          alt="Cover"
        />
        <p className="font-bold">{album.title}</p>
        <p className="flex items-center gap-2 text-gray-400">
          <User size={16} />
          {album.artist}
        </p>
        <p className="text-gray-400 flex items-center gap-2">
          <Calendar size={16} />
          {album.release_year} • {album.genre}
        </p>
        <p className="flex items-center gap-1">
          <Star
            size={18}
            color={"var(--color-green-500)"}
            fill={"var(--color-green-500)"}
          />
          {album.overall_rating}
          <span className="text-gray-400">({album.reviews_count})</span>
        </p>
        <Link href={`album/${album.id}`}>
          <PrimaryButton extraClasses="font-bold w-full">
            <Plus />
            Write Review
          </PrimaryButton>
        </Link>
      </CardContent>
    </ContainerCard>
  );
}
