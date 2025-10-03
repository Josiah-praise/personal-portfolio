export interface ProjectCard {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  technologies: string[];
}

export const projects: ProjectCard[] = [
  {
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "Full-stack online shopping platform with payment integration and real-time inventory management.",
    thumbnail: "/images/projects/ecommerce-thumbnail.webp",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Task Management System",
    slug: "task-management-system",
    description: "Collaborative task tracker with real-time updates, team workflows, and progress analytics.",
    thumbnail: "/images/projects/task-manager-thumbnail.webp",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description: "Real-time weather application with forecasts, location search, and interactive maps.",
    thumbnail: "/images/projects/weather-thumbnail.webp",
    technologies: ["React", "OpenWeather API", "Tailwind CSS", "Recharts"],
  },
  {
    title: "Portfolio CMS",
    slug: "portfolio-cms",
    description: "Headless CMS for managing portfolio content with markdown support and media library.",
    thumbnail: "/images/projects/cms-thumbnail.webp",
    technologies: ["Next.js", "Sanity.io", "TypeScript", "React Query"],
  },
  {
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    description: "Mobile-first workout tracking app with exercise library, progress charts, and goal setting.",
    thumbnail: "/images/projects/fitness-thumbnail.webp",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
  },
];
