import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://davi.dev";
  const now = new Date();

  return [
    {
      url: `${baseUrl}/pt`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "pt-BR": `${baseUrl}/pt`,
          "en-US": `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "pt-BR": `${baseUrl}/pt`,
          "en-US": `${baseUrl}/en`,
        },
      },
    },
  ];
}
