// components/layout/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // TODO: implement real logout logic
    console.log("Logout clicked");
  };

  return (
    <header className="w-full min-h-20 border-b bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-center px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/globe-whispers-logo.jpg" 
            alt='Globe Whispers logo' 
            width={50} 
            height={60}
            className="rounded-md" 
            />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-xl">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contatti</Link>
        </nav>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            className="hidden md:inline px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onLogout={handleLogout} />}
    </header>
  );
}
