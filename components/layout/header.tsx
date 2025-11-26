import Link from 'next/link';
import { Nav } from './nav';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative flex h-14 items-center justify-between rounded-full border border-white/30 bg-white/10 px-6 shadow-lg backdrop-blur-xl dark:border-white/15 dark:bg-white/5">
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
