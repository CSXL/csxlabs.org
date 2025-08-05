import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import LogRocketProvider from "@/lib/logrocket";

const schibested_grotesk = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSX Labs",
  description: "Advanced research institution developing artificial intelligence systems for commercial and defense applications."
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
        <body className={clsx(schibested_grotesk.className, 'dark bg-neutral-950 text-neutral-50')}>
          {children}
        </body>
        <LogRocketProvider />
        <GoogleAnalytics gaId="G-XTRXBNZ8KY" />
    </html>
  );
}
