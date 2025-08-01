import FeaturedReviews from "./components/FeaturedReviews";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import HomeHeader from "./components/HomeHeader";
import HomeSideHeader from "./components/HomeSideHeader";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main className="flex flex-col grow-1">
      <div className="hidden md:block">
        <HomeHeader />
      </div>
      <div className="md:hidden block w-full">
        <HomeSideHeader />
      </div>
      <HeroSection />
      <Features />
      <HowItWorks />
      <FeaturedReviews />
    </main>
  );
}