import { Headphones } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Headphones size={64} color={"var(--color-green-500)"} />
            <span className="font-bold text-xl">
                Critic <span className="text-green-500">Chord</span>
            </span>
        </div>
    );
}