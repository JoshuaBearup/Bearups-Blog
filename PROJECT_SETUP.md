# Bearups Blog - Project Documentation

## Project Location
`/home/lawdcollins/.openclaw/workspace/projects/blog`

## Target Deployment
- **URL**: https://joshuabearup.github.io/Bearups-Blog/
- **Platform**: GitHub Pages
- **Base Path**: `/Bearups-Blog/`

## Project Structure

```
blog/
├── .github/workflows/       # GitHub Actions for CI/CD
│   └── deploy.yml           # Automated deployment workflow
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── assets/              # Image assets
│   ├── components/          # Reusable Astro components
│   │   ├── BaseHead.astro   # HTML head template
│   │   ├── Footer.astro     # Site footer
│   │   ├── FormattedDate.astro  # Date formatting component
│   │   ├── Header.astro     # Site header
│   │   └── HeaderLink.astro # Navigation link component
│   ├── content/             # Blog content (Markdown/MDX)
│   │   └── blog/
│   │       ├── first-post.md
│   │       ├── markdown-style-guide.md
│   │       ├── second-post.md
│   │       ├── third-post.md
│   │       └── using-mdx.mdx
│   ├── layouts/             # Page layouts
│   │   └── BlogPost.astro   # Blog post layout
│   ├── pages/               # Route pages
│   │   ├── about.astro      # About page
│   │   ├── index.astro      # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro  # Blog listing page
│   │   │   └── [...slug].astro  # Dynamic blog post routes
│   │   └── rss.xml.js       # RSS feed
│   ├── consts.ts            # Site constants
│   ├── content.config.ts    # Content collection config
│   └── styles/global.css    # Global styles
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── README.md                # Original template README
```

## Configuration Choices

### 1. Base URL Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://joshuabearup.github.io',
  base: '/Bearups-Blog/',
  integrations: [mdx(), sitemap()],
});
```
- **site**: Set to GitHub Pages user domain
- **base**: Set to repository name for subdirectory deployment

### 2. GitHub Actions Workflow
- Uses `withastro/action@v3` for building
- Uses `actions/deploy-pages@v4` for deployment
- Triggers on pushes to `main` branch

### 3. Integrations
- **@astrojs/mdx**: Enables MDX support for interactive blog posts
- **@astrojs/sitemap**: Auto-generates sitemap.xml for SEO
- **@astrojs/rss**: Generates RSS feed for blog subscribers
- **sharp**: Image optimization

## Key Files and Their Purposes

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Main Astro configuration including site URL and base path |
| `src/consts.ts` | Site-wide constants (title, description, etc.) |
| `src/content.config.ts` | Content collection schema definition |
| `src/components/BaseHead.astro` | Reusable HTML head with meta tags, OG tags |
| `src/layouts/BlogPost.astro` | Layout wrapper for individual blog posts |
| `src/pages/rss.xml.js` | RSS feed generator |

## Setup Issues Encountered

1. **None** - The template was successfully cloned using `degit` and dependencies are being installed.

## Next Steps for Design System Agent

1. **Customize Site Identity**
   - Update `src/consts.ts` with site title, description, author info
   - Replace favicon files in `public/`
   - Update `src/pages/about.astro` with personal information

2. **Design System Implementation**
   - Review and customize `src/styles/global.css`
   - Update color scheme, typography, and spacing
   - Modify component styles in `src/components/`

3. **Content Creation**
   - Remove example posts from `src/content/blog/`
   - Create first real blog post
   - Update homepage content in `src/pages/index.astro`

4. **GitHub Repository Setup**
   - Create repository `Bearups-Blog` on GitHub
   - Push local repo to GitHub
   - Configure GitHub Pages settings

5. **Custom Domain (Optional)**
   - If using custom domain later, update `site` in `astro.config.mjs`
   - Remove `base` configuration for root deployment
   - Add `CNAME` file for custom domain

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Blog Template](https://github.com/withastro/astro/tree/main/examples/blog)
- [GitHub Pages Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
