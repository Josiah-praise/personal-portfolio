# Frontend Architecture

## Component Architecture

### Component Organization

```
/app
├── layout.tsx                 # Root layout with header/footer
├── page.tsx                   # Homepage
├── about
│   └── page.tsx               # About page
├── projects
│   ├── page.tsx               # Projects grid
│   └── [slug]
│       └── page.tsx           # Project detail page (dynamic)
├── contact
│   └── page.tsx               # Contact page
└── api
    └── contact
        └── route.ts           # Contact API route

/components
├── ui/                        # shadcn/ui components (Button, Card, Input, etc.)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   └── ...
├── layout/
│   ├── header.tsx             # Site header with navigation
│   ├── footer.tsx             # Site footer
│   ├── nav.tsx                # Navigation component
│   └── mobile-menu.tsx        # Mobile hamburger menu
├── sections/
│   ├── hero.tsx               # Homepage hero section
│   ├── projects-grid.tsx      # Projects grid component
│   ├── skills.tsx             # Skills section
│   └── contact-form.tsx       # Contact form component
└── project/
    ├── project-card.tsx       # Single project card
    ├── project-detail.tsx     # Project case study layout
    └── tech-badge.tsx         # Technology tag component

/lib
├── content/
│   └── projects.ts            # MDX loading utilities
├── types/
│   └── index.ts               # TypeScript interfaces
└── utils/
    └── cn.ts                  # Tailwind class merge utility
```

**Principles:**
- App Router file-based routing
- Co-located components by feature (projects, layout, sections)
- shadcn/ui components in `/components/ui/` (managed by CLI)
- Shared utilities in `/lib/`

### Component Template

```typescript
// Example: ProjectCard component
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TechBadge } from './tech-badge';
import type { ProjectFrontmatter } from '@/lib/types';

interface ProjectCardProps {
  project: ProjectFrontmatter;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="mt-2">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={tech} technology={tech} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
```

**Component Guidelines:**
- Always use TypeScript with explicit prop types
- Leverage Next.js Image for all images
- Use shadcn/ui components as building blocks
- Keep components focused and single-responsibility
- Co-locate component-specific types if not shared

---

## State Management Architecture

### State Structure

```typescript
// Client-side state managed via React hooks and Context

// Example: Contact form state
import { useState } from 'react';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errorMessage?: string;
}

// Usage in component
function ContactForm() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
    isSubmitting: false,
    submitStatus: 'idle'
  });

  // ... form logic
}
```

**State Philosophy:**
- **No global state library needed** (Redux, Zustand overkill for portfolio)
- Local component state via `useState` for forms and UI toggles
- Server state via Next.js SSG (data pre-fetched at build)
- URL state for navigation (Next.js router handles)

### State Management Patterns

- **Local state:** `useState` for component-specific state (form inputs, modals, toggles)
- **Derived state:** Calculate from props/state rather than storing separately
- **Server state:** MDX content loaded at build time, no client-side fetching
- **Form state:** Controlled inputs with validation on blur and submit
- **Loading states:** Track async operations (form submission, image loading)

**Rationale:** Portfolio has minimal dynamic state requirements. Introducing Redux/Zustand adds complexity without benefit.

---

## Routing Architecture

### Route Organization

```
Routes (App Router):
├── /                          → app/page.tsx (Homepage)
├── /about                     → app/about/page.tsx
├── /projects                  → app/projects/page.tsx
├── /projects/[slug]           → app/projects/[slug]/page.tsx (Dynamic)
├── /contact                   → app/contact/page.tsx
└── /api/contact              → app/api/contact/route.ts (API)
```

**Routing Strategy:**
- **Multi-page application** (not single-page with hash routing)
- Each route is a separate statically generated page
- Dynamic routes for project detail pages (`[slug]`)
- Smooth page transitions via Next.js built-in navigation

**SEO Benefits:**
- Each page has unique URL for search indexing
- Proper canonical URLs
- Social sharing works correctly (Open Graph per page)

### Protected Route Pattern

**Not applicable** - Portfolio has no authentication, all routes are public.

If authentication is added later (e.g., admin panel for content editing):

```typescript
// middleware.ts (future consideration)
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/admin/:path*']
};
```

---

## Frontend Services Layer

### API Client Setup

```typescript
// /lib/api/contact.ts
import type { ContactFormData, ContactFormResponse } from '@/lib/types';

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to submit form');
  }

  return response.json();
}
```

### Service Example

```typescript
// Usage in ContactForm component
import { submitContactForm } from '@/lib/api/contact';

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setFormData(prev => ({ ...prev, isSubmitting: true }));

  try {
    const response = await submitContactForm({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      honeypot: formData.honeypot
    });

    setFormData(prev => ({
      ...prev,
      isSubmitting: false,
      submitStatus: 'success'
    }));
  } catch (error) {
    setFormData(prev => ({
      ...prev,
      isSubmitting: false,
      submitStatus: 'error',
      errorMessage: error instanceof Error ? error.message : 'Unknown error'
    }));
  }
}
```

**Service Layer Principles:**
- Centralize API calls in `/lib/api/` directory
- Type-safe request/response with TypeScript
- Consistent error handling
- Abstraction from fetch implementation (easy to swap for axios later)

---
