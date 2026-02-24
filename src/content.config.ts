import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Valid categories for blog posts
export const CATEGORIES = [
	'AI',
	'Cybersecurity',
	'Data',
	'Privacy',
	'Emerging Tech',
] as const;

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Category - must be one of the valid categories
			category: z.enum(CATEGORIES).optional(),
			// Tags - array of strings
			tags: z.array(z.string()).default([]),
			// Reading time in minutes (auto-calculated, can be overridden)
			readingTime: z.number().optional(),
		}),
});

export const collections = { blog };
