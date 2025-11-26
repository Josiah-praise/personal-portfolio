interface TechBadgeProps {
  technology: string;
}

export function TechBadge({ technology }: TechBadgeProps) {
  return (
    <span className="border border-black/15 dark:border-white/15 bg-white/30 dark:bg-black/30 text-foreground px-3 py-1 text-xs font-medium backdrop-blur-sm transition-colors hover:bg-white/50 dark:hover:bg-black/50">
      {technology}
    </span>
  );
}
