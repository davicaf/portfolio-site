"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/common/Icons";
import { ArrowRight, CheckCircle, Clock, ExternalLink, Layers, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Dynamic Categories extracted directly from registered projects data
  const dynamicCategories = useMemo(() => {
    const categoryMap = new Map<string, string>();
    projectsData.forEach((project) => {
      if (!categoryMap.has(project.categoryId)) {
        categoryMap.set(project.categoryId, project.category[language]);
      }
    });

    return [
      { id: "all", label: t.projects.all },
      ...Array.from(categoryMap.entries()).map(([id, label]) => ({ id, label })),
    ];
  }, [language, t.projects.all]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projectsData;
    return projectsData.filter((p) => p.categoryId === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeader
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          className="mb-0"
        />

        {/* Dynamic Category Filter Toolbar */}
        <div
          role="toolbar"
          aria-label={t.projects.filterLabel}
          className="flex items-center gap-1.5 p-1 rounded-xl border border-border bg-zinc-50/70 dark:bg-zinc-900/50 text-xs font-medium self-start md:self-auto flex-wrap"
        >
          {dynamicCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg transition-all cursor-pointer font-mono",
                selectedCategory === cat.id
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              )}
              aria-pressed={selectedCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group flex flex-col justify-between overflow-hidden p-0 border border-border hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            {/* Visual Engineering Mockup Header */}
            <div className="relative h-44 sm:h-48 w-full bg-gradient-to-br from-zinc-100 via-zinc-200/50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-950 p-5 flex flex-col justify-between border-b border-border overflow-hidden">
              <div className="flex items-center justify-between z-10 gap-2">
                <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-border backdrop-blur-xs font-semibold">
                  {project.category[language]}
                </span>

                <div className="flex items-center gap-2">
                  {/* Status Indicator */}
                  {project.status === "completed" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                      <CheckCircle className="w-3 h-3" aria-hidden="true" />
                      <span>{t.projects.statusCompleted}</span>
                    </span>
                  )}
                  {project.status === "in-progress" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      <span>{t.projects.statusInProgress}</span>
                    </span>
                  )}

                  {/* External links only if explicitly provided */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-white/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-foreground transition-colors border border-border"
                      aria-label={t.projects.code}
                      title={t.projects.code}
                    >
                      <GithubIcon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-white/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-foreground transition-colors border border-border"
                      aria-label={t.projects.demo}
                      title={t.projects.demo}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative engineering UI element */}
              <div className="z-10 flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-300 bg-white/80 dark:bg-black/60 px-3 py-1.5 rounded-lg border border-border backdrop-blur-xs w-fit">
                <Terminal className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />
                <span className="font-semibold">{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
              </div>

              {/* Subtle ambient radial glow in corner */}
              <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {project.academicContext && (
                  <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                    {project.academicContext[language]}
                  </p>
                )}

                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {project.subtitle[language]}
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.description[language]}
                </p>

                {/* Key Technical Highlights */}
                {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-border space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-foreground">
                      <Layers className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />
                      <span>{t.projects.highlightsLabel}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.technicalHighlights.slice(0, 2).map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-500 shrink-0 font-bold">•</span>
                          <span>{h[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies & Detailed Case Study CTA */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[11px] py-0.5 px-2">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <Link
                    href={`/${language}/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link transition-colors"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>

                  {!project.githubUrl && !project.demoUrl && (
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                      {t.projects.noExternalLinks}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
