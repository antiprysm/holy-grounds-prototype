import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  referrer: "no-referrer",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
