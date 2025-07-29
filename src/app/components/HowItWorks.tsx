import TypographyH1 from "@/components/typography/TypographyH1";
import TypographyH2 from "@/components/typography/TypographyH2";
import Step from "./Step";

const steps = [
    {
        number: 1,
        title: "Create Your Profile",
        description: "Sign up and tell us about your musical preferences and favorite genres"
    },
    {
        number: 2,
        title: "Find & Review Albums",
        description: "Search for albums, write detailed reviews, and rate them on our scale"
    },
    {
        number: 3,
        title: "Connect & Discover",
        description: "Engage with other reviewers and discover new music through the community"
    }
]

export default function HowItWorks() {
    return (
        <section className="p-8 flex flex-col items-center gap-4">
            <TypographyH1>
                How It&nbsp;<span className="text-green-500">Works</span>
            </TypographyH1>
            <TypographyH2 extraClasses="text-gray-300">
                Get started in three simple steps
            </TypographyH2>
            <div className="flex flex-col md:flex-row justify-between gap-5">
                { steps.map((step, index) => (
                    <Step {...step} key={index} />
                )) }
            </div>
        </section>
    );
}