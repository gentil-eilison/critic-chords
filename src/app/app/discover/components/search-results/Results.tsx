import TypographyH1 from "@/components/typography/TypographyH1";
import ResultCard from "./ResultCard";
import SecondaryButton from "@/components/SecondaryButton";

export default function Results() {
    return (
        <section>
            <TypographyH1>
                Results &nbsp;
                <span className="text-gray-400">
                    (8 albums found)
                </span>
            </TypographyH1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <ResultCard />
                <ResultCard />
            </div>
            <div className="mt-10 flex justify-center items-center">
                <SecondaryButton>Load More Albums</SecondaryButton>
            </div>
        </section>
    );
}