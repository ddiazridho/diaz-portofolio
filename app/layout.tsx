import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import FlyingMascot from "./components/FlyingMascot";
import WalkingMascot from "./components/WalkingMascot";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diaz Ridho — Full-Stack Developer & UI Designer",
  description:
    "Portfolio of Diaz Ridho — Full-Stack Developer and UI Designer building fast, intuitive, and impactful digital products.",
  keywords: ["full-stack developer", "UI designer", "React", "Next.js", "portfolio"],
  authors: [{ name: "Diaz Ridho" }],
  openGraph: {
    title: "Diaz Ridho — Full-Stack Developer & UI Designer",
    description: "Building fast, intuitive, and impactful digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FlyingMascot />
        <WalkingMascot
          src="/ATTACK TITAN PIXEL.png"
          width={180}
          duration={32}
          facingRight={true}
        />
      </body>
    </html>
  );
}
