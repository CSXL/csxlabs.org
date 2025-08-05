"use client";

import React from "react";
import { StreamingRuler } from "../ui/StreamingRuler";
import { HeaderRuler } from "../ui/HeaderRuler";

interface C3LayoutProps {
  children: React.ReactNode;
  topNews?: Array<{ text: string; link: string }>;
  leftNews?: Array<{ text: string; link: string }>;
  rightNews?: Array<{ text: string; link: string }>;
  bottomNews?: Array<{ text: string; link: string }>;
  withFooter?: boolean;
  footerText?: string;
}

const defaultTopNews = [
  { text: "NEW CUSTOMS AI DEPLOYMENT REDUCES PROCESSING TIME BY 67%", link: "https://github.com/csxlabs/customs-ai" },
  { text: "JOINT RESEARCH WITH UC BERKELEY ON AUTONOMOUS SYSTEMS PUBLISHED", link: "https://berkeley.edu" },
  { text: "INTELLIGENCE FRAMEWORK UPDATE 2.1 RELEASED", link: "https://github.com/csxlabs/intel-framework" },
  { text: "HACKATHON PROJECT WINS DEFENSE INNOVATION AWARD", link: "#projects" },
  { text: "AI RESEARCH BREAKTHROUGH IN MULTI-AGENT SYSTEMS", link: "#research" },
  { text: "PARTNERSHIP WITH MIT LABORATORY ANNOUNCED", link: "https://mit.edu" },
];

const defaultLeftNews = [
  { text: "FUNDING $2.5M", link: "#funding" },
  { text: "15 NEW HIRES", link: "#careers" },
  { text: "LAB OPENED", link: "#facilities" },
  { text: "PATENT FILED", link: "#ip" },
  { text: "TEAM EXPANSION", link: "#growth" },
  { text: "REVENUE UP 340%", link: "#financial" },
];

const defaultRightNews = [
  { text: "AI SUMMIT 2025", link: "#events" },
  { text: "NATURE AI ACCEPTED", link: "#research" },
  { text: "MIT PARTNERSHIP", link: "https://mit.edu" },
  { text: "DOD DEPLOYMENT", link: "#projects" },
  { text: "CONFERENCE TALK", link: "#speaking" },
  { text: "PAPER PUBLISHED", link: "#publications" },
];

const defaultBottomNews = [
  { text: "Q4 2024 REVENUE UP 340%", link: "#financial" },
  { text: "NEW CUSTOMER: MAJOR SHIPPING COMPANY", link: "#customers" },
  { text: "OPEN SOURCE PROJECT 1K STARS", link: "https://github.com/csxlabs" },
  { text: "HACKATHON WINNERS ANNOUNCED", link: "#hackathon" },
  { text: "GOVERNMENT CONTRACT AWARDED", link: "#contracts" },
  { text: "RESEARCH GRANT RECEIVED", link: "#grants" },
];

export const C3Layout: React.FC<C3LayoutProps> = ({
  children,
  topNews = defaultTopNews,
  leftNews = defaultLeftNews,
  rightNews = defaultRightNews,
  bottomNews = defaultBottomNews,
  withFooter = true,
  footerText = "© 2025 CSX LABS - ALL RIGHTS RESERVED"
}) => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col">
      {/* Streaming Rulers */}
      <StreamingRuler 
        position="top" 
        news={topNews} 
        animationDuration="30s"
        direction="left"
      />
      <StreamingRuler 
        position="left" 
        news={leftNews} 
        animationDuration="20s"
        direction="up"
      />
      <StreamingRuler 
        position="right" 
        news={rightNews} 
        animationDuration="20s"
        direction="down"
      />
      <StreamingRuler 
        position="bottom" 
        news={bottomNews} 
        animationDuration="30s"
        direction="right"
      />
      
      {/* Header Navigation */}
      <HeaderRuler />
      
      {/* Main Content */}
      <div className="pt-20 pb-16 pl-12 pr-12 flex-1">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
      
      {/* Footer */}
      {withFooter && (
        <div className="bg-neutral-950 border-t border-neutral-400 h-8 mx-8 mb-8">
          <div className="flex items-center justify-center h-full">
            <div className="text-xs font-mono text-neutral-400">
              {footerText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};