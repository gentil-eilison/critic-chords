"use client";

import { getAlbum } from "@/api/albums";
import { Album } from "@/types/Application";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";

interface AlbumContextType {
  album: Album;
}

export const AlbumContext = createContext<AlbumContextType | null>(null);

export default function AlbumProvider({ children }: { children: ReactNode }) {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery({
    queryKey: ["albumDetail", id],
    queryFn: () => getAlbum(Number(id)),
  });

  return (
    data && (
      <AlbumContext.Provider value={{ album: data }}>
        {children}
      </AlbumContext.Provider>
    )
  );
}

export function useAlbum() {
  const context = useContext(AlbumContext);
  if (context) {
    return context;
  } else {
    throw new Error("useAlbum must be used within AlbumProvider");
  }
}
