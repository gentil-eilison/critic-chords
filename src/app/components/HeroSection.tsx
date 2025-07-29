import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
    return (
        <section className="border-2 border-red-500 flex flex-col items-center p-8 gap-5">
            <Badge 
                className="border-green-500 text-green-500 bg-green-500/10" 
                variant="outline">Share Your Musical Voice
            </Badge>
            <span className="text-4xl font-bold text-center">
                <p>Where Music Meets</p>
                <p className="text-green-500">Critical Thinking</p>
            </span>
            <span className="text-xl text-center w-10/12 md:w-1/2 text-gray-300">
                Join the ultimate community for music lovers. 
                Share your thoughts, discover new albums, and 
                connect with fellow critics who appreciate the art of sound.
            </span>
            <div className="flex flex-col md:flex-row gap-3">
                <PrimaryButton>Start Reviewing</PrimaryButton>
                <SecondaryButton>Explore Reviews</SecondaryButton>
            </div>
        </section>
    );
}