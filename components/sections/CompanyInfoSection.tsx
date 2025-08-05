import React from "react";
import { CompanyInfoCard } from "../ui/CompanyInfoCard";

interface CompanyInfoItem {
  title: string;
  content: React.ReactNode;
  mono?: boolean;
}

interface CompanyInfoSectionProps {
  title?: string;
  items?: CompanyInfoItem[];
  className?: string;
}

const defaultCompanyInfo: CompanyInfoItem[] = [
  {
    title: "SALES",
    content: "sales@csxlabs.org",
    mono: true
  },
  {
    title: "PARTNERSHIPS",
    content: "partnerships@csxlabs.org",
    mono: true
  },
  {
    title: "GOVERNMENT",
    content: "governments@csxlabs.org",
    mono: true
  },
  {
    title: "OPERATIONS",
    content: "+1 925 307 9351",
    mono: true
  },
  {
    title: "ADDRESS",
    content: (
      <>
        2108 N Street STE 4995<br />
        Sacramento, CA 95816
      </>
    )
  },
  {
    title: "UEI",
    content: "PSRMX4M4BDQ8",
    mono: true
  },
  {
    title: "CAGE CODE",
    content: "9QNN6",
    mono: true
  },
  {
    title: "HOURS",
    content: "08:30-17:00 PT",
    mono: true
  }
];

export const CompanyInfoSection: React.FC<CompanyInfoSectionProps> = ({
  title = "COMPANY INFORMATION",
  items = defaultCompanyInfo,
  className = ""
}) => (
  <div className={`h-full ${className}`}>
    <div className="border border-neutral-400 bg-neutral-900/30 p-4 h-full flex flex-col">
      <div className="text-xs text-neutral-200 mb-6 pb-2 border-b border-neutral-500 font-mono">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {items.map((item, index) => (
          <CompanyInfoCard
            key={index}
            title={item.title}
            content={item.content}
            mono={item.mono}
            className="h-full"
          />
        ))}
      </div>
    </div>
  </div>
);