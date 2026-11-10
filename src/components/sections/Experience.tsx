"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { experiencesData } from "@/data/experience";
import { educationData } from "@/data/education";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MapPin,
  ShieldAlert,
  Layers,
  Wrench,
  TrendingUp,
  BookOpen,
  Clock,
} from "lucide-react";

export function Experience() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-border">
      <SectionHeader
        badge={t.experience.badge}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="space-y-16">
        {/* Professional Experience Section */}
        <div className="space-y-8">
          {experiencesData.map((exp) => (
            <Card key={exp.id} className="p-6 sm:p-8 space-y-7 border border-border">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border pb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.role[language]}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        @{exp.company}
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-zinc-700 dark:text-zinc-300">
                        @{exp.company}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {exp.period[language]}
                    </span>
                  </div>
                </div>

                <Badge variant="accent">
                  {exp.type[language]}
                </Badge>
              </div>

              {/* Overview */}
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {exp.overview[language]}
              </p>

              {/* Key Industrial Projects */}
              {exp.keyProjects && exp.keyProjects.length > 0 && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <Layers className="w-4 h-4" aria-hidden="true" />
                    <span>{t.experience.industrialProjectsTitle}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {exp.keyProjects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-5 rounded-xl border border-border bg-zinc-50/60 dark:bg-zinc-900/40 space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <h4 className="text-base font-bold text-foreground">
                            {proj.title[language]}
                          </h4>
                          <p className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                            {proj.technology}
                          </p>
                          {proj.scope && (
                            <Badge variant="outline" className="text-[11px] py-0 px-2 font-mono">
                              {proj.scope[language]}
                            </Badge>
                          )}
                          <div className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                            {proj.description.map((d, dIdx) => (
                              <p key={dIdx}>{d[language]}</p>
                            ))}
                          </div>
                        </div>

                        {proj.futureImpactNote && (
                          <div className="mt-2 pt-2 border-t border-border/60 text-xs text-zinc-500 dark:text-zinc-400 italic">
                            💡 {proj.futureImpactNote[language]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supporting Activities & Governance */}
              {exp.otherActivities && exp.otherActivities.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    <Wrench className="w-4 h-4" aria-hidden="true" />
                    <span>{t.experience.otherActivitiesTitle}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {exp.otherActivities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span>{act[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Qualitative Impact & Results */}
              {exp.qualitativeResults && exp.qualitativeResults.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" aria-hidden="true" />
                    <span>{t.experience.qualitativeResultsTitle}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.qualitativeResults.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 p-2.5 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-border"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{res[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills applied */}
              <div className="pt-2 border-t border-border flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">
                  {t.experience.technologiesTitle}:
                </span>
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Confidentiality Notice */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <p className="leading-relaxed">{t.experience.confidentialityNotice}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Education Section */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="accent" className="text-xs font-mono">
                {t.experience.educationBadge}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {t.experience.educationTitle}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {t.experience.educationSubtitle}
            </p>
          </div>

          {educationData.map((edu) => (
            <Card key={edu.id} className="p-6 sm:p-8 space-y-6 border border-border">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <h4 className="text-lg sm:text-xl font-bold text-foreground">
                      {edu.degree[language]}
                    </h4>
                  </div>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {edu.institution[language]} — {edu.department[language]}
                  </p>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {edu.location} • {edu.period[language]}
                  </p>
                </div>

                <Badge variant="success">
                  {edu.status[language]}
                </Badge>
              </div>

              <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {edu.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph[language]}</p>
                ))}
              </div>

              {/* Completed Coursework Grouped by Category */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <span>{t.experience.completedCoursesTitle}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {edu.completedCourses.map((group, gIdx) => (
                    <div
                      key={gIdx}
                      className="p-4 rounded-xl border border-border bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2.5"
                    >
                      <h5 className="text-xs font-semibold text-foreground tracking-tight">
                        {group.category[language]}
                      </h5>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                        {group.courses.map((course, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-1.5 shrink-0" />
                            <span>{course.name[language]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ongoing Semester Coursework */}
              <div className="p-4 rounded-xl border border-blue-200/60 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>{t.experience.ongoingCoursesTitle}</span>
                  </div>
                  <Badge variant="accent" className="text-[11px] py-0.5 px-2 font-mono">
                    {edu.ongoingSemester.semesterLabel[language]} • {edu.ongoingSemester.statusLabel[language]}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {edu.ongoingSemester.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="inline-flex items-center gap-1.5 text-xs font-medium py-1 px-2.5 rounded-lg border border-blue-200/80 dark:border-blue-900/60 bg-white/80 dark:bg-zinc-900/80 text-blue-900 dark:text-blue-200 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      {course.name[language]}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
