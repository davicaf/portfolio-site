"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Download, Mail, MapPin, Building2, GraduationCap, Sparkles } from "lucide-react";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="space-y-8">
        {/* Status Pill */}
        <div className="flex items-center gap-3">
          <Badge variant="success" hasDot className="py-1 px-3.5 text-xs sm:text-sm font-medium">
            {t.hero.status}
          </Badge>
        </div>

        {/* Identity & Headline */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-blue-600 dark:text-blue-400">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>{t.hero.greeting}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {t.hero.title}
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
              {profileData.title[language]}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal pt-1">
            {profileData.positioning[language]}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/80 text-foreground text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>{t.hero.getInTouch}</span>
          </a>

          <a
            href={profileData.resumeUrl[language]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-foreground transition-all cursor-pointer"
            title={t.hero.downloadResume}
            aria-label={t.hero.downloadResume}
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>{t.hero.downloadResume}</span>
          </a>
        </div>

        {/* Quick Context Summary Strip */}
        <div className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-zinc-50/50 dark:bg-zinc-900/30">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Building2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                {t.hero.companyLabel}
              </p>
              <p className="text-sm font-semibold text-foreground">
                Michelin (Processos Digitais)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-zinc-50/50 dark:bg-zinc-900/30">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                {t.hero.universityLabel}
              </p>
              <p className="text-sm font-semibold text-foreground">
                UFAM — IComp (Eng. Software)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-zinc-50/50 dark:bg-zinc-900/30">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                {t.hero.locationLabel}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {profileData.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
