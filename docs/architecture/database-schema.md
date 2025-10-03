# Database Schema

**Not Applicable**

This portfolio uses a **database-free architecture**. All content is stored as MDX files with TypeScript-validated frontmatter, eliminating the need for a database.

**Content Storage Strategy:**
- **Projects:** MDX files in `/content/projects/*.mdx`
- **Skills:** TypeScript data file `/content/data/skills.ts`
- **Configuration:** TypeScript files in `/content/data/`

**Rationale:**
- Portfolio content is static and changes infrequently
- No user-generated content requiring persistence
- Version control provides change history
- Zero database hosting costs
- Eliminates query latency at runtime
- Type safety via TypeScript schemas

**Future Considerations:**
If dynamic features are needed later (e.g., blog with comments, analytics dashboard, CMS), consider:
- **Supabase** (PostgreSQL + Auth + Storage, generous free tier)
- **PlanetScale** (MySQL, serverless, free tier)
- **MongoDB Atlas** (NoSQL, free tier)

But for MVP and foreseeable future, database is unnecessary overhead.

---
