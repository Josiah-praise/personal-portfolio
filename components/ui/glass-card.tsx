import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-none border border-black/15 bg-white/20 p-6 shadow-lg backdrop-blur-md dark:border-white/15 dark:bg-black/20',
        className
      )}
    >
      {children}
    </div>
  );
}
