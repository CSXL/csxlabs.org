import React from "react";
import Link from "next/link";

interface ResearchCardProps {
  title: string;
  publication: string;
  authors: string;
  image?: string;
  link: string;
  className?: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ 
  title, 
  publication, 
  authors, 
  image, 
  link, 
  className = "" 
}) => (
  <Link href={link} target="_blank" className={`group ${className}`}>
    <div className="border border-neutral-400 bg-neutral-900/30 overflow-hidden hover:border-neutral-300 transition-colors">
      <div className="h-24 bg-neutral-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-700"></div>
      </div>
      <div className="p-3">
        <h4 className="text-xs font-medium text-neutral-50 mb-1 group-hover:text-white">{title}</h4>
        <div className="text-xs text-neutral-200 mb-1">{publication}</div>
        <div className="text-xs text-neutral-300">{authors}</div>
      </div>
    </div>
  </Link>
);