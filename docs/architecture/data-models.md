# Data Models

## Project

**Purpose:** Represents a portfolio project showcase with complete case study information

**Key Attributes:**
- `title`: string - Project name displayed to users
- `slug`: string - URL-friendly identifier (e.g., "ecommerce-platform")
- `description`: string - One-sentence project summary (50-100 chars)
- `featured`: boolean - Show on homepage featured projects grid
- `order`: number - Display order (1, 2, 3...)
- `technologies`: string[] - Tech stack array (e.g., ["Next.js", "TypeScript", "PostgreSQL"])
- `category`: enum - Project type: 'Frontend' | 'Full-Stack' | 'Backend' | 'Mobile' | 'DevOps'
- `startDate`: string - YYYY-MM format
- `endDate`: string | 'Present' - YYYY-MM or "Present"
- `demoUrl`: string (optional) - Live demo URL
- `githubUrl`: string (optional) - GitHub repository URL
- `thumbnail`: string - Path to thumbnail image (e.g., "/images/projects/slug/thumbnail.webp")
- `images`: string[] - Array of screenshot paths
- `content`: MDXRemoteSerializeResult - Compiled MDX content (case study body)

### TypeScript Interface

```typescript
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  featured: boolean;
  order: number;
  technologies: string[];
  category: 'Frontend' | 'Full-Stack' | 'Backend' | 'Mobile' | 'DevOps';
  startDate: string; // YYYY-MM
  endDate: string | 'Present'; // YYYY-MM or "Present"
  demoUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  images: string[];
}

export interface Project extends ProjectFrontmatter {
  content: MDXRemoteSerializeResult;
}
```

### Relationships

- No direct relationships (static content, no foreign keys)
- Implicit grouping by `category` field for filtering
- Ordering defined by `order` and `featured` fields

---

## SkillCategory

**Purpose:** Organizes technical skills into logical categories for display

**Key Attributes:**
- `name`: string - Category name (e.g., "Languages", "Frontend", "Backend")
- `skills`: string[] - Array of skill names within category

### TypeScript Interface

```typescript
export interface SkillCategory {
  name: string;
  skills: string[];
}
```

### Relationships

- No relationships, simple data structure

---

## ContactFormData

**Purpose:** Represents contact form submission data (transient, not persisted)

**Key Attributes:**
- `name`: string - Sender's name
- `email`: string - Sender's email (validated)
- `message`: string - Message content
- `honeypot`: string (optional) - Spam trap field (should be empty)

### TypeScript Interface

```typescript
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Spam protection
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  error?: string;
}
```

### Relationships

- No persistence, data flows: Form → API Route → Email Service → Discard

---

## SocialLink

**Purpose:** Social media and professional profile links

**Key Attributes:**
- `platform`: string - Platform name (e.g., "GitHub", "LinkedIn", "Email")
- `url`: string - Profile URL or mailto: link
- `icon`: string - Icon identifier (for Lucide React icons)

### TypeScript Interface

```typescript
export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name (e.g., 'Github', 'Linkedin', 'Mail')
}
```

### Relationships

- No relationships, simple configuration data

---
