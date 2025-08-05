import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
    text: string;
    icon: ReactNode;
    href: string;
}

export default function NavItem({ text, icon, href }: NavItemProps) {
    return (
        <Link className="flex items-center gap-2 text-gray-400" href={ href }>
            { icon }
            <span className="sm:none md:inline hover:text-green-500 transition-colors">{ text }</span>
        </Link>
    );
}