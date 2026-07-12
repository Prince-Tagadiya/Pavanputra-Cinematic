"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  "About",
  "Manufacturing",
  "Research",
  "Products",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/50 backdrop-blur-md py-2 border-b border-white/5"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-heading font-bold tracking-tight text-white cursor-pointer hover:opacity-80 transition-opacity">
          Pavanputra<span className="text-brand-medical">.</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-medical transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
