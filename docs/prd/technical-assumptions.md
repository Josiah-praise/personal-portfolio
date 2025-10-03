# Technical Assumptions

## Repository Structure: Monorepo

Single repository containing all portfolio code, assets, and content. This simplifies deployment, version control, and maintenance for a solo developer project.

## Service Architecture

**Static Site Generation (SSG) with Next.js App Router**

The portfolio will be built as a statically generated site using Next.js 14+ with the App Router. Pages will be pre-rendered at build time for optimal performance and SEO. A serverless function will handle contact form submissions.

**Architecture components:**
- Next.js static site (pre-rendered pages)
- Serverless API route for contact form (/api/contact)
- Content managed through code (TypeScript/MDX files or JSON)
- Hosted on Vercel (optimal Next.js deployment platform with free tier)

## Testing Requirements

**Unit + Integration Testing**

- **Unit tests:** Component testing with React Testing Library for UI components
- **Integration tests:** API route testing for contact form functionality
- **Manual testing:** Visual QA and cross-browser testing before launch
- **Lighthouse CI:** Automated performance/accessibility testing in CI/CD pipeline

## Additional Technical Assumptions and Requests

**Frontend Framework & Libraries:**
- **Next.js 14+** with App Router (user preference, optimal for SSG + SEO)
- **React 18+** (included with Next.js)
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for styling (rapid development, consistent design system, excellent performance)
- **shadcn/ui** for UI components (high-quality, accessible, customizable component library)
- **Framer Motion** for subtle animations (optional, only if performance budget allows)

**Content Management:**
- Project data and content stored as MDX files with TypeScript-validated frontmatter
- Structured content in `/content/projects/*.mdx` for project case studies
- Skills, about content, and configuration in TypeScript files (`/content/data/`)
- No CMS or database required for MVP
- Version controlled in Git for complete change history

**Form Handling:**
- Next.js API route (/api/contact) processes form submissions
- Email service: **Resend** or **SendGrid** free tier for email delivery
- Spam protection: **Honeypot technique** (avoid reCAPTCHA for better UX and free operation)

**Image Optimization:**
- Next.js Image component for automatic optimization
- Images stored in /public or external CDN
- WebP format with fallbacks

**Analytics:**
- **Vercel Analytics** (free, privacy-focused, no cookie consent required) or **Google Analytics 4** (more comprehensive but requires cookie consent)

**SEO:**
- Next.js Metadata API for SEO tags
- Sitemap and robots.txt automatically generated
- Open Graph and Twitter Card meta tags for social sharing

**Deployment & Hosting:**
- **Vercel** free tier (seamless Next.js integration, automatic deployments from Git, global CDN)
- Custom domain ($10-15/year for domain registration)
- HTTPS automatic through Vercel

**Version Control:**
- Git with GitHub repository
- GitHub Actions for CI/CD (Lighthouse checks, tests)

**Development Tools:**
- ESLint + Prettier for code quality
- Husky for pre-commit hooks (linting, type-checking)
- pnpm or npm for package management
