import React from "react";
import { C3Layout } from "../components/layouts/C3Layout";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ResearchCard } from "../components/ui/ResearchCard";
import { PartnershipLogo } from "../components/ui/PartnershipLogo";
import { CompanyInfoSection } from "../components/sections/CompanyInfoSection";

import riffImage from "@/public/products/riff.webp";
import ashleyImage from "@/public/products/ashley.png";
import sierraImage from "@/public/products/sierra.png";

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
          title="COMMERCIAL TARIFF CLASSIFICATION SYSTEM"
          description="AI-powered trade and tariff management platform for critical US suppliers and trade partners."
          status="OPERATIONAL"
          link="https://riff.csxlabs.org/"
          image={riffImage.src}
        />
        <ProjectCard
          title="ASHLEY INTELLIGENCE SYSTEM"
          description="AI-powered intelligence analysis and automatic collection framework for intelligence agencies."
          status="DEVELOPMENT"
          link="#"
          image={ashleyImage.src}
        />
        <div className="lg:col-span-2">
          <ProjectCard
            title="SIERRA"
            description="AI-powered naval intelligence platform to track and contextualize dark ships and vessels."
            status="DEVELOPMENT"
            link="#"
            image={sierraImage.src}
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
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
      </div> */}

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
        <PartnershipLogo
          name="Northern California Regional Intelligence Center"
          link="https://ncirc.gov"
        />
        <PartnershipLogo
          name="The Center for Independent Living"
          link="https://thecil.org"
        />
        <PartnershipLogo
          name="Microsoft Azure IL5"
          link="https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-dod-il5"
        />
        <PartnershipLogo
          name="Google Cloud IL5"
          link="https://cloud.google.com/blog/products/identity-security/introducing-google-cloud-support-for-impact-level-5-workloads"
        />
        <PartnershipLogo
          name="FreightOS"
          link="https://www.freightos.com/"
        />
        <PartnershipLogo
          name="ClearIt Customs"
          link="https://clearitusa.com/"
        />
      </div>

      <CompanyInfoSection />
    </C3Layout>
  );
}