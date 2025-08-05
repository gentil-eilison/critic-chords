import { BookOpen } from "lucide-react";
import SectionCard from "./SectionCard";

export default function LatestReviews() {
    return (
        <SectionCard
            title="Latest Reviews"
            icon={
                <BookOpen size={30} color={"var(--color-green-500)"} />
            }
        >
            <p>Insert review cards here</p>
        </SectionCard>
    );
}