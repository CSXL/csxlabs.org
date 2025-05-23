import React from "react";
import Link from "next/link";

interface PartnershipLogoProps {
  name: string;
  logo?: string;
  link: string;
  className?: string;
}

export const PartnershipLogo: React.FC<PartnershipLogoProps> = ({ 
  name, 
  logo, 
  link, 
  className = "" 
}) => (
  <Link href={link} target="_blank" className={`group ${className}`}>
    <div className="border border-neutral-400 bg-neutral-900/30 p-4 text-center hover:border-neutral-300 transition-colors h-20 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-xs text-neutral-300 group-hover:text-white transition-colors">
          {name}
        </div>
      </div>
    </div>
  </Link>
);