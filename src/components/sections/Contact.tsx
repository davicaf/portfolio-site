"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/Card";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { Check, Copy, Mail, MapPin, Sparkles } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <SectionHeader
        badge={t.contact.badge}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card (Main) */}
        <Card className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-border">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>{t.contact.emailLabel}</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold font-mono text-foreground break-all">
              {profileData.email}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t.contact.instructions}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-sm font-medium text-foreground hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    {t.contact.copied}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>{t.contact.copyEmail}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>{t.contact.sendEmail}</span>
            </a>
          </div>
        </Card>

        {/* Location & Status Card */}
        <div className="space-y-6">
          <Card className="p-6 space-y-3 border border-border">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>{t.contact.locationLabel}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">
              {profileData.location}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {t.contact.availability}
            </p>
          </Card>

          {/* Social Profiles */}
          <Card className="p-6 space-y-4 border border-border">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>{t.contact.profilesLabel}</span>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-foreground transition-colors"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </span>
                <span className="text-xs font-mono text-zinc-400">↗</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-foreground transition-colors"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  <span>LinkedIn</span>
                </span>
                <span className="text-xs font-mono text-zinc-400">↗</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
