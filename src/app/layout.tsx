import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

const interSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Critic Chords",
  description: "A Modern Music Rating Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body
          className={`${interSans.className} antialiased dark flex flex-col items-stretch min-h-screen`}
        >
          {children}
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
