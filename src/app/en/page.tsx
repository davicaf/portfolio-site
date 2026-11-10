import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Davi Ferreira | Software Engineering Student • Intern at Michelin",
  description:
    "Portfolio of Davi Ferreira. Software Engineering student at UFAM and Digital Processes Intern at Michelin Manaus. Focused on systems, software development, and solving real operational challenges.",
  openGraph: {
    title: "Davi Ferreira | Software Engineering Student • Intern at Michelin",
    description:
      "Portfolio of Davi Ferreira. Software Engineering student at UFAM and Digital Processes Intern at Michelin Manaus. Focused on systems, software development, and solving real operational challenges.",
    type: "website",
    locale: "en_US",
    url: "/en",
    siteName: "Davi Ferreira — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Davi Ferreira | Software Engineering Student at UFAM & Intern at Michelin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davi Ferreira | Software Engineering Student • Intern at Michelin",
    description:
      "Software Engineering student at UFAM and Digital Processes Intern at Michelin Manaus.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/pt",
      "en-US": "/en",
    },
  },
};

export default function EnglishPage() {
  return <PortfolioPage />;
}
