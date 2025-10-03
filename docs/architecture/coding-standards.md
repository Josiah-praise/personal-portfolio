# Coding Standards

## Critical Fullstack Rules

- **Type Safety First:** All functions, components, and API routes must have explicit TypeScript types. No `any` types except in rare edge cases with `// @ts-expect-error` justification
- **API Error Handling:** All API routes must return consistent error format: `{ success: false, error: string }` with appropriate HTTP status codes
- **Component Composition:** Prefer composition over prop drilling. Break large components into smaller, focused components
- **Server/Client Separation:** Mark client components explicitly with `'use client'` directive. Keep server components as default
- **Environment Variables:** Access via typed config objects in `/lib/config.ts`, never `process.env` directly in components
- **Image Optimization:** Always use Next.js `Image` component, never `<img>` tags. Include `alt` text for accessibility
- **Form Validation:** Client-side validation for UX, server-side validation for security. Never trust client input

---

## Naming Conventions

| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| **Components** | PascalCase | - | `ProjectCard.tsx`, `ContactForm.tsx` |
| **Hooks** | camelCase with 'use' prefix | - | `useProjects.ts`, `useContactForm.ts` |
| **API Routes** | - | kebab-case folder | `/api/contact/route.ts` |
| **Utilities** | camelCase | camelCase | `emailValidator.ts`, `cn.ts` |
| **Types/Interfaces** | PascalCase | PascalCase | `ProjectFrontmatter`, `ContactFormData` |
| **Constants** | SCREAMING_SNAKE_CASE | SCREAMING_SNAKE_CASE | `MAX_MESSAGE_LENGTH`, `API_RATE_LIMIT` |

---
