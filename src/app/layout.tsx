import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  referrer: "no-referrer",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
