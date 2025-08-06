import Logo from "@/components/Logo";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth0 } from "@/lib/auth0";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Bell, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import Navbar from "./Navbar";
import Link from "next/link";

export default async function Header() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login/");
  }

  return (
    <header className="flex flex-col gap-4 md:flex-row items-center justify-between md:border-b-2 md:border-gray-800 px-4 py-2">
      <Logo withText size={48} />
      <Navbar />
      <div className="flex items-center gap-7">
        <Button className="hidden md:inline-flex hover:cursor-pointer bg-inherit border-green-500 border-1">
          <Bell color={"var(--color-green-500)"} />
        </Button>
        <div className="flex flex-row items-center gap-4">
          <Link href="/me">
            <Avatar>
              <AvatarImage src={session.user.picture} />
              <AvatarFallback>
                {session.user.given_name}
                {session.user.family_name}
              </AvatarFallback>
            </Avatar>
          </Link>
          <a href="/auth/logout" className="flex">
            <LogOut color={"var(--color-red-400)"} />
          </a>
        </div>
      </div>
    </header>
  );
}
