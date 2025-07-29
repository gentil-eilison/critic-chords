import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { Badge } from "@/components/ui/badge";
import FloatingPanels from "./FloatingPanels";
import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";

export default function HeroSection() {
    return (
        <section className="border-2 border-red-500 flex flex-col items-center p-8 gap-5 relative">
            <Badge 
                className="border-green-500 text-green-500 bg-green-500/10" 
                variant="outline">Share Your Musical Voice
            </Badge>
            <TypographyH1 extraClasses="text-center flex-col">
                <p>Where Music Meets</p>
                <p className="text-green-500">Critical Thinking</p>
            </TypographyH1>
            <TypographyH2 extraClasses="text-center w-10/12 md:w-1/2 text-gray-300">
                Join the ultimate community for music lovers. 
                Share your thoughts, discover new albums, and 
                connect with fellow critics who appreciate the art of sound.
            </TypographyH2>
            <div className="flex flex-col md:flex-row gap-3">
                <PrimaryButton>Start Reviewing</PrimaryButton>
                <SecondaryButton>Explore Reviews</SecondaryButton>
            </div>
            <FloatingPanels />
        </section>
    );
}