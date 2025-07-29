import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <main className="flex flex-col grow-1 border-2 border-yellow-500">
      <HomeHeader />
      <HeroSection />
      <Features />
    </main>
  );
}