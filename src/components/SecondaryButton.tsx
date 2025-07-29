import { ButtonProps } from "@/types/Button";
import { Button } from "./ui/button";

export default function SecondaryButton({ children }: ButtonProps) {
    return (
        <Button className="border-1 border-green-500 text-green-500 bg-black hover:bg-green-500 hover:text-black hover:cursor-pointer">
            { children }
        </Button>
    );
}