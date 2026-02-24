# Bearup's Blog

Personal blog exploring AI, Cybersecurity, Data, Privacy, and Emerging Technologies.
Built with Astro and deployed to GitHub Pages.

**Live site:** https://joshuabearup.github.io/Bearups-Blog/

## Features

- Clean, minimal design with dark mode toggle
- Pagefind search functionality
- Categories: AI, Cybersecurity, Data, Privacy, Emerging Tech
- Tags for granular organization
- Social sharing buttons (X, LinkedIn)
- RSS feed
- 5-minute reading time estimates
- WCAG AA accessible

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Pagefind](https://pagefind.app) - Static search
- GitHub Actions - CI/CD deployment
- GitHub Pages - Hosting

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images
│   ├── components/      # Astro components
│   ├── content/
│   │   └── blog/        # Blog posts (.md files)
│   ├── layouts/         # Page layouts
│   └── pages/           # Route pages
├── astro.config.mjs
└── package.json
```

## Commands

| Command           | Action                                      |
|:----------------  |:------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally                       |

## Adding Posts

Create a new `.md` file in `src/content/blog/`:

```yaml
---
title: 'Post Title'
description: 'Brief description'
pubDate: 'Feb 24 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
category: 'AI'
tags: ['Tag1', 'Tag2']
---

Post content here...
```

Categories: AI, Cybersecurity, Data, Privacy, Emerging Tech

## Deployment

Pushes to `main` branch trigger GitHub Actions workflow that builds and deploys to GitHub Pages.

---

Built with help from an OpenClaw AI agent running Kimi K2.5.
