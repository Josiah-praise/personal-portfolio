import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project, ProjectFrontmatter } from '@/lib/types/project';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

/**
 * Load a single project by slug with frontmatter and raw MDX content
 */
export async function getProjectBySlug(slug: string): Promise<Project> {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...(data as ProjectFrontmatter),
    content,
  };
}

/**
 * Load all project frontmatter (without compiling content) for listings
 */
export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') && !fileName.startsWith('_'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data as ProjectFrontmatter;
    });

  // Sort by order field (ascending)
  return projects.sort((a, b) => a.order - b.order);
}

/**
 * Load only featured projects for homepage or highlights
 */
export async function getFeaturedProjects(): Promise<ProjectFrontmatter[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((project) => project.featured);
}

/**
 * Get all project slugs for static generation
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map((project) => project.slug);
}
