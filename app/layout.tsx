import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  BBH_Sans_Bogle,
  Bebas_Neue,
} from "next/font/google";
import "./globals.css";
import "animate.css";
import Providers from "@/providers/providers";
import { ThemeModeButtons } from "@/ui/buttons/theme-button";
import Nav from "@/ui/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-title-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Playground",
  description: "Explore 3D with Three.js & R3F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.className} antialiased`}
      >
        <Nav />
        <Providers>
          {children} <ThemeModeButtons />
        </Providers>
      </body>
    </html>
  );
}
