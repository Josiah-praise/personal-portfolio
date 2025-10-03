import Link from 'next/link';
import { Nav } from './nav';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-bold tracking-tight hover:text-primary transition-colors">JP</span>
        </Link>
        <div className="flex items-center gap-6">
          <Nav />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
