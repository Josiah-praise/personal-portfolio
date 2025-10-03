# Development Workflow

## Local Development Setup

### Prerequisites

```bash
# Install Node.js 18+ (LTS recommended)
node --version  # Should be v18.x or v20.x

# Install pnpm (recommended) or npm
npm install -g pnpm

# Verify installations
pnpm --version
```

### Initial Setup

```bash
# Clone repository
git clone https://github.com/[username]/personal-portfolio.git
cd personal-portfolio

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values:
# RESEND_API_KEY=your_resend_api_key
# CONTACT_EMAIL=your@email.com

# Run development server
pnpm dev
```

### Development Commands

```bash
# Start all services (dev server on localhost:3000)
pnpm dev

# Type checking
pnpm type-check

# Linting
pnpm lint

# Format code
pnpm format

# Run tests
pnpm test              # Unit + integration tests
pnpm test:watch        # Watch mode
pnpm test:e2e          # End-to-end tests with Playwright

# Build for production (test SSG locally)
pnpm build
pnpm start             # Preview production build
```

---

## Environment Configuration

### Required Environment Variables

```bash
# Frontend (.env.local or Vercel env vars)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Backend (Server-side only, never expose to client)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your@email.com

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxxxxxxxxxxxx  # Auto-set by Vercel
```

**Security Notes:**
- Never commit `.env.local` to Git
- Use `NEXT_PUBLIC_` prefix ONLY for client-side variables
- Store secrets in Vercel dashboard (Settings → Environment Variables)
- Different values for Development, Preview, Production environments

---
