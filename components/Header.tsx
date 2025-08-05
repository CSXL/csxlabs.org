import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

export const Header: React.FC<{
    links: {title: string, url: string}[]
}> = ({ links }) => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-8">
            <Link href="/">
                <Image
                    src={logo}
                    alt="CSX Labs"
                    className="h-5 w-auto"
                />
            </Link>
            <nav className="flex gap-8">
                {links.map((link, index) => (
                    <Link 
                        key={index}
                        href={link.url} 
                        className="text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </div>
    </div>
);