"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import { Language } from "@/types";

// React 19 / Next.js flags inline script tags rendered inside client components with a development
// warning ("Encountered a script tag while rendering React component...").
// next-themes uses this inline script to prevent dark mode theme flashing (FOUC).
// In SSR this script executes properly; in client rendering, it is safe to suppress this false-positive warning.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const isPatched = (console.error as unknown as { __nextThemesPatched?: boolean }).__nextThemesPatched;
  if (!isPatched) {
    const originalError = console.error;
    const patchedError = (...args: unknown[]) => {
      if (
        args.some(
          (arg) =>
            typeof arg === "string" &&
            arg.includes("Encountered a script tag while rendering React component")
        )
      ) {
        return;
      }
      originalError.apply(console, args);
    };
    (patchedError as unknown as { __nextThemesPatched?: boolean }).__nextThemesPatched = true;
    console.error = patchedError;
  }
}

export function Providers({
  children,
  initialLocale = "pt",
}: {
  children: React.ReactNode;
  initialLocale?: Language;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
