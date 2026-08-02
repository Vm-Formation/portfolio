import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://vm-formation.github.io/portfolio/";
  const url = (path: string) => new URL(path, base).toString();

  return [
    { url: url("./"), changeFrequency: "monthly", priority: 1 },
    { url: url("projets/site-vm-formation/"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("projets/parcours-reseaux/"), changeFrequency: "monthly", priority: 0.9 },
  ];
}
