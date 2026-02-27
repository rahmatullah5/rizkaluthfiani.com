/** @format */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rizka Luthfiani — PM/PO & Aspiring Data Engineer",
  description:
    "Personal portfolio of Rizka Luthfiani Fakhriah — Project Manager, Product Owner, and aspiring Data Engineer with proven experience in product delivery, data analytics, and cross-functional team leadership.",
  keywords: [
    "Rizka Luthfiani",
    "Project Manager",
    "Product Owner",
    "Data Engineer",
    "Data Analyst",
    "Portfolio",
    "rizkaluthfiani.com",
  ],
  authors: [{ name: "Rizka Luthfiani Fakhriah" }],
  openGraph: {
    type: "website",
    url: "https://rizkaluthfiani.com",
    title: "Rizka Luthfiani — PM/PO & Aspiring Data Engineer",
    description:
      "Personal portfolio of Rizka Luthfiani Fakhriah — Project Manager, Product Owner, and aspiring Data Engineer.",
    siteName: "rizkaluthfiani.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizka Luthfiani — PM/PO & Aspiring Data Engineer",
    description:
      "Personal portfolio of Rizka Luthfiani Fakhriah — Project Manager, Product Owner, and aspiring Data Engineer.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
