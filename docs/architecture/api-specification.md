# API Specification

## REST API Specification

```yaml
openapi: 3.0.0
info:
  title: Personal Portfolio API
  version: 1.0.0
  description: Serverless API endpoints for portfolio contact functionality
servers:
  - url: https://{custom-domain}.com/api
    description: Production deployment
  - url: http://localhost:3000/api
    description: Local development

paths:
  /contact:
    post:
      summary: Submit contact form
      description: Processes contact form submission and sends email notification to portfolio owner
      operationId: submitContactForm
      tags:
        - Contact
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - name
                - email
                - message
              properties:
                name:
                  type: string
                  minLength: 2
                  maxLength: 100
                  example: "Jane Smith"
                  description: Sender's full name
                email:
                  type: string
                  format: email
                  example: "jane.smith@example.com"
                  description: Sender's email address (validated)
                message:
                  type: string
                  minLength: 10
                  maxLength: 2000
                  example: "I'd like to discuss a potential project opportunity..."
                  description: Message content
                honeypot:
                  type: string
                  description: Spam protection field (should be empty for legitimate submissions)
                  example: ""
      responses:
        '200':
          description: Form submitted successfully, email sent
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: true
                  message:
                    type: string
                    example: "Thanks for reaching out! I'll respond within 24 hours."
        '400':
          description: Bad request - validation failed
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: false
                  error:
                    type: string
                    example: "Invalid email format"
              examples:
                missingFields:
                  value:
                    success: false
                    error: "Missing required fields: name, email, message"
                invalidEmail:
                  value:
                    success: false
                    error: "Invalid email format"
                spamDetected:
                  value:
                    success: false
                    error: "Spam submission detected"
        '429':
          description: Too many requests (rate limited)
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: false
                  error:
                    type: string
                    example: "Rate limit exceeded. Please try again later."
        '500':
          description: Server error - email delivery failed
          content:
            application/json:
              schema:
                type: object
                properties:
                  success:
                    type: boolean
                    example: false
                  error:
                    type: string
                    example: "Failed to send email. Please try again or contact me directly at contact@example.com"

components:
  schemas:
    ContactFormData:
      type: object
      required:
        - name
        - email
        - message
      properties:
        name:
          type: string
        email:
          type: string
          format: email
        message:
          type: string
        honeypot:
          type: string

    ContactFormResponse:
      type: object
      properties:
        success:
          type: boolean
        message:
          type: string
        error:
          type: string
```

**Authentication:** None required (public API endpoint)

**Rate Limiting:** Implemented via Vercel's built-in rate limiting or custom middleware (5 requests per minute per IP)

**CORS Policy:** Same-origin only (portfolio domain)

---
