import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calgaryrealtorfinder.ca"),
  title: "Calgary Realtor Finder | Find a Licensed REALTOR® in Calgary, Alberta",
  description:
    "Connect with trusted, licensed Calgary REALTORS® who know your neighbourhood. Free matching service. No obligation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
