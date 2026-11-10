import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Davi Ferreira | Estudante de Engenharia de Software • Estagiário na Michelin",
  description:
    "Portfólio de Davi Ferreira. Estudante de Engenharia de Software na UFAM e Estagiário de Processos Digitais na Michelin Manaus. Foco em desenvolvimento de software, sistemas e soluções operacionais reais.",
  openGraph: {
    title: "Davi Ferreira | Estudante de Engenharia de Software • Estagiário na Michelin",
    description:
      "Davi Ferreira — Estudante de Engenharia de Software na UFAM e Estagiário de Processos Digitais na Michelin Manaus.",
    type: "website",
    locale: "pt_BR",
    url: "/pt",
    siteName: "Davi Ferreira — Portfólio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Davi Ferreira | Estudante de Engenharia de Software na UFAM e Estagiário na Michelin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davi Ferreira | Estudante de Engenharia de Software • Estagiário na Michelin",
    description:
      "Estudante de Engenharia de Software na UFAM e Estagiário de Processos Digitais na Michelin Manaus.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/pt",
    languages: {
      "pt-BR": "/pt",
      "en-US": "/en",
    },
  },
};

export default function PortuguesePage() {
  return <PortfolioPage />;
}
