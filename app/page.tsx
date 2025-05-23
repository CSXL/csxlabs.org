"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../public/logo.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <PageRulers />
      <HeaderRuler />
      <div className="pt-20 pb-16 pl-12 pr-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ProjectCard
              title="CUSTOMS AUTOMATION SYSTEM"
              description="AI-powered trade and tariff management platform for government agencies"
              image="/projects/customs.jpg"
              status="OPERATIONAL"
              link="https://github.com/csxlabs/customs-ai"
            />
            <ProjectCard
              title="INTELLIGENCE ANALYSIS FRAMEWORK"
              description="Natural language processing system for automated report generation"
              image="/projects/intelligence.jpg"
              status="DEVELOPMENT"
              link="https://github.com/csxlabs/intel-framework"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <ResearchCard
              title="AUTONOMOUS DECISION SYSTEMS"
              publication="Nature Machine Intelligence, 2024"
              authors="Blumenfeld, A. et al."
              image="/research/autonomous.jpg"
              link="https://doi.org/10.1038/s42256-024-00xxx"
            />
            <ResearchCard
              title="MULTI-AGENT COORDINATION"
              publication="AAAI Conference, 2024"
              authors="Eltepu, S., Murthy, S."
              image="/research/multiagent.jpg"
              link="https://aaai.org/papers/2024/xxx"
            />
            <ResearchCard
              title="DEFENSE AI APPLICATIONS"
              publication="IEEE Security & Privacy, 2024"
              authors="CSX Labs Research Team"
              image="/research/defense.jpg"
              link="https://ieeexplore.ieee.org/document/xxx"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
            <PartnershipLogo
              name="NCIRC"
              logo="/logos/ncirc.svg"
              link="https://ncirc.gov"
            />
            <PartnershipLogo
              name="UC Berkeley"
              logo="/logos/berkeley.svg"
              link="https://berkeley.edu"
            />
            <PartnershipLogo
              name="Stanford"
              logo="/logos/stanford.svg"
              link="https://stanford.edu"
            />
            <PartnershipLogo
              name="MIT"
              logo="/logos/mit.svg"
              link="https://mit.edu"
            />
            <PartnershipLogo
              name="Google"
              logo="/logos/google.svg"
              link="https://google.com"
            />
            <PartnershipLogo
              name="Microsoft"
              logo="/logos/microsoft.svg"
              link="https://microsoft.com"
            />
          </div>

          <div className="mb-12">
            <div className="border border-neutral-400 bg-neutral-900/30 p-4">
              <div className="text-xs text-neutral-200 mb-6 pb-2 border-b border-neutral-500 font-mono">
                COMPANY INFORMATION
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <CompanyInfoCard
                  title="SALES"
                  content="sales@csxlabs.org"
                  mono
                />
                <CompanyInfoCard
                  title="PARTNERSHIPS"
                  content="partnerships@csxlabs.org"
                  mono
                />
                <CompanyInfoCard
                  title="GOVERNMENT"
                  content="governments@csxlabs.org"
                  mono
                />
                <CompanyInfoCard
                  title="OPERATIONS"
                  content="+1 925 307 9351"
                  mono
                />
                <CompanyInfoCard
                  title="ADDRESS"
                  content={
                    <>
                      2108 N Street STE 4995<br />
                      Sacramento, CA 95816
                    </>
                  }
                />
                <CompanyInfoCard
                  title="UEI"
                  content="PSRMX4M4BDQ8"
                  mono
                />
                <CompanyInfoCard
                  title="CAGE CODE"
                  content="9QNN6"
                  mono
                />
                <CompanyInfoCard
                  title="HOURS"
                  content="08:30-17:00 PT"
                  mono
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Ruler */}
      <div className="bg-neutral-950 border-t border-neutral-400 h-8 mx-8 mb-8">
        <div className="flex items-center justify-center h-full">
          <div className="text-xs font-mono text-neutral-400">
            © 2025 CSX LABS - ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}

const PageRulers: React.FC = () => {
  const topNews = [
    { text: "NEW CUSTOMS AI DEPLOYMENT REDUCES PROCESSING TIME BY 67%", link: "https://github.com/csxlabs/customs-ai" },
    { text: "JOINT RESEARCH WITH UC BERKELEY ON AUTONOMOUS SYSTEMS PUBLISHED", link: "https://berkeley.edu" },
    { text: "INTELLIGENCE FRAMEWORK UPDATE 2.1 RELEASED", link: "https://github.com/csxlabs/intel-framework" },
    { text: "HACKATHON PROJECT WINS DEFENSE INNOVATION AWARD", link: "#projects" },
    { text: "AI RESEARCH BREAKTHROUGH IN MULTI-AGENT SYSTEMS", link: "#research" },
    { text: "PARTNERSHIP WITH MIT LABORATORY ANNOUNCED", link: "https://mit.edu" },
  ];

  const leftNews = [
    { text: "FUNDING $2.5M", link: "#funding" },
    { text: "15 NEW HIRES", link: "#careers" },
    { text: "LAB OPENED", link: "#facilities" },
    { text: "PATENT FILED", link: "#ip" },
    { text: "TEAM EXPANSION", link: "#growth" },
    { text: "REVENUE UP 340%", link: "#financial" },
  ];

  const rightNews = [
    { text: "AI SUMMIT 2025", link: "#events" },
    { text: "NATURE AI ACCEPTED", link: "#research" },
    { text: "MIT PARTNERSHIP", link: "https://mit.edu" },
    { text: "DOD DEPLOYMENT", link: "#projects" },
    { text: "CONFERENCE TALK", link: "#speaking" },
    { text: "PAPER PUBLISHED", link: "#publications" },
  ];

  const bottomNews = [
    { text: "Q4 2024 REVENUE UP 340%", link: "#financial" },
    { text: "NEW CUSTOMER: MAJOR SHIPPING COMPANY", link: "#customers" },
    { text: "OPEN SOURCE PROJECT 1K STARS", link: "https://github.com/csxlabs" },
    { text: "HACKATHON WINNERS ANNOUNCED", link: "#hackathon" },
    { text: "GOVERNMENT CONTRACT AWARDED", link: "#contracts" },
    { text: "RESEARCH GRANT RECEIVED", link: "#grants" },
  ];

  return (
    <>
      {/* Top Ruler */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-400 h-8 group">
        <div className="overflow-hidden h-full">
          <div className="flex items-center h-full whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...topNews, ...topNews].map((item, index) => (
              <Link key={index} href={item.link} className="text-xs font-mono text-neutral-50 hover:text-white mx-4">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Left Ruler */}
      <div className="fixed left-0 top-8 bottom-8 w-8 bg-neutral-950 border-r border-neutral-400 z-30 group">
        <div className="overflow-hidden h-full flex items-center justify-center">
          <div className="flex flex-col whitespace-nowrap animate-[marquee-up_20s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...leftNews, ...leftNews].map((item, index) => (
              <Link key={index} href={item.link} className="[writing-mode:vertical-lr] text-xs font-mono text-neutral-50 hover:text-white my-4">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right Ruler */}
      <div className="fixed right-0 top-8 bottom-8 w-8 bg-neutral-950 border-l border-neutral-400 z-30 group">
        <div className="overflow-hidden h-full flex items-center justify-center">
          <div className="flex flex-col whitespace-nowrap animate-[marquee-down_20s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...rightNews, ...rightNews].map((item, index) => (
              <Link key={index} href={item.link} className="[writing-mode:vertical-rl] text-xs font-mono text-neutral-50 hover:text-white my-4">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Ruler */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950 border-t border-neutral-400 h-8 group">
        <div className="overflow-hidden h-full">
          <div className="flex items-center h-full whitespace-nowrap animate-[marquee-reverse_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...bottomNews, ...bottomNews].map((item, index) => (
              <Link key={index} href={item.link} className="text-xs font-mono text-neutral-50 hover:text-white mx-4">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderRuler: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-40 bg-neutral-950 border-b border-neutral-400 h-8" style={{top: '32px', left: '32px', right: '32px'}}>
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center">
          <Image src={logo} alt="CSX Labs" className="h-4 w-auto" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-xs font-mono">
          <Link href="/projects" className="text-neutral-300 hover:text-white transition-colors">
            PROJECTS
          </Link>
          <Link href="/research" className="text-neutral-300 hover:text-white transition-colors">
            RESEARCH
          </Link>
          <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} size={16} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-8 right-0 bg-neutral-950 border-l border-b border-r border-neutral-400 w-48 md:hidden">
          <nav className="flex flex-col p-2">
            <Link 
              href="/projects" 
              className="text-xs font-mono text-neutral-300 hover:text-white transition-colors py-2 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
            <Link 
              href="/research" 
              className="text-xs font-mono text-neutral-300 hover:text-white transition-colors py-2 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              RESEARCH
            </Link>
            <Link 
              href="/contact" 
              className="text-xs font-mono text-neutral-300 hover:text-white transition-colors py-2 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  status: string;
  link: string;
}> = ({ title, description, image, status, link }) => (
  <Link href={link} target="_blank" className="group">
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

const ResearchCard: React.FC<{
  title: string;
  publication: string;
  authors: string;
  image: string;
  link: string;
}> = ({ title, publication, authors, image, link }) => (
  <Link href={link} target="_blank" className="group">
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

const PartnershipLogo: React.FC<{
  name: string;
  logo: string;
  link: string;
}> = ({ name, logo, link }) => (
  <Link href={link} target="_blank" className="group">
    <div className="border border-neutral-400 bg-neutral-900/30 p-4 text-center hover:border-neutral-300 transition-colors h-20 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-xs text-neutral-300 group-hover:text-white transition-colors">
          {name}
        </div>
      </div>
    </div>
  </Link>
);

const CompanyInfoCard: React.FC<{
  title: string;
  content: React.ReactNode;
  mono?: boolean;
}> = ({ title, content, mono = false }) => (
  <div className="border border-neutral-500 bg-neutral-900/50 p-3">
    <div className="text-xs text-neutral-200 mb-2 font-mono">
      {title}
    </div>
    <div className={`text-xs text-neutral-50 ${mono ? 'font-mono' : ''}`}>
      {content}
    </div>
  </div>
);