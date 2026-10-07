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
  title: "Diaz Ridho Yuristianto",
  description:
    "Portfolio of Diaz Ridho Yuristianto, a Computer Engineering student at Universitas Diponegoro.",
  verification: {
    google: 'H82awMrSBd83WSwFMD1POxzdGAPFrSgnqOHFXzL9QRY',
  },
  keywords: ["Software Engineer", "AI Engineer", "React", "Next.js", "portfolio", "Computer Engineering", "Universitas Diponegoro"],
  authors: [{ name: "Diaz Ridho" }],
  openGraph: {
    title: "Diaz Ridho Yuristianto",
    description: "Portfolio of Diaz Ridho Yuristianto",
    type: "website",
  },
};

const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-200">
        <ThemeLanguageProvider>
          {children}
          <FlyingMascot />
          <WalkingMascot
            src="/Red Larva.png"
            width={10}
            duration={32}
            facingRight={true}
          />
        </ThemeLanguageProvider>
      </body>
    </html>
  );
}
