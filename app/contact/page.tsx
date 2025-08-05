import React from "react";
import { C3Layout } from "../../components/layouts/C3Layout";
import { CompanyInfoSection } from "../../components/sections/CompanyInfoSection";
import { ContactFormCard } from "../../components/ui/ContactFormCard";

type News = {
  text: string;
  link: string;
};

const leftNews: News[] = [];
const rightNews: News[] = [];
const bottomNews: News[] = [];
const topNews: News[] = [];

const contactInfoItems = [
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
    title: "RESEARCH",
    content: "research@csxlabs.org",
    mono: true
  },
  {
    title: "CAREERS",
    content: "careers@csxlabs.org",
    mono: true
  },
  {
    title: "GENERAL",
    content: "contact@csxlabs.org",
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
    title: "HOURS",
    content: "08:30-17:00 PT",
    mono: true
  }
];

export default function Contact() {
  return (
    <C3Layout leftNews={leftNews} rightNews={rightNews} bottomNews={bottomNews} topNews={topNews}>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {/* Contact Form */}
        {/* <div>
          <ContactFormCard />
        </div> */}

        {/* Contact Information */}
        <div>
          <CompanyInfoSection 
            title="CONTACT INFORMATION" 
            items={contactInfoItems}
          />
        </div>
      </div>
    </C3Layout>
  );
} 