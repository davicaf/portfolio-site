import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3 mb-10", className)}>
      {badge && <Badge variant="accent">{badge}</Badge>}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
