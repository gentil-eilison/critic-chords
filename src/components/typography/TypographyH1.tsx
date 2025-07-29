import { TypographyProps } from "@/types/Typography";

export default function TypographyH1({ children, extraClasses }: TypographyProps) {
    return (
        <h1 className={`text-4xl font-bold ${ extraClasses }`}>
            { children }
        </h1>
    );
}