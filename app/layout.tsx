import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ogImage = new URL("og.png", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio | VM Formation",
  description: "Conception de parcours de formation en réseaux, infrastructure informatique et culture numérique.",
  icons: {
    icon: `${publicBasePath}/vm-logo.svg`,
    shortcut: `${publicBasePath}/vm-logo.svg`,
  },
  openGraph: {
    title: "Portfolio | VM Formation",
    description: "Rendre la technique claire, concrète et mémorable.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: ogImage, width: 1672, height: 941, alt: "Portfolio VM Formation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | VM Formation",
    description: "Rendre la technique claire, concrète et mémorable.",
    images: [ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
