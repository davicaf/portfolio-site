"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { skillsData } from "@/data/skills";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";

export function Skills() {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-border">
      <SectionHeader
        badge={t.skills.badge}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((categoryGroup) => (
          <Card key={categoryGroup.id} className="p-6 space-y-4 border border-border">
            <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold border-b border-border pb-2.5">
              {categoryGroup.category[language]}
            </h3>

            <div className="space-y-2 pt-1">
              {categoryGroup.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col gap-0.5 p-2.5 rounded-lg border border-border bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                    <span className="text-xs font-semibold text-foreground">{skill.name}</span>
                  </div>
                  {skill.description && (
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 pl-3.5 leading-snug">
                      {skill.description[language]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
