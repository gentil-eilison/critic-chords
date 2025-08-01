import Logo from "@/components/Logo";
import PrimaryButton from "@/components/PrimaryButton";

export default function HomeHeader() {
    return (
        <header className="md:border-b-2 md:border-gray-800 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between px-5 py-1">
            <Logo withText />
            <nav className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a className="hover:text-green-500 transition-colors" href="">Home</a>
                <a className="hover:text-green-500 transition-colors" href="#about">About</a>
                <a className="hover:text-green-500 transition-colors" href="#contact">Contact</a>
            </nav>
            <div className="flex gap-5">
                <a href="/auth/login">
                    <PrimaryButton>Sign In/Up</PrimaryButton>
                </a>
            </div>
        </header>
    );
}