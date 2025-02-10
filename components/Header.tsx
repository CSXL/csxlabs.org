import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

export const Header: React.FC<{
    links: {title: string, url: string}[]
}> = ({ links }) => (
    <div className="flex h-auto py-4 px-4">
        <div>
            <Image
                src={logo}
                alt="CSX Labs"
                className="h-6 w-auto"
            />
        </div>
        <div>

        </div>
    </div>
);