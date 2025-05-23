import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  status: string;
  link: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  status, 
  link, 
  className = "" 
}) => (
  <Link href={link} target="_blank" className={`group ${className}`}>
    <div className="border border-neutral-400 bg-neutral-900/30 overflow-hidden hover:border-neutral-300 transition-colors">
      <div className="h-32 bg-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700"></div>
        <div className="absolute top-2 right-2 text-xs text-neutral-200 bg-neutral-900/80 px-2 py-1 font-mono">
          {status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-neutral-50 mb-2 group-hover:text-white">{title}</h3>
        <p className="text-xs text-neutral-200 leading-relaxed">{description}</p>
      </div>
    </div>
  </Link>
);