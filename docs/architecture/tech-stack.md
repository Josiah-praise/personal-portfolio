# Tech Stack

## Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|-----------|---------|---------|-----------|
| Frontend Language | TypeScript | 5.3+ | Type-safe JavaScript | Catch errors at compile time, better DX with autocomplete, industry standard for production apps |
| Frontend Framework | Next.js | 14.2+ | React meta-framework with SSG/SSR | App Router, built-in optimizations, perfect Lighthouse scores achievable, Vercel integration |
| UI Component Library | shadcn/ui | Latest | Accessible, customizable components | Built on Radix UI primitives, copy-paste components (no npm bloat), full TypeScript support |
| State Management | React Context + Hooks | 18.2+ | Client-side state | Built-in solution sufficient for portfolio (no complex state), avoids Redux overhead |
| Backend Language | TypeScript | 5.3+ | Serverless function logic | Code sharing between frontend/backend, type safety across stack |
| Backend Framework | Next.js API Routes | 14.2+ | Serverless endpoint handlers | Zero config, deployed as Vercel Functions, automatic scaling |
| API Style | REST | N/A | Contact form endpoint | Simple POST request sufficient, no need for GraphQL/tRPC complexity |
| Database | None (MDX Files) | N/A | Content storage | Static content doesn't need DB, MDX with frontmatter provides structured data |
| Cache | Vercel Edge Cache | N/A | Static asset caching | Automatic, zero config, CDN-level caching |
| File Storage | Vercel Blob Storage | N/A | Image hosting (optional) | Alternative to /public folder, integrated with Next.js Image, free tier: 1GB |
| Authentication | None | N/A | No auth needed | Public portfolio, no login required |
| Frontend Testing | Vitest + React Testing Library | Latest | Component & unit tests | Fast, compatible with Next.js, modern alternative to Jest |
| Backend Testing | Vitest | Latest | API route testing | Same tooling as frontend, consistent DX |
| E2E Testing | Playwright | Latest | End-to-end flows | Microsoft-maintained, cross-browser, reliable |
| Build Tool | Next.js Compiler (SWC) | Built-in | Transpilation & bundling | 17x faster than Babel, built into Next.js 12+ |
| Bundler | Turbopack (Next.js 14) | Built-in | Development bundler | Next-gen bundler, 700x faster than Webpack |
| IaC Tool | None (Vercel Config) | N/A | Infrastructure as code | Vercel handles infra via vercel.json, no Terraform needed |
| CI/CD | GitHub Actions + Vercel | N/A | Automated testing & deployment | Free for public repos, Vercel auto-deploys on push |
| Monitoring | Vercel Analytics | N/A | Performance & user metrics | Privacy-focused, no cookies, Core Web Vitals tracking |
| Logging | Vercel Logs | N/A | Function execution logs | Built-in, 1-hour retention on free tier |
| CSS Framework | Tailwind CSS | 3.4+ | Utility-first styling | Rapid development, tiny production bundles, integrates with shadcn/ui |
| Email Service | Resend | Latest SDK | Transactional emails | Developer-friendly API, 3,000 emails/month free, React Email templates |

---
