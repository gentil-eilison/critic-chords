import Logo from "@/components/Logo";
import { 
    Sheet,
    SheetContent, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger 
} from "@/components/ui/sheet";
import { auth0 } from "@/lib/auth0";
import { Menu } from "lucide-react";
import { redirect } from "next/navigation";
import Header from "./components/Header";

export default async function SideHeader() {
    const session = await auth0.getSession();

    if (!session) {
        redirect("/")
    }

    return (
        <Sheet>
            <SheetTrigger className="w-full flex justify-between items-center p-3">
                <Logo withText={false} size={48} /> 
                <Menu size={48} className="hover:cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="md:hidden">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>
                <Header />
            </SheetContent>
        </Sheet>
    );
}