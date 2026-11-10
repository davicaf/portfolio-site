"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border bg-zinc-50/50 dark:bg-zinc-950/50 py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
            © 2026 {profileData.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {t.footer.builtWith}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
