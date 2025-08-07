"use client";

import TypographyH1 from "@/components/typography/TypographyH1";
import ResultCard from "./ResultCard";
import { Album } from "@/types/Application";

interface ResultsProps {
  albums: Album[];
}

export default function Results({ albums }: ResultsProps) {
  return (
    <section>
      <TypographyH1 extraClasses="mt-2">
        Results &nbsp;
        <span className="text-gray-400">({albums.length} albums found)</span>
      </TypographyH1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {albums.map((album) => (
          <ResultCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}
