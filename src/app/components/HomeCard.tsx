import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface HomeCardProps {
    children: ReactNode;
}

export default function HomeCard({ children }: HomeCardProps) {
    return (
        <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500 transition-colors">
            { children }
        </Card>
    );
}