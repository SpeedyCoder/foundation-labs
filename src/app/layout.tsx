import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation Labs",
  description: "Online developer tooling",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-KFF02K4RH6"/>
    </html>
  );
}
