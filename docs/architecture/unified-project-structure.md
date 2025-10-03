# Unified Project Structure

```plaintext
personal-portfolio/
├── .github/                    # CI/CD workflows
│   └── workflows/
│       ├── ci.yml              # Test and lint on PR
│       └── lighthouse.yml      # Lighthouse CI checks
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx            # Projects grid
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project pages
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact API route
│   ├── globals.css             # Global styles + Tailwind
│   └── not-found.tsx           # 404 page
├── components/                 # React components
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── ...
│   ├── layout/                 # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── nav.tsx
│   │   └── mobile-menu.tsx
│   ├── sections/               # Page sections
│   │   ├── hero.tsx
│   │   ├── projects-grid.tsx
│   │   ├── skills.tsx
│   │   └── contact-form.tsx
│   └── project/                # Project-specific
│       ├── project-card.tsx
│       ├── project-detail.tsx
│       └── tech-badge.tsx
├── content/                    # Content files
│   ├── projects/               # Project MDX files
│   │   ├── ecommerce-platform.mdx
│   │   ├── task-manager.mdx
│   │   ├── weather-app.mdx
│   │   └── _template.mdx
│   ├── data/                   # Structured data
│   │   ├── skills.ts
│   │   ├── about.ts
│   │   └── social-links.ts
│   ├── _IMAGE_GUIDELINES.md
│   └── README.md
├── lib/                        # Utilities and helpers
│   ├── content/
│   │   └── projects.ts         # MDX loading utilities
│   ├── api/
│   │   └── contact.ts          # API client functions
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   └── utils/
│       ├── cn.ts               # Tailwind class merge
│       └── email-validator.ts
├── public/                     # Static assets
│   ├── images/
│   │   ├── projects/           # Project images
│   │   │   ├── ecommerce-platform/
│   │   │   │   ├── thumbnail.webp
│   │   │   │   ├── screenshot-1.webp
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── avatar.webp         # Profile photo
│   │   └── og-image.png        # Social sharing image
│   ├── resume/
│   │   └── Resume.pdf
│   ├── favicon.ico
│   └── robots.txt
├── tests/                      # Test files
│   ├── components/
│   ├── api/
│   └── e2e/
├── docs/                       # Documentation
│   ├── prd.md
│   ├── front-end-spec.md
│   └── architecture.md         # This file
├── .env.local                  # Local environment variables (not committed)
├── .env.example                # Environment template
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── components.json             # shadcn/ui config
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment config
└── README.md                   # Project README
```

---
