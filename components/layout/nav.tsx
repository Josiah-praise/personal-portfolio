'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'relative px-3 py-1.5 text-sm font-medium transition-all',
              active
                ? 'text-foreground bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20'
                : 'text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
