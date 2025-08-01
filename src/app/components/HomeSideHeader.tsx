import Logo from "@/components/Logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import HomeHeader from "./HomeHeader";

export default function HomeSideHeader() {
    return (
        <Sheet>
            <SheetTrigger className="w-full flex justify-between items-center p-3">
                <Logo withText={false} size={48} /> 
                <Menu size={48} className="hover:cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>
                <HomeHeader />
            </SheetContent>
        </Sheet>
    );
}