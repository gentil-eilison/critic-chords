import { auth0 } from "@/lib/auth0";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import HomeHeader from "./components/HomeHeader";
import HomeSideHeader from "./components/HomeSideHeader";
import HowItWorks from "./components/HowItWorks";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth0.getSession();

  if (session) {
    redirect("/app/home");
  }

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
    </main>
  );
}
