import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Davi Ferreira | Software Engineering Student • Michelin & UFAM",
  description:
    "Portfolio of Davi Ferreira. Software Engineering student at UFAM and Digital Processes Intern at Michelin Manaus. Focused on systems, software development, and solving real operational challenges.",
  openGraph: {
    title: "Davi Ferreira | Software Engineering Student • Michelin & UFAM",
    description:
      "Portfolio of Davi Ferreira. Software Engineering student at UFAM and Digital Processes Intern at Michelin Manaus. Focused on systems, software development, and solving real operational challenges.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davi Ferreira | Software Engineering Student • Michelin & UFAM",
    description:
      "Software Engineering student at UFAM and Digital Processes Intern at Michelin Manaus. Systems, web development, and practical industrial software.",
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
