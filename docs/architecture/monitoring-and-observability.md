# Monitoring and Observability

## Monitoring Stack

- **Frontend Monitoring:** Vercel Analytics (Core Web Vitals, page views, geographic distribution)
- **Backend Monitoring:** Vercel Function Logs (execution time, errors, invocation count)
- **Error Tracking:** Vercel Logs (free tier: 1 hour retention; consider Sentry for production if needed)
- **Performance Monitoring:** Lighthouse CI in GitHub Actions (regression detection)

---

## Key Metrics

**Frontend Metrics:**
- Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
- Page load time (p50, p95, p99)
- JavaScript errors (count, error messages)
- User interactions (button clicks, form submissions)
- Navigation patterns (page views, bounce rate)

**Backend Metrics:**
- Request rate (requests/second, requests/minute)
- Error rate (4xx, 5xx responses)
- Response time (p50, p95, p99)
- Function invocation count
- Function execution duration

**Key Performance Indicators (KPIs):**
- Lighthouse Performance Score: ≥ 90 (weekly check)
- API Error Rate: < 1% (contact form)
- LCP: < 2.5s (95th percentile)
- Contact form submission success rate: ≥ 95%

**Monitoring Setup:**
1. Vercel Analytics automatically enabled
2. GitHub Actions Lighthouse CI runs on every PR
3. Manual Lighthouse audits before major releases
4. Error logs reviewed weekly in Vercel dashboard

---
