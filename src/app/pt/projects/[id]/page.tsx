import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) return { title: "Projeto não encontrado" };

  const title = `${project.title} | Davi Ferreira`;
  const description = project.description.pt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/pt/projects/${id}`,
      languages: {
        "pt-BR": `/pt/projects/${id}`,
        "en-US": `/en/projects/${id}`,
      },
    },
  };
}

export default async function PortugueseProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} lang="pt" />;
}
