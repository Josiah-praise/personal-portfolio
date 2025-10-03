# Epic 1: Foundation & Core Infrastructure

**Goal:** Establish a production-ready Next.js project with modern tooling, CI/CD pipeline, and a deployable landing page that demonstrates the portfolio is live and functional. This epic delivers both the technical foundation and an initial user-facing page that can be shared immediately.

## Story 1.1: Initialize Next.js Project with TypeScript and Tailwind

As a developer,
I want to set up a new Next.js 14+ project with TypeScript and Tailwind CSS,
so that I have a modern, type-safe foundation with rapid styling capabilities.

**Acceptance Criteria:**
1. Next.js 14+ project created with App Router enabled
2. TypeScript configured with strict mode
3. Tailwind CSS installed and configured with appropriate content paths
4. ESLint and Prettier configured with Next.js best practices
5. Project runs successfully on localhost with default Next.js page
6. Package.json includes all necessary dependencies with specific versions documented
7. Basic folder structure created (/app, /components, /lib, /public)

## Story 1.2: Set Up Git Repository and Version Control

As a developer,
I want to initialize Git and create a GitHub repository,
so that I have version control and can enable automated deployments.

**Acceptance Criteria:**
1. Git repository initialized with .gitignore for Next.js
2. GitHub repository created (public or private as preferred)
3. Initial commit pushed with project foundation
4. README.md created with project description and setup instructions
5. Branch protection rules considered for main branch (optional for solo project)

## Story 1.3: Configure Vercel Deployment Pipeline

As a developer,
I want to connect my GitHub repository to Vercel with automatic deployments,
so that every commit automatically deploys to a preview or production URL.

**Acceptance Criteria:**
1. Vercel project created and connected to GitHub repository
2. Automatic deployments configured for main branch (production)
3. Preview deployments enabled for feature branches
4. Custom domain configured (if already purchased) or Vercel subdomain active
5. HTTPS enabled automatically by Vercel
6. Build and deployment succeeds, site accessible at live URL
7. Environment variables configured in Vercel dashboard (if any needed)

## Story 1.4: Install and Configure shadcn/ui Component Library

As a developer,
I want to set up shadcn/ui for accessible, customizable UI components,
so that I can rapidly build professional interfaces without starting from scratch.

**Acceptance Criteria:**
1. shadcn/ui CLI installed and initialized in project
2. components.json configured with Tailwind theme preferences
3. At least 2 essential components installed (Button, Card) to validate setup
4. Component customization working (theme colors applied correctly)
5. Components render successfully in development mode

## Story 1.5: Create Landing Page Hero Section

As a visitor,
I want to see an impactful hero section with developer introduction when I first visit the portfolio,
so that I immediately understand who the developer is and what they offer.

**Acceptance Criteria:**
1. Hero section displays developer name prominently
2. Professional tagline or value proposition visible (e.g., "Full-Stack Developer specializing in React & Node.js")
3. Brief 1-2 sentence introduction displayed
4. Placeholder or actual professional photo included with Next.js Image optimization
5. Primary CTA button present (e.g., "View Projects" or "Get in Touch")
6. Hero section is fully responsive (mobile, tablet, desktop)
7. Typography hierarchy is clear and professional
8. Section meets accessibility standards (semantic HTML, alt text for image)
9. Page successfully deploys to Vercel and is accessible via live URL

## Story 1.6: Add Global Layout and Navigation Structure

As a visitor,
I want to see consistent navigation across the portfolio,
so that I can easily move between different sections.

**Acceptance Criteria:**
1. Root layout created with consistent header/footer structure
2. Navigation component includes links to main sections (Home, About, Projects, Skills, Contact)
3. Navigation is responsive (hamburger menu on mobile, horizontal menu on desktop)
4. Active route highlighting implemented
5. Footer includes basic copyright and social media placeholder links
6. Layout applies to all pages
7. Navigation is keyboard accessible
8. Mobile navigation menu opens/closes smoothly
