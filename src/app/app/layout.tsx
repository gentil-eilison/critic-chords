import { ReactNode } from "react";
import Header from "./Header";
import SideHeader from "./SideHeader";

export default function DashboardLayout(
    { children }: { children: ReactNode }
) {
    return (
        <>
            <div className="hidden md:block">
                <Header />
            </div>
            <div className="md:hidden block w-full">
                <SideHeader />
            </div>
            { children }
        </>
    );
}