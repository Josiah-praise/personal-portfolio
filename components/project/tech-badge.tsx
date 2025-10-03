interface TechBadgeProps {
  technology: string;
}

export function TechBadge({ technology }: TechBadgeProps) {
  return (
    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
      {technology}
    </span>
  );
}
