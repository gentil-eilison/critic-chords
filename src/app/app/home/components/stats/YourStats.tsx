"use client";

import TypographyH1 from "@/components/typography/TypographyH1";
import {
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Disc3,
  Heart,
} from "lucide-react";
import StatCard from "./StatCard";
import { useUser } from "@auth0/nextjs-auth0";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUserStats } from "@/api/reviews";

export default function YourStats() {
  const { user } = useUser();

  const { data } = useQuery({
    queryKey: ["userStats", user?.email],
    queryFn: () => getUserStats(user?.email || " "),
  });

  return (
    data && (
      <section>
        <TypographyH1 extraClasses="font-normal flex gap-3">
          <ChartNoAxesColumnIncreasing
            size={48}
            color={"var(--color-green-500)"}
          />
          Your Stats
        </TypographyH1>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <StatCard
            text="Reviews Written"
            icon={<BookOpen color={"var(--color-green-500)"} />}
            value={data.reviews_written}
          />
          <StatCard
            text="Albums Rated"
            icon={<Disc3 color={"var(--color-green-500)"} />}
            value={data.albums_rated}
          />
          <StatCard
            text="Reivews Liked"
            icon={<Heart color={"var(--color-green-500)"} />}
            value={data.reviews_liked}
          />
        </div>
      </section>
    )
  );
}
