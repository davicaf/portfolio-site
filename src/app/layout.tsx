import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://davi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Davi Ferreira | Estudante de Engenharia de Software • Michelin & UFAM",
    template: "%s",
  },
  description:
    "Portfólio de Davi Ferreira. Estudante de Engenharia de Software na UFAM e Estagiário de Processos Digitais na Michelin Manaus.",
  authors: [{ name: "Davi Ferreira" }],
  creator: "Davi Ferreira",
  keywords: [
    "Davi Ferreira",
    "Engenharia de Software",
    "UFAM",
    "Michelin",
    "Processos Digitais",
    "Software Engineering",
    "C",
    "Python",
    "React",
    "Sockets TCP",
    "Manaus",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Davi Ferreira | Estudante de Engenharia de Software • Michelin & UFAM",
    description:
      "Estudante de Engenharia de Software na UFAM e Estagiário de Processos Digitais na Michelin Manaus.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
