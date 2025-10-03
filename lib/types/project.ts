/**
 * Frontmatter metadata for project MDX files
 */
export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  featured: boolean;
  order: number;
  technologies: string[];
  category: 'Frontend' | 'Full-Stack' | 'Backend' | 'Mobile' | 'DevOps';
  startDate: string; // YYYY-MM format
  endDate: string | 'Present';
  demoUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  images: string[];
}

/**
 * Complete project data including MDX content
 */
export interface Project extends ProjectFrontmatter {
  content: string;
}
