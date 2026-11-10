"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { FileText, Menu, X } from "lucide-react";

export function Header() {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href={`/${language}`}
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform" />
          <span>davi.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label={t.nav.about}
          className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Social Links */}
          <div className="hidden sm:flex items-center gap-1 border-r border-border pr-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub (@davicaf)"
              title="GitHub: davicaf"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="LinkedIn (@davicfr)"
              title="LinkedIn: davicfr"
            >
              <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <LanguageToggle />
          <ThemeToggle />

          <a
            href={profileData.resumeUrl[language]}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-foreground transition-all cursor-pointer"
            title={t.hero.downloadResume}
            aria-label={t.hero.downloadResume}
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-border text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t.nav.about}
          className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-border">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
              <span>GitHub (davicaf)</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" aria-hidden="true" />
              <span>LinkedIn (davicfr)</span>
            </a>
          </div>
          <a
            href={profileData.resumeUrl[language]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            <span>{t.hero.downloadResume}</span>
          </a>
        </nav>
      )}
    </header>
  );
}
