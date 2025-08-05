import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import userStats from "../../../../public/user-stats.svg";
import Image from "next/image";
import TypographyH2 from "@/components/typography/TypographyH2";

interface SectionCardProps {
    children: ReactNode;
    title: string;
    icon: ReactNode;
}

export default function SectionCard(
    { children, title, icon }: SectionCardProps
) {
    return (
        <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
                <TypographyH2 extraClasses="flex gap-3 items-center">{ icon } { title }</TypographyH2>
                {/* <CardTitle className="flex gap-3"></CardTitle> */}
            </CardHeader>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    );
}