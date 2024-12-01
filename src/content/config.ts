import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		author: z.union([z.string(), z.array(z.string())]),
		heroImage: z.string().optional(),
		published: z.boolean().optional().default(true)
	}),
});

export const collections = { blog };
