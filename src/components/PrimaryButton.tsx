import { ButtonProps } from "@/types/Button";
import { Button } from "./ui/button";

export default function PrimaryButton({ children, extraClasses, ...props }: ButtonProps) {
    return (
        <Button
            {...props}
            className={`text-black bg-green-500 hover:bg-green-600 hover:cursor-pointer transition-colors ${ extraClasses }`}
        >
            { children }
        </Button>
    );
}