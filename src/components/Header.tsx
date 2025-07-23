// components/layout/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Button } from "./Button";

import { FiLogOut } from "react-icons/fi";

export default function Header() {

  const handleLogout = () => {
    // TODO: implement real logout logic
    console.log("Logout clicked");
  };

  return (
    <header className="w-full min-h-20 border-b bg-blue-300">
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
          <Link href="/services">Servizi</Link>
          <Link href="/contact">Contatti</Link>
        </nav>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            onClick={handleLogout}
            variant="logout"
            size="md"
          >
            <FiLogOut size={20} />
          </Button>
          {/* Hamburger for mobile */}
          <MobileMenu onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
}
