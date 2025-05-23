import React from "react";

interface CompanyInfoCardProps {
  title: string;
  content: React.ReactNode;
  mono?: boolean;
  className?: string;
}

export const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({ 
  title, 
  content, 
  mono = false, 
  className = "" 
}) => (
  <div className={`border border-neutral-500 bg-neutral-900/50 p-3 ${className}`}>
    <div className="text-xs text-neutral-200 mb-2 font-mono">
      {title}
    </div>
    <div className={`text-xs text-neutral-50 ${mono ? 'font-mono' : ''}`}>
      {content}
    </div>
  </div>
);