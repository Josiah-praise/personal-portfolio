# Backend Architecture

## Service Architecture

### Function Organization

```
/app/api
└── contact
    └── route.ts               # POST /api/contact

Future expansion:
/app/api
├── contact
│   └── route.ts
├── subscribe                  # Newsletter signup (future)
│   └── route.ts
└── analytics                  # Custom analytics endpoint (future)
    └── route.ts
```

**Serverless Architecture:**
- Each API route is deployed as a separate Vercel Function
- Automatic scaling (0 to infinity)
- Pay-per-invocation model (free tier: unlimited invocations)

### Function Template

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { ContactFormData } from '@/lib/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Spam check (honeypot)
    if (body.honeypot) {
      // Silently reject (fake success to bot)
      return NextResponse.json({ success: true, message: 'Message sent!' });
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@yourdomain.com>',
      to: [process.env.CONTACT_EMAIL!],
      replyTo: body.email,
      subject: `Portfolio Contact: ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${body.name} (${body.email})</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! I'll respond within 24 hours."
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: `Failed to send message. Please email me directly at ${process.env.CONTACT_EMAIL}`
      },
      { status: 500 }
    );
  }
}
```

**Function Best Practices:**
- Input validation on all requests
- Comprehensive error handling
- Environment variables for secrets
- Clear response structures
- Logging for debugging

---

## Database Architecture

**Not applicable** - See "Database Schema" section above.

---

## Authentication and Authorization

**Not applicable** - Portfolio has no authentication requirements.

**Future Considerations:**
If admin functionality is needed (e.g., CMS panel), consider:
- **NextAuth.js** - OAuth providers (GitHub, Google)
- **Clerk** - Full authentication solution with UI
- **Supabase Auth** - Open-source auth with magic links

---
