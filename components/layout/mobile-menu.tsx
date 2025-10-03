'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t border-border/40">
        <DrawerHeader className="border-b border-border/40">
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <nav className="flex flex-col p-6 gap-2 pb-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <DrawerClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-colors text-center',
                    active
                      ? 'text-foreground bg-secondary/50'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                  )}
                >
                  {link.label}
                </Link>
              </DrawerClose>
            );
          })}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
