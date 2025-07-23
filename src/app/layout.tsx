import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";

import Header from "@/components/Header";
import SubNavbar from "@/components/Subnavbar";
import Footer from "@/components/Footer";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
  // Show fallback font immediately and swap in custom font once it's loaded
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Globe Whispers – fiumi di parole",
  description: "Un blog di viaggio tra emozioni, storie e sviluppo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    try {
    return (
      <html lang="it" suppressHydrationWarning>
        <body className={`${poppins.variable} ${lora.variable} antialiased`}>
          <Header />
          <SubNavbar />
          <main className="bg-stone-200 min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    );
  } catch (e) {
    console.error("Errore nel RootLayout:", e);
    return <div>Errore critico, controlla la console.</div>;
  }
}
