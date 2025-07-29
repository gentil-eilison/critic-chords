import Logo from "@/components/Logo";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";

export default function HomeHeader() {
    return (
        <header className="border-b-2 border-gray-800 flex items-center justify-between px-5 py-1">
            <Logo />
            <nav className="flex justify-center items-center gap-4">
                <a className="hover:text-green-500" href="">Home</a>
                <a className="hover:text-green-500" href="#about">About</a>
                <a className="hover:text-green-500" href="#contact">Contact</a>
            </nav>
            <Link href="/sign-in">
                <PrimaryButton>Sign In/Up</PrimaryButton>
            </Link>
        </header>
    );
}