"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMounted } from "@/lib/useMounted";
import { useLanguage } from "@/context/LanguageContext";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? t.a11y.toggleThemeLight : t.a11y.toggleThemeDark;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-lg border border-border hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors cursor-pointer"
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
