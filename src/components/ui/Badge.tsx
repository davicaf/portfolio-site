import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "success";
  hasDot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  hasDot = false,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 border-border",
    outline:
      "bg-transparent text-foreground/80 border-border",
    accent:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/50",
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/50",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {hasDot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            variant === "success"
              ? "bg-emerald-500"
              : variant === "accent"
              ? "bg-blue-500"
              : "bg-zinc-500"
          )}
        />
      )}
      {children}
    </span>
  );
}
