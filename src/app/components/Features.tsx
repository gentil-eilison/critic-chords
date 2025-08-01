import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";
import FeatureCard from "./FeatureCard";
import { MessageSquare, Music, Search, Star, TrendingUp, Users } from "lucide-react";

export default function Features() {
    return (
        <section className="bg-gray-900/50 p-8">
            <TypographyH1 extraClasses="text-center">
                Why Choose&nbsp;<span className="text-green-500">Critic Chord?</span>
            </TypographyH1>
            <TypographyH2 extraClasses="text-center mt-4 text-gray-300">
                Experience music criticism like never before with out comprehensive platform
            </TypographyH2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <FeatureCard 
                    icon={<TrendingUp className="text-green-500"/>} 
                    title="Trending Albums"
                    description="Stay updated with the most talked-about releases and hidden gems"
                />
                <FeatureCard 
                    icon={<Star className="text-green-500" />} 
                    title="Rate & Review"
                    description="Share detailed reviews and ratings for your favorite (or least favorite) albums"
                />
                <FeatureCard 
                    icon={<Users className="text-green-500" />} 
                    title="Community Driven"
                    description="Connect with music enthusiats and discover new perspectives on albums"
                />
                <FeatureCard 
                    icon={<MessageSquare className="text-green-500" />} 
                    title="Engage & Discuss"
                    description="Comment on reviews and engage in meaningful discussions about music"
                />
                <FeatureCard 
                    icon={<Search className="text-green-500" />} 
                    title="Smart Discovery"
                    description="Find albums based on your taste and discover your next favorite artist"
                />
                <FeatureCard 
                    icon={<Music className="text-green-500" />} 
                    title="All Genres Welcome"
                    description="From jazz to metal, pop to experimental - every genre has a place here"
                />
            </div>
        </section>
    );
}