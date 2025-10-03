import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import type { SocialLink } from '@/lib/data/social-links';

interface SocialLinkButtonProps {
  link: SocialLink;
}

const iconMap = {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Discord: SiDiscord,
};

export function SocialLinkButton({ link }: SocialLinkButtonProps) {
  const Icon = iconMap[link.icon as keyof typeof iconMap];
  const isEmail = link.platform === 'Email';

  return (
    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
      <a
        href={link.url}
        target={isEmail ? undefined : '_blank'}
        rel={isEmail ? undefined : 'noopener noreferrer'}
        aria-label={`Contact via ${link.platform}`}
      >
        {Icon && <Icon className="mr-2 h-5 w-5" />}
        {link.platform}
      </a>
    </Button>
  );
}
