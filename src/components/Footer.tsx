"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaMedium, FaQuora } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-blue-300 mt-10 border-t border-gray-300 py-8 text-foreground">
			<div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
				{/* Logo & Branding */}
				<div className="text-lg font-semibold tracking-wide">
					<Link href="/">
                        <Image 
                            src="/globe-whispers-logo.jpg" 
                            alt="logo di Globe Whispers" 
                            width={60} 
                            height={50} 
                            className="rounded-md"
                        />
                    </Link>
				</div>

				{/* Navigation Links */}
				<nav className="flex flex-wrap items-center gap-4 text-sm">
					<Link href="/" className="hover:underline">
						Home
					</Link>
					<Link href="/blog" className="hover:underline">
						Blog
					</Link>
					<Link href="/services" className="hover:underline">
						Services
					</Link>
					<Link href="/contacts" className="hover:underline">
						Contacts
					</Link>
				</nav>

				{/* Social Icons */}
				<div className="flex items-center gap-4 text-xl">
					<a
						href="https://www.linkedin.com/in/tuo-profilo"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://www.quora.com/profile/tuo-profilo"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary"
					>
						<FaQuora />
					</a>
					<a
						href="https://medium.com/@tuo-profilo"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary"
					>
						<FaMedium />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
