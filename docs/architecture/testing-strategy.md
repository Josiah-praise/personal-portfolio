# Testing Strategy

## Testing Pyramid

```
        E2E Tests
        /        \
   Integration Tests
   /            \
Component Tests  API Tests
```

**Distribution:**
- **70%** Component/Unit tests (fast, isolated)
- **20%** Integration tests (API routes, data loading)
- **10%** E2E tests (critical user flows)

---

## Test Organization

### Frontend Tests

```
tests/
├── components/
│   ├── layout/
│   │   ├── header.test.tsx
│   │   ├── nav.test.tsx
│   │   └── footer.test.tsx
│   ├── sections/
│   │   ├── hero.test.tsx
│   │   ├── projects-grid.test.tsx
│   │   └── contact-form.test.tsx
│   └── project/
│       ├── project-card.test.tsx
│       └── tech-badge.test.tsx
└── lib/
    ├── content/
    │   └── projects.test.ts
    └── utils/
        └── email-validator.test.ts
```

**Testing Library:** Vitest + React Testing Library
**Approach:** User-centric (test what users see/do, not implementation details)

### Backend Tests

```
tests/
└── api/
    └── contact/
        └── route.test.ts
```

**Testing Library:** Vitest
**Approach:** Request/response testing with mocked Resend API

### E2E Tests

```
tests/
└── e2e/
    ├── homepage.spec.ts
    ├── project-detail.spec.ts
    ├── contact-form.spec.ts
    └── navigation.spec.ts
```

**Testing Library:** Playwright
**Coverage:** Critical user flows only (homepage load, project view, contact submit, navigation)

---

## Test Examples

### Frontend Component Test

```typescript
// tests/components/project/project-card.test.tsx
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/project/project-card';
import { describe, it, expect } from 'vitest';

describe('ProjectCard', () => {
  const mockProject = {
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Full-stack online store',
    featured: true,
    order: 1,
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    category: 'Full-Stack' as const,
    startDate: '2024-01',
    endDate: '2024-06',
    thumbnail: '/images/test-thumbnail.webp',
    images: []
  };

  it('renders project title and description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Full-stack online store')).toBeInTheDocument();
  });

  it('displays technology badges', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('links to project detail page', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/ecommerce-platform');
  });
});
```

### Backend API Test

```typescript
// tests/api/contact/route.test.ts
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';
import { describe, it, expect, vi } from 'vitest';

// Mock Resend
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null })
    }
  }))
}));

describe('POST /api/contact', () => {
  it('returns 200 for valid submission', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
        honeypot: ''
      })
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.success).toBe(true);
  });

  it('returns 400 for missing fields', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' }) // Missing email and message
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('rejects spam (honeypot filled)', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Spam Bot',
        email: 'spam@example.com',
        message: 'Spam',
        honeypot: 'filled'  // Bot filled honeypot
      })
    });

    const response = await POST(request);
    const json = await response.json();

    // Returns fake success to deceive bot
    expect(json.success).toBe(true);
    // But email was never sent (check mock wasn't called - implementation detail)
  });
});
```

### E2E Test

```typescript
// tests/e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('successfully submits contact form', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');

    // Fill out form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('textarea[name="message"]', 'I would like to discuss a project opportunity.');

    // Submit
    await page.click('button[type="submit"]');

    // Verify success message appears
    await expect(page.locator('text=Thanks for reaching out')).toBeVisible();
  });

  test('shows validation errors for invalid email', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');

    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'invalid-email');  // Invalid format
    await page.fill('textarea[name="message"]', 'Test message');

    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid email')).toBeVisible();
  });
});
```

---
