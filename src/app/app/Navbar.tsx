import { Compass, Home } from "lucide-react";
import NavItem from "./NavItem";

export default function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row gap-3">
            <NavItem 
                href="/app/home" 
                text="Home" 
                icon={
                    <Home size={16} color={"var(--color-green-500)"} />
                } 
            />
            <NavItem 
                href="/app/discover" 
                text="Discover" 
                icon={
                    <Compass size={16} color={"var(--color-green-500)"} />
                } 
            />
        </nav>
    );
}