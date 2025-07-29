import { ButtonProps } from "@/types/Button";
import { Button } from "./ui/button";

export default function PrimaryButton({ children }: ButtonProps) {
    return (
        <Button 
            className="text-black bg-green-500 hover:bg-green-600 hover:cursor-pointer"
        >
            { children }
        </Button>
    );
}