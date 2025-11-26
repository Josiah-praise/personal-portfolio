import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  showCorners?: boolean;
}

export function GlassCard({ children, className, showCorners = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-none border border-black/15 bg-white/20 p-6 shadow-lg backdrop-blur-md dark:border-white/15 dark:bg-black/20',
        className
      )}
    >
      {showCorners && (
        <>
          {/* Corner plus signs */}
          <Plus
            className="absolute -top-3 -left-3 h-6 w-6 text-black/70 dark:text-white/70"
            strokeWidth={1.5}
          />
          <Plus
            className="absolute -top-3 -right-3 h-6 w-6 text-black/70 dark:text-white/70"
            strokeWidth={1.5}
          />
          <Plus
            className="absolute -bottom-3 -left-3 h-6 w-6 text-black/70 dark:text-white/70"
            strokeWidth={1.5}
          />
          <Plus
            className="absolute -bottom-3 -right-3 h-6 w-6 text-black/70 dark:text-white/70"
            strokeWidth={1.5}
          />
        </>
      )}
      {children}
    </div>
  );
}
