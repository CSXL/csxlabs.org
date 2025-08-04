import React from "react";
import { C3Layout } from "../components/layouts/C3Layout";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ResearchCard } from "../components/ui/ResearchCard";
import { PartnershipLogo } from "../components/ui/PartnershipLogo";
import { CompanyInfoSection } from "../components/sections/CompanyInfoSection";

type News = {
  text: string;
  link: string;
};

const leftNews: News[] = [];
const rightNews: News[] = [];
const bottomNews: News[] = [];
const topNews: News[] = [];

export default function Home() {
  return (
    <C3Layout leftNews={leftNews} rightNews={rightNews} bottomNews={bottomNews} topNews={topNews}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProjectCard
          title="CUSTOMS AUTOMATION SYSTEM"
          description="AI-powered trade and tariff management platform for government agencies"
          status="OPERATIONAL"
          link="https://github.com/csxlabs/customs-ai"
        />
        <ProjectCard
          title="INTELLIGENCE ANALYSIS FRAMEWORK"
          description="Natural language processing system for automated report generation"
          status="DEVELOPMENT"
          link="https://github.com/csxlabs/intel-framework"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <ResearchCard
          title="AUTONOMOUS DECISION SYSTEMS"
          publication="Nature Machine Intelligence, 2024"
          authors="Blumenfeld, A. et al."
          link="https://doi.org/10.1038/s42256-024-00xxx"
        />
        <ResearchCard
          title="MULTI-AGENT COORDINATION"
          publication="AAAI Conference, 2024"
          authors="Eltepu, S., Murthy, S."
          link="https://aaai.org/papers/2024/xxx"
        />
        <ResearchCard
          title="DEFENSE AI APPLICATIONS"
          publication="IEEE Security & Privacy, 2024"
          authors="CSX Labs Research Team"
          link="https://ieeexplore.ieee.org/document/xxx"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
        <PartnershipLogo
          name="NCIRC"
          link="https://ncirc.gov"
        />
        <PartnershipLogo
          name="UC Berkeley"
          link="https://berkeley.edu"
        />
        <PartnershipLogo
          name="Stanford"
          link="https://stanford.edu"
        />
        <PartnershipLogo
          name="MIT"
          link="https://mit.edu"
        />
        <PartnershipLogo
          name="Google"
          link="https://google.com"
        />
        <PartnershipLogo
          name="Microsoft"
          link="https://microsoft.com"
        />
      </div>

      <CompanyInfoSection />
    </C3Layout>
  );
}