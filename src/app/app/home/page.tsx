import { auth0 } from "@/lib/auth0";
import WelcomeBackCard from "./components/WelcomeBackCard";
import { redirect } from "next/navigation";
import TrendingAlbumsCard from "./components/trending-albums/TrendingAlbumsCard";
import YourStats from "./components/stats/YourStats";
import LatestReviews from "./components/LatestReivews";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main className="flex flex-col grow-1 p-7 gap-8">
      <WelcomeBackCard userFirstName={session.user.given_name || ""} />
      <YourStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <LatestReviews />
        <TrendingAlbumsCard />
      </div>
    </main>
  );
}
