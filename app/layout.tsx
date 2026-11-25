/** @format */

import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = "Rizka Luthfiani — Product Owner";
const description =
  "Rizka Luthfiani Fakhriah is a Product Owner in Jakarta. Backlog, user stories, sprint delivery and data-backed product decisions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rizkaluthfiani.com"),
  title,
  description,
  keywords: [
    "Rizka Luthfiani",
    "Product Owner",
    "Product Manager",
    "Project Manager",
    "Jakarta",
  ],
  authors: [{ name: "Rizka Luthfiani Fakhriah" }],
  openGraph: {
    type: "website",
    url: "https://rizkaluthfiani.com",
    title,
    description,
    siteName: "rizkaluthfiani.com",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
