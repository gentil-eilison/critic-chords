"use client";

import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";
import SearchFilterCard from "./components/search-form/SearchFilterCard";
import Results from "./components/search-results/Results";
import { useEffect, useState } from "react";
import { Album } from "@/types/Application";
import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "@/api/albums";

export default function Discover() {
  const { data } = useQuery({
    queryKey: ["albumsList"],
    queryFn: getAlbums,
  });
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (data) {
      setAlbums(data);
    }
  }, [data]);

  return (
    <main className="flex flex-col grow-1 p-7 gap-4">
      <header className="flex flex-col gap-3">
        <TypographyH1>
          Discover <span className="text-green-500">Music</span>
        </TypographyH1>
        <TypographyH2 extraClasses="text-gray-300">
          Find albums and artists to review
        </TypographyH2>
      </header>
      <SearchFilterCard setAlbums={setAlbums} />
      <Results albums={albums} />
    </main>
  );
}
