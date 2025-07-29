import { TypographyProps } from "@/types/Typography";

export default function TypographyH1({ children, extraClasses }: TypographyProps) {
    return (
        <h1 className={`flex items-center text-2xl ${ extraClasses }`}>
            { children }
        </h1>
    );
}