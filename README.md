# Personal Portfolio

Modern portfolio website showcasing projects, skills, and professional experience.

## Tech Stack

- **Framework:** Next.js 15.5.4
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Deployment:** Vercel

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Linting

```bash
# Run ESLint
npm run lint
```

## Environment Variables

Environment variables will be added as features are implemented (e.g., contact form email service).

Create a `.env.local` file in the root directory for local development:

```
# Future variables will be documented here
```

## Deployment

This project is configured for automatic deployment on Vercel:

- **Production:** Deploys from `main` branch
- **Preview:** Automatic preview URLs for feature branches

## Project Structure

```
├── app/                # Next.js App Router pages
├── components/         # React components
├── lib/               # Utility functions and helpers
├── public/            # Static assets
└── docs/              # Project documentation
```

## License

All rights reserved.
