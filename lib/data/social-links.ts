export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name or react-icons
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:praisechinonso21@gmail.com",
    icon: "Mail",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/praisejosiah",
    icon: "Linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/josiah-praise",
    icon: "Github",
  },
  {
    platform: "Twitter",
    url: "https://x.com/Praise_JC_AFK",
    icon: "Twitter",
  },
  {
    platform: "Discord",
    url: "https://discord.com/users/1103617696190435380",
    icon: "Discord",
  },
];
