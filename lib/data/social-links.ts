export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:josiah.praise@example.com",
    icon: "Mail",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/josiahpraise",
    icon: "Linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/josiah-praise",
    icon: "Github",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/josiahpraise",
    icon: "Twitter",
  },
];
