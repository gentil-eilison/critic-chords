import { Headphones } from "lucide-react";

interface LogoProps {
    withText: boolean;
    size?: number;
}

export default function Logo({ withText, size }: LogoProps) {
    return (
        <div className="flex items-center gap-2">
            <Headphones size={size ? size : 64} color={"var(--color-green-500)"} />
            { withText && (
                <span className="font-bold text-xl">
                    Critic <span className="text-green-500">Chord</span>
                </span>
            ) }
        </div>
    );
}