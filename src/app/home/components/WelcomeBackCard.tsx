import PrimaryButton from "@/components/PrimaryButton";
import TypographyH1 from "@/components/typography/TypographyH1";
import { Card, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";
import Link from "next/link";

interface WelcomeBackCardProps {
    userFirstName: string;
}

export default function WelcomeBackCard(
    { userFirstName }: WelcomeBackCardProps
) {
    return (
        <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
            <CardContent className="flex flex-col gap-6">
                <TypographyH1 extraClasses="font-normal flex gap-3 items-center">
                    Welcome back, { userFirstName }! 
                    <Music size={32} color={"var(--color-green-500)"} />
                </TypographyH1>
                <p className="text-gray-300">
                    Ready to discover some new music or share your latest thoughts?
                </p>
                <div>
                    <Link className="flex flex-col md:flex-row gap-8" href="/discover">
                        <PrimaryButton>Browse Library</PrimaryButton>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}