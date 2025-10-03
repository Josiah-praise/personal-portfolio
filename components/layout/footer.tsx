import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Josiah-praise',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/josiah-praise',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/josiahpraise',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:josiah@example.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full border-t bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">Josiah Praise</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer passionate about building exceptional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Josiah Praise. Built with{' '}
            <span className="text-primary font-semibold">Next.js</span> and{' '}
            <span className="text-primary font-semibold">TypeScript</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
