import React, { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { ProjectItem, Language } from "@/types";
import { pt } from "@/data/i18n/pt";
import { en } from "@/data/i18n/en";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GithubIcon } from "@/components/common/Icons";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  Layers,
  Terminal,
} from "lucide-react";

const dictionaries = { pt, en };

const Connection = async () => {
  await connection();
  return null;
};

function DynamicMarker() {
  return (
    <Suspense fallback={null}>
      <Connection />
    </Suspense>
  );
}

export function ProjectDetailView({
  project,
  lang,
}: {
  project: ProjectItem;
  lang: Language;
}) {
  const dict = dictionaries[lang] || pt;

  return (
    <div className="relative min-h-screen flex flex-col bg-ambient-glow">
      <DynamicMarker />
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Navigation Back */}
        <div>
          <Link
            href={`/${lang}#projects`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{dict.projects.backToProjects}</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent" className="text-xs font-mono font-medium">
              {project.category[lang]}
            </Badge>

            {project.status === "completed" && (
              <Badge variant="success" hasDot className="text-xs font-mono">
                {dict.projects.statusCompleted}
              </Badge>
            )}
            {project.status === "in-progress" && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>{dict.projects.statusInProgress}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            {project.subtitle[lang]}
          </p>

          {project.academicContext && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs sm:text-sm text-blue-800 dark:text-blue-300 font-mono">
              <Terminal className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span>{project.academicContext[lang]}</span>
            </div>
          )}

          {/* External links */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" aria-hidden="true" />
                  <span>{dict.projects.code}</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>{dict.projects.demo}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-6">
          <div className="space-y-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            {project.detailedDescription ? (
              project.detailedDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph[lang]}</p>
              ))
            ) : (
              <p>{project.description[lang]}</p>
            )}
          </div>
        </div>

        {/* System Architecture & Component Breakdown */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>{dict.projects.architectureLabel}</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {project.architecture.map((arch, aIdx) => (
                <Card key={aIdx} className="p-4 sm:p-5 space-y-1.5 border-border">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-500" aria-hidden="true" />
                    <code className="text-xs sm:text-sm font-mono font-bold text-foreground bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                      {arch.component}
                    </code>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pl-6">
                    {arch.role[lang]}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Technical Highlights */}
        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-foreground">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>{dict.projects.highlightsLabel}</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {project.technicalHighlights.map((hl, hIdx) => (
                <div
                  key={hIdx}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-card/60 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span className="leading-relaxed">{hl[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Used */}
        <div className="space-y-3 pt-4 border-t border-border">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
            {dict.projects.technologiesLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
