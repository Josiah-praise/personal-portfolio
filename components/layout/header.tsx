import Link from 'next/link';
import { Nav } from './nav';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative flex h-14 items-center justify-between border border-black/15 bg-white/20 px-6 shadow-lg backdrop-blur-xl dark:border-white/15 dark:bg-black/20">
          {/* Corner brackets (L rotated 180°) */}
          {/* Top-left */}
          <span className="absolute top-0 -left-2 h-2 w-px bg-black/70 dark:bg-white/70" />
          <span className="absolute -top-2 left-0 h-px w-2 bg-black/70 dark:bg-white/70" />
          {/* Top-right */}
          <span className="absolute top-0 -right-2 h-2 w-px bg-black/70 dark:bg-white/70" />
          <span className="absolute -top-2 right-0 h-px w-2 bg-black/70 dark:bg-white/70" />
          {/* Bottom-left */}
          <span className="absolute bottom-0 -left-2 h-2 w-px bg-black/70 dark:bg-white/70" />
          <span className="absolute -bottom-2 left-0 h-px w-2 bg-black/70 dark:bg-white/70" />
          {/* Bottom-right */}
          <span className="absolute bottom-0 -right-2 h-2 w-px bg-black/70 dark:bg-white/70" />
          <span className="absolute -bottom-2 right-0 h-px w-2 bg-black/70 dark:bg-white/70" />

          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-black dark:text-white">PJ</span>
          </Link>
          <div className="flex items-center gap-6">
            <Nav />
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
