# Content Management Strategy

## Overview

Projects and content will be managed as code using MDX (Markdown + JSX) files with TypeScript-validated frontmatter. This approach provides version control, type safety, and developer-friendly editing without requiring a database or CMS.

## Directory Structure

```
/content
  /projects
    - project-1-ecommerce-platform.mdx
    - project-2-task-manager.mdx
    - project-3-weather-app.mdx
    - _template.mdx                    # Template for new projects
  /data
    - skills.ts                        # Skills list
    - about.ts                         # About page content
    - social-links.ts                  # Social media links
  - _IMAGE_GUIDELINES.md               # Image specifications
  - README.md                          # Content management guide
```

## Project MDX Format

Each project is a self-contained MDX file with frontmatter metadata and Markdown content:

**Frontmatter Schema:**
```typescript
interface ProjectFrontmatter {
  title: string;                      // Project name
  slug: string;                       // URL-friendly identifier
  description: string;                // Brief one-liner (50-100 chars)
  featured: boolean;                  // Show on homepage?
  order: number;                      // Display order (1, 2, 3...)
  technologies: string[];             // Tech stack array
  category: 'Frontend' | 'Full-Stack' | 'Backend' | 'Mobile' | 'DevOps';
  startDate: string;                  // YYYY-MM format
  endDate: string | 'Present';        // YYYY-MM or "Present"
  demoUrl?: string;                   // Live demo URL (optional)
  githubUrl?: string;                 // GitHub repo URL (optional)
  thumbnail: string;                  // Path to thumbnail image
  images: string[];                   // Array of screenshot paths
}
```

**Content Structure:**
- **The Problem**: 2-3 sentences describing the challenge
- **The Solution**: Paragraph explaining the approach
- **Key Features**: Bulleted list of main capabilities
- **Technical Highlights**: Implementation details and decisions
- **Results**: Measurable outcomes and impact

## Adding a New Project Workflow

**Step 1: Create MDX File**
```bash
cp content/projects/_template.mdx content/projects/my-new-project.mdx
```

**Step 2: Edit Frontmatter and Content**
```mdx
---
title: "My New Project"
slug: "my-new-project"
description: "Full-stack application for managing tasks with real-time collaboration"
featured: true
order: 1
technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"]
category: "Full-Stack"
startDate: "2024-08"
endDate: "2024-10"
demoUrl: "https://demo.example.com"
githubUrl: "https://github.com/username/project"
thumbnail: "/images/projects/my-new-project/thumbnail.jpg"
images:
  - "/images/projects/my-new-project/screenshot-1.jpg"
  - "/images/projects/my-new-project/screenshot-2.jpg"
---

# The Problem
[Describe the problem this project solves...]

# The Solution
[Explain your approach...]
```

**Step 3: Add Images**
```bash
mkdir -p public/images/projects/my-new-project
# Add optimized images to this directory
```

**Step 4: Commit and Deploy**
```bash
git add content/projects/my-new-project.mdx
git add public/images/projects/my-new-project/
git commit -m "Add new project: My New Project"
git push
# Vercel automatically builds and deploys
```

## Image Specifications

**Required Images per Project:**
- **Thumbnail**: 600x400px, WebP format preferred, max 200KB
- **Screenshots**: 1200x800px minimum, WebP format preferred, max 500KB each
- **Count**: 1 thumbnail + 3-5 screenshots per project

**Naming Convention:**
- Use kebab-case: `project-name-screen-description.webp`
- Examples: `ecommerce-home-page.webp`, `dashboard-analytics-view.webp`

**Storage Location:**
```
/public/images/projects/[project-slug]/
  - thumbnail.webp
  - screenshot-1.webp
  - screenshot-2.webp
  - screenshot-3.webp
```

**Optimization Guidelines:**
1. Resize to target dimensions (use Squoosh.app or similar)
2. Convert to WebP format
3. Compress to target file size
4. Include descriptive alt text in MDX

## Skills Management

Skills are managed in a TypeScript file for type safety and easy updates:

**`/content/data/skills.ts`:**
```typescript
export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go"]
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis"]
  },
  {
    name: "Tools & Practices",
    skills: ["Git", "Docker", "CI/CD", "Agile", "Testing"]
  }
];
```

**To update skills:** Edit the file and add/remove items from the arrays, then commit.

## Content Loading Implementation

**Utility for Loading Projects:**
```typescript
// /lib/content/projects.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getAllProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(fileContents);
        const mdxSource = await serialize(content);

        return { ...data, slug, content: mdxSource };
      })
  );

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.order - b.order;
  });
}

export async function getFeaturedProjects() {
  const projects = await getAllProjects();
  return projects.filter(p => p.featured).slice(0, 5);
}
```

## Benefits of This Approach

**Developer Experience:**
- Write content in familiar Markdown format
- Type safety prevents errors (missing required fields)
- Full Git history for all content changes
- Preview changes locally before deploying
- No separate CMS to learn or maintain

**Performance:**
- Static generation at build time (fast page loads)
- No database queries at runtime
- Optimized images with Next.js Image component
- Perfect Lighthouse scores achievable

**Maintenance:**
- Simple text file editing
- No database migrations needed
- Easy to backup (just Git)
- Content lives with code for consistency

**Cost:**
- Zero cost (no CMS subscription, no database hosting)
- Fits within Vercel free tier

## Documentation Files

The following documentation will be created to guide content updates:

1. **`/content/README.md`**: Complete content management guide with examples
2. **`/content/_IMAGE_GUIDELINES.md`**: Image specifications and optimization instructions
3. **`/content/projects/_template.mdx`**: Blank template for new projects with all required fields
