"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.a11y.selectLanguage}
      className="inline-flex items-center p-0.5 rounded-lg border border-border bg-zinc-50/50 dark:bg-zinc-900/50 text-xs font-mono"
    >
      <button
        onClick={() => setLanguage("pt")}
        className={cn(
          "px-2 py-1 rounded-md transition-all font-medium cursor-pointer",
          language === "pt"
            ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold"
            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
        )}
        aria-pressed={language === "pt"}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 rounded-md transition-all font-medium cursor-pointer",
          language === "en"
            ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold"
            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
        )}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
