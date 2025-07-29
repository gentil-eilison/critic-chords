import { TypographyProps } from "@/types/Typography";

export default function TypographyH2(
    { children, extraClasses }: TypographyProps
) {
    return <h2 className={`text-xl ${ extraClasses }`}>
        { children }
    </h2>
}