import TypographyH1 from "@/components/typography/TypographyH1";
import { BookOpen, ChartNoAxesColumnIncreasing, Disc3, Heart } from "lucide-react";
import StatCard from "./StatCard";

export default function YourStats() {
    return (
        <section>
            <TypographyH1 extraClasses="font-normal flex gap-3">
                <ChartNoAxesColumnIncreasing 
                    size={48} 
                    color={"var(--color-green-500)"} 
                />
                Your Stats
            </TypographyH1>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                <StatCard
                    text="Reviews Written"
                    icon={
                        <BookOpen color={"var(--color-green-500)"} />
                    }
                    value={30} 
                />
                <StatCard
                    text="Albums Rated"    
                    icon={
                        <Disc3 color={"var(--color-green-500)"} />
                    }
                    value={30}     
                />
                <StatCard
                    text="Reivews Liked"
                    icon={
                        <Heart color={"var(--color-green-500)"} />
                    }
                    value={30}         
                />
            </div>
    </section>
    );
}