# Epic 4: Contact System & Analytics

**Goal:** Enable visitors to contact the developer through a functional, spam-protected contact form with email delivery, and implement analytics tracking to measure portfolio performance and visitor behavior. After this epic, the portfolio transitions from static showcase to interactive tool for lead generation and data-driven improvement.

## Story 4.1: Create Contact Form UI Component

As a visitor,
I want to fill out a contact form with my details and message,
so that I can easily reach out to the developer without leaving the site.

**Acceptance Criteria:**
1. Contact form component created with fields: Name (required), Email (required), Subject (optional), Message (required)
2. Form includes clear labels and placeholder text
3. Form validation implemented client-side (email format, required fields)
4. Submit button is prominent and clearly labeled
5. Form is fully responsive and usable on all devices
6. Input fields have appropriate focus states and accessibility attributes
7. Form replaces/enhances contact info display from Epic 2

## Story 4.2: Implement Honeypot Spam Protection

As a developer,
I want to prevent spam submissions without requiring users to complete CAPTCHA,
so that the contact form stays user-friendly while filtering out bots.

**Acceptance Criteria:**
1. Hidden honeypot field added to form (not visible to users)
2. Honeypot field has name that's attractive to bots (e.g., "website" or "url")
3. Form submission handler checks honeypot field
4. If honeypot is filled, submission is silently rejected (no error shown, appears successful to bot)
5. Legitimate submissions (empty honeypot) proceed to processing
6. Honeypot implementation documented for future reference
7. No impact on form UX for real users

## Story 4.3: Build Contact Form API Route

As a developer,
I want a serverless API endpoint that processes contact form submissions,
so that messages are sent to my email without exposing email address to scrapers.

**Acceptance Criteria:**
1. API route created at /api/contact (Next.js API route)
2. Route accepts POST requests with form data
3. Route validates request payload (required fields present, email format valid)
4. Route checks honeypot field for spam
5. Route returns appropriate status codes (200 success, 400 bad request, 500 server error)
6. Route returns JSON responses with success/error messages
7. Error handling implemented for all failure scenarios
8. Rate limiting considered (optional for MVP, can use Vercel's built-in protection)

## Story 4.4: Integrate Email Service for Message Delivery

As a developer,
I want contact form submissions sent to my email address,
so that I receive notifications of inquiries and can respond promptly.

**Acceptance Criteria:**
1. Email service configured (Resend, SendGrid, or similar free tier service)
2. API route integrated with email service SDK
3. Email sent on successful form submission containing: sender name, sender email, subject, message, timestamp
4. Email recipient is developer's professional email address
5. Email "from" address is configured (may be no-reply@domain or service-specific)
6. Email "reply-to" is set to sender's email for easy response
7. Email service API key stored securely in Vercel environment variables
8. Successful email delivery confirmed through testing

## Story 4.5: Add Form Submission Feedback and Error States

As a visitor,
I want clear feedback after submitting the contact form,
so that I know my message was sent successfully or if there was an error.

**Acceptance Criteria:**
1. Loading state displayed while form is submitting (button disabled, spinner shown)
2. Success message displayed after successful submission (e.g., "Thanks for reaching out! I'll respond within 24 hours.")
3. Error message displayed if submission fails (e.g., "Something went wrong. Please try again or email me directly at [email].")
4. Form fields cleared after successful submission
5. Success/error messages are visually distinct and accessible (ARIA live regions)
6. Email fallback provided in error state so visitor can still reach developer
7. Submission state resets after timeout or user acknowledgment

## Story 4.6: Integrate Analytics Tracking

As a developer,
I want to track visitor behavior and portfolio performance,
so that I can understand what's working and optimize for better engagement.

**Acceptance Criteria:**
1. Analytics service integrated (Vercel Analytics or Google Analytics 4)
2. Page views tracked across all routes
3. Key events tracked: Resume download, Project detail views, External link clicks (live demo, GitHub, social)
4. Contact form submission tracked as conversion event
5. Analytics script loaded asynchronously without blocking page render
6. If using GA4: Cookie consent mechanism implemented (simple banner or toast)
7. Analytics verified working through dashboard/real-time reports
8. No impact on Lighthouse performance score

## Story 4.7: Create Basic 404 Error Page

As a visitor,
I want a helpful 404 page if I navigate to a non-existent URL,
so that I can easily return to the main portfolio sections.

**Acceptance Criteria:**
1. Custom 404 page created (not-found.tsx in Next.js App Router)
2. Page includes clear message (e.g., "Page not found" or "This page doesn't exist")
3. Navigation links provided to return home or visit main sections
4. Page styling consistent with overall portfolio design
5. Page is responsive
6. Lighthearted or on-brand messaging optional (e.g., "Looks like this page is still in development")
7. 404 page renders correctly when accessing invalid routes
