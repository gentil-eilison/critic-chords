import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
    icon: ReactNode;
    text: string;
    value: number;
}

export default function StatCard({ icon, text, value }: StatCardProps) {
    return (
        <Card className="grow-1 py-10">
            <CardContent className="flex justify-center gap-10">
                { icon } { text } <span className="text-green-500">{ value }</span>
            </CardContent>
        </Card>
    );
}