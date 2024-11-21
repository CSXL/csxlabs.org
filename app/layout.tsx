import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Header } from "@/components/Header";
import { GoogleAnalytics } from '@next/third-parties/google'
import LogRocketProvider from "@/lib/logrocket";

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
        <body className={clsx(schibested_grotesk.className, 'dark bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 text-neutral-50')}>
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
        <LogRocketProvider />
        <GoogleAnalytics gaId="G-XTRXBNZ8KY" />
    </html>
  );
}
