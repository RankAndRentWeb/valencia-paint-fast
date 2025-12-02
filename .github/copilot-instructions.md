# Copilot Instructions - Pintores Valencia

## Project Overview
This is an **Astro + React hybrid architecture** for a painting services website (pintores-valencia.com). The site uses:
- **Astro** for static pages, routing, and SEO-optimized layouts
- **React** for interactive components via "Islands" (hydrated with `client:load`)
- **Content Collections** for type-safe blog and service content management
- **shadcn/ui + Tailwind** for UI components and styling

## Architecture Patterns

### Hybrid Astro + React Strategy
- **Astro pages** (`.astro`): Use for static routes, layouts, and server-side rendering
- **React components** (`.tsx`): Use for interactive UI, forms, and stateful widgets
- **Hydration directives**: Always use `client:load` for interactive React components in `.astro` files
- **File naming convention**: Components starting with `_` (e.g., `_Index.tsx`, `_Blog.tsx`) are React pages used as "islands" within Astro routes

### Content Collections (Key Pattern)
Content is managed via Astro Content Collections in `src/content/`:
- **`blogs/`**: Blog posts organized by category subdirectories (e.g., `blogs/gotele/`, `blogs/colores/`)
- **`blogCategories/`**: JSON files defining blog category metadata
- **`services/`**: Markdown files with structured frontmatter for service pages
- **Schema definition**: All schemas in `src/content/config.ts` with Zod validation

**Blog routing pattern**:
- Blog slugs are computed: `{categorySlug}/{postSlug}` (e.g., `gotele/como-quitar-gotele-paredes`)
- Use `getCollection('blogs')` to fetch posts, then filter by `slug.startsWith(category + "/")`
- Dynamic routes: `src/pages/blog/[category]/[slug].astro` uses `getStaticPaths()` to generate all blog pages at build time

### Import Alias
- Always use `@/` alias for imports from `src/` (configured in `astro.config.mjs` and `tsconfig.json`)
- Example: `import { Button } from "@/components/ui/button"`

### URL Structure & Redirects
- **Trailing slashes required**: All URLs end with `/` (configured in `astro.config.mjs`)
- **Legacy redirects**: Managed in `vercel.json` (e.g., `/blogs` → `/blog/`)
- **Sitemap generation**: Custom script `scripts/copy-sitemap.mjs` runs post-build to copy `sitemap-index.xml` → `sitemap.xml`

## Development Workflow

### Commands
```bash
npm run dev          # Start dev server (Astro)
npm run build        # Build static site + copy sitemap
npm run build:astro  # Build without post-processing
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Adding New Blog Posts
1. Create markdown file in appropriate category: `src/content/blogs/{category}/{slug}.md`
2. Add frontmatter matching `blogs` schema in `src/content/config.ts`:
   ```markdown
   ---
   title: "Post Title"
   excerpt: "Short description"
   categorySlug: "gotele"  # Must match category
   postSlug: "slug-name"   # Optional, defaults to filename
   date: "2025-12-02"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Images: Place in `public/_blog/` and reference as `/_blog/image.jpg`
4. No need to update routing - `getStaticPaths()` auto-generates routes

### Adding New Services
1. Create markdown in `src/content/services/{slug}.md`
2. Follow `services` schema (see `src/content/config.ts`)
3. Create corresponding page in `src/pages/servicios/{slug}/index.astro`
4. Use `getEntry('services', 'slug')` to fetch content

## SEO & Performance

### Title Handling
- **Critical**: Titles are automatically cleaned in `SiteLayout.astro` - never manually append brand suffix
- Set page titles WITHOUT suffix: `title="Pintura Interior"` (not "Pintura Interior - Pintores Valencia")
- Layout removes any existing suffix and uses `fullTitle` directly

### Structured Data
- Default LocalBusiness schema in `SiteLayout.astro`
- Add page-specific schema via `schema` prop (array of JSON-LD objects)

### Image Optimization
- Use `loading="lazy"` for below-fold images
- Preload critical images via `preloadImages` prop in `SiteLayout.astro`
- Store assets in `src/assets/` (processed by Vite) or `public/` (static)

## UI Component Patterns

### shadcn/ui Usage
- All UI components in `src/components/ui/`
- Import via alias: `@/components/ui/{component}`
- Styled with Tailwind using CSS variables defined in `src/styles/global.css`

### Common Components
- `Breadcrumbs.tsx`: Always use `client:load` for breadcrumb navigation
- `CategoryPageLayout.tsx`: Reusable layout for blog category pages (icons, posts list, CTA)
- `BlogPost.astro`: Template for individual blog posts with ads and structured markup

## Deployment & Build

### Vercel Configuration
- Static site generation (`output: 'static'` in `astro.config.mjs`)
- Cache headers for assets in `vercel.json`
- Redirects for legacy URLs in `vercel.json`
- Post-build sitemap processing via `scripts/copy-sitemap.mjs`

### Environment-Specific Code
- Check `import.meta.env.PROD` for production-only features (e.g., SpeedInsights)

## Common Gotchas

1. **React components in Astro**: Must use hydration directive (`client:load`) or they won't be interactive
2. **Content Collections**: Always use `getCollection()` or `getEntry()` from `astro:content`, not filesystem imports
3. **Blog slugs**: Automatically computed from `categorySlug/postSlug` via schema transform - don't manually construct
4. **Trailing slashes**: All internal links must end with `/` to match routing config
5. **Title suffixes**: Never manually add brand suffix to titles - handled by layout
6. **URL structure**: Old `/blogs` routes redirect to `/blog/` - always use new structure

## Testing & Quality

- ESLint configuration in `eslint.config.js`
- TypeScript strict mode enabled
- No automated tests currently - manual QA workflow
