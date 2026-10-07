import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import FlyingMascot from "./components/FlyingMascot";
import WalkingMascot from "./components/WalkingMascot";
import { ThemeLanguageProvider } from "./context/ThemeLanguageContext";

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
  title: "Diaz R. Yuristianto",
  description:
    "Portfolio of Diaz R. Yuristianto",
  keywords: ["Software Engineer", "AI Engineer", "React", "Next.js", "portfolio"],
  authors: [{ name: "Diaz Ridho" }],
  openGraph: {
    title: "Diaz R. Yuristianto",
    description: "Portfolio of Diaz R. Yuristianto",
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
        <ThemeLanguageProvider>
          {children}
        </ThemeLanguageProvider>
        <FlyingMascot />
        <WalkingMascot
          src="/Red Larva.png"
          width={10}
          duration={32}
          facingRight={true}
        />
      </body>
    </html>
  );
}
