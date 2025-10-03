# Security and Performance

## Security Requirements

**Frontend Security:**
- **CSP Headers:** Configured in `next.config.js` to prevent XSS
  ```javascript
  // next.config.js
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live; style-src 'self' 'unsafe-inline';"
        }
      ]
    }];
  }
  ```
- **XSS Prevention:** React auto-escapes user input; MDX content sanitized via next-mdx-remote
- **Secure Storage:** No sensitive data stored client-side (no tokens, no localStorage secrets)

**Backend Security:**
- **Input Validation:** All API routes validate request payloads (zod schema validation recommended)
- **Rate Limiting:** Vercel's built-in protection (100 req/10sec per IP) + custom middleware if needed
- **CORS Policy:** Default same-origin; explicit CORS headers only if cross-origin needed
  ```typescript
  // Explicit CORS (if needed)
  res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  ```

**Authentication Security:**
- **Token Storage:** N/A (no auth)
- **Session Management:** N/A (no sessions)
- **Password Policy:** N/A (no passwords)

**Additional Security Measures:**
- HTTPS enforced (automatic via Vercel)
- Environment variables encrypted at rest
- Honeypot spam protection (invisible field)
- Email validation (format + DNS check optional)

---

## Performance Optimization

**Frontend Performance:**
- **Bundle Size Target:** < 200KB gzipped for initial load
- **Loading Strategy:**
  - Critical CSS inlined automatically by Next.js
  - Fonts loaded via `next/font` (zero layout shift)
  - Images lazy-loaded below fold
- **Caching Strategy:**
  - Static assets: `Cache-Control: public, max-age=31536000, immutable`
  - HTML pages: `Cache-Control: public, max-age=0, must-revalidate`
  - API routes: `Cache-Control: no-store` (contact form)

**Backend Performance:**
- **Response Time Target:** < 200ms for API routes (p95)
- **Database Optimization:** N/A (no database)
- **Caching Strategy:** MDX content cached at build time (no runtime queries)

**Measured Performance Targets (from PRD):**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1
- Lighthouse Performance Score: ≥ 90

**Optimization Techniques:**
- Next.js Image component (automatic WebP, responsive sizing)
- Font optimization (subsetting, preloading via next/font)
- Code splitting (automatic per-route)
- Tree-shaking (unused code eliminated)
- Static generation (zero server-side processing)

---
