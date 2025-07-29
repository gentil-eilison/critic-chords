import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string
    description: string
}

export default function FeatureCard(
    { icon, title, description }: FeatureCardProps
) {
    return (
        <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500 transition-colors">
            <CardHeader>
                <div className="bg-green-500/10 rounded-lg flex items-center justify-center w-12 h-12 mb-5">
                    { icon }
                </div>
                <CardTitle className="text-white">{ title }</CardTitle>
                <CardDescription className="text-gray-300">{ description }</CardDescription>
            </CardHeader>
        </Card>
    );
}