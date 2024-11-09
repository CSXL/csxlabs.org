import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Header } from "@/components/Header";

const schibested_grotesk = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSX Labs",
  description: "We bring research to market."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={clsx(schibested_grotesk.className, 'dark bg-neutral-800 text-neutral-50')}>
        <Header 
          links={[
            {
              title: "PROJECTS",
              url: "/projects"
            }
          ]}
        />
        {children}
      </body>
    </html>
  );
}
