import ContainerCard from "@/components/ContainerCard";
import { CardContent } from "@/components/ui/card";

export default function ReviewSubmitted() {
  return (
    <ContainerCard variant="green">
      <CardContent className="flex flex-col items-center gap-3">
        <p className="text-green-500">✔</p>
        <p className="font-bold">Review Submitted!</p>
        <p className="text-gray-300">
          Thank you for sharing your thoughts on this album.
        </p>
      </CardContent>
    </ContainerCard>
  );
}
