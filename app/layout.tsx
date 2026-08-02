import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ogImage = new URL("og.png", siteUrl).toString();
const organizationData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "VM Formation",
  url: "https://vm-formation.fr",
  description: "Formation informatique pour débutants, initiation aux réseaux et accompagnement numérique.",
  areaServed: "Hauts-de-France",
  knowsAbout: ["Réseaux informatiques", "IPv4", "Modèle OSI", "Administration systèmes et réseaux", "Pédagogie"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio VM Formation | Projets web et pédagogiques",
  description: "Portfolio présentant les projets réalisés par VM Formation : site pédagogique et parcours Fondamentaux des réseaux.",
  icons: {
    icon: `${publicBasePath}/vm-logo.svg`,
    shortcut: `${publicBasePath}/vm-logo.svg`,
  },
  openGraph: {
    title: "Portfolio VM Formation | Projets web et pédagogiques",
    description: "Présentation du site VM Formation et du parcours Fondamentaux des réseaux.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: ogImage, width: 1672, height: 941, alt: "Portfolio VM Formation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio VM Formation | Projets web et pédagogiques",
    description: "Présentation du site VM Formation et du parcours Fondamentaux des réseaux.",
    images: [ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      </body>
    </html>
  );
}
