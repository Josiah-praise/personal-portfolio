# Deployment Architecture

## Deployment Strategy

**Frontend Deployment:**
- **Platform:** Vercel
- **Build Command:** `pnpm build` (or `npm run build`)
- **Output Directory:** `.next` (auto-detected)
- **CDN/Edge:** Automatic via Vercel Edge Network (300+ locations globally)
- **Rendering:** Static Site Generation (SSG) - all pages pre-rendered at build time

**Backend Deployment:**
- **Platform:** Vercel Functions (serverless)
- **Build Command:** Same as frontend (Next.js API routes bundled automatically)
- **Deployment Method:** Git push triggers automatic deployment
- **Runtime:** Node.js 20.x

**Deployment Triggers:**
- **Production:** Push to `main` branch → deploys to production domain
- **Preview:** Push to any other branch / PR → unique preview URL
- **Manual:** Vercel CLI (`vercel --prod`)

---

## CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Type check
        run: pnpm type-check

      - name: Lint
        run: pnpm lint

      - name: Run tests
        run: pnpm test

      - name: Build
        run: pnpm build

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://preview-deployment-url.vercel.app
          uploadArtifacts: true
          temporaryPublicStorage: true
```

**Pipeline Stages:**
1. **Lint & Type Check** - Catch syntax errors and type issues
2. **Unit Tests** - Validate component behavior
3. **Build** - Ensure static generation succeeds
4. **E2E Tests** - Test critical user flows (optional in CI, can be local-only)
5. **Lighthouse CI** - Performance regression detection

**Vercel Handles:**
- Automatic deployments on git push
- Preview URLs for every PR
- Rollback to previous deployments
- Zero-downtime deployments

---

## Environments

| Environment | Frontend URL | Backend URL | Purpose |
|-------------|-------------|-------------|---------|
| **Development** | http://localhost:3000 | http://localhost:3000/api | Local development and testing |
| **Preview** | https://personal-portfolio-{hash}.vercel.app | Same domain /api | PR previews, branch testing |
| **Production** | https://yourdomain.com | https://yourdomain.com/api | Live public site |

**Environment Variables per Stage:**
- Development: `.env.local` file
- Preview: Vercel Preview environment variables
- Production: Vercel Production environment variables

---
