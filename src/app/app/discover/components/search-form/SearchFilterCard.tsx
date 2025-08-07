import { Card, CardContent } from "@/components/ui/card";
import SearchFilterForm from "./SearchFilterForm";
import { Dispatch, SetStateAction } from "react";
import { Album } from "@/types/Application";

interface SearchFilterCardProps {
  setAlbums: Dispatch<SetStateAction<Album[]>>;
}

export default function SearchFilterCard({ setAlbums }: SearchFilterCardProps) {
  return (
    <Card className="bg-gray-800/80 border-gray-800">
      <CardContent>
        <SearchFilterForm setAlbums={setAlbums} />
      </CardContent>
    </Card>
  );
}
