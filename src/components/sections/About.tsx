"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { careerInterestsData } from "@/data/interests";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Globe, Server, Cloud, ShieldCheck, CheckSquare2 } from "lucide-react";

const interestIcons: Record<string, React.ElementType> = {
  "web-fullstack": Globe,
  "backend-systems": Server,
  "cloud-infra": Cloud,
  cybersecurity: ShieldCheck,
  "qa-testing": CheckSquare2,
};

export function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border">
      <SectionHeader
        badge={t.about.badge}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="space-y-12">
        {/* Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph[language]}</p>
            ))}
          </div>

          {/* Quick Highlight Card */}
          <Card className="p-5 space-y-4 border border-border">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
              {language === "pt" ? "Atuação Atual" : "Current Role"}
            </h3>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p className="font-semibold text-foreground">
                Michelin Manaus
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {language === "pt"
                  ? "Digitalização de apontamentos industriais, aplicações em React e Power Apps, automações e Dataverse."
                  : "Industrial logging digitalization, shop-floor React & Power Apps solutions, automations, and Dataverse."}
              </p>
            </div>

            <div className="pt-2 border-t border-border space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p className="font-semibold text-foreground">
                UFAM — IComp
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {language === "pt"
                  ? "Graduação com ênfase em fundamentos de computação, programação em C, concorrência, redes e banco de dados."
                  : "Undergraduate degree focusing on core CS foundations: C programming, concurrency, networks, and relational databases."}
              </p>
            </div>
          </Card>
        </div>

        {/* Career Interests & Continuous Exploration Grid */}
        <div className="space-y-5 pt-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
              {t.about.interestsTitle}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {t.about.interestsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerInterestsData.map((interest) => {
              const Icon = interestIcons[interest.id] || Server;
              return (
                <Card key={interest.id} className="p-5 space-y-2.5 border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {interest.title[language]}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {interest.description[language]}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
