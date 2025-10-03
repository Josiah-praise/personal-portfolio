import Link from 'next/link';
import { Nav } from './nav';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">JP</span>
        </Link>
        <div className="flex items-center gap-4">
          <Nav />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
