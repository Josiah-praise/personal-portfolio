import Link from 'next/link';
import { Nav } from './nav';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex h-14 items-center justify-between px-6 rounded-full bg-foreground/95 backdrop-blur-sm shadow-lg border border-foreground">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-background hover:text-background/80 transition-colors">PJ</span>
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
