import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import { ThemeProvider } from 'next-themes'

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
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${lora.variable} antialiased`}
      >
      <ThemeProvider 
        attribute='class' 
        defaultTheme="system" 
        enableSystem={true}
      >
        <Header />
        <SubNavbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
