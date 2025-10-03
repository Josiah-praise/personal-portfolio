# Epic 2: Content Pages & Navigation

**Goal:** Build out all core content sections of the portfolio (About, Projects overview, Skills, Contact info) with fully responsive design and smooth navigation between sections. After this epic, the portfolio will have all essential information visible and navigable, providing complete (if not yet deeply detailed) professional presentation.

## Story 2.1: Create About Page with Developer Story

As a recruiter,
I want to read about the developer's background and journey,
so that I can understand their experience and whether they're a good cultural fit.

**Acceptance Criteria:**
1. About page created at /about route (or about section if single-page design)
2. Developer background story displayed (journey into development, motivation)
3. Core competencies section lists key technical and soft skills
4. Professional experience summary included
5. Content is formatted with clear sections and readable typography
6. Page is fully responsive across all device sizes
7. Images (if any) are optimized with Next.js Image component
8. Page accessible via navigation menu

## Story 2.2: Add Downloadable Resume/CV Feature

As a recruiter,
I want to download the developer's resume in PDF format,
so that I can review credentials offline or share with team members.

**Acceptance Criteria:**
1. Resume PDF file stored in /public/resume folder
2. "Download Resume" button prominently displayed on About page
3. Button click triggers PDF download (not open in new tab)
4. PDF filename is professional (e.g., "John_Doe_Resume.pdf")
5. Button has clear icon (download symbol) and is visually distinct as CTA
6. Button is accessible (keyboard navigable, screen reader friendly)
7. File size is optimized (< 1MB)

## Story 2.3: Build Projects Overview Grid

As a recruiter,
I want to see a visual overview of the developer's featured projects,
so that I can quickly scan their work and select projects of interest.

**Acceptance Criteria:**
1. Projects page/section created displaying 3-5 project cards in grid layout
2. Each project card shows: project title, brief 1-sentence description, thumbnail image, technology tags
3. Grid is responsive (3 columns desktop, 2 columns tablet, 1 column mobile)
4. Project cards have hover states indicating interactivity
5. Cards link to project detail pages (placeholders OK for now)
6. Images are optimized using Next.js Image with appropriate sizing
7. Section accessible via main navigation
8. Loading performance meets requirements (no layout shift)

## Story 2.4: Create Skills/Technologies Section

As a recruiter,
I want to see a clear breakdown of the developer's technical skills,
so that I can quickly determine if they match our technology requirements.

**Acceptance Criteria:**
1. Skills page/section created displaying technical skills organized by category
2. Categories include minimum: Languages, Frameworks/Libraries, Tools/Platforms, Practices
3. Each skill displayed with visual treatment (tags, badges, or icons)
4. Skills are logically grouped and easy to scan
5. Section is responsive and readable on all devices
6. Optional: Proficiency levels indicated (if applicable)
7. Section accessible via main navigation

## Story 2.5: Add Contact Information Display

As a recruiter or client,
I want to easily find how to contact the developer,
so that I can reach out about opportunities.

**Acceptance Criteria:**
1. Contact page/section created with clear heading
2. Professional contact channels displayed: Email, LinkedIn profile link, GitHub profile link
3. Contact information is prominently visible without needing to scroll
4. Links open in appropriate manner (email opens mail client, social links open in new tab)
5. Section includes brief invitation to connect (e.g., "Let's work together!")
6. Placeholder messaging indicates contact form coming in future epic
7. Section is fully responsive
8. Section accessible via main navigation

## Story 2.6: Implement Smooth Scroll Navigation (If Single-Page Design)

As a visitor,
I want navigation to smoothly scroll to different sections,
so that the browsing experience feels polished and intentional.

**Acceptance Criteria:**
1. Navigation links trigger smooth scroll to corresponding sections (if single-page design)
2. Scroll behavior is smooth and not jarring (appropriate duration/easing)
3. URL hash updates to reflect current section (e.g., #about, #projects)
4. Active navigation link updates as user scrolls through sections
5. Scroll behavior works on all devices and browsers
6. Keyboard navigation (Tab + Enter) also triggers smooth scroll
7. If multi-page design: page transitions are smooth without harsh loading states

## Story 2.7: Add Responsive Images and Media Optimization

As a visitor,
I want images to load quickly and look sharp on my device,
so that the portfolio feels professional and performs well.

**Acceptance Criteria:**
1. All images use Next.js Image component with appropriate sizes
2. Images are served in WebP format with fallbacks
3. Responsive image sizing configured (different resolutions for different viewports)
4. Lazy loading enabled for below-the-fold images
5. All images have descriptive alt text for accessibility
6. No Cumulative Layout Shift from images (aspect ratios defined)
7. Image optimization verified with Lighthouse (no unoptimized images warnings)
