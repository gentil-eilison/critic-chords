import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";
import SearchFilterCard from "./components/search-form/SearchFilterCard";
import Results from "./components/search-results/Results";

export default function Discover() {
    return (
        <main className="flex flex-col grow-1 p-7 gap-4">
            <header className="flex flex-col gap-3">
                <TypographyH1>
                    Discover <span className="text-green-500">Music</span>
                </TypographyH1>
                <TypographyH2 extraClasses="text-gray-300">
                    Find albums and artists to review
                </TypographyH2>
            </header>
            <SearchFilterCard />
            <Results />
        </main>
    );
}