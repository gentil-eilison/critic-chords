import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import HomeCard from "./HomeCard";

interface FeatureCardProps {
    icon: ReactNode;
    title: string
    description: string
}

export default function FeatureCard(
    { icon, title, description }: FeatureCardProps
) {
    return (
        <HomeCard>
            <CardHeader>
                <div className="bg-green-500/10 rounded-lg flex items-center justify-center w-12 h-12 mb-5">
                    { icon }
                </div>
                <CardTitle className="text-white">{ title }</CardTitle>
                <CardDescription className="text-gray-300">{ description }</CardDescription>
            </CardHeader>
        </HomeCard>
    );
}