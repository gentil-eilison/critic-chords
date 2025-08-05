import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";

export default function Discover() {
    return (
        <main className="flex flex-col grow-1">
            <header>
                <TypographyH1>Discover <span className="text-green-500">Music</span></TypographyH1>
                <TypographyH2 extraClasses="text-gray-300">Find albums and artists to review</TypographyH2>
            </header>
        </main>
    );
}