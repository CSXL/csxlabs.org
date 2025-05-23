"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "../../public/logo.svg";

interface HeaderRulerProps {
  logoSrc?: string;
  logoAlt?: string;
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
}

const defaultNavigation = [
  { label: "PROJECTS", href: "/projects" },
  { label: "RESEARCH", href: "/research" },
  { label: "CONTACT", href: "/contact" },
];

export const HeaderRuler: React.FC<HeaderRulerProps> = ({
  logoSrc = logo,
  logoAlt = "CSX Labs",
  navigationItems = defaultNavigation
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-40 bg-neutral-950 border-b border-neutral-400 h-8" style={{top: '32px', left: '32px', right: '32px'}}>
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center">
          <Image src={logoSrc} alt={logoAlt} className="h-4 w-auto" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-xs font-mono">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} size={16} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-8 right-0 bg-neutral-950 border-l border-b border-r border-neutral-400 w-48 md:hidden">
          <nav className="flex flex-col p-2">
            {navigationItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-xs font-mono text-neutral-300 hover:text-white transition-colors py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};